interface FormSectionHeaderProp {
  icon?: string;
  header: string;
}

export default function FormSectionHeader({
  icon,
  header,
}: FormSectionHeaderProp) {
  return (
    <div className="flex items-center gap-base">
      <span
        className="material-symbols-outlined text-secondary"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        {icon}
      </span>
      <h2 className="font-h3 text-h3 text-white">{header}</h2>
    </div>
  );
}
