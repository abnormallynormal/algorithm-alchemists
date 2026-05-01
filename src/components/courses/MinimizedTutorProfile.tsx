import { getTutorById } from "../../database/utils";

interface ProfileProp {
  id: string;
}

export default function MinimizedTutorProfile({ id }: ProfileProp) {
  const tutor = getTutorById(id);

  return (
    <>
      {tutor.avatar && (
        <img
          className="w-8 h-8 rounded-full border border-white/10"
          data-alt="Close up portrait of creative director woman with vibrant studio lighting"
          src={tutor.avatar}
        />
      )}
      <span className="pl-2 text-xs text-slate-400">
        {tutor.preferredName ?? tutor.firstName + " " + tutor.lastName}
      </span>
    </>
  );
}
