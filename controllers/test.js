const Test = require("../models/test");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
module.exports = function(app) {
 /**
  * Post API which register employee details.
  */
 app.post("/api/test", (req, res, next) => {
    Test.create({
        first_name: req.body.firstName,
      })
        .then(users => {
          console.log("User registered!!!");
          if (users) {
             res.statusCode = 200;
             res.send({
                 status: 200,
                 message: 'Employee registered successfully!',
           });
           res.end();
          }
        })
        .catch(err => {
           console.log(err);
          res.statusCode = 501;
          res.send({
              status: 501,
              message: 'Oops!, Something went wrong with api',
          })
          res.end();
        });
 });
};