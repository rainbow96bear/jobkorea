const router = require("express").Router();

const companyuser = require("./companyuser.js");
const recruit = require("./recruit.js");
const individualuser = require("./individualuser.js");
const apply = require("./apply.js");

router.use("/apply", apply);
router.use("/companyuser", companyuser);
router.use("/recruit", recruit);

router.use("/individualuser", individualuser);

module.exports = router;
