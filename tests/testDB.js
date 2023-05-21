const testRouter = require("express").Router();

const PostModel = require("../models/Post");
const UserModel = require("../models/user");
const SubjectModel = require("../models/subject");
const CategoryModel = require("../models/category");



testRouter.get("/test/get-users", async (req, res) => {
  console.log("called");
  try {
    const result = await UserModel.findAll({ include: PostModel }); //SubjectModel
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});
testRouter.get("/test/get-subjects", async (req, res) => {
  console.log("called");
  try {
    const result = await SubjectModel.findAll();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

testRouter.get("/test/get-categories", async (req, res) => {
  console.log("called");
  try {
    const result = await CategoryModel.findAll({ include: SubjectModel });
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

testRouter.get("/test/get-posts", async (req, res) => {
  console.log("called");
  try {
    const result = await PostModel.findAll();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = testRouter;
