const Entreprise = require("../../Models/Entreprise.js");


const addBenefEntreprise = async (req, res) => {
  
  const idEntreprise = req.params.id;
  const entreprise = await Entreprise.findOne({ _id: idEntreprise });
  var typeM = parseInt(req.params.mois);

  switch (typeM) {
    case 1:

      try {
        
        await Entreprise.findOneAndUpdate(

          { _id: idEntreprise },
          {

            $set: {
              benef: [
                req.body.benef,
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
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
              benef: [

                entreprise.benef[0],
                req.body.benef,
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
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
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                req.body.benef,
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
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
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                req.body.benef,
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 5:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],

                entreprise.benef[3],
                req.body.benef,
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 6:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],

                entreprise.benef[3],
                entreprise.benef[4],
                req.body.benef,
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 7:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                req.body.benef,
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 8:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                req.body.benef,
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 9:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                req.body.benef,
                entreprise.benef[9],
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 10:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                req.body.benef,
                entreprise.benef[10],
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case 11:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                req.body.benef,
                entreprise.benef[11],

              ],
            },
          }
        );
        res.status(200).json({ message: "succes" });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;

    case 12:
      try {
        await Entreprise.findOneAndUpdate(
          { _id: idEntreprise },
          {
            $set: {
              benef: [

                entreprise.benef[0],
                entreprise.benef[1],
                entreprise.benef[2],
                entreprise.benef[3],
                entreprise.benef[4],
                entreprise.benef[5],
                entreprise.benef[6],
                entreprise.benef[7],
                entreprise.benef[8],
                entreprise.benef[9],
                entreprise.benef[10],
                req.body.benef,

              ],
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

module.exports = addBenefEntreprise;