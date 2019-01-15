import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

class VideoProjects extends Component {

  render() {

    return (
      <div>

        <div className='video-project-heading'>Projects</div>

        {
          this.props.projects.map(x => {

            return (
              <Link className={'video-projects-item-container'} to={`/videoeditor/${x.project}`} key={x.project}>
                <div>{x.project}</div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default hot(module)(VideoProjects)