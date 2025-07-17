import { useState, useRef, useMemo } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Calendar as BigCalendar, dateFnsLocalizer, type View } from "react-big-calendar"
import {
  format,
  parse,
  startOfWeek,
  getDay,
  isSameWeek,
} from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [highlightedDate, setHighlightedDate] = useState<Date | null>(new Date());
  const [view, setView] = useState<View>("week");
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const calendarRef = useRef<any>(null);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStart, setNewStart] = useState<Date | null>(new Date());
  const [newEnd, setNewEnd] = useState<Date | null>(new Date());

  const handleSelectEvent = (event: any) => {
    setSelectedEvent(event);
    onOpen();
  };

  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedDate(start);
    setHighlightedDate(start);
  };

  const handleMiniCalendarChange = (newDate: Date) => {
    setDate(newDate);
    setSelectedDate(newDate);
    setHighlightedDate(newDate);
    calendarRef.current?.navigate?.(newDate);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
    setSelectedDate(newDate);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const handleAddEvent = () => {
    if (!newTitle || !newStart || !newEnd) return;
    const newEvent = {
      title: newTitle,
      start: newStart,
      end: newEnd,
      description: newDescription,
    };
    setEvents([...events, newEvent]);
    onAddClose();
    setNewTitle("");
    setNewDescription("");
    setNewStart(new Date());
    setNewEnd(new Date());
  };

  const sidebarEvents = useMemo(() => {
    if (view === "week") {
      return events.filter((event) =>
        isSameWeek(event.start, date, { weekStartsOn: 1 })
      );
    } else {
      return events.filter(
        (event) =>
          new Date(event.start).toDateString() ===
          new Date(selectedDate).toDateString()
      );
    }
  }, [events, view, date, selectedDate]);

  return (
    <Flex bg="gray.800" minH="100vh" color="white">
      {/* Left Sidebar */}
      <Box w="250px" bg="gray.900" p={4} borderRight="1px solid #4A5568">
        <Text fontSize="lg" mb={4} fontWeight="bold">
          Calendar
        </Text>

        <Box
          bg="gray.700"
          borderRadius="md"
          p={2}
          mb={6}
          display="flex"
          justifyContent="center"
          sx={{
            ".react-datepicker": {
              background: "transparent",
              border: "none",
              boxShadow: "none",
            },
            ".react-datepicker__month-container": {
              background: "transparent",
            },
            ".react-datepicker__header": {
              background: "transparent",
              border: "none",
              color: "white",
            },
            ".react-datepicker__current-month": {
              color: "white",
            },
            ".react-datepicker__day-name, .react-datepicker__day": {
              color: "white",
            },
            ".react-datepicker__day--selected": {
              background: "#3182CE",
              color: "white",
            },
          }}
        >
          <DatePicker selected={date} onChange={() => handleMiniCalendarChange} inline />
        </Box>

        <Text fontSize="sm" color="gray.400">My calendars</Text>
        <Text fontSize="sm" color="gray.200" mt={2}>Calendar</Text>
        <Button mt={4} size="sm" variant="link" colorScheme="blue">
          Show all
        </Button>
      </Box>

      {/* Main Calendar */}
      <Box flex="1" p={6}>
        <HStack justify="space-between" mb={4}>
          <Text fontSize="md" fontWeight="semibold">
            {format(date, "dd MMMM yyyy")}
          </Text>
          <Button size="sm" colorScheme="blue.200" onClick={onAddOpen}>
            New event
          </Button>
        </HStack>

        <Box bg="black" borderRadius="md" p={4} color="white" minH="600px">
          <BigCalendar
            selectable
            ref={calendarRef}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            date={date}
            onNavigate={handleNavigate}
            onView={handleViewChange}
            view={view}
            // defaultView=""
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            dayPropGetter={(dayDate : any) => {
              if (
                highlightedDate &&
                dayDate.toDateString() === highlightedDate.toDateString()
              ) {
                return {
                  style: {
                    backgroundColor: "#90CDF4", // Light Blue (Chakra blue.200)
                    color: "black",
                    borderRadius: "6px",
                  },
                };
              }
              return {};
            }}
          />
        </Box>
      </Box>

      {/* Right Sidebar */}
      {(view === "week" || view === "month" || view === "day") && (
        <Box w="300px" bg="gray.900" p={4} borderLeft="1px solid #4A5568">
          <Text fontSize="lg" mb={4} fontWeight="bold">
            {view === "week"
              ? "Events This Week"
              : "Events on " + format(selectedDate, "dd MMM yyyy")}
          </Text>
          {sidebarEvents.length === 0 ? (
            <Text fontSize="sm" color="gray.400">
              No events to show.
            </Text>
          ) : (
            sidebarEvents.map((ev, i) => (
              <Box key={i} mb={4} p={3} borderRadius="md" bg="gray.700">
                <Text fontWeight="bold" mb={1}>{ev.title}</Text>
                <Text fontSize="sm" mb={1}>
                  {format(ev.start, "dd MMM, hh:mm a")} – {format(ev.end, "hh:mm a")}
                </Text>
                <Text fontSize="sm" color="gray.300">
                  {ev.description || "No description"}
                </Text>
              </Box>
            ))
          )}
        </Box>
      )}

      {/* View Event Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>{selectedEvent?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm" mb={2}>Start: {selectedEvent?.start?.toLocaleString()}</Text>
            <Text fontSize="sm" mb={2}>End: {selectedEvent?.end?.toLocaleString()}</Text>
            <Text fontSize="sm">Description: {selectedEvent?.description || "No description"}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Add Event Modal */}
      <Modal isOpen={isAddOpen} onClose={onAddClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} mt={2}>
              <Input
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <Input
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <Box>
                <Text fontSize="sm" mb={1}>Start Date</Text>
                <DatePicker
                  selected={newStart}
                  onChange={(date) => setNewStart(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </Box>
              <Box>
                <Text fontSize="sm" mb={1}>End Date</Text>
                <DatePicker
                  selected={newEnd}
                  onChange={(date) => setNewEnd(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </Box>
              <Button colorScheme="blue.200" onClick={handleAddEvent}>
                Save Event
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CalendarPage;
