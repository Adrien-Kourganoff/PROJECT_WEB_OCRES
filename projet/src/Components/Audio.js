import React, { Component } from 'react'
import { render } from 'react-dom'
import AudioPlayer from 'react-playlist-player'
import './Astuce.css';
 
class Audio extends Component {
  state = {
    currentPlayList: {}
  }
 
  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'path/to/coverUrl',
        playlistName: 'playlist name',
        bandName: 'band name',
        songs: [
          {
            position: '1',
            songName: 'foo',
            songUrl: 'path/to/songUrl'
          },
          {
            position: '2',
            songName: 'bar',
            songUrl: 'path/to/songUrl'
          },
          {
            position: '3',
            songName: 'baz',
            songUrl: 'path/to/songUrl'
          }
        ],
        type: 'album'
      }
    })
 
  render() {
    const {title} =this.props;

    return (
      <div className={'Audio'}>
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
    )
  }
}
 
export default Audio;