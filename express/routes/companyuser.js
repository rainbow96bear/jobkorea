const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
// const { default: Cookies } = require("universal-cookie");
// const Cookies = require("universal-cookie");

const { Companyuser_Info } = require("../models/index.js");

// const cookies = new Cookies();

router.post("/login", async (req, res) => {
  console.log(req.body.pwConfirm);
  try {
    if (
      await Companyuser_Info.findOne({
        where: { companyId: req.body.idConfirm },
      })
    ) {
      if (
        await Companyuser_Info.findOne({
          where: {
            // companyId: req.body.idConfirm,
            companyPw: crypto.SHA256(req.body.pwConfirm).toString(),
          },
        })
      ) {
        // res.clearCookie("jobkorea_login");
        res.cookie(
          "jobkorea_login",
          jwt.sign(
            { companyId: req.body.idConfirm },
            process.env.COOKIE_SECRET
          ),
          { expires: new Date(Date.now() + 6000 * 30) }
        );
        // cookies.set(
        //   "cookie",
        //   { companyId: req.body.idConfirm },
        //   {
        //     path: "/",
        //     expires: Date.now() / 1000 + 60 * 60,
        //   }
        // );
        res.send({ companyId: req.body.idConfirm });
      } else {
        res.send("비밀번호가 일치하지 않습니다");
      }
    } else {
      res.send("없는 아이디 입니다");
    }
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

router.post("/regist", async (req, res) => {
  console.log(req.body);
  try {
    if (
      await Companyuser_Info.findOne({
        where: { companyId: req.body.companyId },
      })
    ) {
      console.log("이미 있는아이디");
      res.send("이미 있는아이디");
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
