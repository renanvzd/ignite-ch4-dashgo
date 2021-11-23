import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from "react-icons/ri";
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,   // por padrão não estão visíveis
    lg: true,       // quando passar do tamanho "large", vai passar para true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex >
  );
}