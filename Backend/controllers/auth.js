//const schema = require('./schema');
const bcrypt = require('bcryptjs');
const User = require('../models/user');


exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        //   return res.redirect('/login');
        return res.json({ message: 'Invalid Credentials' });
        //return;
      }
      else {
        bcrypt.compare(password, user.password).then((domatch) => {
          if (domatch) {
            res.json(req.body);
          }
          else {
            console.log("Invalid Credentials");
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }).catch(err => console.log(err));
};
exports.postSignup = (req, res, next) => {


  const { firstName, lastName, email, mobileNumber, password, confirmPassword } = req.body;
  // const user = new User({
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     mobilenumber: mobilenumber,
  //     password: password,
  //     confirmpassword: confirmpassword
  // });
  User.findOne({ email: email }).then(userDoc => {
    if (userDoc) {
      return res.json({ message: false });

    }
    return bcrypt.hash(password, 12).then(hashPassword => {
      const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobileNumber,
        password: hashPassword,
        confirmPassword: hashPassword
      });
      return user.save();
    }).then(result => {
      return res.json({ message: true });
    }).catch(err => {
      console.log(err);
    })
  }).catch(err => {
    console.log(err);
  })

}