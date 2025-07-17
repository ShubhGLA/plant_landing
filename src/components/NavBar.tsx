import {
  Box, Flex, HStack, IconButton, Button, useDisclosure,
  Stack, Text, Popover, PopoverTrigger, PopoverContent,
  PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,
  VStack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("Fleet View");

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Battery Bank 1", path: "/battery-bank-1" },
    { name: "BESS Control", path: "/bess-control" },
    { name: "DSM", path: "/dsm" },
    { name: "SLD", path: "/sld" },
    { name: "Calendar", path: "/calendar" },
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
        _hover={{ textDecoration: "none", bg: "gray.700", color: "white" }}
      >
        {name === "Dashboard" && <AiFillHome />}
        <Text>{name}</Text>
      </HStack>
    </RouterLink>
  );

  return (
    <Box bg="gray.800" px={4} boxShadow="md" zIndex={1100} position="relative">
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
            {/* Plant Dropdown */}
            <Popover placement="bottom-start" closeOnBlur>
              <PopoverTrigger>
                <HStack
                  px={3}
                  py={2}
                  rounded="md"
                  spacing={1}
                  fontWeight="medium"
                  color="gray.100"
                  _hover={{ bg: "gray.700", color: "white" }}
                  cursor="pointer"
                >
                  <Text>{selectedMenu}</Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent w="200px" bg="gray.800" color="white" border="none">
                <PopoverArrow bg="gray.800" />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">Select Plant</PopoverHeader>
                <PopoverBody>
                  <VStack spacing={3}>
                    <Button w="100%" colorScheme="blue" onClick={() => { setSelectedMenu("Fleet View"); window.location.href = `http://localhost:4444` }}>Fleet View</Button>
                    <Button w="100%" colorScheme="gray" onClick={() => { setSelectedMenu("Plant 1"); window.location.href = `http://localhost:4445${window.location.pathname}` }}>Plant 1</Button>
                    <Button w="100%" colorScheme="gray" onClick={() => { setSelectedMenu("Plant 2"); window.location.href = `http://localhost:4446${window.location.pathname}` }}>Plant 2</Button>
                    <Button w="100%" colorScheme="gray" onClick={() => { setSelectedMenu("Plant 3"); window.location.href = `http://localhost:4447${window.location.pathname}` }}>Plant 3</Button>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Static Links */}
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}

            {/* Report Dropdown */}
            <Popover placement="bottom-start" closeOnBlur>
              <PopoverTrigger>
                <HStack px={3} py={2} rounded="md" spacing={1} fontWeight="medium" color="gray.100" _hover={{ bg: "gray.700", color: "white" }} cursor="pointer">
                  <Text>Report</Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent w="200px" bg="gray.800" color="white" border="none">
                <PopoverArrow bg="gray.800" />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">Report</PopoverHeader>
                <PopoverBody>
                  <VStack spacing={3}>
                    <Button w="100%" colorScheme="blue" onClick={() => navigate("/report?tab=report")}>Report Management</Button>
                    <Button w="100%" colorScheme="gray" onClick={() => navigate("/report?tab=template")}>Report Template</Button>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Alarm Dropdown */}
            <Popover placement="bottom-start" closeOnBlur>
              <PopoverTrigger>
                <HStack px={3} py={2} rounded="md" spacing={1} fontWeight="medium" color="gray.100" _hover={{ bg: "gray.700", color: "white" }} cursor="pointer">
                  <Text>Alarm</Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent w="200px" bg="gray.800" color="white" border="none">
                <PopoverArrow bg="gray.800" />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">Alarms</PopoverHeader>
                <PopoverBody>
                  <VStack spacing={3}>
                    <Button w="100%" colorScheme="blue" onClick={() => navigate("/alarms/latest")}>Latest</Button>
                    <Button w="100%" colorScheme="gray" onClick={() => navigate("/alarms/history")}>History</Button>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </HStack>

        <Flex alignItems="center" gap={3}>
          <Button colorScheme="teal" size="sm">Login</Button>
        </Flex>
      </Flex>

      {/* Mobile View */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Button w="100%" variant="ghost" color="white" justifyContent="flex-start" onClick={() => { setSelectedMenu("Fleet View"); window.location.href = `http://localhost:4444` }}>Fleet View</Button>
            <Button w="100%" variant="ghost" color="white" justifyContent="flex-start" onClick={() => { setSelectedMenu("Plant 1"); window.location.href = `http://localhost:4445${window.location.pathname}`; }}>Plant 1</Button>
            <Button w="100%" variant="ghost" color="white" justifyContent="flex-start" onClick={() => { setSelectedMenu("Plant 2"); window.location.href = `http://localhost:4446${window.location.pathname}` }}>Plant 2</Button>
            <Button w="100%" variant="ghost" color="white" justifyContent="flex-start" onClick={() => { setSelectedMenu("Plant 3"); window.location.href = `http://localhost:4447${window.location.pathname}` }}>Plant 3</Button>

            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}

            <Button w="100%" onClick={() => navigate("/report?tab=report")} variant="ghost" color="white" justifyContent="flex-start">Report</Button>
            <Button w="100%" onClick={() => navigate("/report?tab=template")} variant="ghost" color="white" justifyContent="flex-start">Template</Button>
            <Button w="100%" onClick={() => navigate("/alarms/latest")} variant="ghost" color="white" justifyContent="flex-start">Alarm - Latest</Button>
            <Button w="100%" onClick={() => navigate("/alarms/history")} variant="ghost" color="white" justifyContent="flex-start">Alarm - History</Button>
            <Button w="100%" onClick={() => navigate("/calendar/work-week")} variant="ghost" color="white" justifyContent="flex-start">Calendar - Work Week</Button>
            <Button w="100%" onClick={() => navigate("/calendar/full-view")} variant="ghost" color="white" justifyContent="flex-start">Calendar - Full</Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
