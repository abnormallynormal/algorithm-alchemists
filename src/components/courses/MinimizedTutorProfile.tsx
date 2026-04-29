import type { TutorProfile } from "../../types/course";

interface ProfileProp {
  profile: TutorProfile | string;
}

export default function MinimizedTutorProfile({ profile }: ProfileProp) {
  if (typeof profile === "string") return profile;

  return (
    <>
      {profile.avatar && (
        <img
          className="w-8 h-8 rounded-full border border-white/10"
          data-alt="Close up portrait of creative director woman with vibrant studio lighting"
          src={profile.avatar}
        />
      )}

      <span className="text-xs text-slate-400">
        {profile.preferredName ?? profile.firstName + " " + profile.lastName}
      </span>
    </>
  );
}
