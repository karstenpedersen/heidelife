import { FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa";

export interface IContacts {
  className?: string;
  itemClassName?: string;
}

const Contacts: React.FC<IContacts> = ({ className, itemClassName }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <a
          href="https://www.youtube.com/c/HeidemannDK"
          target={"_blank"}
          rel="noreferrer"
          className={`hover:!text-[#ff0000] ${itemClassName ?? itemClassName}`}
        >
          <FaYoutube />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitch.tv/Heidemann"
          target={"_blank"}
          rel="noreferrer"
          className={`hover:text-[#8a43f2] ${itemClassName ?? itemClassName}`}
        >
          <FaTwitch />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@heidelife.dk"
          target={"_blank"}
          rel="noreferrer"
          className={`${itemClassName ?? itemClassName}`}
        >
          <div className="group relative">
            <FaTiktok className="absolute top-0 text-[#00eae3] transition-all group-hover:-translate-x-[1px] group-hover:-translate-y-[1px]" />
            <FaTiktok className="absolute top-0 text-[#f20049] transition-all group-hover:translate-x-[1px] group-hover:translate-y-[1px]" />
            <FaTiktok className="absolute top-0 transition-all group-hover:text-zinc-900" />
            <FaTiktok className="text-transparent" />
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
