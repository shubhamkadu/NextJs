import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-Summary";
// import EventDetailPage from "../components/event-detail/event-DetailPage";
import EventLogistics from "../../components/event-detail/event-Logistics";
import EventContent from "../../components/event-detail/event-Content";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(eventId);
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
