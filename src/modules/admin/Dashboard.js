import React from "react";
import StudentGradesCard from "../../common/component/cards/StudentGradesCard";
import NotificationIcon from "../../common/component/customIcons/NotificationIcon";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

// ChartJS.defaults.plugins.tooltip.
ChartJS.defaults.plugins.legend.position = "right";
ChartJS.defaults.plugins.legend.align = "start";
ChartJS.defaults.layout.autoPadding = false;
ChartJS.defaults.layout.padding = 0;
// var theHelp = ChartJS.he
// ChartJS.defaults.plugins.legend.labels.boxHeight = "50";
// ChartJS.defaults.plugins.legend.labels.boxWidth = "105";
// ChartJS.defaults.plugins.legend.labels.generateLabels()

// ChartJS.defaults.font.size = 14;

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function Dashboard() {
  const data = {
    labels: [
      "1st Class",
      "2nd Class upper",
      "2nd Class lower",
      "3rd Class",
      "Pass",
    ],
    datasets: [
      {
        label: "# of Students",
        data: [200, 400, 900, 300, 200],
        // data: [10, 20, 45, 15, 10],
        backgroundColor: [
          "rgba(22, 93, 255, 1)",
          "rgba(80, 205, 137, 1)",
          "rgba(15, 198, 194, 1)",
          "rgba(241, 65, 108, 1)",
          "rgba(0, 158, 247, 1)",
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          "rgba(22, 93, 255, 1)",
          "rgba(80, 205, 137, 1)",
          "rgba(15, 198, 194, 1)",
          "rgba(241, 65, 108, 1)",
          "rgba(0, 158, 247, 1)",
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      // {
      //   label: 'Quantity',
      //   data: [47, 52, 67, 58, 9, 50],
      //   backgroundColor: 'orange',
      //   borderColor: 'red',
      // },
    ],
  };
  return (
    <>
      <div className="dashboard__cardsContainer">
        <section className="dashboard__cardsContainer_subContainer">
          <section className="dashboard__cards classCards">
            <div className="title__container">
              <h3 className="title__container-title">Total Stats</h3>
            </div>
            <div className="class">
              <div className="class__card">
                <h4 className="class__card--title">1st Class</h4>
                <p className="class__card--body">15%</p>
              </div>
              <div className="class__card">
                <h4 className="class__card--title">1st Class</h4>
                <p className="class__card--body">15%</p>
              </div>
              <div className="class__card">
                <h4 className="class__card--title">1st Class</h4>
                <p className="class__card--body">15%</p>
              </div>
              <div className="class__card">
                <h4 className="class__card--title">1st Class</h4>
                <p className="class__card--body">15%</p>
              </div>
              <div className="class__card">
                <h4 className="class__card--title">1st Class</h4>
                <p className="class__card--body">15%</p>
              </div>
            </div>
          </section>
        </section>
        <section className="dashboard__cardsContainer_subContainer">
          <StudentGradesCard />
          <section className="dashboard__cards academicCards">
            <h3>Total Stats</h3>
            <div className="totalCards__wrapper">
              {/* 1st class */}
              {/* 1st class */}
              {/* 1st class */}
              {/* 1st class */}
              {/* build a custom card */}
              <Doughnut
                data={data}
                height={262}
                width={410}
                options={{
                  doughnut: true,
                  plugins: {
                    // tooltip: {
                    //   callbacks: (e) => console.log(e),
                    // },
                    legend: {
                      title: {
                        color: "red",
                        display: false,
                        text: "Red",
                      },
                      labels: {
                        font: {
                          family: "inherit",
                          lineHeight: 28,
                          size: 20,
                          style: "inherit",
                        },
                        textAlign: "left",
                        boxHeight: 50,
                        boxWidth: 4,
                        padding: 24,

                        generateLabels: (chart) => {
                          const data = chart.data;

                          if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, i) => {
                              let meta = chart.getDatasetMeta(0);
                              let ds = data.datasets[0];
                              let arc = meta.data[i];
                              let custom = (arc && arc.custom) || {};
                              let fill = custom.backgroundColor
                                ? custom.backgroundColor
                                : ds.backgroundColor[i];
                              let stroke = custom.borderColor
                                ? custom.borderColor
                                : ds.borderColor[i];
                              let bw = custom.borderWidth
                                ? custom.borderWidth
                                : ds.borderWidth[i];

                              return {
                                text: `${label} ${
                                  (ds.data[i] /
                                    ds.data.reduce((a, b) => a + b)) *
                                  100
                                }%`,
                                // text: ds.data.reduce((a, b) => a + b) + "% ",
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                // hidden:
                                // isNaN(ds.data[i]) || meta.data[i].hidden,
                                index: i,
                              };
                            });
                          }
                          return [];
                        },
                      },
                    },
                  },
                  maintainAspectRatio: false,
                  cutout: 80,
                  // plugins:{
                  //   tooltip:{

                  //   }
                  // },
                  scales: {
                    // yAxes: [
                    //   {
                    //     ticks: {
                    //       beginAtZero: true,
                    //     },
                    //   },
                    // ],
                  },
                  // legend: {
                  //   labels: {
                  //     fontSize:14,
                  //     lineHeight: "22px",
                  //     weight: "400",
                  //   },
                  // },
                }}
              />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
