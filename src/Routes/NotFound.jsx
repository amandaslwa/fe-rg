import { Button, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const nfdClick = () => {
    navigate("");
  };

  return (
    <Center w="100%" h="100vh" bg="pink.500">
      <VStack spacing={6}>
        <Heading as={"h1"} size={"2xl"}>
            Error(404) Not Found
        </Heading>
        <Button data-testid="back" variant="solid" colorscheme="pink.500" onClick={nfdClick}>
          Back
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;