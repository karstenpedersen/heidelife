import NavLink from './NavLink';

export interface INavigation {
  className?: string;
  itemClassName?: string;
  toggleMobileNav?: () => void;
}

const Navigation: React.FC<INavigation> = ({
  className,
  itemClassName,
  toggleMobileNav,
}) => {
  return (
    <nav>
      <ul className={className}>
        <NavLink
          text="Spil"
          href="/spil"
          className={itemClassName}
          toggleMobileNav={toggleMobileNav}
        />
        <NavLink
          text="Regler"
          href="/regler"
          className={itemClassName}
          toggleMobileNav={toggleMobileNav}
        />
        <NavLink
          text="FAQ"
          href="/faq"
          className={itemClassName}
          toggleMobileNav={toggleMobileNav}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
