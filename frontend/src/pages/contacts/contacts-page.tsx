import {
  Container,
  Flex,
  Section,
  Grid,
  Box,
  Card,
  Avatar,
  Text,
} from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import api from 'shared/api';

interface StaffType {
  id?: number;
  last_name: string;
  first_name: string;
  position: string;
  photo?: string;
}

function StaffCard({ staff }: { staff: StaffType }) {
  return (
    <Card>
      <Flex
        gap="3"
        align="center"
      >
        <Avatar
          size="5"
          radius="full"
          fallback={staff.last_name[0] + staff.first_name[0]}
          src={staff.photo}
        />
        <Box>
          <Text
            as="div"
            size="2"
            weight="bold"
          >
            {staff.last_name} {staff.first_name}
          </Text>
          <Text
            as="div"
            size="2"
            color="gray"
          >
            {staff.position}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}

function ContactsPage() {
  const [devs, setDevs] = useState<StaffType[]>([]);

  const getDevs = async () => {
    try {
      const response = await api.get('/developers');
      setDevs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDevs();
  }, []);

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
          <Grid
            gapX="8"
            gapY="4"
            columns="3"
            rows="3"
            width="auto"
          >
            {
              // TODO: Переделать
              /* {devs.map((staff, index) => (
              <Box
                key={staff.id}
                gridRowStart={(Math.floor(index / 2) + 1).toString()}
                gridRowEnd={(Math.floor(index / 2) + 1).toString()}
                gridColumnStart={(index % 2 === 0 ? 1 : 3).toString()}
                gridColumnEnd={(index % 2 === 0 ? 1 : 3).toString()}
              >
                <StaffCard staff={staff} />
              </Box>
            ))} */
            }
            {devs.length === 0 ? null : (
              <>
                <Box
                  gridRowStart="1"
                  gridRowEnd="1"
                  gridColumnStart="1"
                  gridColumnEnd="1"
                >
                  <StaffCard staff={devs[0]} />
                </Box>
                <Box
                  gridRowStart="1"
                  gridRowEnd="1"
                  gridColumnStart="3"
                  gridColumnEnd="3"
                >
                  <StaffCard staff={devs[1]} />
                </Box>
                <Box
                  gridRowStart="2"
                  gridRowEnd="2"
                  gridColumnStart="2"
                  gridColumnEnd="2"
                >
                  <StaffCard staff={devs[2]} />
                </Box>
                <Box
                  gridRowStart="3"
                  gridRowEnd="3"
                  gridColumnStart="1"
                  gridColumnEnd="1"
                >
                  <StaffCard staff={devs[3]} />
                </Box>
                <Box
                  gridRowStart="3"
                  gridRowEnd="3"
                  gridColumnStart="3"
                  gridColumnEnd="3"
                >
                  <StaffCard staff={devs[4]} />
                </Box>
              </>
            )}
          </Grid>
        </Section>
      </main>
    </Container>
  );
}

export { ContactsPage };
