import React, { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";

const url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=man_city";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState({});

  const fetchTeam = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);

      const { teams } = data;
      if (teams) {
        const teamInfo = teams.map((item) => {
          const {
            strTeam,
            strDescriptionEN,
            strStadiumDescription,
            strTeamLogo,
            strTeamBanner,
            strTeamBadge,
            strTeamFanart3,
            strTwitter,
            strYoutube,
            strFacebook,
            strInstagram
          } = item;
          return {
            club: strTeam,
            about: strDescriptionEN,
            stadium: strStadiumDescription,
            logo: strTeamLogo,
            banner: strTeamBanner,
            badge: strTeamBadge,
            bg: strTeamFanart3,
            facebook: strFacebook,
            instagram: strInstagram,
            twitter: strTwitter,
            youtube: strYoutube
          };
        });
        setTeam(teamInfo[0])
      } else {
        setTeam({})
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return (
    <AppContext.Provider value={{ loading, team }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
