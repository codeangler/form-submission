var express = require('express')
var app = express()

app.get('/', function(req, response){
  if(req){
    console.log("This is a get request")
    response.send('<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"> </form>')
  }
})

app.post('/formsubmit', function formRequestFunc(req, response) {
  console.log('this is form request Post callback function')
  response.redirect('/success')
  console.log('a redirect was executed')
})

successFunc = function (request, response) {
  console.log('you called success function')
  response.send("success")
} 

app.get('/success', successFunc)


app.listen(1337, function(err){
  if(err){
    console.error(err)
  } else{
    console.log(" Yes I am listening")
  }
})