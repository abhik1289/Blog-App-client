import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

interface SocialMedia {
  id: number;
  name: string;
  link: string;
  icon: JSX.Element;
}

const socialMediaList: SocialMedia[] = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

export default socialMediaList;
