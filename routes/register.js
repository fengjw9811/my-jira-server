const express = require('express')
const router = express.Router()
const { exec } = require('../db/mysql')

router.post('/', async function (req, res, next) {
  const { username, password } = req.body
  const sql1 = `select * from users where username='${username}'`
  const sql2 = `insert into users (username, password) values('${username}', '${password}')`
  const queryData = await exec(sql1)
  console.log(Object.prototype.toString.call(queryData), queryData)
  if (queryData.length !== 0) {
    res.json({
      msg: '该用户名已存在'
    })
  } else {
    const insertData = await exec(sql2)
    console.log(insertData)
    res.json({
      msg: '注册成功'
    })
  }
}
)

module.exports = router
