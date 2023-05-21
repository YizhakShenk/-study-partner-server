const newPostAlertRouter = require('express').Router();
const {addAlert,getAlerts} = require('../controllers/newPostAlertController');


newPostAlertRouter.post('/add-alert',addAlert);       
newPostAlertRouter.get('/get-all',getAlerts);       

module.exports = newPostAlertRouter; 

