import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";
import { Fragment } from "react";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
