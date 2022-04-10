import React, { Component } from "react";
import { isBelowSmallBreakpoint } from "../../../../common/constants";
import TrackTable from "./TrackTable";
import { Pagination } from "react-bootstrap";
import autoBind from "react-autobind";
import FeatherIcon from 'feather-icons-react'

import './Tracklist.css'

class PlaylistTracklist extends Component {
  numberPerPage = 8;

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      numPages: Math.ceil(props.tracks.length / this.numberPerPage)
    };

    autoBind(this);
  }

  /**
   * Returns an event handler that changes the current page to the
   * page with the given index.
   * @param {number} newPageIndex The index of the page to change to.
   */
  changeCurrentPageHandler(newPageIndex) {
    return () => {
      this.setState({ currentPage: newPageIndex });
    };
  }

  renderPaginationButton = () => {
    return (
      <div className='tracklist-pagination'>
        <FeatherIcon
          width={16}
          height={16}
          icon="chevron-left"
          onClick={this.state.currentPage === 1 ? null : this.changeCurrentPageHandler(this.state.currentPage - 1)}
          className={`tracklist-pagination-arrow ${this.state.currentPage === 1 ? 'disabled' : ''}`}
        />
        Page {this.state.currentPage} / {this.state.numPages}
        <FeatherIcon
          width={16}
          height={16}
          icon="chevron-right"
          onClick={this.state.currentPage === this.state.numPages ? null : this.changeCurrentPageHandler(this.state.currentPage + 1)}
          className={`tracklist-pagination-arrow ${this.state.currentPage === this.state.numPages ? 'disabled' : ''}`}
        />
      </div>
    )
  }

  renderSearchBar = () => {
    return (
      <div className='tracklist-search'>
        <FeatherIcon
          width={16}
          height={16}
          icon="search"
        />
        Search
      </div>
    )
  }

  renderSortDropdown = () => {
    return (
      <div className='tracklist-sort'>
        Sort
        <FeatherIcon
          width={16}
          height={16}
          icon="chevron-down"
        />
      </div>
    )
  }


  render() {
    let { currentPage } = this.state;
    let { tracks } = this.props;

    // Copy the tracks and splice the current page from the copy.
    let tracksCopy = tracks.concat([]);

    const startNumber = (currentPage - 1) * this.numberPerPage
    const playlistsToShow = tracksCopy.slice(startNumber, startNumber + this.numberPerPage).map(playlistTrack => playlistTrack.track);

    return (
      <div className="tracklist-container">
        <span className='tracklist-header'>Track List</span>
        <div className="tracklist-button-row">
          {this.renderPaginationButton()}
          {/*this.renderSearchBar()}
           {this.renderSortDropdown()*/}
        </div>
        <div className="card-style tracklist-card">
          <TrackTable
            tracks={playlistsToShow}
            tracksInPlaylist={true}
            playlistId={this.props.playlistId}
          />
        </div>
      </div>
    );
  }
}

export default PlaylistTracklist;
