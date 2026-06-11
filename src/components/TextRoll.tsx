import React from 'react';

export default function TextRoll({ text, label, className = '' }: { text: string; label?: string; className?: string }) {
  const letters = text.split('');
  return (
    <span className={`text-roll ${className}`} aria-label={label || text}>
      {/* Original row */}
      <span className="text-roll-row">
        {letters.map((l, i) => (
          <span key={i} className="text-roll-letter" style={{ '--i': i } as React.CSSProperties}>
            {l === ' ' ? '\u00a0' : l}
          </span>
        ))}
      </span>
      {/* Clone row (slides up into view on hover) */}
      <span className="text-roll-row text-roll-clone" aria-hidden="true">
        {letters.map((l, i) => (
          <span key={i} className="text-roll-letter" style={{ '--i': i } as React.CSSProperties}>
            {l === ' ' ? '\u00a0' : l}
          </span>
        ))}
      </span>
    </span>
  );
}
