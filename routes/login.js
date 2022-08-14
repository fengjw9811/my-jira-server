const express = require('express')
const router = express.Router()
const { exec } = require('../db/mysql')

router.post('/', async function (req, res, next) {
  const { username, password } = req.body
  const sql = `select * from users where username='${username}' and password='${password}'`
  const data = await exec(sql)
  if (data.length === 0) {
    res.send('用户名或密码错误')
  } else {
    res.json({
      msg: '登录成功'
    })
  }
})

module.exports = router
