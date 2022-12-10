const router = require("express").Router();
const crypto = require("crypto-js");

const { Companyuser_Info } = require("../models/index.js");

router.post("/regist", async (req, res) => {
  console.log(req.body);
  try {
    if (
      await Companyuser_Info.findOne({
        where: { companyId: req.body.companyId },
      })
    ) {
      console.log("이미 있는아이디");
      res.send({ status: 401 });
    } else {
      await Companyuser_Info.create({
        selectedOption: req.body.selectedOption,
        companyNumber: req.body.companyNumber,
        companyName: req.body.companyName,
        companyHeader: req.body.companyHeader,
        companyAdress: req.body.companyAdress,
        companyId: req.body.companyId,
        companyPw: crypto.SHA256(req.body.companyPw).toString(),
        companyIdname: req.body.companyIdname,
        companyIdnumber: req.body.companyIdnumber,
        companyIdemail: req.body.companyIdemail,
      });
      console.log("아이디 생성");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

module.exports = router;
