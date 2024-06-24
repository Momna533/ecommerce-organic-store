import { Link } from "react-router-dom";
import logo from "../assets/images/organic-store-white-logo.png";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
const Footer = () => {
  return (
    <div className="divide divide-y bg-black divide-divider flex-wrap">
      <div className="px-4 py-8 flex items-start justify-center flex__col">
        <div className="flex flex-col gap-4 flex-1">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor
            perspiciatis dolorum dignissimos porro nesciunt hic odio eum dolore
            neque?
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1 items-center">
          <h4 className="text-white">Quick Links</h4>
          <div className="flex flex-col">
            <Link
              to="/groceries"
              className="text-gray hover:text-white transition-all"
            >
              Groceries
            </Link>
            <Link
              to="/juice"
              className="text-gray hover:text-white transition-all"
            >
              Juice
            </Link>
            <Link
              to="/about"
              className="text-gray hover:text-white transition-all"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>
          <h4 className="text-white">Site Links</h4>
          <Link className="text-gray hover:text-white transition-all">
            other links
          </Link>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h4 className="text-white">Download our mobile app</h4>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            possimus accusantium facere voluptatem est commodi assumenda
            explicabo perferendis? Quos, ex!
          </p>
        </div>
      </div>
      <div className="px-4 py-8 flex gap-4 items-center justify-between flex__col">
        <p className="text-gray">
          Copyright © 2021 Organic Store. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2 text-lg">
          <Link to="/" className="text-gray">
            <FiFacebook />
          </Link>
          <Link to="/" className="text-gray">
            <FiTwitter />
          </Link>
          <Link to="/" className="text-gray">
            <FiInstagram />
          </Link>
          <Link to="/" className="text-gray">
            <FiYoutube />
          </Link>
          <Link to="/" className="text-gray">
            <FiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
