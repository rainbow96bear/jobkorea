const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

// const Cookies = require("universal-cookie");

const { Companyuser_Info } = require("../models/index.js");

// const cookies = new Cookies();
router.post("/logout", async (req, res) => {
  try {
    console.log(req.body);
    res.clearCookie("jobkorea_login");
    res.end();
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

router.post("/loginconfirm", (req, res) => {
  if (req.cookies["jobkorea_login"]) {
    const temp = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );

    res.send(temp["companyId"]);
  } else {
    res.end();
  }
});

router.post("/login", async (req, res) => {
  // const tempcookiename = "jobkorea_login"; //1
  // console.log(req.cookies[tempcookiename]); //1
  // console.log(req.cookies["jobkorea_login"]); //2
  // console.log(req.cookies.jobkorea_login); //3
  // console.log(req.cookies);

  try {
    // if (req.cookies["jobkorea_login"]) {
    //   // const temp = jwt.verify(
    //   //   req.cookies["jobkorea_login"],
    //   //   process.env.COOKIE_SECRET
    //   // );
    //   // console.log(req.body.companyUser);
    //   // console.log("++++++++++++++");
    //   // console.log(temp["companyId"]);

    //   res.send({ companyId: req.body.idConfirm });
    // } else {
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
          { expires: new Date(Date.now() + 1000 * 60 * 60 * 60000) }
        );
        // cookies.set(
        //   "cookie",
        //   { companyId: req.body.idConfirm },
        //   {
        //     path: "/",
        //     expires: Date.now() / 1000 + 60 * 60,
        //   }
        // );

        res.send("로그인완료");
      } else {
        res.send("비밀번호가 일치하지 않습니다");
      }
    } else {
      res.send("없는 아이디 입니다");
    }
    // }
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

const multer = require("multer");
const { findOne } = require("../models/join.js");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/money", async (req, res) => {
  try {
    const temp = jwt.verify(
      req.cookies["jobkorea_login"],
      process.env.COOKIE_SECRET
    );
    const data = await Companyuser_Info.findOne({
      where: { companyId: temp.companyId },
    });

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/regist", upload.single("companyLogoUpload"), async (req, res) => {
  console.log(req.body);
  try {
    if (
      await Companyuser_Info.findOne({
        where: { companyId: req.body.companyId },
      })
    ) {
      console.log("이미 있는 아이디");
      res.send("이미 있는 아이디");
    } else {
      console.log(req.file.originalname);
      await Companyuser_Info.create({
        companylogo: req.file.filename,
        selectedOption: req.body.selectedOption,
        companyNumber: req.body.companyNumber,
        companyName: req.body.companyName,
        companyHeader: req.body.companyHeader,
        companyAddress: req.body.companyAddress,
        companyId: req.body.companyId,
        companyPw: crypto.SHA256(req.body.companyPw).toString(),
        companyIdname: req.body.companyIdname,
        companyIdnumber: req.body.companyIdnumber,
        companyIdemail: req.body.companyIdemail,
        companyMoney: req.body.companyMoney,
      });
      console.log("아이디 생성");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

router.post("/dbcall", async (req, res) => {
  let userInfo;

  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }

  try {
    const rowData = await Companyuser_Info.findOne({
      where: { companyId: userInfo.companyId },
    });

    res.send(rowData);
  } catch (error) {
    res.send(error);
  }
});

router.post("/modify", async (req, res) => {
  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }
  console.log(userInfo.companyId);
  console.log(req.body);
  Companyuser_Info.update(
    {
      companyIdname: req.body.Name,
      companyIdnumber: req.body.Num,
      companyIdemail: req.body.Email,
    },
    { where: { companyId: userInfo.companyId } }
  ).then((data) => {
    console.log(data);
    res.end();
  });
});

router.post("/addmoney", async (req, res) => {
  if (req.cookies["jobkorea_login"]) {
    userInfo = jwt.verify(
      req.cookies.jobkorea_login,
      process.env.COOKIE_SECRET
    );
  }
  Companyuser_Info.update(
    {
      companyMoney: req.body.Money,
    },
    { where: { companyId: userInfo.companyId } }
  ).then((data) => {
    console.log(data);
    res.send("돈이 내려와");
  });
});

module.exports = router;
