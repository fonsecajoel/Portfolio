import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}