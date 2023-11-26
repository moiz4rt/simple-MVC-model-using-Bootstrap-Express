exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home'
    })
};

const users = [];

exports.getUsers = (req, res, next) => {
    res.render('users', {
        pageTitle: "Users",
        hasUsers: users.length > 0,
        users
    });
};

exports.addUser = (req, res, next) => {
    let { username, password } = req.body;
    users.push({
        username,
        password
    });
    console.log(username, password);
    res.redirect('/');
};