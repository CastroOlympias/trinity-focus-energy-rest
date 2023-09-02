const { UserModel } = require('../../data_models/_index_models');
const { signToken } = require('../../utils/Authentication')
const bcrypt = require('bcrypt');
const userController = {
  // get all pizzas
  getAllUsers: async (req, res) => {
    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$', req)
    UserModel.find({})
      // .limit(1)
      // .skip(0)
      .select('-__v')
      .sort({ _id: -1 })
      .populate('userHome')
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  createUser: async ({ body }, res) => {
    const newUser = UserModel.create(body)
      .then(userData => res.json(userData))
      .catch(err => res.json(err));
    const token = signToken(newUser)
    return { token, newUser }
  },




  loginToUser: async ({ body }, res) => {

    const compareIncomingPasswordWithDatabasePassword = async (userData) => {
      console.log(userData)

      if (userData === null) {
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      }

      const checkLoginCredentials = await bcrypt.compare(body.password, userData.password);


      console.log('Password match?', checkLoginCredentials)

      if (!checkLoginCredentials) {
        console.log('Invalid credentials')
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      } else {
        console.log('correct password')
        const token = signToken(userData);
        return { token, userData };
      }

    }

    const user = await UserModel.findOne({ eMail: body.eMail })

      .sort({ _id: -1 })
      .populate('userHome')
      .then(userData => compareIncomingPasswordWithDatabasePassword(userData))
      .then(userDataReturnToClient => res.json(userDataReturnToClient))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    // console.log(user)


  }



  // loginToUser: async ({ body }, res) => {

  //   const user = await UserModel.findOne({ eMail: body.eMail })

  //     .sort({ _id: -1 })
  //     .populate('userHome')
  //     .then(userData => res.json(userData))
  //     .catch(err => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });
  //   if (!user) {
  //     console.log('Invalid credentials')
  //   }
  //   let salt = 10
  //   const test = await bcrypt.compare(body.password, await bcrypt.hash(body.password, salt));


  //   console.log('Password match?', test)
  //   if (!test) {
  //     console.log('Invalid credentials')
  //   } else {
  //     console.log('correct password')
  //   }

  //   const token = signToken(user);
  //   return { token, user };
  // }




};

module.exports = userController;
