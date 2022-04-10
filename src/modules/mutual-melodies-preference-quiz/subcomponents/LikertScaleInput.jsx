import React, { Component } from 'react'
import "./likert.css"

export default class LikertScaleInput extends Component {
  render() {
    return (
      <div>
        <ul className='likert'>
          <li>
            <input type="radio" name={`question-${this.props.questionNumber}--likert`} value="0" onInput={this.props.updateQuestionChoice}/>
            <label>Strongly disagree</label>
          </li>
          <li>
            <input type="radio" name={`question-${this.props.questionNumber}--likert`} value="1" onInput={this.props.updateQuestionChoice}/>
          </li>
          <li>
            <input type="radio" name={`question-${this.props.questionNumber}--likert`} value="2" onInput={this.props.updateQuestionChoice}/>
            <label>Neutral</label>
          </li>
          <li>
            <input type="radio" name={`question-${this.props.questionNumber}--likert`} value="3" onInput={this.props.updateQuestionChoice}/>
          </li>
          <li>
            <input type="radio" name={`question-${this.props.questionNumber}--likert`} value="4" onInput={this.props.updateQuestionChoice} />
            <label>Strongly agree</label>
          </li>
        </ul>
      </div>
    )
  }
}
