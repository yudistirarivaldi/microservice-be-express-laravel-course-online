const { User } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  });
  if (!user) {
    res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  return res.status(200).json({
    status: "success",
    data: user,
  });
};
