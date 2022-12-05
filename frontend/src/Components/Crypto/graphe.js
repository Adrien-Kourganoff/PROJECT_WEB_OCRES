const barCanvas = document.getElementsByClassName("grp");
console.log("ICI");
const barChart = new Chart(barCanvas , {
    type :"bar",
    data:{
        labels : ["A" ,"Z", "B","R"],
        datasets:[{
            data:[120,200,180,300]
        }]
    }
})