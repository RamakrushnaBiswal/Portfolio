const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/portfolio',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/portfolio.html'))
})
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

module.exports = router