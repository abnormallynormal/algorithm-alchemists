export default function Signup(){
  return (
    <div className="flex justify-center h-screen px-4">
      <div className="flex flex-col self-center px-8">
        <div className="text-3xl font-bold mb-2">
          Which class are you registering for?
        </div>
        <div className="mb-6">
          Return to <a href="/">home page</a> to view more about each course
        </div>
        <ul className="list-disc px-4">
          <li className="text-lg">
            <a href="https://forms.gle/HrZR4UVcb2nkYYNK8">Junior Course</a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/DLQGuKsehh7PRQya8">
              Intermediate Course
            </a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/DLQGuKsehh7PRQya8">Senior Course</a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/DLQGuKsehh7PRQya8">
              Web Development Course
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}