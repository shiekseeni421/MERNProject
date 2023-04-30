const express = require("express");
const admitRouter = express.Router();
const userSchema = require("../model/devusermodel");
const http = require("http");

console.log(http.STATUS_CODES);

admitRouter.post("/createuser", async (req, res) => {
  const { name, phoneNo, schoolName, className, rollNo, address } = req.body;
  if (name == null) {
    return res.status(400).json({ error: "Please provide name" });
  } else if (phoneNo == null) {
    return res.status(400).json({ error: "Please provide phoneNo" });
  } else if (schoolName == null) {
    return res.status(400).json({ error: "Please provide schoolName" });
  } else if (className == null) {
    return res.status(400).json({ error: "Please provide className" });
  } else if (rollNo == null) {
    return res.status(400).json({ error: "Please provide rollNo" });
  } else if (className == null) {
    return res.status(400).json({ error: "Please provide className" });
  } else if (address == null) {
    return res.status(400).json({ error: "Please provide address" });
  }

  const userdeatils = await userSchema.findOne({ rollNo: rollNo });
  if (userdeatils === null) {
    const user = new userSchema({
      name,
      phoneNo,
      schoolName,
      className,
      rollNo,
      address,
    });
    user.save((err) => {
      if (err) {
        res.json(err);
      } else {
        res.status(200).json({ message: "add details successful" });
      }
    });
  } else {
    return res
      .status(302)
      .json({
        message: "user roll number already exits please add new rol number",
      });
  }
});

admitRouter.get("/userData", async (req, res) => {
  const userdeatils = await userSchema.find({});
  res.status(200).json({ userdeatils });
});

module.exports = admitRouter;
