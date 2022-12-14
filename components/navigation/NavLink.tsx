import Link from 'next/link';

export interface INavLink {
  text: string;
  href: string;
  className?: string;
  toggleMobileNav?: () => void;
}

const NavLink: React.FC<INavLink> = ({
  text,
  href,
  className,
  toggleMobileNav,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-zinc-100 ${className}`}
        onClick={toggleMobileNav}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
