import about from "../assets/about.png";
import mission from "../assets/mission.png";
import approach from "../assets/IMG_20250918_153304.jpg"
export default function About() {
  return (
    <div className="grid gap-8 pt-24 min-h-screen">
      <div className="grid grid-cols-2 gap-12 px-24 items-center mb-4">
        <img
          src={about}
          alt="About Us"
          className="rounded-xl border-gray-500 border  h-96 w-full object-cover "
        />
        <div>
          <div className="text-2xl font-semibold mb-4">About Us</div>
          <div>
            Algorithm Alchemists is a non-profit organization (registered under
            Hack Club) that teaches coding to elementary and high school
            students through online classes. We believe that learning to code
            should be fun and engaging. Our passionate high school student
            teachers provide the right amount of homework, so students can
            master Python and move on to more advanced programming languages and
            concepts.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 px-24 items-center mb-4">
        <div>
          <div className="text-2xl font-semibold mb-4 ">Our Mission</div>
          <div>
            At Algorithm Alchemists, our mission is to inspire and empower the
            next generation of coders. We believe that coding is an essential
            skill that can unlock limitless opportunities for students.
          </div>
        </div>
        <img
          src={mission}
          alt="Our Mission"
          className="rounded-xl border border-gray-500  h-96 w-full object-cover  "
        />
      </div>
      <div className="grid grid-cols-2 gap-12 px-24 items-center">
        <img
          src={approach}
          alt="Our Approach"
          className="rounded-xl border border-gray-500 h-96 w-full object-cover "
        />
        <div>
          <div className="text-2xl font-semibold mb-4">Our Approach</div>
          <div>
            We take a hands-on approach to learning, with interactive lessons
            and coding challenges that keep students engaged and motivated.
          </div>
        </div>
      </div>
    </div>
  );
}
