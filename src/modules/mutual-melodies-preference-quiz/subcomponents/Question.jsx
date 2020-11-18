import React, { Component } from 'react'
import LikertScaleInput from './LikertScaleInput'

export default class Question extends Component {
  constructor(props) {
    super(props);


  }


  updateQuestionResult(event) {
    let value = Number(event.target.value)
    this.props.updateQuestionResult(this.props.index, value)
  }


  render() {
    return (
      <div>
        <p className="text-center"><strong>{this.props.text}</strong></p>
        <LikertScaleInput questionNumber={this.props.index} updateQuestionChoice={this.updateQuestionResult.bind(this)} />
      </div>
    )
  }
}
