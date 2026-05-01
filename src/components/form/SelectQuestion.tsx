import { useState } from "react";
import type { Question } from "../../types/form/question";

export default function SelectQuestion({ question }: { question: Question }) {
  const [selected, setSelected] = useState<string[]>(
    question.choices?.filter(() => false) ?? [],
  );
  const [otherValue, setOtherValue] = useState("");

  if (question.type !== "select" || !question.choices) return null;

  const toggleChoice = (choice: string) => {
    setSelected((prev) =>
      prev.includes(choice)
        ? prev.filter((c) => c !== choice)
        : [...prev, choice],
    );
  };

  const toggleOther = () => {
    if (selected.includes("other")) {
      setSelected((prev) => prev.filter((c) => c !== "other"));
      setOtherValue("");
    } else {
      setSelected((prev) => [...prev, "other"]);
    }
  };

  return (
    <section className="space-y-md">
      <p className="font-body-lg text-on-surface">{question.question}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {question.choices.map((choice, idx) => (
          <label
            key={idx}
            className="flex items-center gap-3 bg-surface-container p-4 rounded-xl border border-white/5 hover:border-primary-container transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(choice)}
              onChange={() => toggleChoice(choice)}
              className="rounded border-white/20 bg-surface-dim text-primary-container focus:ring-primary-container"
            />
            <span className="font-body-md text-on-surface">{choice}</span>
          </label>
        ))}

        {question.other && (
          <div className="col-span-full flex flex-col gap-2 bg-surface-container p-4 rounded-xl border border-white/5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes("other")}
                onChange={toggleOther}
                className="rounded border-white/20 bg-surface-dim text-primary-container focus:ring-primary-container"
              />
              <span className="font-body-md text-on-surface">Other</span>
            </label>

            {selected.includes("other") && (
              <input
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder={question.placeholder || "Please specify"}
                className="mt-2 p-2 rounded-md bg-surface-dim border border-white/10 text-on-surface outline-none focus:ring-1 focus:ring-primary-container"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
