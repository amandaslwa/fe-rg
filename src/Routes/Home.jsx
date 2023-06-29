import { useNavigate } from "react-router-dom";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/student");
  };
  return (
    <>
      <Center w="100%" h="100vh"   bgGradient='linear(to-b, gray.50, gray.500)'>
        <VStack spacing={4}>
          <Heading as={"h1"} size={"2xl"}>
            Student Portal
          </Heading>
          <Button data-testid="student-btn" colorScheme='facebook' variant='solid' onClick={handleClick}>
            All Student
          </Button>
        </VStack>
      </Center>
      <Footer />
    </>
  );
};

export default Home;
