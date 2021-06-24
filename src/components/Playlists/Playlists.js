import React from 'react';
import './Playlists.css';
import { TrackLists } from '../TrackLists/TrackLists';

export class Playlists extends React.Component {
    render() {
        return (<div className="Playlist" >
            <input defaultValue={'New Playlist'}/>
            {/* <!-- Add a TrackList component --> */}
            <TrackLists />
            <button className="Playlist-save" > SAVE TO SPOTIFY </button> 
            </div >
                );

    }
}