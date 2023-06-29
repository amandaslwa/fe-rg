import { Link } from "react-router-dom"
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";


const NavBar = () => {
    return (
      <Box bgGradient='linear(to-b, gray.300, gray.100)' py={4}>
        <Flex align="center" justify="space-between" maxW="container.lg" mx="auto" px={4}>
          <Heading as="h2" size="md">
            <Link to="/" data-testid="home-page">
              Student Portal
            </Link>
          </Heading>
          <Flex>
          <Stack direction='row' spacing={4}>
          <Button colorScheme='facebook' variant='solid'>
              <Link to="/student" data-testid="student-page">
                All Student
              </Link>
            </Button>
            <Button colorScheme='facebook' variant='solid'>
              <Link to="/add" data-testid="add-page">
                Add Student
              </Link>
            </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    );
  };

export default NavBar;
