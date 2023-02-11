import React from "react";
import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./LandingPage.css";
import img1 from "../Images/img1.jpg";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="image-container">
        <img className="image1" src={img1} alt=""></img>
      </div>
      <Container maxW="container.lg" background={""}>
        <Center p={4} minHeight="70vh">
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading size="2xl" mb={4} color="gray.700">
                You don't have to chase Agents around to know the best Resell
                value for your Cars.
              </Heading>

              <Text fontSize="xl" color="gray.700">
                We here are able to provide the base price for your old car in
                just a few minutes!
              </Text>

              <Button className="button1" mt={8} colorScheme="">
                Calculate Car's Price
              </Button>

              <Text my={2} fontSize="l" color="gray.700">
                We have data of 1000+ cars and we will help you predict the best
                Resell Price.
              </Text>
            </Container>
          </VStack>
        </Center>
      </Container>
    </div>
  );
};

export default LandingPage;
