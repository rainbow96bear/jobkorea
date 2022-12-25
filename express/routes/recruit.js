const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../models/index.js");

const {
  Recruit,
  Companyuser_Info,
  Individualuser_Info,
  PersonalRecruit,
  Sequelize,
} = require("../models/index.js");
const Op = Sequelize.Op;
router.post("/pass", async (req, res) => {
  PersonalRecruit.update(
    {
      check: "pass",
    },
    {
      where: {
        individualId: req.body.individualId,
        recruitId: req.body.recruitId,
      },
    }
  ).then((data) => {
    console.log("update", data);
  });
  res.end();
});

router.post("/fail", async (req, res) => {
  PersonalRecruit.update(
    {
      check: "fail",
    },
    {
      where: {
        individualId: req.body.individualId,
        recruitId: req.body.recruitId,
      },
    }
  ).then((data) => {
    console.log("update", data);
  });
  res.end();
});

router.post("/fix", (req, res) => {
  Recruit.update(
    {
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
      payKinds: req.body.payKinds,
    },
    { where: { id: req.body.id } }
  ).then((data) => {
    console.log("update", data);
    res.end();
  });
});

router.post("/whoapply", (req, res) => {
  console.log(req.body);
  Recruit.findAll({
    where: { id: req.body.id },
    include: [
      {
        model: Individualuser_Info,
        as: "RecruitInfo",
      },
    ],
  }).then((data) => {
    res.send(data);
  });
});

router.post("/recruitInfo", async (req, res) => {
  console.log(req.body);
  try {
    const Recruitdata = await Recruit.findOne({
      where: { id: req.body.id },
      include: [
        {
          model: db.Companyuser_Info,
        },
      ],
    });
    res.send(Recruitdata);
  } catch (err) {
    res.send(err);
  }
});

router.post("/myrecruit", async (req, res) => {
  console.log(req.body);
  try {
    const myRecruit = await Recruit.findOne({
      where: { id: req.body.id },
      include: [
        {
          model: db.Companyuser_Info,
        },
      ],
    });
    res.send(myRecruit);
  } catch (err) {
    res.send(err);
  }
});

router.post("/ad", (req, res) => {
  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }

  Companyuser_Info.update(
    { companyMoney: req.body.resultMoney },
    { where: { companyId: userInfo.companyId } }
  ).then((data) => {
    console.log(data);
    res.end();
  });
});

router.post("/fix", (req, res) => {
  Recruit.update(
    {
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
      payKinds: req.body.payKinds,
    },
    { where: { id: req.body.id } }
  ).then((data) => {
    console.log("update", data);
    res.end();
  });
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
    payKinds: req.body.payKinds,
    adGrade: req.body.adGrade,
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

router.post("/dbcall", (req, res) => {
  Recruit.findOne({
    where: { id: req.body.id },
  }).then((data) => {
    console.log(data);
    res.send(data);
  });
});

router.post("/call", async (req, res) => {
  let userInfo;
  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }
  try {
    const rowData = await Recruit.findAll({
      where: { company: userInfo.companyId },
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
  // res.send("전화해요");
});

router.post("/search/call", async (req, res) => {
  try {
    if (req.body.check == "전체") {
      const rowData = await Recruit.findAll({
        include: [
          {
            model: db.Companyuser_Info,
          },
        ],
      });
      res.send(rowData);
    } else {
      const rowData = await Recruit.findAll({
        include: [
          {
            model: db.Companyuser_Info,
            where: {
              selectedOption: req.body.check,
            },
          },
        ],
      });
      res.send(rowData);
    }
  } catch (error) {
    res.send(error);
  }
});
router.post("/keyWord", async (req, res) => {
  try {
    if (req.body.keyWord == "") {
      res.send({ status: 400 });
    } else {
      const rowData1 = await Recruit.findAll({
        where: {
          [Op.or]: {
            recruitName: {
              [Op.like]: `%${req.body.keyWord}%`,
            },
          },
        },
        include: [
          {
            model: db.Companyuser_Info,
          },
        ],
      });
      const rowData2 = await Recruit.findAll({
        include: [
          {
            model: db.Companyuser_Info,
            where: {
              [Op.or]: {
                companyName: {
                  [Op.like]: `%${req.body.keyWord}%`,
                },
              },
            },
          },
        ],
      });

      res.send({ status: 200, data: [...rowData1, ...rowData2] });
    }
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

router.post("/firstvvip", async (req, res) => {
  try {
    const rowData = await Recruit.findAll({
      where: { adGrade: 1 },
      include: [
        {
          model: db.Companyuser_Info,
          attributes: ["companylogo", "companyName"],
        },
      ],
    });
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

router.post("/ranking", async (req, res) => {
  try {
    const rowData = await Recruit.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: db.Companyuser_Info,
          attributes: ["companyName"],
        },
      ],
    });
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

router.post("/vvip", async (req, res) => {
  try {
    const rowData = await Recruit.findAll({
      where: { adGrade: 2 },
      include: [
        {
          model: db.Companyuser_Info,
          attributes: ["companylogo", "companyName"],
        },
      ],
    });
    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

router.post("/isdata", async (req, res) => {
  let userInfo;
  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }
  console.log(req.body);

  try {
    const isdata = await Recruit.findAll({
      where: { company: userInfo.companyId },
    });

    if (!isdata[0]) {
      res.send({ isdata: "false" });
    }
    res.end();
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
