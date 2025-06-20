import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, BellIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Battery Bank 1", path: "/battery-bank-1" },
  { name: "BESS Control", path: "/bess-control" },
  { name: "DSM", path: "/dsm" }, 
];

const NavLink = ({ name, path }: { name: string; path: string }) => (
  <RouterLink to={path}>
    <HStack
      px={3}
      py={2}
      rounded="md"
      spacing={1}
      fontWeight="medium"
      color="gray.100"
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
        color: "white",
      }}
    >
      {name === "Dashboard" && <AiFillHome />}
      <Text>{name}</Text>
    </HStack>
  </RouterLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" px={4} m={0} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="gray.100"
          bg="gray.700"
          _hover={{ bg: "gray.600" }}
        />
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center" gap={3}>
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            size="sm"
            color="gray.100"
            _hover={{ bg: "gray.700" }}
          />
          <Button colorScheme="teal" size="sm">
            Login
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box display={{ md: "none" }} m={0} p={0}>
          <Stack as="nav" spacing={0}>
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
