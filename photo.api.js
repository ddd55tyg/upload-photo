const { addphoto, getphotos } = require('../services/photo.service')



const router=require('express').Router()


router.post('/',addphoto)
router.get('/',getphotos)



module.exports=router