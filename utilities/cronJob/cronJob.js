const { Op } = require("sequelize");
const Models = require("../../models/Models");
const { weekValue } = require("../date/dateDistance");

const removeOldPosts = async () => {
  const date = new Date().getTime();
  await Models.PostModel.destroy({ where: { date_to: { [Op.lt]: date } } });
};

const removeOldNotifications = async () => {
  const date = new Date().getTime() - weekValue * 3;
  await Models.NewPostAlert.destroy({
    where: { createdAt: { [Op.lt]: date } },
  });
};

const removeOldAlerts = async () => {
  console.log(new Date().toLocaleString());
  const date = new Date().getTime() - weekValue * 2;
  await Models.NewPostAlert.destroy({
    where: { createdAt: { [Op.lt]: date } },
  });
};

module.exports = {
  removeOldPosts,
  removeOldNotifications,
  removeOldAlerts,
};
