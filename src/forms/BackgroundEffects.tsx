export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="w-[800px] h-[800px] bg-secondary-container/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]" />
    </div>
  );
}
