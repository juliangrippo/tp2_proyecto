import { verifyToken } from "../utils/jwt.js";
import { User } from "../models/index.js";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies?.login;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = verifyToken(token); 
    // Obtenemos el usuario real de la DB
    const user = await User.findByPk(decoded.data.id);

    console.log("User found:", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default auth;
