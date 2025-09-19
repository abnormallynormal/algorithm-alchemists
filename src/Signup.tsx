export default function Signup(){
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col self-center ">
        <div className="text-3xl font-bold mb-2">
          Which class are you registering for?
        </div>
        <div className="mb-6">
          Return to <a href="/">home page</a> to view more about each course
        </div>
        <ul className="list-disc px-4">
          <li className="text-lg">
            <a href="https://forms.gle/2ArYqzRxoEvCuH1v8">Junior Course</a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/aTN1LUUhjsZjFKGT8">
              Intermediate Course
            </a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/aTN1LUUhjsZjFKGT8">Senior Course</a>
          </li>
          <li className="text-lg">
            <a href="https://forms.gle/aTN1LUUhjsZjFKGT8">
              Web Development Course
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}