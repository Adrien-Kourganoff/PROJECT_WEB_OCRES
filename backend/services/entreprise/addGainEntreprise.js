const Entreprise = require("../../Models/Entreprise.js");


const addGainEntreprise = async (req, res) => {
  
  const idEntreprise = req.params.id;
  const entreprise = await Entreprise.findOne({ _id: idEntreprise });
  var typeG = parseInt(req.params.typeg);

  switch (typeG) {
    case 1:
      try {
        
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              donut: {
                gain: [
                  req.body.gain,
                  entreprise.donut.gain[1],
                  entreprise.donut.gain[2],
                  entreprise.donut.gain[3],
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  entreprise.donut.dep[2],
                  entreprise.donut.dep[3],
                ],
              },
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 2:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              donut: {
                gain: [
                  entreprise.donut.gain[0],
                  req.body.gain,
                  entreprise.donut.gain[2],
                  entreprise.donut.gain[3],
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  entreprise.donut.dep[2],
                  entreprise.donut.dep[3],
                ],
              },
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 3:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              donut: {
                gain: [
                  entreprise.donut.gain[0],
                  entreprise.donut.gain[1],
                  req.body.gain,
                  entreprise.donut.gain[3],
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  entreprise.donut.dep[2],
                  entreprise.donut.dep[3],
                ],
              },
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 4:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              donut: {
                gain: [

                  entreprise.donut.gain[0],
                  entreprise.donut.gain[1],
                  entreprise.donut.gain[2],
                  req.body.gain,
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  entreprise.donut.dep[2],
                  entreprise.donut.dep[3],
                ],
              },
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
  }
};

module.exports = addGainEntreprise;
