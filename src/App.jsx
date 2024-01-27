import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import questions from "./questions/quizQuestion.json";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currQues: 0,
    };
  }
  
  render() {
    return (
      <div className="app">
        <Quiz
          state={this}
          question={questions[this.state.currQues]}
          index={this.state.currQues}
          length={questions.length}
        />
      </div>
    );
  }
}