const Entreprise = require("../../Models/Entreprise.js");

const addTaskEntreprise = async (req, res) => {
    const idEntreprise = req.params.id;

    try {
        await Entreprise.findOneAndUpdate({ _id: idEntreprise },
            { $push: { items: { text: req.body.text, key: req.body.key } } });

        res.status(200).json({ message: "succes" })

    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = addTaskEntreprise;
