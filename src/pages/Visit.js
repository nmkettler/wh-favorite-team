import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';

const Visit = () => {
  const { team } = useGlobalContext();
  const [ showStadiumDesc, setShowStadiumDesc ] = useState(false)

  const toggleStadiumDesc = () => {
    return (
      <div>
        {team.stadium}
      </div>
    )
  }
  
  return (
    <section className="section visit-section">
      <h1 className="section-title">Visit Us</h1>
      <div onClick={() => setShowStadiumDesc(!showStadiumDesc)} className="stadium-description">
        <h2>About the Stadium</h2>
        {showStadiumDesc ? <FontAwesomeIcon className="caret-icon" icon={faAngleDown} /> : <FontAwesomeIcon className="caret-icon" icon={faAngleUp} />}
        {showStadiumDesc ? toggleStadiumDesc() : ''}
      </div>
      <hr></hr>
      <div className="social-media">
        <div className="rounded-social-buttons">
          <a className="social-button facebook" href={`https://${team.facebook}`}><FontAwesomeIcon icon={faFacebook} /></a>
          <a className="social-button twitter" href={`https://${team.twitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="social-button youtube" href={`https://${team.youtube}`}><FontAwesomeIcon icon={faYoutube} /></a>
          <a className="social-button instagram" href={`https://${team.instagram}`}><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </section>
  );
};

export default Visit;
