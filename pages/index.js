import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/Events/EventList";
import Head from "next/head";
import NewsletterRegistration from "../components/Input/NewsletterRegistration";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Fina a lot of great events" />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
