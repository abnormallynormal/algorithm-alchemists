import { useMemo, useState } from "react";
import { TAGS_DB } from "../../database/tags";

export default function TagDropdown({ selected, setSelected }: any) {
  const [open, setOpen] = useState(false);

  const options = useMemo(() => {
    return ["All", ...Object.keys(TAGS_DB)];
  }, []);

  return (
    <div className="relative inline-block">
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen((prev: boolean) => !prev)}
        className="
          px-4 py-2 min-w-[160px]
          bg-surface-container-low
          text-white text-sm font-medium
          rounded-xl
          border border-white/10
          flex items-center justify-between gap-3
          hover:bg-white/5
          transition-all
        "
      >
        <span>{selected}</span>

        {/* chevron */}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* DROPDOWN MENU */}
      {open && (
        <>
          {/* overlay */}
          <div className="fixed inset-0" onClick={() => setOpen(false)} />

          <div
            className="
              absolute mt-2 w-full
              bg-[#16122B]
              border border-white/10
              rounded-xl
              shadow-2xl
              overflow-hidden
              z-50
              animate-fadeIn
            "
          >
            {options.map((option) => {
              const isActive = selected === option;

              return (
                <button
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    transition-colors
                    ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
