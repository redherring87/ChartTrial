google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var completed = parseInt(document.getElementById("surveysUncompleted").innerHTML);
       var uncompleted = parseInt(document.getElementById("surveysCompleted").innerHTML);
       console.log(completed);
       var data = google.visualization.arrayToDataTable([
         ['Effort', 'Amount given'],
         ['Completed',     completed],
         ['UnCompleted',     uncompleted]
       ]);

       var options = {
         pieHole: 0.6,
         pieSliceTextStyle: {
           color: 'black',
         },
         legend: 'none'
       };

       var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
       chart.draw(data, options);
     }
