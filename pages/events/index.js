import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
