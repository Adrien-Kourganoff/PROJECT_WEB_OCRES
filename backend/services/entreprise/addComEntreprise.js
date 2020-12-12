const Entreprise = require("../../Models/Entreprise.js");

const addComEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.params", req.params.id)
    const idUser = req.params.id;
    const {titre, texte } = req.body
    try {
      await Entreprise.findOneAndUpdate({ _id: idUser},
        { $push: { commentaire : { position : "left", type: "text", title: titre, text: texte, date: new Date()} } });
           
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = addComEntreprise;
