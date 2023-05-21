require('dotenv').config();
const db = require('./db/mysql');
const {fillCategoryTable,fillSubjectTable,fillUserAndPostst} = require('./utilities/dbUtilities/fillTables');
const a= {CategoryModel, NewPostAlert,NotificationModel, PostModel, RateModel, SubjectModel, UserModel,UserSubject} =require('./models/Models')
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const router = require('./routers/index');
const testRouter = require('./tests/testDB');
const cors = require('cors');

const cron = require('node-cron');
const {removeOldPosts,removeOldAlerts,removeOldNotifications} = require('./utilities/cronJob/cronJob');
const User = require('./models/user');

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001','https://study-partner.onrender.com'], credentials: true }));
app.use(express.json());
app.use(cookieParser())
app.use(router);
app.use(testRouter);

cron.schedule("0 0 * * *",removeOldPosts);
cron.schedule("0 0 * * *",removeOldAlerts);
cron.schedule("0 0 * * *",removeOldNotifications);

app.listen(process.env.PORT, () => {
    (async () => {
        await db.sync();
        await fillCategoryTable();
        await fillSubjectTable();    
    })()
    console.log(`app listen on port ${process.env.PORT}`)
});

