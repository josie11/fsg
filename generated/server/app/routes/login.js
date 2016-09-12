var router = require('express').Router();
var User = require('../../db/models/user.js');

router.post('/', function(req, res, next){
  User.findOne({where: req.body})
  .then(function(user){
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send(null);
    }
  })
  .catch(next);
});
module.exports = router;
