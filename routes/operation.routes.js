const express = require('express'),

    userRouter = express.Router();
    const  routes = (Operation) => {

        userRouter.route('/')
            .get((req,res) => {
               Operation
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

        return userRouter;
    }

    module.exports = routes;