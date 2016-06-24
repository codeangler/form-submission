const express = require('express')
const app = express()

app.get('/', function (request, response) {
  if (request) {
    console.log('hey you made a request to the sesrver for some info')
    var form = '<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"> </form>'
    response.send(form)    

  } else {
    console.log("wtf")
  }
})

app.post('/formsubmit', function(request, response){
  console.log('this is a post formsubmit section')
  response.redirect('success')
})

app.get('/success', function(req, res){
  res.send('success')
})
app.listen(8080)