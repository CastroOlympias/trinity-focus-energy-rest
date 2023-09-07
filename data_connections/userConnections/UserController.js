import UserModel from '../../data_models/UserModel.js'
import signToken from '../../utils/Authentication.js'
import bcrypt from 'bcrypt'

const userController = {
  getAllUsers: async ({ body }, res) => {
    console.log(body)
    UserModel.find({})
      // .limit(1)
      // .skip(0)
      .select('-__v')
      .select('-password')
      .sort({ _id: -1 })
      // .populate('userHome')
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
    const token = signToken.signToken(newUser)
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
        const token = signToken.signToken(userData);
        return { token, userData };
      }

    }
    await UserModel.findOne({ eMail: body.eMail })
      .sort({ _id: -1 })
      // .populate('userHome')
      .then(userData => compareIncomingPasswordWithDatabasePassword(userData))
      .then(userDataReturnToClient => res.json(userDataReturnToClient))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  changeAUsereMailOrPassword: async ({ body }, res) => {
    const compareIncomingPasswordWithDatabasePasswordAndChangePassword = async (body, userData) => {
      if (userData === null) {
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      }
      const checkLoginCredentials = await bcrypt.compare(body.password, userData.password);
      if (!checkLoginCredentials) {
        return MESSAGE = { WRONG_CREDENTIALS: 'You have provided the wrong credentials' }
      } else {
        const saltRounds = 10;
        let newPassword = await bcrypt.hash(body.newPassword, saltRounds);
        userData.password = newPassword
        const token = signToken.signToken(userData);
        const user = await UserModel.findOneAndUpdate(
          { _id: userData._id },
          userData,
          { new: true });
        return { token, user };
      }
    }

    await UserModel.findOne({ eMail: body.eMail })
      .sort({ _id: -1 })
      // .populate('userHome')
      .then(userData => compareIncomingPasswordWithDatabasePasswordAndChangePassword(body, userData))
      .then(userDataReturnToClient => res.json(userDataReturnToClient))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};

export default userController;
