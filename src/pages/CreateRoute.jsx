import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const CreateRoute = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Create a New Route</Heading>
        <FormControl id="route-title">
          <FormLabel>Route Title</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="route-description">
          <FormLabel>Route Description</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg">Add Pinpoint</Button>
      </VStack>
    </Container>
  );
};

export default CreateRoute;