const router = require("express").Router();

const { Recruit } = require("../models/index.js");

router.post("/add", async (req, res) => {
  console.log(req.body);
  res.send("남양주 놀러오면 풀코스로 쏜다");
  await Recruit.create({
    recruitArea: req.body.recruitArea,
    recruitNum: req.body.recruitNum,
    isExp: req.body.isExp.join(),
    myTask: req.body.myTask,
    workDepartment: req.body.workDepartment,
    workRank: req.body.workRank.join(),
    condition: req.body.condition.join(),
  });
});

router.post("/call", async (req, res) => {
  console.log(req.body);
  try {
    const rowData = await Recruit.findAll();
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
  // res.send("전화해요");
});

module.exports = router;
