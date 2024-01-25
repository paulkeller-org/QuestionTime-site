import React, { useCallback, useState } from "react";
import {
    Question,
    Selection
} from "@types";
import { QuestionDisplay } from "@components";

type FullTestProps = {
    clientName: string;
    questions: Question[];
    submitSelections: (selections: Selection[]) => void
};

/* This is the entire test component that will rotate through the 
   questions and give the client the full test */

const FullTest = (fullTestProps: FullTestProps) => {

    const { clientName, questions, submitSelections } = fullTestProps;
    const [selections] = useState<Selection[]>([]);
    const [introduction, ShowIntroduction] = useState(true);
    const [testStarted, SetTestStarted] = useState(false);
    const [endOfTest, SetEndOfTest] = useState(false);
    const [questionNumber, SetQuestionNumber] = useState(1);
    const [currentQuestion, SetCurrentQuestion] = useState<Question>(questions[0]);

    const AddAnswer = useCallback((selection: Selection) => {
        selections.push(selection);
        if (currentQuestion !== questions[questions.length - 1]) {
            // We can do this because question number is always
            // one ahead.
            SetCurrentQuestion(questions[questionNumber]);
            SetQuestionNumber((questionNumber + 1));
        } else {
            SetTestStarted(false);
            SetEndOfTest(true);
        }
    }, [questionNumber]);
    return (
        <React.Fragment>
            {introduction && <div>
                <div>Welcome {clientName}, to your test.</div><br />
                <div>In the next section you will be presented with 10 multiple choice questions which you must answer in under 2 minutes.</div><br />
                <div>Once answered you will be unable to go back to the previous question.</div><br />
                <div>If you fail to answer within the time limit the question will be marked as incorrect.</div><br />
                <div>The results of your test will be displayed at the end.</div><br />
                <div>
                    <button onClick={() => {
                        ShowIntroduction(false);
                        SetTestStarted(true);
                    }} name="Ready">Are You Ready To Rock n Roll?</button>
                </div>
            </div>}
            {testStarted && <QuestionDisplay question={currentQuestion} questionNumber={questionNumber} submitSelection={AddAnswer} />}
            {endOfTest && <div>
                <div>{clientName}, this is the end of your test.</div><br />
                <div><button name="GetResults" onClick={() => submitSelections(selections)}>Get Your Results!</button></div>
            </div>}
        </React.Fragment>
    )
};

export default FullTest