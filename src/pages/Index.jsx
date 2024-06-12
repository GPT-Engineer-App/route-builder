import { Container, Heading, VStack, Box, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to GeoRoutes</Heading>
        <Text fontSize="lg">Explore routes created by other users or create your own geographical routes with pinpoints.</Text>
        <Box w="100%" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">User Routes</Heading>
          <Text mt={4}>No routes available. Start by creating a new route!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;