const Entreprise = require("../../Models/Entreprise.js");

const addComEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.params", req.params.id)
    const idEntreprise = req.params.id;

    try {
      await Entreprise.findOneAndUpdate({ _id: idEntreprise},
        { $push: { commentaire : { position : "left", type: "text", title: req.body.title, text: req.body.text, date: new Date()} } });
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = addComEntreprise;
