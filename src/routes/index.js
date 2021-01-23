const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.type("application/json");
  res.status(200);
  res.send({
    status: 200,
    info: "If you see this, the server deploy success!",
  });
});

module.exports = router;
