const Entreprise = require("../../Models/Entreprise.js");

const deleteTaskEntreprise = async (req, res) => {
    console.log("req.bodu.key", req.params.key)
    console.log("req.bodu", req.params.text)
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