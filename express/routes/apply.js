const router = require("express").Router();

router.post("/now", (req, res) => {
  try {
    console.log(req.body);
    res.end("이런");
  } catch (err) {
    console.error(err);
    res.send("실패");
  }
});

module.exports = router;
