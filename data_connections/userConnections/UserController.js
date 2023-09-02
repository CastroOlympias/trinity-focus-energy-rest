const { UserModel } = require('../../data_models/_index_models');
const { signToken } = require('../../utils/Authentication')
const bcrypt = require('bcrypt');
const userController = {
  // get all pizzas
  getAllUsers(req, res) {
    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$', req)
    UserModel.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one pizza by id
  // getPizzaById({ params }, res) {
  //   console.log('********************', params)
  //   Pizza.findOne({ _id: params.id })
  //     .populate({
  //       path: 'comments',
  //       select: '-__v'
  //     })
  //     .select('-__v')
  //     .then(dbPizzaData => res.json(dbPizzaData))
  //     .catch(err => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });
  // },

  // createPizza
  createUser({ body }, res) {
    const newUser = UserModel.create(body)
      .then(userData => res.json(userData))
      .catch(err => res.json(err));
    const token = signToken(newUser)
    // console.log(token)
    return { token, newUser }
  },



  async loginToUser({ body }, res) {
    let tester = []
    const user = await UserModel.findOne({ eMail: body.eMail })

      .sort({ _id: -1 })
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    if (!user) {
      console.log('Invalid credentials')
    }
    let salt = 10

    const test = await bcrypt.compare(body.password, await bcrypt.hash(body.password, salt));
    console.log('Password match?', test)
    if (!test) {
      console.log('Invalid credentials')
    } else {
      console.log('correct password')
    }

    const token = signToken(user);
    return { token, user };
  }



  // async loginToUser({ body }, res) {
  //   const loginUser = await UserModel.findOne({ eMail: body.eMail })
  //     .select('-__v')

  //     .sort({ _id: -1 })
  //     .then(userData => res.json(userData))
  //     .catch(err => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });

  //   // const dbPassword = '$2b$10$N5A6uCborEuBfTlBu0qjtuAvftKgQOt3IGqSK8sULquGs6t5DpOu6'
  //   // const old = '123'
  //   // const anotherOne = old

  //   // const salt = 10
  //   // const hash = await bcrypt.hash(body.password, salt)

  //   // console.log(hash)

  //   // const checkPassword = async function () {
  //   //   console.log("password match? ", await bcrypt.compare(dbPassword, dbPassword))
  //   //   return bcrypt.compareSync(dbPassword, dbPassword)
  //   // }
  //   // checkPassword()




  //   if (!loginUser) {
  //     // throw new AuthenticationError('Invalid credentials');
  //   }
  //   const correctPassword = await loginUser.isCorrectPassword(body.password);
  //   if (!correctPassword) {
  //     console.log('incorrect password')
  //     // throw new AuthenticationError('Invalid credentials');
  //   } else (
  //     console.log('correct password')
  //   )

  //   const token = signToken(loginUser);
  //   return { token, loginUser };
  // }
};

module.exports = userController;
