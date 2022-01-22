const { response } = require("express");

const createUser = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Create User /new",
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  return res.json({
    ok: true,
    msg: `Login route /`,
    email,
  });
};

const renewToken = (req, res) => {
  return res.json({
    ok: true,
    msg: "Renew route /renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
