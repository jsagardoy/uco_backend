const express = require('express');
const bodyParser = require('body-parser');
const data = require('data');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


data.connect('mongodb://localhost/ucoDB');

app.get('/api/operations',(req,res)=>{
    const result =  data.Operations
                        .find()
                        .exec()
                        .then((result)=>{
                            console.log(`entro ${result}`)
                            res.send(result);
                        })
                        .catch((err) =>{
                            res.status(500).send(err);
                            console.log("fallo");
                    
                        })
})


app.get ('/',(req,res)=>{
    res.send('hello');
}); 

app.listen(4000);