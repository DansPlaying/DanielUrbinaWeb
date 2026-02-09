interface SectionHeadingProps {
  title: string;
  highlight: string;
  description?: string;
}

export function SectionHeading({
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        {title} <span className="text-accent-cyan">{highlight}</span>
      </h2>
      {description && (
        <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
