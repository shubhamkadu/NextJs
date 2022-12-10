import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  console.log(id);

  const humanreadabledate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const Address = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <div>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.summary}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanreadabledate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <adress>{Address}</adress>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default EventItem;
