const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../models/index.js");

const { Recruit, Companyuser_Info } = require("../models/index.js");

router.post("/recruitInfo", async (req, res) => {
  try {
    const Recruitdata = await Recruit.findOne({ where: { id: 1 } });
    res.send(Recruitdata);
  } catch (err) {
    res.send(err);
  }
});

router.post("/add", async (req, res) => {
  const companyName = await Recruit.create({
    recruitName: req.body.recruitName,
    recruitNum: req.body.recruitNum,
    isExp: req.body.isExp.join(", "),
    myTask: req.body.myTask,
    workDepartment: req.body.workDepartment,
    workRank: req.body.workRank.join(),
    condition: req.body.condition.join(", "),
    edu: req.body.edu,
    area: req.body.area.join(", "),
    shape: req.body.shape,
    isPay: req.body.isPay.join(", "),
    minPay: req.body.minPay,
    maxPay: req.body.maxPay,
  });

  const userInfo = jwt.verify(
    req.cookies.jobkorea_login,
    process.env.COOKIE_SECRET
  );

  const companyUserId = await Companyuser_Info.findOne({
    where: { companyId: userInfo.companyId },
  });

  companyUserId.addRecruitMaker(companyName);
  res.send("남양주 놀러오면 풀코스로 쏜다");
});

router.post("/call", async (req, res) => {
  const userInfo = jwt.verify(
    req.cookies.jobkorea_login,
    process.env.COOKIE_SECRET
  );
  try {
    const rowData = await Recruit.findAll({
      where: { company: userInfo.companyId },
      include: [
        {
          model: db.Companyuser_Info,
          attributes: ["companyName"],
        },
      ],
    });
    console.log("#############################");
    console.log(rowData);
    console.log("#############################");

    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
  // res.send("전화해요");
});

router.post("/search/call", async (req, res) => {
  console.log(req.body);
  try {
    const rowData = await Recruit.findAll({
      include: [
        {
          model: db.Companyuser_Info,
        },
      ],
    });
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

router.post("/remove", async (req, res) => {
  const deleteRecruit = await Recruit.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send("삭제");
});

router.post("/vvip", async (req, res) => {
  try {
    const rowData = await Recruit.findAll({
      include: [{ model: db.Companyuser_Info, attributes: ["companyName"] }],
    });
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
