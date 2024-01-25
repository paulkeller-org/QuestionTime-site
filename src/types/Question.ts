import { Answer } from "./Answer";

/* 
    This represents a question within the system with a number of answers
*/

type Question = {
    id: string;
    question: string;
    answers: Answer[];
};

export type {
    Question
}