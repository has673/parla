import React from "react";

const QuestionCard = ({ Name, Question, Answer }) => {
  return (
    <div>
      <p className="text-lg text-[var(--orange)] font-semibold">{Name}</p>
      <span className="text-[#1E232CCC] text-xs font-medium">
        11:00 Am 10-2-2024
      </span>
      <h3 className="text-base font-medium text-[#4A4948]">Question</h3>
      <span className="text-[#0000009C] text-xs font-medium">{Question}</span>
      <h3 className="text-base font-medium text-[#4A4948]">Partner Answer</h3>
      <span className="text-[#0000009C] text-xs font-medium">{Answer}</span>
    </div>
  );
};

export default QuestionCard;
