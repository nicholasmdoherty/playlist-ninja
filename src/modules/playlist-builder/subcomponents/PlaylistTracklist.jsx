import React, { Component } from "react";
import { isBelowSmallBreakpoint } from "../../../common/constants";
import TrackTable from "./TrackTable";
import { Pagination } from "react-bootstrap";
import autoBind from "react-autobind";

class PlaylistTracklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackPages: {},
      currentPage: 0
    };

    autoBind(this);
  }

  /**
   * Loads the tracks into state on mount.
   */
  componentDidMount() {
    this.loadTracks();
  }

  /**
   * Loads the tracks in this playlist into trackPages in the state, where
   * the pages are indexed with a maximum of 8 songs per page.
   */
  async loadTracks() {
    let { tracks } = this.props;

    let tracksCopy = tracks.concat([]);
    let notAllTracksLoaded = true;
    let pageIndex = 0;

    while (notAllTracksLoaded) {
      let playlistTrackObjectpage = tracksCopy.splice(0, 8);

      let trackObjectPage = playlistTrackObjectpage.map(playlistTrack => {
        return playlistTrack.track;
      });

      if (trackObjectPage.length === 0) {
        notAllTracksLoaded = false;
      } else {
        await this.setState({
          trackPages: { ...this.state.trackPages, [pageIndex]: trackObjectPage }
        });
        pageIndex += 1;
      }
    }
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

  /**
   * Method to refresh the tracklist.
   *
   * Since we load the tracks into the state from props, we have to
   * reload the tracks into state.
   *
   * TODO: Use redux to load playlists instead.
   */
  refreshTracklist() {
    this.loadTracks();
  }

  render() {
    let { trackPages, currentPage } = this.state;

    return (
      <div>
        <div className="text-center">
          <h4> Track List </h4>
          <br />
        </div>
        <TrackTable
          tracks={trackPages[currentPage] || []}
          tracksInPlaylist={true}
          playlistId={this.props.playlistId}
          refreshTracks={this.refreshTracklist}
        />
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev
              disabled={this.state.currentPage === 0}
              onClick={this.changeCurrentPageHandler(
                this.state.currentPage - 1
              )}
            />
            <Pagination.Next
              disabled={
                this.state.currentPage ===
                Object.keys(this.state.trackPages).length - 1
              }
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
