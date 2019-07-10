import express from 'express';
import path from 'path'
import open from 'open';
import compression from 'compression';


 /*eslint-disable-line no-console*/
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', (req,res)=> {

  res.sendFile(path.join(__dirname,'../dist/index.html'));

});

app.get('/users',function(req,res){
  res.json([
    {"id":1,"firstName":"Bob","lastName":"smith","email":"emg@gmail.com"},
    {"id":2,"firstName":"keith","lastName":"john","email":"johnkeith@gmail.com"},
    {"id":3,"firstName":"laura","lastName":"Anderson","email":"elaura@gmail.com"}
  ]);

});

app.listen(port, (err) =>{
  if(err){
    console.log(err);//eslint-disable-line no-console
  } else{
    open('http://localhost:' + port);
  }
})
