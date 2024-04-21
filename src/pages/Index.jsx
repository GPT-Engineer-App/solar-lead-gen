import { Box, Button, Container, Flex, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaPhone, FaSolarPanel } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" minH="100vh" p={10}>
        <VStack align="start" spacing={8} w={{ base: "full", md: "50%" }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Power Your Home with Solar Energy
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Join the renewable energy revolution. Reduce your electricity bills and increase your property value with our state-of-the-art solar panels.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="orange" size="lg">
            Get Started
          </Button>
        </VStack>
        <Box w={{ base: "full", md: "50%" }} p={5}>
          <Image src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGhvbWV8ZW58MHx8fHwxNzEzNjg0MTAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Solar Panels on Home" objectFit="cover" borderRadius="lg" />
        </Box>
      </Flex>
      <Box bg="orange.400" color="white" p={10}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="lg">
              Why Choose Us?
            </Heading>
            <Text>Over a decade of experience in solar technology and installation.</Text>
          </VStack>
          <Button leftIcon={<FaPhone />} variant="outline" colorScheme="whiteAlpha" size="lg">
            Contact Us Now
          </Button>
        </Flex>
      </Box>
      <Flex align="center" justify="center" p={10} bg="gray.100">
        <VStack spacing={5}>
          <FaSolarPanel size="3em" />
          <Heading as="h3" size="md">
            Leading Solar Technology
          </Heading>
          <Text textAlign="center">Our panels are designed for maximum efficiency, ensuring you get the most out of every ray of sunshine.</Text>
        </VStack>
      </Flex>
      <Container maxW="container.md" p={10} mt={10} bg="gray.50" borderRadius="lg">
        <VStack spacing={5} as="form">
          <Heading as="h3" size="lg">
            Get a Quote
          </Heading>
          <Text>Fill out the form below and we will get back to you shortly.</Text>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Input placeholder="Annual Electricity Consumption (kWh)" />
          <Input placeholder="Size of Main Fuse (Amps)" />
          <Button type="submit" colorScheme="orange" size="lg" mt={4}>
            Submit
          </Button>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;
