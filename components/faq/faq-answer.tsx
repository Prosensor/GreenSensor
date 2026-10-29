import { Fragment } from "react"

/**
 * Met en forme une réponse de FAQ sans changer son texte :
 * - une réponse en étapes numérotées (« 1. … 2. … ») devient une liste ;
 * - sinon, la première phrase (la réponse directe) est mise en avant, le détail suit en paragraphes courts ;
 * - les chiffres clés (températures, distances, durées, références) sont en gras.
 */
const KEY_FIGURES =
  /(±?\d[\d\s.,]*\s?°C|\d[\d.,]*\s?(?:km|mm|MHz|%)|Ø\s?\d+\s?mm|\d+(?:[.,]\d+)?\s?m(?=[\s,.)]|$)|\d+\s(?:ans?|years?|años|Jahre|anos|ani|jours|days|días|Tage|dias|zile|semaines|weeks|semanas|Wochen|semanas|săptămâni)|IP68|316L|868\s?MHz)/g

const SENTENCE_BREAK = /(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Þ0-9«"“¿¡])/

function emphasize(text: string) {
  const parts = text.split(KEY_FIGURES)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink-strong">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

/** Regroupe les phrases par paquets de deux au plus : des paragraphes courts se lisent mieux qu'un bloc. */
function paragraphs(sentences: string[]) {
  const out: string[] = []
  for (let i = 0; i < sentences.length; i += 2) out.push(sentences.slice(i, i + 2).join(" "))
  return out
}

export function FaqAnswer({ text }: { text: string }) {
  if (/\s1\.\s[\s\S]*\s2\.\s/.test(text)) {
    const start = text.search(/\s1\.\s/)
    const intro = text.slice(0, start).trim().replace(/[.:]$/, "")
    const steps = text
      .slice(start)
      .trim()
      .split(/\s(?=\d\.\s)/)
      .map((s) => s.replace(/^\d\.\s*/, "").trim())
      .filter(Boolean)

    return (
      <div className="flex flex-col gap-4">
        {intro && <p className="text-[17px] font-medium leading-relaxed text-ink-strong">{intro}</p>}
        <ol className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span aria-hidden className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{emphasize(step)}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  const sentences = text.split(SENTENCE_BREAK)
  const [lead, ...rest] = sentences
  const details = paragraphs(rest)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[17px] font-medium leading-relaxed text-ink-strong">{emphasize(lead)}</p>
      {details.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {emphasize(p)}
        </p>
      ))}
    </div>
  )
}
