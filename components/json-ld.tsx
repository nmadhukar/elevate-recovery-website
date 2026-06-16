/**
 * Renders one or more schema.org JSON-LD objects into a <script> tag.
 * Server-rendered so the structured data is present in the initial HTML for
 * crawlers and LLMs (no client hydration required).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema content is fully controlled by us (no user input), so this is safe.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
