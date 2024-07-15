import './EventCard.scss';
import CallToAction from '../CTA/CallToAction';
import { useState } from 'react';
const EventCard = ({
  dmName,
  dmInfo,
  campaignName,
  playerCount,
  campaignSetting,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="ribbon" onClick={toggleCard}>
        <h3>{campaignName}</h3>
      </div>
      <div className={`card-content ${isOpen ? 'open' : ''}`}>
        <div className="dm-info">
          <h4>DM: {dmName}</h4>
          <p>{dmInfo}</p>
        </div>
        <div className="campaign-info">
          <p>
            <strong>Players:</strong> {playerCount}
          </p>
          <p>{campaignSetting}</p>
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
