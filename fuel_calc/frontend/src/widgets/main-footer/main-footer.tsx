import { Container, Box } from '@radix-ui/themes';

function MainFooter() {
  return (
    <Container
      asChild
      flexGrow="0"
      size={{
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4',
      }}
    >
      <footer>
        <Box>footer</Box>
      </footer>
    </Container>
  );
}

export { MainFooter };
