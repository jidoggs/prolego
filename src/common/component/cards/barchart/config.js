export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],

  datasets: [
    {
      label: "Day Attendance",
      backgroundColor: "rgba(128, 167, 214, 1)",
      borderColor: "rgba(128, 167, 214, 1)",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "rgba(128, 167, 214, 0.4)",
      hoverBorderColor: "rgba(28, 45, 64, 1)",
      data: [65, 59, 80, 81, 56, 55, 40,99,63],
    },

    {
      label: "Night Attendance",
      backgroundColor: "rgba(28, 45, 64, 1)",
      borderColor: "rgba(28, 45, 64, 1)",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "rgba(28, 45, 64, 0.4)",
      hoverBorderColor: "rgba(128, 167, 214, 1)",
      data: [45, 79, 50, 41, 16, 85, 20,40,21],
    },
  ],
};

export const options = {
  responsive: true,
  legend: {
    display: false,
  },
  type: "bar",

  //   scales: {
  //     xAxes: [{
  //         stacked: true
  //     }],
  //     yAxes: [{
  //         stacked: true
  //     }]
  // }
};
