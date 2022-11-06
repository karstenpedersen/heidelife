import { FaTiktok, FaTwitch, FaYoutube } from 'react-icons/fa';

export interface IContacts {
  className?: string;
  itemClassName?: string;
}

const Contacts: React.FC<IContacts> = ({
  className = '',
  itemClassName = '',
}) => {
  return (
    <ul className={`${className}`}>
      <li>
        <a
          href="https://www.youtube.com/c/HeidemannDK"
          target={'_blank'}
          rel="noreferrer"
          className={`${itemClassName}`}
        >
          <FaYoutube />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitch.tv/Heidemann"
          target={'_blank'}
          rel="noreferrer"
          className={`${itemClassName}`}
        >
          <FaTwitch />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@heidelife.dk"
          target={'_blank'}
          rel="noreferrer"
          className={`${itemClassName}`}
        >
          <FaTiktok />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
