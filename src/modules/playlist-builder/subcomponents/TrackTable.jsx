import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

class TrackTable extends Component {
  render() {
    return (
      <Table responsive striped bordered hover>
        <thead>
          <th style={{ width: "50%" }}> Title </th>
          <th style={{ width: "30%" }}> Artist </th>
          <th style={{ width: "20%" }}> Actions </th>
        </thead>
        <tbody>
          {this.props.tracks.map(playlistTrack => {
            return (
              <tr>
                <td>{playlistTrack.track.name} </td>
                <td>
                  {playlistTrack.track.artists.map((artist, index) => {
                    return index === playlistTrack.track.artists.length - 1
                      ? artist.name
                      : artist.name + ", ";
                  })}
                </td>
                <td className="text-right">
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
