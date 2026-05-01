interface FormHeaderProp {
  header: string;
  description: string;
}

export default function FormHeader({ header, description }: FormHeaderProp) {
  return (
    <div className="mb-12 text-center">
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">
        Algorithm Alchemists
      </span>
      <h1 className="font-h1 text-h1 text-white mb-4">
        {header}
        {/* <span className="bg-gradient-to-r from-secondary to-primary-container bg-clip-text text-transparent">
          Neural Alchemy 101
        </span> */}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
