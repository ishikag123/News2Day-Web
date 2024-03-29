//Dummy data file

const bar_data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sports",
      data: [17, 14, 8, 18, 7, 4, 1, 14, 11, 19, 11, 8],
      backgroundColor: "aquamarine",
      borderColor: "black",
      borderWidth: 1,
    },
    {
      label: "Politics",
      data: [9, 18, 7, 4, 2, 15, 12, 8, 14, 12, 5, 19],
      backgroundColor: "mistyRose",
      borderColor: "black",
      borderWidth: 1,
    },
    {
      label: "Science",
      data: [3, 6, 9, 5, 7, 3, 10, 5, 6, 11, 9, 4],
      backgroundColor: "teal",
      borderColor: "black",
      borderWidth: 1,
    },
    {
      label: "Economy",
      data: [11, 16, 20, 15, 14, 2, 8, 4, 10, 1, 9, 1],
      backgroundColor: "mediumPurple",
      borderColor: "black",
      borderWidth: 1,
    },

    {
      label: "Business",
      data: [3, 11, 8, 20, 5, 10, 3, 1, 6, 19, 6, 16],
      backgroundColor: "deepSkyBlue",
      borderColor: "black",
      borderWidth: 1,
    },
  ],
};

const pie_data = {
  labels: ["Sports", "Science", "Politics", "Economy", "Business"],
  datasets: [
    {
      data: [132, 78, 125, 111, 108],
      backgroundColor: [
        "aquamarine",
        "mistyRose",
        "mediumPurple",
        "deepSkyBlue",
        "teal",
      ],
      borderColor: "black",
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

const line_data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Engagement Rate",
      data: [8, 10, 11, 17, 7, 14, 9, 17, 7, 18, 4, 6],
      backgroundColor: ["mediumPurple"],
      tension: 0.2,
    },
  ],
};

export { bar_data, pie_data, line_data };
