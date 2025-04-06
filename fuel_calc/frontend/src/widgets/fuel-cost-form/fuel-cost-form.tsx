import { AxiosResponse } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import type {
  CarFormType,
  CarType,
  FuelCostFormType,
} from './fuel-cost-form.type';
import api from 'shared/api';
import {
  Box,
  Flex,
  Heading,
  Select,
  Text,
  TextField,
  Button,
  Tooltip,
  Card,
  Inset,
  Strong,
  IconButton,
  Popover,
  DataList,
} from '@radix-ui/themes';
import { Form } from 'radix-ui';
import { Icon } from 'shared/ui/icon';

import './fuel-cost-form.scss';

// TODO: использовать когда будет готово API
// function LoadingCarCard() {
//   return (
//     <Box maxWidth="300px">
//       <Card size="2">
//         <Inset
//           clip="padding-box"
//           side="top"
//           pb="current"
//         >
//           <Skeleton
//             width="100%"
//             height="140px"
//           />
//         </Inset>
//         <Heading
//           as="h4"
//           size="3"
//         >
//           <Skeleton>Марка и модель автомобиля</Skeleton>
//         </Heading>
//         <Text
//           size="2"
//           as="p"
//         >
//           <Skeleton>Расход топлива: x (л/100 км)</Skeleton>
//         </Text>
//         <Text
//           size="2"
//           as="p"
//         >
//           <Skeleton>Объём топливного бака: x (л)</Skeleton>
//         </Text>
//       </Card>
//     </Box>
//   );
// }

function CarCard({ car }: { car: CarType }) {
  return (
    <Box maxWidth="300px">
      <Card size="2">
        <Box
          position="absolute"
          right="4"
        >
          <Popover.Root>
            <Popover.Trigger>
              <IconButton
                variant="ghost"
                size="1"
              >
                <Icon.InfoCircled />
              </IconButton>
            </Popover.Trigger>
            <Popover.Content
              size="1"
              maxWidth="300px"
            >
              <DataList.Root size="1">
                <DataList.Item align="center">
                  <DataList.Label minWidth="88px">Название</DataList.Label>
                  <DataList.Value>{car.name}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">
                    Расход топлива
                  </DataList.Label>
                  <DataList.Value>
                    {car.fuel_consumption} л/100 км
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Тип двигателя</DataList.Label>
                  <DataList.Value>{car.engine_type}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">
                    Объём топливного бака
                  </DataList.Label>
                  <DataList.Value>{car.tank_capacity} л</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Производитель</DataList.Label>
                  <DataList.Value>{car.manufacturer}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">
                    Год производства
                  </DataList.Label>
                  <DataList.Value>{car.year} г</DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Popover.Content>
          </Popover.Root>
        </Box>
        <Inset
          clip="padding-box"
          side="top"
          pb="current"
        >
          {car.image === undefined ? (
            <Flex
              width="100%"
              height="140px"
              justify="center"
              align="center"
              style={{
                color: 'var(--gray-7)',
                background: 'var(--gray-3)',
              }}
            >
              <Icon.Car
                width="60px"
                height="60px"
              />
            </Flex>
          ) : (
            <img
              src={car.image}
              alt="car"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          )}
        </Inset>
        <Box>
          <Heading
            as="h4"
            size="3"
          >
            {car.name}
          </Heading>
          <Text
            size="2"
            as="p"
          >
            Расход топлива: <Strong>{car.fuel_consumption} л/100 км</Strong>
          </Text>
          <Text
            size="2"
            as="p"
          >
            Объём топливного бака: <Strong>{car.tank_capacity} л </Strong>
          </Text>
        </Box>
      </Card>
    </Box>
  );
}

function FuelCostForm({ onSubmit }: FuelCostFormType) {
  const [cars, setCars] = useState<CarType[]>([]);
  const [car, setCar] = useState<CarType>();
  const [carID, setCarID] = useState<number>();

  const getCars = async () => {
    try {
      const response: AxiosResponse<CarType[]> = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: CarFormType = {
      car_id: carID,
      distance_km: Number(formData.get('distance')),
      fuel_price: Number(formData.get('fuel_cost')),
    };

    onSubmit(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    setCar(cars.find((x) => x.id === carID));
  }, [carID]);

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Flex
        direction="column"
        gap="6"
      >
        <Heading
          as="h2"
          size="5"
        >
          Форма для расчёта
        </Heading>
        <Flex
          direction="column"
          gap="3"
        >
          <Heading
            as="h3"
            size="4"
          >
            Список машин
          </Heading>
          {
            // TODO: Как будет готово API переделать
            car === undefined ? null : <CarCard car={car} />
          }
          <Form.Field name="car_id">
            <Form.Control
              asChild
              required
            >
              <Select.Root onValueChange={(value) => setCarID(Number(value))}>
                <Select.Trigger placeholder="Выберите машину" />
                <Select.Content>
                  {cars?.map((car) => (
                    <Select.Item
                      key={car.id}
                      value={`${car.id}`}
                    >
                      {car.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Form.Control>
          </Form.Field>
        </Flex>
        <Flex
          direction="column"
          gap="3"
        >
          <Heading
            as="h3"
            size="4"
          >
            Введите данные о поездке
          </Heading>
          <Form.Field name="distance">
            <Flex
              justify="between"
              align="center"
            >
              <Form.Label asChild>
                <Text
                  as="label"
                  weight="bold"
                  size="2"
                >
                  Расстояние
                </Text>
              </Form.Label>
              <Form.Message
                asChild
                match="valueMissing"
              >
                <Tooltip content="Пожалуйста введите длину маршрута">
                  <Icon.ExclamationTriangle
                    data-accent-color="red"
                    className="form-error-icon"
                  />
                </Tooltip>
              </Form.Message>
              <Form.Message
                asChild
                match="typeMismatch"
              >
                <Tooltip content="Пожалуйста введите корректную длину маршрута">
                  <Icon.ExclamationTriangle
                    data-accent-color="red"
                    className="form-error-icon"
                  />
                </Tooltip>
              </Form.Message>
            </Flex>
            <Form.Control asChild>
              <TextField.Root
                type="number"
                placeholder="Длина маршрута в км"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="fuel_cost">
            <Flex
              justify="between"
              align="center"
            >
              <Form.Label asChild>
                <Text
                  as="label"
                  weight="bold"
                  size="2"
                >
                  Цена
                </Text>
              </Form.Label>
              <Form.Message
                asChild
                match="valueMissing"
              >
                <Tooltip content="Пожалуйста введите цену топлива">
                  <Icon.ExclamationTriangle
                    data-accent-color="red"
                    className="form-error-icon"
                  />
                </Tooltip>
              </Form.Message>
              <Form.Message
                asChild
                match="typeMismatch"
              >
                <Tooltip content="Пожалуйста введите корректную цену топлива">
                  <Icon.ExclamationTriangle
                    data-accent-color="red"
                    className="form-error-icon"
                  />
                </Tooltip>
              </Form.Message>
            </Flex>
            <Form.Control asChild>
              <TextField.Root
                type="number"
                placeholder="Цена топлива в руб/л"
                required
              />
            </Form.Control>
          </Form.Field>
        </Flex>
        <Form.Submit asChild>
          <Button>Рассчитать</Button>
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
}

export { FuelCostForm };
