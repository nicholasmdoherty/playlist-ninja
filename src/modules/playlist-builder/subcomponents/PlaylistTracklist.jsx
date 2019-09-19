import React, { Component } from "react";
import { isBelowSmallBreakpoint } from "../../../common/constants";
import TrackTable from "./TrackTable";
import { Pagination } from "react-bootstrap";
import autoBind from "react-autobind";

class PlaylistTracklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
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

  render() {
    let { currentPage } = this.state;
    let { tracks } = this.props;

    // Copy the tracks and splice the current page from the copy.
    let tracksCopy = tracks.concat([]);
    let currentPageTracks = tracksCopy.splice(currentPage * 8, 8);

    // Map the playlist track objects into the actual track objects for display.
    currentPageTracks = currentPageTracks.map(
      playlistTrack => playlistTrack.track
    );

    return (
      <div>
        <div className="text-center">
          <h4> Track List </h4>
          <br />
        </div>
        <TrackTable
          tracks={currentPageTracks}
          tracksInPlaylist={true}
          playlistId={this.props.playlistId}
        />
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 0}
              onClick={this.changeCurrentPageHandler(
                this.state.currentPage - 1
              )}
            />
            <Pagination.Next
              disabled={(currentPage + 1) * 8 >= tracks.length}
              onClick={this.changeCurrentPageHandler(
                this.state.currentPage + 1
              )}
            />
          </Pagination>
        </div>
      </div>
    );
  }
}

export default PlaylistTracklist;
