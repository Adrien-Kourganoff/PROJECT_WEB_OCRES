const Entreprise = require("../../Models/Entreprise.js");

const deleteTaskEntreprise = async (req, res) => {
    
    const idEntreprise = req.params.id;

    try {
        const entreprise = await Entreprise.findOne({ _id: idEntreprise })
        const items = entreprise.items
        res.json(items)
        res.status(200).json({ message: "succes" })

    } catch (error) {
        res.status(500).json({ error })
    }

}

module.exports = deleteTaskEntreprise;