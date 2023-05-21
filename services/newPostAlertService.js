const CLIENT_URL = process.env.CLIENT_URL;
const newPostAlertRepo = require("../repositories/newPostAlertRepo");
const userRepo = require("../repositories/userRepo");
const notificationRepo = require("../repositories/notificationRepo");
const { transferMail } = require("../utilities/mailer/mailer");

const addAlert = async (req) => {
  try {
    const { user_id, sub_category, date, time } = req.body;
    if (!sub_category && !date && !time) {
      throw new Error("Please fill at least one parameter");
    }
    const alert = await newPostAlertRepo.getAlert(
      user_id,
      sub_category,
      date,
      time
    );
    if (alert) {
      throw new Error("alert already exist");
    }
    const result = await newPostAlertRepo.addAlert(
      user_id,
      sub_category || null,
      date || null,
      time | null
    );
    console.log({ result });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const getAlerts = async () => {
  try {
    const result = await newPostAlertRepo.getAlerts();
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAlert = async () => {
  try {
    const result = newPostAlertRepo.getAlert();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const getMatchedAlerts = async (
  sub_category,
  dateFrom,
  dateTo,
  timeFrom,
  timeTo
) => {
  try {
    const result = await newPostAlertRepo.getMatchedAlerts(
      sub_category,
      dateFrom,
      dateTo,
      timeFrom,
      timeTo
    );

    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const handleSendAlerts = async (alerts) => {
  const title = "someone posted a post you might interesting in";
  const message =
    "someone posted a post that is match with your previous search in the site.";
  const url = `${CLIENT_URL}`; //needs to complete edit
  let emailsArray = [];
  let ids = [];

  alerts.forEach((item) => {
    ids.push(item.user_id);
  });
  const users = await userRepo.getUsers(null, ids);
  await users.forEach(async (item) => {
    emailsArray.push(item.email);
    await notificationRepo.addNotification(item.id, title, message, url);
  });
  const strEmails = emailsArray.toString();

  const htmlMessage = `<div style="background-color: silver; 
  margin-top: 50px;
  padding: 50px;
  text-align:center;">
      <p style="font-size: 17px;" >${message}<br/>   
      please click  <a href=${url}> here </a> to view post.<p/>
      have a nice day !!<br/>
      Study partner office</p>
      </div>`; //needs to complete edit
  await transferMail(strEmails, title, null, htmlMessage);
};

module.exports = {
  addAlert,
  getAlerts,
  getAlert,
  getMatchedAlerts,
  handleSendAlerts,
};
