import React from "react";
import QuestionItem from "./QuestionItem.js";

function QuestionList({ questions, setQuestions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} setQuestions={setQuestions} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
