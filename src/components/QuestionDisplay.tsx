import React, { useMemo, useState } from "react";
import { Question as QuestionType, Selection } from "@types"

type QuestionDisplayProps = {
    question: QuestionType;
    questionNumber: number;
    submitSelection: (selection: Selection) => void
}

/* 
    This component implements a simple question that a candidate can answer in a 
    test.
*/

const QuestionDisplay = (questionProps: QuestionDisplayProps) => {


    const { question, questionNumber, submitSelection } = questionProps;
    const [selectedAnswer, SetSelectedAnswer] = useState("");
    const isLockInDisabled = useMemo(() => (selectedAnswer === ""), [selectedAnswer]);
    const [selectedRadio, SetSelectedRadio] = useState<HTMLInputElement>();

    return (
        <React.Fragment>
            <div>
                Please answer question {questionNumber}: <br /> <br />
            </div>
            <div>
                {question.question}<br /><br />
            </div>
            {

                question.answers.map((answer) => (
                    <React.Fragment key={answer.id}>
                        <div>
                            <input type="radio" name={question.id} value={answer.id}
                                onChange={(event) => {
                                    SetSelectedAnswer(answer.id);
                                    // Need to capture the radio as we need to clear 
                                    // it for the next question
                                    SetSelectedRadio(event.target);
                                }} />&nbsp;&nbsp;
                            {answer.text}
                        </div>
                        <br /><br />
                    </React.Fragment>
                ))
            }
            <div>
                <button name="Lock In" disabled={isLockInDisabled}
                    onClick={() => {
                        submitSelection({ "questionId": question.id, "answerId": selectedAnswer })

                        // Clear the radio for the next question
                        if (selectedRadio !== undefined) {
                            selectedRadio.checked = false;
                        }

                    }}>Lock It In!</button>
            </div>
        </React.Fragment>
    )

}

export default QuestionDisplay;