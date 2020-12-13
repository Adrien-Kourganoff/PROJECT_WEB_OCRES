const Entreprise = require("../../Models/Entreprise.js");

const addTaskEntreprise = async (req, res) => {
    const idEntreprise = req.params.id;
    
    try {
        const currentI = {text: req.body.text, key : req.body.key}
      await Entreprise.findOneAndUpdate({ _id: idEntreprise},
        { $push: { items : { currentItem :  currentI} }});
           
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = addTaskEntreprise;
