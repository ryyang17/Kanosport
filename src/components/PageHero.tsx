export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-brand-100 bg-brand-50">
      <div className="container-page py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-brand-700">{description}</p>
        )}
      </div>
    </div>
  );
}
