const { Router } = require("express");
const { check } = require("express-validator");

const validarCampos = require("../middlewares/validar-campos");
const {
  createUser,
  loginUser,
  renewToken,
} = require("../controllers/auth.controller");
const router = Router();

// Crear un nuevo usuario
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  createUser
);

// Login de usuario
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUser
);

// Revalidacion de token
router.get("/renew", renewToken);

module.exports = router;
