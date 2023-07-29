import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onClickBtn = event => {
    const inputText = event.target.value
    const letterCount = inputText.replace(/\s/g, '').length // Count letters excluding whitespaces
    this.setState({count: letterCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="content">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="sub-title" htmlFor="labelElement">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input"
              id="labelElement"
              onChange={this.onClickBtn}
            />
            <br />
            <p className="btn">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
