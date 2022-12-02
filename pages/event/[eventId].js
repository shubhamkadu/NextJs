import React, { Fragment } from "react";
import { useRouter } from "next-router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../components/EventSummary";
import EventDetailPage from "../components/EventDetailPage";
import EventLogistics from "../components/EventLogistics";
import EventContent from "../components/EventContent";


function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }

  return <Fragment>
    <EventSummary/>
    <EventLogistics/>
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </Fragment>
}

export default EventDetailPage;
