import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

class TrackTable extends Component {
  render() {
    return (
      <Table responsive striped hover bordered size="sm" className="text-left">
        <thead></thead>
        <tbody>
          {this.props.tracks.map(track => {
            return (
              <tr>
                <td className="word-wrap">
                  <p className="track-table-title">{track.name}</p>
                  <p className="track-table-font ">
                    {track.artists.map((artist, index) => {
                      return index === track.artists.length - 1
                        ? artist.name
                        : artist.name + ", ";
                    })}
                  </p>
                </td>
                <td className="text-right word-wrap">
                  {this.props.tracksInPlaylist ? (
                    <Button variant="danger">-</Button>
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
