import Link from "next/link";
import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

const socials = [
  {
    name: "Facebook",
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com/seupagina",
  },
  {
    name: "YouTube",
    icon: <RiYoutubeFill />,
    path: "https://www.youtube.com/seucanal",
  },
  {
    name: "Twitter",
    icon: <RiTwitterXFill />,
    path: "https://twitter.com/seuperfil",
  },
  {
    name: "Instagram",
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/seuperfil",
  },
];

const Socials = ({
  containerStyles = "flex gap-3",
  iconStyles = "w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-primary transition-all duration-300",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
