const express = require('express')
const router = express.Router()
const {doSignUp,loginPage,showSignup,doLogin,getHomePage,detailedView,logout,createBlog,addBlogData} = require('../controllers/userController')
const userAuth = require('../middleware/userAuth')

router.get('/', loginPage)
router.get('/signup', showSignup)
router.post('/register', doSignUp)
router.post('/login', doLogin)
router.get('/home', userAuth, getHomePage)
router.get('/detailedView',userAuth, detailedView)
router.get('/logout', logout )
router.get('/createBlog',userAuth,createBlog)
router.post('/createBlog' ,userAuth, addBlogData)


module.exports = router