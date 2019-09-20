//控制模块
module.exports = {
    getIndexPage(req, res) {
        res.render('index.ejs');

    },
    getDetailPage(req, res) {
        res.render('detail.ejs');
    },
    getListPage(req, res) {
        res.render('list.ejs')
    },
    getLoginPage(req, res) {
        res.render('admin/login.ejs')
    },
    /* getAsidePage(req,res){
        res.render('admin/da')
    }, */
    getCategoriesPage(req, res) {
        res.render('admin/categories.ejs')
    },
    getAdminIndexPage(req, res) {
        if(req.session.isLogin&&req.session.isLogin=='true'){
            res.render('admin/index.ejs');
        }
        else{
            res.redirect('/login')
        }
    },
    getCommentsPage(req, res) {
        res.render('admin/comments.ejs');

    },
    getPasswordPage(req, res) {
        res.render('admin/password-reset.ejs');

    },
    getPostsPage(req, res) {
        res.render('admin/posts.ejs');

    },
    getPostAddPage(req, res) {
        res.render('admin/post-add.ejs');

    },
    getUsersPage(req, res) {
        res.render('admin/users.ejs');

    },
    getSettingsPage(req, res) {
        res.render('admin/settings.ejs');

    },
    getMenusPage(req, res) {
        res.render('admin/nav-menus.ejs');

    },
    getSlidesPage(req, res) {
        res.render('admin/slides.ejs');

    },
   


}

