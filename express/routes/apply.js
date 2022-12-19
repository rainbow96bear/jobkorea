const router = require("express").Router();

const { Recruit, Individualuser_Info } = require("../models/index.js");

const jwt = require("jsonwebtoken");

router.post("/now", async (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  try {
    const temp = jwt.verify(
      req.cookies.individual_login,
      process.env.COOKIE_SECRET
    );

    console.log("++++++++++++");
    console.log(temp);

    const individualId = await Individualuser_Info.findOne({
      where: { individualId: temp.individualId },
    });

    const recruitId = await Recruit.findOne({
      where: { id: req.body.id },
    });
    console.log("---------------");
    console.log(individualId);
    console.log("---------------");
    console.log(recruitId);
    console.log("---------------");

    recruitId.addRecruitInfo(individualId);
    individualId.addIndividualInfo(recruitId);
    res.send("테스트");
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

module.exports = router;
