// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super() 
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          } 
    }

    handleClick = () => {
        this.setState( previousState => {
            return {
                settings: {...this.state.settings, 
                bitrate: previousState.settings.bitrate + 4,
                }
            }
        })
    }
    handleResolutionClick = () => {
        this.setState( previousState => {
            return {
                settings: {...this.state.settings, 
                video: {resolution: '720p'}
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick= {this.handleClick} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick= {this.handleResolutionClick} className="resolution">{this.state.settings.video.resolution}</button>

            </div>
        )
    }
}