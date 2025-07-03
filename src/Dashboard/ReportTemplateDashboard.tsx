import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

interface Template {
  id: number;
  name: string;
}

export default function ReportTemplateDashboard() {
  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: "Daily Report" },
    { id: 2, name: "Monthly Summary" },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const handleEdit = (id: number, currentName: string) => {
    setEditId(id);
    setEditName(currentName);
  };

  const handleSave = (id: number) => {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, name: editName } : t))
    );
    setEditId(null);
    setEditName("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName("");
  };

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this template?");
    if (confirmDelete) {
      setTemplates((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <Box p={6} bg="gray.900" minH="100vh" color="white">
      <Heading mb={4} size="lg" color="white">
        📑 Report Templates
      </Heading>

      <VStack
        bg="gray.700"
        p={8}
        rounded="xl"
        spacing={6}
        w="80%"
        mx="auto"
        justify="center"
        align="center"
      >
        <TableContainer w="100%" border="1px" borderColor="gray.300" rounded="md">
          <Table variant="simple">
            <Thead bg="blue.600">
              <Tr>
                <Th color="white" fontWeight="bold">Template Name</Th>
                <Th color="white" fontWeight="bold">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {templates.length === 0 ? (
                <Tr>
                  <Td colSpan={2} textAlign="center" py={6}>
                    No templates available.
                  </Td>
                </Tr>
              ) : (
                templates.map((template) => (
                  <Tr key={template.id}>
                    <Td>
                      {editId === template.id ? (
                        <Input
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          size="sm"
                        />
                      ) : (
                        template.name
                      )}
                    </Td>
                    <Td>
                      {editId === template.id ? (
                        <HStack spacing={2}>
                          <Button
                            size="sm"
                            colorScheme="green"
                            onClick={() => handleSave(template.id)}
                          >
                            Save
                          </Button>
                          <Button size="sm" onClick={handleCancel}>
                            Cancel
                          </Button>
                        </HStack>
                      ) : (
                        <HStack spacing={2}>
                          <IconButton
                            aria-label="Edit"
                            icon={<EditIcon />}
                            size="sm"
                            colorScheme="blue"
                            onClick={() => handleEdit(template.id, template.name)}
                          />
                          <IconButton
                            aria-label="Delete"
                            icon={<DeleteIcon />}
                            size="sm"
                            colorScheme="red"
                            onClick={() => handleDelete(template.id)}
                          />
                        </HStack>
                      )}
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
}
