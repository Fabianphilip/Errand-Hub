const express = require ('express'); // Importing the 'express' framework

import UserControllers from '../controller/UserController.js'; // Importing the user controller
import Helper from '../controller/HelperController.js'; // Importing the helper controller

const authRoute = express.Router(); // Creating an instance of Express Router

authRoute.route('/signup')
  .post(Helper.userValidator, UserControllers.signup); // Defining a POST route for user signup, validating user input using userValidator middleware from HelperController and invoking signup function from UserController

authRoute.route('/login')
  .post(Helper.userValidator, UserControllers.login); // Defining a POST route for user login, validating user input using userValidator middleware from HelperController and invoking login function from UserController

export default authRoute; // Exporting the authentication routes