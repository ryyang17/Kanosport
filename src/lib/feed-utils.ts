// Kleine helpers voor het verwerken van RSS/Atom-feeds (zonder externe libs).

// Decodeer veelvoorkomende HTML-entiteiten naar leesbare tekst.
export function decodeEntities(input: string): string {
  return input
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

// Verwijder HTML-tags en normaliseer witruimte → platte tekst.
//
// Belangrijk: feeds (zoals de ICF-RSS) bevatten vaak entity-encoded HTML in de
// description, bv. "&lt;p&gt;tekst&lt;/p&gt;". Daarom decoderen we EERST de
// entiteiten, strippen we DAARNA de tags, en decoderen we nog een keer (voor
// dubbel-geëncodeerde tekens). Anders blijven zichtbare <p>-tags in de excerpt staan.
export function stripHtml(input: string): string {
  const decoded = decodeEntities(input); // &lt;p&gt; → <p>
  const withoutTags = decoded.replace(/<[^>]*>/g, " "); // tags weg
  return decodeEntities(withoutTags) // resterende entiteiten (bv. &amp;)
    .replace(/\s+/g, " ")
    .trim();
}

// Pak de inhoud van het eerste voorkomen van een tag uit een XML-blok.
export function tag(block: string, name: string): string | undefined {
  // Ondersteunt zowel <name>..</name> als CDATA.
  const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i");
  const m = block.match(re);
  if (!m) return undefined;
  return m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

// Maak een korte samenvatting van een (mogelijk lange) tekst.
export function excerpt(text: string, max = 180): string {
  const clean = stripHtml(text);
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "…";
}
