const connection = require('./database/connection')

require('../models/UserModel')
require('../models/ProductModel')
require('../models/CategoryModel')
require('../models/ImgModel')


connection.sync({alter: true})