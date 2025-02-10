import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import type { CarType } from './fuel-cost-form.type';
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
} from '@radix-ui/themes';
import { Form } from 'radix-ui';
import { Icon } from 'shared/ui/icon';

import './fuel-cost-form.scss';

function FuelCostForm() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [carID, setCarID] = useState<string>('');

  const getCars = async () => {
    try {
      const response: AxiosResponse<CarType[]> = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Form.Root>
      <Flex
        direction="column"
        gap="6"
      >
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
          <Box maxWidth="300px">
            <Card size="2">
              <Inset
                clip="padding-box"
                side="top"
                pb="current"
              >
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Car"
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    width: '100%',
                    height: 140,
                    backgroundColor: 'var(--gray-5)',
                  }}
                />
              </Inset>
              <Text
                as="p"
                size="3"
              >
                <Strong>{cars?.[+carID]?.name}</Strong>
              </Text>
            </Card>
          </Box>
          <Form.Field name="car">
            <Form.Control
              asChild
              required
            >
              <Select.Root onValueChange={(carID) => setCarID(carID)}>
                <Select.Trigger placeholder="Выберите машину" />
                <Select.Content>
                  {cars?.map((car, index) => (
                    <Select.Item
                      key={index}
                      value={`${index}`}
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
