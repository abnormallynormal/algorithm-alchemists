export default function PathCard({
  title,
  age,
  icon,
  iconColor,
  image,
  description,
  buttonClass,
}) {
  return (
    <div className="glass-card rounded-xl p-md flex flex-col alchemy-gradient-border group transition-all duration-500 hover:translate-y-[-8px]">
      <div className="h-48 mb-md rounded-lg overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
      </div>

      <div className="flex items-center gap-xs mb-sm">
        <span
          className={`material-symbols-outlined ${iconColor}`}
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {icon}
        </span>
        <span className={`${iconColor} font-label-caps text-label-caps`}>
          {age}
        </span>
      </div>

      <h2 className="font-h2 text-h2 mb-sm text-on-surface">{title}</h2>

      <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-grow">
        {description}
      </p>

      <button
        className={`w-full py-md bg-surface-container-highest rounded-xl text-on-surface font-label-caps text-label-caps flex items-center justify-center gap-sm transition-all ${buttonClass}`}
      >
        Explore Path
        <span className="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
