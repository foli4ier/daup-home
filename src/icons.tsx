import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconCloche(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 17h16" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 4v3" />
      <circle cx="12" cy="4" r="1" fill="currentColor" />
    </Svg>
  );
}

export function IconHouse(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10.5V19h12v-8.5" />
      <path d="M10 19v-5h4v5" />
    </Svg>
  );
}

export function IconSprout(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21V10" />
      <path d="M12 14c-4-1-6-4-6-8 5 0 6 3 6 8z" />
      <path d="M12 12c3-.8 6-3.2 6-7-4.2.4-5.5 3-6 7z" />
    </Svg>
  );
}

export function IconShop(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 9 6 5h12l2 4" />
      <path d="M4 9h16v10H4z" />
      <path d="M9 19v-6h6v6" />
    </Svg>
  );
}

export function IconFactory(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" />
      <path d="M17 8v-2" />
    </Svg>
  );
}

export function IconTable(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 10h16" />
      <path d="M7 10v8" />
      <path d="M17 10v8" />
      <path d="M4 14h16" />
    </Svg>
  );
}

export function IconTicket(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 9a2 2 0 0 0 0 6v3h16v-3a2 2 0 0 0 0-6V6H4v3z" />
      <path d="M12 8v8" />
    </Svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 7 2.8C19 14.6 12 19 12 19z" />
    </Svg>
  );
}

export function IconKitchen(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 18h16" />
      <path d="M6 18a6 6 0 0 1 12 0" />
      <path d="M12 6v3" />
    </Svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <Svg width="26" height="26" {...props}>
      <path d="M5 5h6a4 4 0 0 1 4 4v11H9a4 4 0 0 0-4 4V5z" />
      <path d="M15 9h4a4 4 0 0 1 4 4v11h-6a4 4 0 0 0-4 4" />
    </Svg>
  );
}

export function IconPeople(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3.5 19c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5" />
      <path d="M14 16.5c1.2-1.5 2.6-2.2 4.3-2.2 2.2 0 3.8 1.3 4.2 3.7" />
    </Svg>
  );
}

export function IconFork(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 4v6" />
      <path d="M12 4v6" />
      <path d="M16 4v3a4 4 0 0 1-4 4v9" />
      <path d="M8 10h4" />
    </Svg>
  );
}

export function IconBell(props: IconProps) {
  return (
    <Svg width="18" height="18" {...props}>
      <path d="M6 16a3 3 0 0 0 6 0" />
      <path d="M5 10a5 5 0 0 1 10 0c0 4 1.5 5 1.5 5H3.5S5 14 5 10z" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg width="18" height="18" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}
