import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Box mb={4}>
            <Text fontSize="3xl" fontWeight="bold">
              Featured Article
            </Text>
            <Text mt={2}>
              This is the featured article section. Highlight the most important news here.
            </Text>
          </Box>
        </Box>
        <Box flex="1" bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Trending Articles
          </Text>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontWeight="bold">Trending Article 1</Text>
              <Text mt={1}>Brief description of trending article 1.</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Trending Article 2</Text>
              <Text mt={1}>Brief description of trending article 2.</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Trending Article 3</Text>
              <Text mt={1}>Brief description of trending article 3.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;