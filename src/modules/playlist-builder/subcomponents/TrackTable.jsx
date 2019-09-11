import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

class TrackTable extends Component {
  render() {
    return (
      <Table responsive striped hover size="sm">
        <thead></thead>
        <tbody>
          {this.props.tracks.map(playlistTrack => {
            return (
              <tr>
                <td className="word-wrap">
                  <p className="track-table-title">
                    {playlistTrack.track.name}
                  </p>
                  <p className="track-table-font ">
                    {playlistTrack.track.artists.map((artist, index) => {
                      return index === playlistTrack.track.artists.length - 1
                        ? artist.name
                        : artist.name + ", ";
                    })}
                  </p>
                </td>
                <td className="text-right word-wrap">
                  {this.props.tracksInPlaylist ? (
                    <Button variant="danger" size="sm">
                      -
                    </Button>
                  ) : (
                    <Button>+</Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TrackTable;
