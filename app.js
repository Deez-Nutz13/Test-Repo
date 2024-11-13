const express = require('express')
const app = express()

app.get('https://deez-nutz13.github.io/Test-Repo/test', (req, res) => {
    res.send('<h1>it worked</h1>')
})

app.listen(3000)