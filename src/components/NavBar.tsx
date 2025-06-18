// src/components/Navbar.tsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Battery Bank 1", path: "/battery-bank-1" },
];

const NavLink = ({ name, path }: { name: string; path: string }) => (
  <RouterLink to={path}>
    <Text
      px={3}
      py={2}
      rounded="md"
      fontWeight="medium"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {name}
    </Text>
  </RouterLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Text fontWeight="bold" fontSize="lg">
            BESS Dashboard
          </Text>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button colorScheme="teal" size="sm">
            Login
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
