const Entreprise = require("../../Models/Entreprise.js");

const deleteTaskEntreprise = async (req, res) => {
    console.log("req.bodu.key", req.params.key)
    
    const idEntreprise = req.params.id;
    
    try { 
      await Entreprise.findOneAndUpdate({ _id: idEntreprise},{ $pull: { items : { currentItem : { $elemMatch : { key : {$eq : req.params.key}} }}}})
      
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }

}

module.exports = deleteTaskEntreprise;