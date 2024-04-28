import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black px-5 lg:px-10 py-10 lg:py-20 mt-12 lg:mt-24">
        <footer className="flex flex-col lg:flex-row lg:items-start  text-center lg:text-left container mx-auto text-gray-300 gap-4">
          <aside className="w-full lg:w-2/5">
            <p>
              <span className="text-3xl lg:text-4xl font-bold">
                Vix-Art Studio
              </span>
              <br />
              Providing reliable Art-Product since 1996
            </p>
          </aside>
          <div className="w-full lg:w-[30%]">
            <p className="text-2xl font-semibold mb-5">Contact</p>
            <p>
              Email :{" "}
              <span className="text-gray-400">admin@vixartstudio.com</span>
            </p>
            <p>
              Call : <span className="text-gray-400">+8801676782636</span>
            </p>
          </div>
          <div className="w-full lg:w-[30%]">
            <p className="text-2xl font-semibold mb-5">Social</p>
            <div className="flex gap-4 lg:gap-8 items-center justify-center lg:justify-start">
              <Link>
                <FaFacebook size={35} />
              </Link>
              <Link>
                <FaSquareInstagram size={35} />
              </Link>
              <Link>
                <FaTwitter size={35} />
              </Link>
              <Link>
                <FaLinkedin size={35} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-base-400 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Vix Art Studio</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
