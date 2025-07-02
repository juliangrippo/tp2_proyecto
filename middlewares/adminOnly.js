export const adminOnly = (req, res, next) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User not authenticated.",
    });
  }

  if (user.roleId !== 1) {
    return res.status(403).json({
      success: false,
      message: "only admins can access this resource",
    });
  }

  next();
};
