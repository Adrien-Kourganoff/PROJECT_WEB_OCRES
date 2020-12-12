const Entreprise = require("../../Models/Entreprise.js");

const deleteTaskEntreprise = async (req, res) => {
    console.log("req.bodu", req.body)
    console.log("req.params", req.params.id)
    const idUser = req.params.id;
    
    try {
      await Entreprise.deleteOne({ _id: idUser},
        { $push: { myEventsList: { title: event, start: dateStart, end: dateEnd, allDay: false} } });
           
        res.status(200).json({ message: "succes"})
  
    } catch (error) {
        res.status(500).json({ error})
    }
}

module.exports = deleteTaskEntreprise;
