const Entreprise = require("../../Models/Entreprise.js");

const addGainEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.params", req.params.id)
    const idUser = req.params.id;
    const { gain, typegain  } = req.body
    
    try {
      await Entreprise.findOneAndUpdate({ _id: idUser},
        
        { $set: { myGainList: { datasets[0].data[typegain]:gain} } });
           
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = addGainEntreprise;
