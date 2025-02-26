import { Box, Card, DataList, Flex, Heading } from '@radix-ui/themes';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  TooltipProps,
  ResponsiveContainer,
} from 'recharts';
import {
  type TripType,
  type FuelCostResultType,
} from './fuel-cost-result.type';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as TripType;
    return (
      <Card>
        <DataList.Root size="1">
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Машина</DataList.Label>
            <DataList.Value>{data.car}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Стоимость поездки</DataList.Label>
            <DataList.Value>{data.total_cost} ₽</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Топлива необходимо</DataList.Label>
            <DataList.Value>{data.fuel_needed} л</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Кол-во дозаправок</DataList.Label>
            <DataList.Value>{data.refuels}</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    );
  }
  return null;
};

function FuelCostResult({ trips }: FuelCostResultType) {
  // TODO: Как будет исправлено API переделать
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`/api/trip_history/${carId}/`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [carId]);

  return (
    <Flex
      direction="column"
      flexGrow="1"
      gap="6"
    >
      <Heading
        as="h2"
        size="5"
      >
        Результаты расчёта
      </Heading>
      <Flex>
        <Box
          flexGrow="1"
          width="100%"
          height="400px"
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={trips}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="car" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="total_cost"
                stroke="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Flex>
  );
}

export { FuelCostResult };
