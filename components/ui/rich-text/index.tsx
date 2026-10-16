// Renders dictionary strings where *word* means italic emphasis (used in the
// design for "how *you* actually operate" and "work *technically*").
export default function RichText({ text }: { text: string }) {
  return text
    .split(/(\*[^*]+\*)/)
    .map((part, i) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <em key={i}>{part.slice(1, -1)}</em>
      ) : (
        part
      ),
    );
}
