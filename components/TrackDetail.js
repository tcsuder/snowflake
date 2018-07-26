// @flow

import { tracks, milestones, categoryColorScale } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class TrackDetail extends React.Component<Props> {

  render() {
    const track = tracks[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    // TODO: This is just a long line of values that are trying to make these milestone numbes not suck. hacky... fix
    const currentMilestone = track.milestones[Math.floor(currentMilestoneId / 2)]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            min-width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
          }
        `}</style>
        <h3 style={{margin: '0', padding: '15px', paddingLeft:'0', fontSize: '2rem'}}>{track.longDisplayName}</h3>
        <p className="track-description">{track.description}</p>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <h3>Want to improve in this area? Check out these great resources:</h3>
            <h4>Articles:</h4>
            <ul>
              {currentMilestone.articles.map((signal, i) => (
                <li key={i}>{signal}</li>
              ))}
            </ul>
            <h4>Books:</h4>
            <ul>
              {currentMilestone.books.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
            <h4>Videos:</h4>
            <ul>
              {currentMilestone.videos.map((signal, i) => (
                <li key={i}>{signal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackDetail
