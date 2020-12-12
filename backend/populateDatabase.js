const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/entrepriseDb";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    var entreprise = [
        {
          _id: 1,  
          nom: "Entreprise 1",
          benef: [15, 10, 16, 10, 20, 65, 40, 50, 60, 15, 51, 70],
          donut: 
            {
              gain:
              {
                  labels: ["Immobillier", "Marchandise", "Investissement", "Autre"],
      
                  datasets: 
                    [{
                      data: [300, 50, 100,200],
                      backgroundColor: ["#FFADCF", "#FFD0D0", "#FFF0CF","#FFFFD6"],
                      hoverBackgroundColor:  ["#D993B0", "#D9B1B1", "#D9CCB0","#D9D9B6"],
                    }],
                },
              dep: 
                {
                  labels:  ["Matières Premières", "Charges Salariés", "Charges", "Autre"],
      
                  datasets: 
                    [{
                      data: [150, 450, 200, 154],
                      backgroundColor: ["#CEACCE", "#CFBECF", "#D0E1D1","#CFFFD0"],
                      hoverBackgroundColor: ["#B79FB7", "#B7ACB7", "#B8C4B9","#B7D9B8"],
                    }],
                },
            },
          commentaire: [
            {
              position: "left",
              comType: "text",
              title: "NON",
              text: "Je n aime pas ce produit",
              date: new Date(2018, 8, 22, 15, 0, 0),
            },
            {
              position: "left",
              comType: "text",
              title: "WAOU",
              text: "j adore votre site web",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "20/20",
              text: "Je pense qu il vous faut 20/20",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
          ],
          photo_prof: "bonjou",
          myEventsList : [
            {
                title: "Web",
                start: new Date('November 22, 2020 15:00:00'),
                end:  new Date('November 22, 2020 18:00:00'),
                allDay: false
            },
            {
                title: "Web",
                start: new Date('December 23, 2020 15:00:00'),
                end:  new Date('December 23, 2020 18:00:00'),
                allDay: false
            },
            {
              title: "Web",
              start: new Date('December 19, 2020 15:00:00'),
              end:  new Date('December 19, 2020 18:00:00'),
              allDay: false
          },
          {
            title: "Web",
            start: new Date('December 15, 2020 15:00:00'),
            end:  new Date('December 15, 2020 18:00:00'),
            allDay: false
        },
        {
          title: "Web",
          start: new Date('December 13, 2020 15:00:00'),
          end:  new Date('December 13, 2020 18:00:00'),
          allDay: false
      },
      {
        title: "Web",
        start: new Date('December 11, 2020 15:00:00'),
        end:  new Date('December 11, 2020 18:00:00'),
        allDay: false
    },    
    {
      title: "Web",
      start: new Date('December 9, 2020 15:00:00'),
      end:  new Date('December 9, 2020 18:00:00'),
      allDay: false
    },
        ],
        items: [],
        },
        {
          _id:2,  
          nom: "Entreprise 2",
          benef: [65, 59, 80, 81, 56, 55, 40, 55, 62, 10, 1, 66],
          donut: 
            {
              gain:
              {
                  labels: ["Immobillier", "Marchandise", "Investissement", "Autre"],
      
                  datasets: 
                    [{
                      data: [200, 520, 110, 50],
                      backgroundColor: ["#FFADCF", "#FFD0D0", "#FFF0CF","#FFFFD6"],
                      hoverBackgroundColor:  ["#D993B0", "#D9B1B1", "#D9CCB0","#D9D9B6"],
                    }],
                },
              dep: 
                {
                  labels:  ["Matières Premières", "Charges Salariés", "Charges", "Autre"],
      
                  datasets: 
                    [{
                      data: [50, 450, 150, 200],
                      backgroundColor: ["#CEACCE", "#CFBECF", "#D0E1D1","#CFFFD0"],
                      hoverBackgroundColor: ["#B79FB7", "#B7ACB7", "#B8C4B9","#B7D9B8"],
                    }],
                },
            },
          commentaire: [
            {
              position: "left",
              comType: "text",
              title: "NON",
              text: "aaaaaaaaaaa",
              date: new Date(2018, 8, 22, 15, 0, 0),
            },
            {
              position: "left",
              comType: "text",
              title: "WAOU",
              text: "bbbbbbbbbb",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "20/20",
              text: "cccccccccccc",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
            {
              position: "left",
              comType: "text",
              title: "Elit magna",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              date: new Date(),
            },
          ],
          photo_prof: "bonjour2",
          myEventsList : [
            {
                title: "Web",
                start: new Date('November 22, 2020 15:00:00'),
                end:  new Date('November 22, 2020 18:00:00'),
                allDay: false
            },
            {
                title: "Web",
                start: new Date('November 12, 2020 15:00:00'),
                end:  new Date('November 12, 2020 18:00:00'),
                allDay: false
            },
            {
              title: "Web",
              start: new Date('November 9, 2020 15:00:00'),
              end:  new Date('November 9, 2020 18:00:00'),
              allDay: false
          },
          {
            title: "Web",
            start: new Date('November 15, 2020 15:00:00'),
            end:  new Date('November 15, 2020 18:00:00'),
            allDay: false
        },
        {
          title: "Web",
          start: new Date('November 19, 2020 15:00:00'),
          end:  new Date('November 19, 2020 18:00:00'),
          allDay: false
      },
      {
        title: "Web",
        start: new Date('November 24, 2020 15:00:00'),
        end:  new Date('November 24, 2020 18:00:00'),
        allDay: false
    },
    {
      title: "Web",
      start: new Date('November 27, 2020 15:00:00'),
      end:  new Date('November 27, 2020 18:00:00'),
      allDay: false
    },
    {
      title: "Web",
      start: new Date('November 28, 2020 15:00:00'),
      end:  new Date('November 28, 2020 18:00:00'),
      allDay: false
    },
    
        ],
        items: [],
        },
      ];
  
  // perform actions on the collection object
  
  client.db("entrepriseDb").collection("entreprises").remove({})
  client.db("entrepriseDb").collection("entreprises").insertMany(entreprise, function(res) {
    if (err) throw err;
    //console.log("Number of documents inserted: " + res.insertedCount);
    client.close();

});

});
