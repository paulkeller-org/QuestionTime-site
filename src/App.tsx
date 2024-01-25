import React from "react"
import "./App.css"
import questionData from "./data/questions.json";       // Temporary until we can get the api up

import { Login, RegistrationForm, FullTest } from "@components";
// import { Question } from "@types";

function App() {
  return (
    <React.Fragment>
      {/* <Login onLogin={(loginName: string, password: string) => console.log(`${loginName} - ${password}`)} />
      <RegistrationForm onRegistration={(registionInformation) => console.log(`${registionInformation}`)} /> */}
      {/* <QuestionDisplay question={questionData.questions[0]} questionNumber={1} submitSelection={(selection) => console.log(selection)} /> */}
      <FullTest clientName="Joe Bloggs" questions={questionData.questions}
        submitSelections={(selections) => console.log(selections)} />
    </React.Fragment>
  )
}

export default App
