import { useState } from 'react';
import EventCard from '../EventCard/EventCard';
import eventData from '../../data/eventData';
import './Events.scss';

const EventList = () => {
  return (
    <div id="events" className="event-list">
      <h2 className="event-list__title">Event Information</h2>
      {Object.entries(eventData).map(([date, events], index) => (
        <EventGroup key={index} date={date} events={events} />
      ))}
    </div>
  );
};

const EventGroup = ({ date, events }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGroup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="event-group">
      <div className="event-date" onClick={toggleGroup}>
        <h2>{date}</h2>
      </div>
      <div className={`event-group__cards ${isOpen ? 'open' : ''}`}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            dmName={event.dmName}
            dmInfo={event.dmInfo}
            campaignName={event.campaignName}
            playerCount={event.playerCount}
            campaignSetting={event.campaignSetting}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
