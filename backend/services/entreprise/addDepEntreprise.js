const Entreprise = require("../../Models/Entreprise.js");


const addDepEntreprise = async (req, res) => {
  console.log("req.bodu", req.body);
  console.log("req.params", req.params.id);
  const idEntreprise = req.params.id;
  const entreprise = await Entreprise.findOne({ _id: idEntreprise });
  var typeD = parseInt(req.params.typedep);
  
  switch (typeD) {
    case 1:
        console.log("JE SUIS 1")
      try {
          console.log("dep body", req.body.dep);
          console.log("type param", entreprise.donut.dep);
        await Entreprise.findOneAndUpdate(
            
          { _id: idEntreprise },
          {
            
            $set: {
              donut: {
                gain: [
                    entreprise.donut.gain[0],
                    entreprise.donut.gain[1],
                    entreprise.donut.gain[2],
                    entreprise.donut.gain[3],
                ],

                dep: [
                    req.body.dep,
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
                entreprise.donut.gain[1],
                  
                  entreprise.donut.gain[2],
                  entreprise.donut.gain[3],
                ],

                dep: [
                    
                  entreprise.donut.dep[0],
                  req.body.dep,
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
                  entreprise.donut.gain[2],
                  entreprise.donut.gain[3],
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  req.body.dep,
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
                  entreprise.donut.gain[3],
                  
                ],

                dep: [
                  entreprise.donut.dep[0],
                  entreprise.donut.dep[1],
                  entreprise.donut.dep[2],
                  req.body.dep,
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

module.exports = addDepEntreprise;