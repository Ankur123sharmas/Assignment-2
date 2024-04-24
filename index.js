const express = require('express');
const app = express();
const bcrpyt = require('bcrypt');
const collection = require('./config')

// Set up middleware
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
  });
app.get('/show', (req, res) => {
    res.render('show');
  });
app.get('/signup', (req, res) => {
    res.render('signup');
  });
app.get('/unique-features', (req, res) => {
    res.render('unique-features');
  });
app.get('/index', (req, res) => {
    res.render('index');
  });

app.post('/signup',async (req,res) => { 
 const data = {
name:req.body.name,
email:req.body.email,
password:req.body.password

}

const existingUser = await collection.findOne({name:data.name})
if (existingUser){
    res.send("User Already Exists.")
}else {

    const userData  = await collection.insertMany(data)
    res.render('index')

    
}

});


app.post('/login',async (req,res)=>{
    // debugger;
    console.log(req.body)
    try {
           const check  = await collection.findOne({email:req.body.fname});
           if(!check){
               res.send("username not found");
           }
           
           if(req.body.password == check.password){
                   res.render('index');
           }else {
               res.send("Incorrect password");
           }
   
   
    }
    catch{
       res.send("Wrong Details");
    }
   
   });
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

