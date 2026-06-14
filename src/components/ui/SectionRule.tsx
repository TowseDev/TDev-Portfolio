type SectionRuleProps = {
  code: string;
  name: string;
  meta?: string;
  codeColor?: string;
  className?: string;
};

export function SectionRule({
  code,
  name,
  meta,
  codeColor,
  className = "",
}: SectionRuleProps) {
  return (
    <div className={`sec-rule ${className}`.trim()}>
      <span className="tick" />
      <span className="sec-code" style={codeColor ? { color: codeColor } : undefined}>
        {code}
      </span>
      <span className="sec-name">{name}</span>
      {meta ? <span className="sec-meta">{meta}</span> : null}
    </div>
  );
}
