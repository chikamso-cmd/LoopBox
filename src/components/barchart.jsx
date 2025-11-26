import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContributionChart = () => {

  const contributions = [
    { month: "January", amount: 10000 },
    { month: "February", amount: 9000 },
    { month: "March", amount: 43000 },
    { month: "April", amount: 12000 },
    { month: "May", amount: 8000 },
    { month: "June", amount: 20000 },
    { month: "July", amount: 13000 },
    { month: "August", amount: 22000 },
    { month: "September", amount: 15000 },
    { month: "October", amount: 66000 },
    { month: "November", amount: 51100 },
  ];

  const data = {
    labels: contributions.map((item) => item.month),
    datasets: [
      {
        label: "Monthly contribution",
        data: contributions.map((item) => item.amount),
        backgroundColor: "rgba(5, 50, 148, 1)",
        borderColor: "rgba(171, 194, 244, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Individual Monthly ontributions (Jan-Nov)",
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: "200px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};
export default ContributionChart;
