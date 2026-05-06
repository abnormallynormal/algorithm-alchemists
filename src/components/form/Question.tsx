import { useState } from "react";
import type { Question } from "../../types/form/question";

interface QuestionBoxProp {
  question: Question;
  default_value: string;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export default function QuestionBox({
  question,
  default_value,
  setAnswers,
}: QuestionBoxProp) {
  const [value, setValue] = useState(default_value);

  const charLimit = question.characterLimit;
  const wordLimit = question.wordLimit;

  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = e.target.value;

    // Enforce character limit
    if (charLimit && input.length > charLimit) {
      input = input.slice(0, charLimit);
    }

    // Enforce word limit
    if (wordLimit) {
      const words = input.trim().split(/\s+/);
      if (words.length > wordLimit) {
        input = words.slice(0, wordLimit).join(" ");
      }
    }

    setValue(input);
    setAnswers((prev) => ({
      ...prev,
      [question.question]: e.target.value,
    }));
  };

  return (
    <section className="space-y-md">
      <div className="space-y-2">
        <label className="block">
          <span className="text-label-caps text-on-surface-variant mb-2 block">
            {question.question} {question.optional ? " *" : ""}
          </span>

          <textarea
            value={value}
            onChange={handleChange}
            className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder-slate-500 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
            placeholder={question.placeholder ?? "Enter text here..."}
            rows={question.lines}
          />
        </label>

        {/* Limits display */}
        <div className="flex justify-between text-xs text-on-surface-variant">
          {wordLimit && (
            <span>
              {wordCount} / {wordLimit} words
            </span>
          )}
          {charLimit && (
            <span>
              {value.length} / {charLimit} characters
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
