import React, { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Box, Image } from "@chakra-ui/react";

const CreateRoute = () => {
  const [pinpoints, setPinpoints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleAddPinpoint = () => {
    const newPinpoint = { title, description, image };
    setPinpoints([...pinpoints, newPinpoint]);
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Create a New Route</Heading>
        <FormControl id="route-title">
          <FormLabel>Route Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="route-description">
          <FormLabel>Route Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="route-image">
          <FormLabel>Route Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <Image src={image} alt="Pinpoint" boxSize="200px" />}
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleAddPinpoint}>Add Pinpoint</Button>
        <Box w="100%" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Pinpoints</Heading>
          {pinpoints.length === 0 ? (
            <Text mt={4}>No pinpoints added. Start by adding a new pinpoint!</Text>
          ) : (
            pinpoints.map((pinpoint, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" mt={4}>
                <Heading fontSize="lg">{pinpoint.title}</Heading>
                <Text mt={2}>{pinpoint.description}</Text>
                {pinpoint.image && <Image src={pinpoint.image} alt="Pinpoint" boxSize="200px" mt={2} />}
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateRoute;