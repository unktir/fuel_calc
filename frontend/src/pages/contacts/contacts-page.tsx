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

interface StaffType {
  full_name: {
    last_name: string;
    first_name: string;
  };
  position: string;
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
          fallback={
            staff.full_name.last_name[0] + staff.full_name.first_name[0]
          }
        />
        <Box>
          <Text
            as="div"
            size="2"
            weight="bold"
          >
            {staff.full_name.last_name + staff.full_name.first_name}
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
  const staff_data = [
    {
      full_name: { last_name: 'Рябов', first_name: 'Денис' },
      position: 'DevOps, Backend programmer',
    },
    {
      full_name: { last_name: 'Федорищев', first_name: 'Валерий' },
      position: 'Frontend lead programmer',
    },
    {
      full_name: { last_name: 'Федорищев', first_name: 'Сергей' },
      position: 'Backend programmer',
    },
    {
      full_name: { last_name: 'Ахметзянов', first_name: 'Роман' },
      position: 'Designer, Frontend programmer',
    },
    {
      full_name: { last_name: 'Ямгеев', first_name: 'Алмаз' },
      position: 'Docs, Backend programmer',
    },
  ] satisfies StaffType[];

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
            <Box
              gridColumnStart="1"
              gridColumnEnd="1"
              gridRowStart="1"
              gridRowEnd="1"
            >
              <StaffCard staff={staff_data[0]} />
            </Box>
            <Box
              gridColumnStart="3"
              gridColumnEnd="3"
              gridRowStart="1"
              gridRowEnd="1"
            >
              <StaffCard staff={staff_data[1]} />
            </Box>
            <Box
              gridColumnStart="2"
              gridColumnEnd="2"
              gridRowStart="2"
              gridRowEnd="2"
            >
              <StaffCard staff={staff_data[2]} />
            </Box>
            <Box
              gridColumnStart="1"
              gridColumnEnd="1"
              gridRowStart="3"
              gridRowEnd="3"
            >
              <StaffCard staff={staff_data[3]} />
            </Box>
            <Box
              gridColumnStart="3"
              gridColumnEnd="3"
              gridRowStart="3"
              gridRowEnd="3"
            >
              <StaffCard staff={staff_data[4]} />
            </Box>
          </Grid>
        </Section>
      </main>
    </Container>
  );
}

export { ContactsPage };
