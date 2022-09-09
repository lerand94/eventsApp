import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const AllEventsPage = (props) => {
  const events = props.events;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Fina a lot of great events" />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
