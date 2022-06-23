import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { config, nutsOptions } from './pluginConfig';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChartCard({data}) {
  return (
    <section className="dashboard__cards academicCards">
            <h3>Academic Prediction</h3>
            <div className="totalCards__wrapper">
              <Doughnut
                data={data}
                height={260}
                width={260}
                plugins={config}
                options={{
                  doughnut: true,
                  plugins: nutsOptions,
                  maintainAspectRatio: false,
                  cutout: "80%",
                  scales: 3,
                }}
              />
            </div>
          </section>
  )
}

export default DoughnutChartCard