const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
// const { default: Cookies } = require("universal-cookie");
// const Cookies = require("universal-cookie");

const { Individualuser_Info } = require("../models/index.js");

// const cookies = new Cookies();

// router.post("/login", async (req, res) => {
//   console.log(req.body.pwConfirm);
//   try {
//     if (
//       await Individualuser_Info.findOne({
//         where: { individualId: req.body.idConfirm },
//       })
//     ) {
//       if (
//         await Individualuser_Info.findOne({
//           where: {
//             // individualId: req.body.idConfirm,
//             individualPw: crypto.SHA256(req.body.pwConfirm).toString(),
//           },
//         })
//       ) {
//         // res.clearCookie("jobkorea_login");
//         // res.cookie(
//         //   "jobkorea_login",
//         //   jwt.sign(
//         //     { individualId: req.body.idConfirm },
//         //     process.env.COOKIE_SECRET
//         //   ),
//         //   { expires: new Date(Date.now() + 6000 * 30) }
//         // // );
//         // cookies.set(
//         //   "cookie",
//         //   { individualId: req.body.idConfirm },
//         //   {
//         //     path: "/",
//         //     expires: Date.now() / 1000 + 60 * 60,
//         //   }
//         // );
//         res.send({ individualId: req.body.idConfirm });
//       } else {
//         res.send("비밀번호가 일치하지 않습니다");
//       }
//     } else {
//       res.send("없는 아이디 입니다");
//     }
//   } catch (err) {
//     console.error(err);
//     res.send("실패");
//   }
// });

router.post("/regist", async (req, res) => {
  console.log(req.body);
  try {
    if (
      await Individualuser_Info.findOne({
        where: { individualId: req.body.individualId },
      })
    ) {
      console.log("이미 있는 아이디");
      res.send("이미 있는 아이디");
    } else {
      await Individualuser_Info.create({
        individualName: req.body.individualName,
        individualId: req.body.individualId,
        individualPw: crypto.SHA256(req.body.individualPw).toString(),
        individualEmail: req.body.individualEmail,
        individualTel: req.body.individualTel,
        individualInfoValid: req.body.individualInfoValid,
      });
      console.log("아이디 생성");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const logInData = await Individualuser_Info.findOne({
    where: { individualId: req.body.id },
  });
  // 비밀번호 확인~!
  const userPw = crypto.SHA256(req.body.pw).toString();
  if (logInData.individualPw != userPw) {
    res.end;
  } else {
    // send로 누구인지 보내줌
    res.send(logInData.individualName);
  }
});

module.exports = router;
