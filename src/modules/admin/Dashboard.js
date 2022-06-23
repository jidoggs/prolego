import React from "react";
import StudentGradesCard from "../../common/component/cards/StudentGradesCard";
import DoughnutChartCard from "../../common/component/cards/doughnutchart";
import BarChart from "../../common/component/cards/barchart";
import { data as douData } from "../../common/component/cards/doughnutchart/pluginConfig";
import { data as barData } from "../../common/component/cards/barchart/config";

function Dashboard() {
  return (
    <div className="adminShell__body--content">
      <div className="dashboard__cardsContainer">
        <section className="dashboard__cardsContainer_subContainer">
          <DoughnutChartCard data={douData} />
          <StudentGradesCard />
        </section>
        <section className="dashboard__cardsContainer_subContainer">
          <BarChart data={barData} />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
