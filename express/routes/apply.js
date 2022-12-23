const router = require("express").Router();

const { Recruit, Individualuser_Info } = require("../models/index.js");

const jwt = require("jsonwebtoken");

router.post("/jobApplication", async (req, res) => {
  // try {
  //   const jobApplicationDB = await Personalrecruit.findAll({
  //     include: [
  //       { model: Recruit, attributes: ["recruitName"] },
  //       { model: Individualuser_Info, attributes: ["individualName"] },
  //     ],
  //   });

  //   console.log(jobApplicationDB);
  //   res.send(jobApplicationDB);
  try {
    const temp = jwt.verify(
      req.cookies.individual_login,
      process.env.COOKIE_SECRET
    );
    if (temp) {
      const applyInfo = await Individualuser_Info.findOne({
        where: { individualId: temp.individualId },
        include: [
          {
            model: Recruit,
            as: "IndividualInfo",

            attributes: ["recruitName", "myTask", "workRank", "area"],
          },
        ],
      });
      console.log(applyInfo);

      res.send(applyInfo.IndividualInfo);
    }
  } catch (err) {
    console.error(err);
    res.send("다시 로그인해주세요");
  }
});

router.post("/cancle", async (req, res) => {
  console.log("||||||||||||||||||||||||");
  console.log(req.body.id);
  console.log("||||||||||||||||||||||||");

  try {
    const temp = jwt.verify(
      req.cookies.individual_login,
      process.env.COOKIE_SECRET
    );
    if (temp) {
      const applyInfo = await Individualuser_Info.findOne({
        where: { individualId: temp.individualId },
        include: [
          {
            model: Recruit,
            as: "IndividualInfo",

            attributes: ["id"],
          },
        ],
      });
      let count = 0;
      for (let i = 0; i < applyInfo.IndividualInfo.length; ++i) {
        if (
          req.body.id == applyInfo.IndividualInfo[i].personalRecruit.recruitId
        ) {
          count++;
        }
      }
      if (count == 0) {
        return res.send("지원하지않은 공고입니다");
      } else if (count != 0) {
        res.send("취소되었습니다");
      }
    } else {
      res.send("로그인 해주세요");
    }
  } catch (err) {
    console.error(err);
    res.send("다시 로그인해주세요");
  }
});

router.post("/now", async (req, res) => {
  // console.log(req.body);
  // console.log(req.cookies);

  try {
    const temp = jwt.verify(
      req.cookies.individual_login,
      process.env.COOKIE_SECRET
    );
    console.log("_________________");
    console.log(req.body.id);
    console.log("_________________");

    if (temp) {
      const applyInfo = await Individualuser_Info.findOne({
        where: { individualId: temp.individualId },
        include: [
          {
            model: Recruit,
            as: "IndividualInfo",

            attributes: ["id"],
          },
        ],
      });

      let count = 0;
      for (let i = 0; i < applyInfo.IndividualInfo.length; ++i) {
        if (
          req.body.id == applyInfo.IndividualInfo[i].personalRecruit.recruitId
        ) {
          count++;
        }
      }

      if (count != 0) {
        return res.send("이미 지원한 공고입니다");
      } else {
        const individualId = await Individualuser_Info.findOne({
          where: { individualId: temp.individualId },
        });

        const recruitId = await Recruit.findOne({
          where: { id: req.body.id },
        });

        recruitId.addRecruitInfo(individualId);
        return res.send("즉시지원 되었습니다");
      }
    }
    // console.log(applyInfo.IndividualInfo[0].personalRecruit.recruitId);

    // const individualId = await Individualuser_Info.findOne({
    //   where: { individualId: temp.individualId },
    // });

    // const recruitId = await Recruit.findOne({
    //   where: { id: req.body.id },
    // });

    // recruitId.addRecruitInfo(individualId);
    // res.send("지원성공");
    else {
      res.send("로그인해주세요");
    }
    // individualId.addIndividualInfo(recruitId);
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

module.exports = router;
