const { UserModel } = require('../../data_models/_index_models');
const { signToken } = require('../../utils/Authentication')
const bcrypt = require('bcrypt');

const userController = {
  getAllUsers: async (req, res) => {
    UserModel.find({})
      // .limit(1)
      // .skip(0)
      .select('-__v')
      .select('-password')
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

      if (userData === null) {
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      }
      const checkLoginCredentials = await bcrypt.compare(body.password, userData.password);
      if (!checkLoginCredentials) {
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      } else {
        userData.password = ''
        const token = signToken(userData);
        return { token, userData };
      }

    }
    await UserModel.findOne({ eMail: body.eMail })
      .sort({ _id: -1 })
      .populate('userHome')
      .then(userData => compareIncomingPasswordWithDatabasePassword(userData))
      .then(userDataReturnToClient => res.json(userDataReturnToClient))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  }
};

module.exports = userController;
