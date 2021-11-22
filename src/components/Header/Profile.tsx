import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Renan Veronez</Text>
        <Text color="gray.300" fontSize="small">renanvz@outlook.com</Text>
      </Box>

      <Avatar size="md" nome="Renan Veronez" src="https://github.com/renanvzd.png" />
    </Flex>
  );
}