import {
  Box,
  Container,
  Flex,
  Heading,
  Separator,
  Section,
} from '@radix-ui/themes';
import { FuelCostForm } from 'widgets/fuel-cost-form';
import { FuelCostResult } from 'widgets/fuel-cost-result';

function MainPage() {
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
          minHeight="300px"
        >
          <Flex gap="4">
            <FuelCostForm />
            <Separator
              orientation="vertical"
              size="4"
            />
            <Box>
              <Heading
                as="h2"
                size="5"
              >
                Результаты расчёта
              </Heading>
              <FuelCostResult />
            </Box>
          </Flex>
        </Section>
      </main>
    </Container>
  );
}

export { MainPage };
