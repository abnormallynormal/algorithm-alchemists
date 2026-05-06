import { useEffect, useState } from "react";
import type { Question } from "../../types/form/question";
import type { SelectQuestionResponseType } from "../../pages/CourseFormPage";

interface SelectQuestionProp {
  question: Question;
  default_value: SelectQuestionResponseType;
  setAnswers: React.Dispatch<
    React.SetStateAction<Record<string, SelectQuestionResponseType>>
  >;
}

export default function SelectQuestion({
  question,
  default_value,
  setAnswers,
}: SelectQuestionProp) {
  if (question.type !== "select" || !question.choices) return null;

  const [selected, setSelected] = useState<string[]>(
    default_value?.selected ?? [],
  );

  const [otherValue, setOtherValue] = useState<string>(
    default_value?.other ?? "",
  );

  // ✅ keep local state in sync if default changes
  useEffect(() => {
    setSelected(default_value?.selected ?? []);
    setOtherValue(default_value?.other ?? "");
  }, [default_value]);

  // ✅ sync to global state
  const syncState = (updatedSelected: string[], other?: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question.question]: {
        selected: updatedSelected,
        other: other ?? null,
      },
    }));
  };

  // -----------------------
  // TOGGLE CHOICE
  // -----------------------
  const toggleChoice = (choice: string) => {
    setSelected((prev) => {
      const updated = prev.includes(choice)
        ? prev.filter((c) => c !== choice)
        : [...prev, choice];

      syncState(updated, otherValue);
      return updated;
    });
  };

  // -----------------------
  // OTHER VALUE
  // -----------------------
  const handleOtherValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setOtherValue(val);

    const updated = selected.includes("other")
      ? selected
      : [...selected, "other"];

    setSelected(updated);
    syncState(updated, val);
  };

  // -----------------------
  // TOGGLE OTHER
  // -----------------------
  const toggleOther = () => {
    setSelected((prev) => {
      let updated: string[];

      if (prev.includes("other")) {
        updated = prev.filter((c) => c !== "other");
        setOtherValue("");
        syncState(updated, "");
      } else {
        updated = [...prev, "other"];
        syncState(updated, otherValue);
      }

      return updated;
    });
  };

  // -----------------------
  // UI
  // -----------------------
  return (
    <section className="space-y-md">
      <p className="font-body-lg text-on-surface">
        {question.question} {question.optional ? " *" : ""}
      </p>

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
                onChange={handleOtherValue}
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
