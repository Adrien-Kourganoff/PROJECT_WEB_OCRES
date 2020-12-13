import Doughnutt from "./Doughnutt.jsx"
import React from "react";


var entreprise = {
  nom: "Entreprise 1",
  benef: [65, 59, 80, 81, 56, 55, 40, 55, 62, 10, 1, 3],
  donut:
  {
    gain:
    {
      labels: ["Immobillier", "Marchandise", "Investissement", "Autre"],

      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: ["#FFADCF", "#FFD0D0", "#FFF0CF", "#FFFFD6"],
          hoverBackgroundColor: ["#D993B0", "#D9B1B1", "#D9CCB0", "#D9D9B6"],
        },
      ],
    },
    dep:
    {
      labels: ["Matières Premières", "Charges Salariés", "Charges", "Autre"],

      datasets: [
        {
          data: [150, 450, 200, 154],
          backgroundColor: ["#CEACCE", "#CFBECF", "#D0E1D1", "#CFFFD0"],
          hoverBackgroundColor: ["#B79FB7", "#B7ACB7", "#B8C4B9", "#B7D9B8"],
        },
      ],
    },
  },
  commentaire: [
    {
      position: "left",
      type: "text",
      title: "NON",
      text: "Je n aime pas ce produit",
      date: new Date(2018, 8, 22, 15, 0, 0),
    },
    {
      position: "left",
      type: "text",
      title: "WAOU",
      text: "j adore votre site web",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "20/20",
      text: "Je pense qu il vous faut 20/20",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      title: "Elit magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
  ],
  myEventsList: [
    {
      title: "test",
      start: new Date('November 22, 2020 15:00:00'),
      end: new Date('November 22, 2020 18:00:00'),
      allDay: false
    },
    {
      title: "test2",
      start: new Date('December 23, 2020 15:00:00'),
      end: new Date('December 23, 2020 18:00:00'),
      allDay: false
    },
  ],
};

export default {
  title: "DoughnuttStories",
  component: Doughnutt,
};
// We create a “template” of how args map to rendering

const Template = (args) => <Doughnutt user={entreprise.donut.gain} />;

// Each story then reuses that template
export const DoughnuttStories = Template.bind({});

DoughnuttStories.args = {
  primary: true,
  label: 'Doughnutt',
};