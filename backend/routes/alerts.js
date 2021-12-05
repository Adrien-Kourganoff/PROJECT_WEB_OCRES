var express = require('express');
var router = express.Router();
const AlertModel = require('../models/alert.model');
const moment = require('moment')


//GET meetings listing. //
router.get('/', async (req, res) => {  
 
  const alerts = await AlertModel.find().sort({alertDate : -1});
	res.json(alerts)

})


// Update by ID

router.put("/update", async (req, res) => {
  
  const id = req.body.id;
  const title = req.body.title;
  const message = req.body.message;
  const date = req.body.alertDate; 

  try {

    const result = await AlertModel.updateOne({id},{
              title :title,
              message : message,
              alertDate : date,
    });
    console.log(result);
 
  } catch(error)
    {
      console.log("error");
    }
 
});

//delete by id

      router.delete("/delete/:id", async (req, res) => {
      const id=req.params.id;

                 AlertModel.findByIdAndRemove(id, function(err){
                  if(err){

                  console.log(err);
                  res.json(err);
                
                } else {
                    res.json("delete");

                  }
               });

          
      });


// post

router.post("/add", async (req, res) => {
  
  const title = req.body.title;
  const message = req.body.message;
  const date = req.body.alertDate; 

 const alert = new AlertModel({
              title :title,
              message : message,
              alertDate : date,
    });
    
  try {
    await alert.save();
    res.send("inserted data");
    //console.log("efer"+alert);
 
  } catch(error)
    {
      console.log("error");
    }
 
});

module.exports = router;
