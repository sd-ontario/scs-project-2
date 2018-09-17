var exports = module.exports = {}

exports.landingpage = function(req,res) {
    res.render('landingpage');
}

exports.signup = function(req,res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}