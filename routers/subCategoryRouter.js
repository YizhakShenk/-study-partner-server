const subCategoryRouter = require('express').Router()
const {createSubCategory ,getSubCategory,getAllSubCategory} = require('../controllers/subCategoryController');


subCategoryRouter.post('/create',createSubCategory);
subCategoryRouter.get('/get-all',getAllSubCategory);
subCategoryRouter.post('/get',getSubCategory);

module.exports = subCategoryRouter;

