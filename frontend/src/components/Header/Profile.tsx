import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Renan Veronez</Text>
          <Text color="gray.300" fontSize="small">renanvz@outlook.com</Text>
        </Box>
      )}

      <Avatar size="md" nome="Renan Veronez" src="https://github.com/renanvzd.png" />
    </Flex>
  );
}