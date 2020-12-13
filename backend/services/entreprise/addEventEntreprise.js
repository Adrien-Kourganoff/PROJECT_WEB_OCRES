const Entreprise = require("../../Models/Entreprise.js");

const addEventEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.params", req.params.id)
    const idEntreprise = req.params.id;
    const { event, dateStart, dateEnd, allDay } = req.body

    try {
        await Entreprise.findOneAndUpdate({ _id: idEntreprise },
            { $push: { myEventsList: { title: event, start: dateStart, end: dateEnd, allDay: false } } });

        res.status(200).json({ message: "succes" })

    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = addEventEntreprise;
