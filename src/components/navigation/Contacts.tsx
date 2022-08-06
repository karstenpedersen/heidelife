import { FaFacebook, FaTwitter } from "react-icons/fa";

export interface IContacts {
  className?: string;
  itemClassName?: string;
}

const Contacts: React.FC<IContacts> = ({ className, itemClassName }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <a href="#" className={itemClassName}>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#" className={itemClassName}>
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
