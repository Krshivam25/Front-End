export const planetChartData = {
    type: "line",
    data: {
      labels: ["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM", "Now", "8:00 AM", "9:00 AM", "10:AM", "11:59 AM"],
      datasets: [
        {
        
            data: [1000,2000,5000,6500,12000,13000,14500,20000,50000,60000],
            
          borderColor: 'grey'
         
          
        },
    
        {
          label: "",
          data: [0, 5000,20000, 18000, 50000, 15000, 18000, 20000, 30000, 50000, 100000],
          borderColor: 'blue',
          
          
         
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;