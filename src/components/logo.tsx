export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="4 16 56 32"
        width="44"
        height="25"
        aria-hidden="true"
        className="shrink-0 text-ink"
      >
        <path
          d="M17 20 L6 32 L17 44"
          fill="none"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47 20 L58 32 L47 44"
          fill="none"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 42 V22 L38 42 V22"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold tracking-tight">Nicolas Ledezma</span>
    </span>
  );
}