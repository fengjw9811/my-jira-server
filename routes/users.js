const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    {
      id: 1,
      name: '高修文'
    },
    {
      id: 2,
      name: '熊天成'
    },
    {
      id: 3,
      name: '郑华'
    },
    {
      id: 4,
      name: '王文静'
    }
  ])
})

module.exports = router
