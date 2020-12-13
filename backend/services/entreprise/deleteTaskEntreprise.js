const Entreprise = require("../../Models/Entreprise.js");

const deleteTaskEntreprise = async (req, res) => {
    
    const idEntreprise = req.params.id;

    try {
        await Entreprise.findOneAndUpdate({ _id: idEntreprise }, { $pull: { items: { text: req.params.text, key: req.params.key } } })
        res.status(200).json({ message: "succes" })

    } catch (error) {
        res.status(500).json({ error })
    }

}

module.exports = deleteTaskEntreprise;