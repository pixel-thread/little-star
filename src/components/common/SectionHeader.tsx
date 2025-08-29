export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);
