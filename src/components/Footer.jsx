import { Box, Flex } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box bg='gray.300' py={4}>
            <Flex align="center" justify="center" h="50px">
                <a className="studentName">Amanda Salwa Salsabila</a>
                <p>‎ ‎ ‎ |‎ ‎ ‎ </p>
                <a className="studentId">FE4437780</a>
            </Flex>
        </Box>
    );
};

export default Footer;