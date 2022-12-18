const router = require("express").Router();

const { Recruit, Individualuser_Info } = require("../models/index.js");

const jwt = require("jsonwebtoken");

router.post("/now", async (req, res) => {
  console.log(req.body);
  try {
    if (req.cookies["jobkorea_login"]) {
      const temp = jwt.verify(
        req.cookies["jobkorea_login"],
        process.env.COOKIE_SECRET
      );
    }
    console.log(temp);

    const individulId = await Individualuser_Info.findOne({
      where: { individulId: temp["companyId"] },
    });

    // const recruitId = await Recruit.findOne({
    //   where: { id: req.body.id },
    // });

    // individulId.addRecruitInfo(recruitId);
    // recruitId.addIndividualInfo(individulId);
    res.send("테스트");
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

module.exports = router;
