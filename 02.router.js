//路由  处理请求和分发的

const express = require('express');
const pagecontrollers = require('./controllers/03.pagecontrollers');
const usersModel=require('./controllers/003.userscontrollers');
const router = express.Router();
//请求前台
router.get('/', pagecontrollers.getIndexPage)
    .get('/login', pagecontrollers.getLoginPage)
    /* .get('/datail',pagecontrollers.getAsidePage) */
    .get('/list', pagecontrollers.getListPage)
    .get('/detail', pagecontrollers.getDetailPage)
    .get('/admin', pagecontrollers.getAdminIndexPage)
    .get('/admin/categories', pagecontrollers.getCategoriesPage)
    .get('/admin/comments', pagecontrollers.getCommentsPage)
    .get ('/admin/password',pagecontrollers.getPasswordPage)
    .get ('/admin/posts',pagecontrollers.getPostsPage)
    .get ('/admin/post-add',pagecontrollers.getPostAddPage)
    .get ('/admin/users',pagecontrollers.getUsersPage)
    .get ('/admin/settings',pagecontrollers.getSettingsPage)
    .post('/login',usersModel.login)
    .get('/admin/nav-menus',pagecontrollers.getMenusPage)
    .get('/admin/slides',pagecontrollers.getSlidesPage)



module.exports = router;