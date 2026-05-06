export default function ValueSection() {
  return (
    <section className="px-margin py-xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="glass-card rounded-xl p-lg border-l-4 border-secondary">
          <h3 className="font-h3 text-h3 text-secondary mb-base">
            The Parent's Guide
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our curriculum is designed to exceed national standards while
            maintaining the spark of curiosity. Track progress with real-time
            analytics.
          </p>
          <div className="mt-md flex items-center gap-sm text-secondary">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-label-caps text-label-caps">
              Globally Accredited Curriculum
            </span>
          </div>
        </div>
        <div className="glass-card rounded-xl p-lg border-l-4 border-primary">
          <h3 className="font-h3 text-h3 text-primary mb-base">
            The Lab Methodology
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We don't just teach syntax; we teach problem-solving and algorithmic
            thinking through hands-on creative experiments and real-world
            projects.
          </p>
          <div className="mt-md flex items-center gap-sm text-primary">
            <span className="material-symbols-outlined">biotech</span>
            <span className="font-label-caps text-label-caps">
              Experiment-Led Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
