import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deepCamelCaseKeys, isBelowSmallBreakpoint, setCookie } from "../../constants";
import FeatherIcon from 'feather-icons-react'

import "./Navbar.css";
import { setUserId } from "../../../redux/actions/apiActions";


const Navbar = ({ api, setUserIdInRedux }) => {

  const [profileData, setProfileData] = useState({})
  const [profileError, setProfileError] = useState({})

  useEffect(() => {
    api.spotifyApi.getMe().then(
      data => {
        let profile = deepCamelCaseKeys(data.body)
        setProfileData(profile);
        setUserIdInRedux(profile.id)
      },
      error => {
        setProfileError(deepCamelCaseKeys(error));
      }
    );
  }, [api.spotifyApi, setUserIdInRedux])

  if (!profileData.images || !profileData.displayName) {
    return null;
  }
  
  if (isBelowSmallBreakpoint()) {
    return (
      <div>
        <div className="main-app-nav mobile">
          <div className="mobile-nav-first-row">
            <span className="nav-app-name">playlistninja.app</span>
    
            <div className="nav-right-container">
              <div className="nav-right-logged-in-user">
                <img className="spotify-account-pic" src={profileData.images.length > 0 ? profileData.images[0].url : null} />
                <span className='nav-right-username'>{profileData.displayName}</span>
                <FeatherIcon className="logout-button" icon='x' width={16} height={16}  onClick={() => {
                  setCookie("spotifyAccessToken", "", 0);
                  document.location.reload();
                }}/>
              </div>
    
            </div>
          </div>
          <div className="mobile-nav-second-row">
            <span className="navlink-container">
              <NavLink to="/playlist-builder" activeClassName="nav-link-active">
                <span className="nav-right-link">
                  Edit Playlist
                </span>
              </NavLink>
              <NavLink to="/profile" activeClassName="nav-link-active" isActive={() => { return (document.location.hash === "#/" || document.location.hash === "#/profile") }}>
                <span className="nav-right-link">
                  My Profile
                </span>
              </NavLink>
            </span>
          </div>
        </div>
        
        <div className="main-app-nav-ghost" />
      </div>
    )
  }

  return (
    <div>
      <div className="main-app-nav">
        <span className="nav-app-name">playlistninja.app</span>

        <div className="nav-right-container">
          <span className="navlink-container">
            <NavLink to="/playlist-builder" activeClassName="nav-link-active">
              <span className="nav-right-link">
                Edit Playlist
              </span>
            </NavLink>
            <NavLink to="/profile" activeClassName="nav-link-active">
              <span className="nav-right-link">
                My Profile
              </span>
            </NavLink>
          </span>
          <div className="nav-right-logged-in-user">
            <img className="spotify-account-pic" src={profileData.images.length > 0 ? profileData.images[0].url : null} />
            <span className='nav-right-username'>{profileData.displayName}</span>
            <FeatherIcon className="logout-button" icon='x' width={16} height={16}  onClick={() => {
              setCookie("spotifyAccessToken", "", 0);
              document.location.reload();
            }}/>
          </div>

        </div>

      </div>
      <div className="main-app-nav-ghost" />
    </div>
  )
}

let mapStateToProps = state => {
  return {
    api: state.api
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setUserIdInRedux: (userId) => {
      dispatch(setUserId(userId))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
