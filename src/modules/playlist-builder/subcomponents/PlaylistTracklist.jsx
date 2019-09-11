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

  async componentDidMount() {
    let { tracks } = this.props;

    let tracksCopy = tracks.concat([]);
    let notAllTracksLoaded = true;
    let pageIndex = 0;

    while (notAllTracksLoaded) {
      let page = tracksCopy.splice(0, 8);

      if (page.length === 0) {
        notAllTracksLoaded = false;
      } else {
        await this.setState({
          trackPages: { ...this.state.trackPages, [pageIndex]: page }
        });
        pageIndex += 1;
      }
    }
  }

  changeCurrentPageHandler(newPageIndex) {
    return () => {
      this.setState({ currentPage: newPageIndex });
    };
  }

  render() {
    let { trackPages, currentPage } = this.state;

    return (
      <div>
        <TrackTable
          tracks={trackPages[currentPage] || []}
          tracksInPlaylist={true}
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
