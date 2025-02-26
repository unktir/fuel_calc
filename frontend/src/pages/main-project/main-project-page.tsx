import { useEffect, useState } from 'react';
import { Container, Flex, Separator, Section } from '@radix-ui/themes';
import { FuelCostForm } from 'widgets/fuel-cost-form';
import { FuelCostResult, type TripType } from 'widgets/fuel-cost-result';
import { CarFormType } from 'widgets/fuel-cost-form';
import api from 'shared/api';

function isEmpty(obj: object) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
}

function MainProjectPage() {
  const [formData, setFormData] = useState<CarFormType>({});
  const [tripsData, setTripsData] = useState<TripType[]>([]);
  const [tripDataLoader, setTripDataLoader] = useState(false);

  const getTrip = async (formData: CarFormType) => {
    try {
      const response = await api.get('/calculate_fuel', { params: formData });
      setTripsData([...tripsData, response.data]);
      setTripDataLoader(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (!isEmpty(formData)) {
      getTrip(formData);
    }
  }, [formData]);

  return (
    <Container
      asChild
      size={{
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4',
      }}
    >
      <main>
        <Section
          asChild
          size="2"
        >
          <Flex gap="6">
            <FuelCostForm onSubmit={setFormData} />
            {tripDataLoader && (
              <>
                <Separator
                  orientation="vertical"
                  size="4"
                />
                <FuelCostResult trips={tripsData} />
              </>
            )}
          </Flex>
        </Section>
      </main>
    </Container>
  );
}

export { MainProjectPage };
