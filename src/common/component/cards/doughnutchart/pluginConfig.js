export const config = [
  {
    afterDatasetsDraw: (chart, args, options) => {
      const {
        ctx,
        chartArea: { bottom, height, width },
      } = chart;

      ctx.save();

      ctx.font = "bolder 12px Arial";
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.textAlign = "center";
      ctx.fillText("Students", width / 2, height / 2);
      ctx.restore();

      ctx.font = "bolder 32px Arial";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.textAlign = "center";
      ctx.fillText(
        `${data.datasets[0].data.reduce((a, b) => a + b)}`,
        width / 2,
        bottom / 2 + 30
      );
      ctx.restore();

      // console.log(options)
      // console.log(args)
    },
  },
];

export const data = {
  labels: ["Dropout", "Graduand"],
  datasets: [
    {
      label: "# of Students",
      data: [700, 1300],
      backgroundColor: ["rgba(255, 199, 0, 1)", "rgba(15, 198, 194, 1)"],
      borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

export const nutsOptions = {
  legend: {
    align: "center",
    position: "right",

    labels: {
      font: {
        // family: "inherit",
        lineHeight: 15,
        size: 12,
        // style: "inherit",
        weight: 500,
      },
      boxHeight: 20,
      boxWidth: 4,
      textAlign: "left",
      padding: 16,
      boxPadding: 16,

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
              text: `Average ${label} rate ${
                (ds.data[i] / ds.data.reduce((a, b) => a + b)) * 100
              }%`,
              fillStyle: fill,
              strokeStyle: stroke,
              lineWidth: bw,
              index: i,
            };
          });
        }
        return [];
      },
    },
  },
};
