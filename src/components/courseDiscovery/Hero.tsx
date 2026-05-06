export default function Hero() {
  return (
    <section className="relative w-full py-xl px-margin flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block px-md py-xs rounded-full bg-secondary/15 text-secondary font-label-caps text-label-caps mb-md tracking-widest uppercase">
          The Laboratory Awaits
        </span>

        <h1 className="font-h1 text-h1 mb-md bg-gradient-to-r from-on-surface to-secondary bg-clip-text text-transparent">
          Welcome to the Lab
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Transform abstract logic into digital mastery.
        </p>
      </div>
    </section>
  );
}
