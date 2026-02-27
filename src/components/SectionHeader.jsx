const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="flex flex-col gap-3 mb-10">
    <span className="text-xs uppercase tracking-[0.5em] text-neon">
      {eyebrow}
    </span>
    <div className="space-y-3">
      <h2 className="text-3xl lg:text-4xl font-semibold text-frost">
        {title}
      </h2>
      {description && (
        <p className="text-mist max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  </div>
);

export default SectionHeader;
