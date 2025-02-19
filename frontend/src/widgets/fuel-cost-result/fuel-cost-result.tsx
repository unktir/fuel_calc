import { Box, Flex, Heading } from '@radix-ui/themes';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import type { FuelCostResultType } from './fuel-cost-result.type';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function FuelCostResult({ trips }: FuelCostResultType) {
  const data = {
    labels: trips.map((_, index) => `Поездка ${index + 1}`),
    datasets: [
      {
        label: 'Расход топлива (л)',
        data: trips.map((trip) => trip.total_fuel),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'История поездок',
      },
    },
  };

  return (
    <Flex
      direction="column"
      flexGrow="1"
    >
      <Heading
        as="h2"
        size="5"
      >
        Результаты расчёта
      </Heading>
      <Box>
        <Line
          data={data}
          options={options}
        />
      </Box>
    </Flex>
  );
}

export { FuelCostResult };
