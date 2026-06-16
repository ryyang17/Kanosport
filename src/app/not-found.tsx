import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
        Pagina niet gevonden
      </h1>
      <p className="mt-3 max-w-md text-brand-700">
        De pagina die je zoekt bestaat niet (meer). Controleer de URL of ga
        terug naar de homepagina.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        Terug naar home
      </Link>
    </div>
  );
}
