const newPostAlertRouter = require('express').Router();
const {addAlert,getAlert,getAlerts} = require('../controllers/newPostAlertController');


newPostAlertRouter.post('/add-alert',addAlert);       
newPostAlertRouter.get('/get-all',getAlerts);       
// newPostAlertRouter.get('/get-one',getAlert);       

module.exports = newPostAlertRouter; 

