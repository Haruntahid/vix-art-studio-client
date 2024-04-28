import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black px-5 lg:px-10 py-10 lg:py-20 mt-12 lg:mt-24">
        <footer className="flex flex-col lg:flex-row lg:items-start justify-between text-center lg:text-left container mx-auto text-gray-300 gap-4">
          <aside>
            <p>
              <span className="text-2xl font-bold">Vix-Art Studio</span>
              <br />
              Providing reliable Art-Product since 1996
            </p>
          </aside>
          <div className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <Link to={"/profile"} className="link link-hover">
              Profile
            </Link>
            <Link to={"/connect"} className="link link-hover">
              Connect with us
            </Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <nav className="flex flex-col">
            <h6 className="footer-title">Social</h6>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
