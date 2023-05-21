const activitiesRouter= require('express').Router();
const {reactToPost,confirmPost,denyPost} =require('../controllers/activityController');


activitiesRouter.post('/react-to-post',reactToPost);
activitiesRouter.post('/confirm-post',confirmPost);
activitiesRouter.post('/deny-post',denyPost);



module.exports = activitiesRouter