const Entreprise = require("../../Models/Entreprise.js");

const addTaskEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.bodu.item.ti", req.body.text)
   // console.log("req.bodu.item.current", req.body.currentItem)
    console.log("req.params", req.params.id)
    const idUser = req.params.id;
    
    try {
        const currentI = {text: req.body.text, key : req.body.key}
      await Entreprise.findOneAndUpdate({ _id: idUser},
        { $push: { items : { currentItem :  currentI} }});
           
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = addTaskEntreprise;
