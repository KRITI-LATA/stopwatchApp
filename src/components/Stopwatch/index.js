// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSecond: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickResetStopWatch = () => {
    clearInterval(this.timeInterval)

    this.setState({isTimerRunning: false, timeElapsedInSecond: 0})
  }

  onClickStopStopWatch = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSecond: prevState.timeElapsedInSecond + 1,
    }))
  }

  onClickStartStopWatch = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSecond} = this.state
    const seconds = Math.floor(timeElapsedInSecond % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSecond} = this.state
    const minutes = Math.floor(timeElapsedInSecond / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }

    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="timer-container">
            <img
              className="stopwatch-icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-text">Timer</p>
          </div>
          <div className="timer-status">
            <h1 className="timer-text">{time}</h1>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="start-btn"
              disabled={isTimerRunning}
              onClick={this.onClickStartStopWatch}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.onClickStopStopWatch}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onClickResetStopWatch}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
