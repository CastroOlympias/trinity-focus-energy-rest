// const UserModel = require('./UserModel');
import UserModel from './UserModel.js'
import HomeModel from './homeModel.js'
const ImagesModel = require('./ImagesModel')
const MacroDashboardModel = require('./MacroDashboardModel')
// const HomeModel = require('./homeModel')
const KitchenModel = require('./KitchenModel')
const GymModel = require('./gymModel')
const PantryModel = require('./PantryModel')
const PantryItemsModel = require('./PantryItemsModel')
const MealsModel = require('./MealsModel')
const MealItemsModel = require('./MealItemsModel')
const CommentsModel = require('./CommentsModel')
const RepliesModel = require('./RepliesModel')

// module.exports = { UserModel, ImagesModel, MacroDashboardModel, HomeModel, KitchenModel, GymModel, PantryModel, PantryItemsModel, MealsModel, MealItemsModel, CommentsModel, RepliesModel };
console.log(UserModel)
export default {
    UserModel, ImagesModel, MacroDashboardModel, HomeModel, KitchenModel, GymModel, PantryModel, PantryItemsModel, MealsModel, MealItemsModel, CommentsModel, RepliesModel
}

