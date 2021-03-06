import React from "react";
import SpotifyTrackList from '../SpotifyTrackList'

class SpotifyResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <SpotifyTrackList
          onAdd={this.props.onAdd}
          tracks={this.props.searchResults}
        />
      </div>
    );
  }
}

export default SpotifyResults;
