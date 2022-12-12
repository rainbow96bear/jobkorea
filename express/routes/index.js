const router = require("express").Router();

const companyuser = require("./companyuser.js");
const recruit = require("./recruit.js");

router.use("/companyuser", companyuser);
router.use("/recruit", recruit);

module.exports = router;
