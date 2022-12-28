const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const multer = require("multer");
// const { default: Cookies } = require("universal-cookie");
// const Cookies = require("universal-cookie");

const { Individualuser_Info } = require("../models/index.js");

// const cookies = new Cookies();

router.post("/autologin", (req, res) => {
  if (req.cookies["individual_login"]) {
    userInfo = jwt.verify(
      req.cookies.individual_login,
      process.env.COOKIE_SECRET
    );
    console.log("#################");
    console.log(userInfo);
    console.log("#################");

    res.send(userInfo);
  } else {
    res.end;
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/regist",
  upload.single("individualPhotoUpload"),
  async (req, res) => {
    // console.log(req.body.individualId);

    try {
      if (
        await Individualuser_Info.findOne({
          where: { individualId: req.body.individualId },
        })
      ) {
        console.log("이미 있는 아이디");
        res.send("이미 있는 아이디");
      } else {
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        console.log(req.file.originalname);
        await Individualuser_Info.create({
          individualPhoto: req.file.filename,
          individualName: req.body.individualName,
          individualId: req.body.individualId,
          individualPw: crypto.SHA256(req.body.individualPw).toString(),
          individualEmail: req.body.individualEmail,
          individualTel: req.body.individualTel,
          individualInfoValid: req.body.individualInfoValid,
          individualAddress: req.body.individualAddress,
        });
        console.log("아이디 생성");
        res.send({ status: 200 });
      }
    } catch (err) {
      console.error(err);
      res.send("failed!!");
    }
  }
);

router.post("/login", async (req, res) => {
  console.log("-------");
  console.log(req.body);
  console.log("-------");
  const logInData = await Individualuser_Info.findOne({
    where: { individualId: req.body.id },
  });
  const userPw = crypto.SHA256(req.body.pw).toString();

  console.log(logInData);
  console.log(logInData.individualPhoto);

  try {
    if (logInData) {
      if (
        // await Individualuser_Info.findOne({
        //   where: {
        //     individualPw: userPw,
        //   },
        // })
        logInData.individualPw == userPw
      ) {
        res.cookie(
          "individual_login",
          jwt.sign(
            {
              individualId: req.body.id,
              individualPhoto: logInData.individualPhoto,
            },
            process.env.COOKIE_SECRET
          ),
          { expires: new Date(Date.now() + 6000 * 300) }
        );
        res.send("로그인 완료");
      } else {
        res.send("비밀번호가 일치하지 않습니다.");
      }
    } else {
      res.send("없는 아이디 입니다.");
    }
  } catch (err) {
    console.error(err);
    res.send("failed...");
  }
});

// const logInData = await Individualuser_Info.findOne({
//   where: { individualId: req.body.id },
// });
// // 비밀번호 확인~!
// const userPw = crypto.SHA256(req.body.pw).toString();
// if (logInData.individualPw != userPw) {
//   res.end;
// } else {
//   // send로 누구인지 보내줌
//   res.send(logInData.individualName);
// }

router.post("/logout", (req, res) => {
  res.clearCookie("individual_login");
  res.send();
});

router.post("/idconfirm", async (req, res) => {
  console.log(req.body);
  try {
    const confirms = await Individualuser_Info.findOne({
      where: {
        individualName: req.body.nameConirm,
        individualTel: req.body.phoneComfirm,
      },
    });
    if (confirms.individualId) {
      res.send(confirms.individualId);
    }
    console.log(confirms.individualId);
  } catch (err) {
    console.error(err);
    res.send("이름과 번호를 다시 확인해주세요");
  }
});
router.post("/pwconfirm", async (req, res) => {
  console.log(req.body);
  try {
    const pwconfirms = await Individualuser_Info.findOne({
      where: {
        individualId: req.body.idConfirm,
        individualTel: req.body.phoneComfirm,
      },
    });
    console.log(pwconfirms.individualPw);
    if (pwconfirms.individualPw) {
      res.send(pwconfirms);
    }
  } catch (err) {
    console.error(err);
    res.send("아이디와 번호를 다시 확인해주세요");
  }
});

router.post("/changepw", async (req, res) => {
  console.log(req.body);
  // const userPw = crypto.SHA256(req.body.pw).toString();
  console.log(req.body.pwConfirm);
  console.log("++++++++++++++++++");
  console.log(req.body.lastconfirmid);
  console.log("++++++++++++++++++");

  console.log(req.body.lastconfirmphone);
  Individualuser_Info.update(
    {
      individualPw: crypto.SHA256(req.body.pwConfirm).toString(),
    },
    {
      where: {
        individualId: req.body.lastconfirmid,
        individualTel: req.body.lastconfirmphone,
      },
    }
  );
  res.send("비밀번호가 변경되었습니다");
});

module.exports = router;
