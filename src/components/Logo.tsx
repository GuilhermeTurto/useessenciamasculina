export function Logo() {
  return (
    <a
      href="#inicio"
      className="block h-14 w-20 shrink-0 overflow-hidden"
      aria-label="Essência Masculina"
    >
      <img
        src={`${import.meta.env.BASE_URL}monograma-essencia-original.png`}
        alt="Essência Masculina"
        className="h-full w-full object-contain"
      />
    </a>
  );
}
