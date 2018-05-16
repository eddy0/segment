const express = require('express')
const User = require('../model/user')
const router = express.Router()
import React from 'react'
// import ReactDOMServer from 'react-dom/server';


router.get('/', (request, response) => {
    console.log('res',Header)
    response.render('index.html')
})

router.get('/api/all', (request, response) => {
    response.send({test: 'ok'})
})



module.exports = router