import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Register() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-500 ">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Name</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input type="text" className="grow" placeholder="Name" />
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">PhotoURL</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaLink />
                <input type="text" className="grow" placeholder="PhotoURL" />
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Email</label>
              <label className="input input-bordered flex items-center gap-2">
                <IoMdMail />
                <input type="email" className="grow" placeholder="Email" />
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Password</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey />
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-rose-500">
              Register
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-100 ml-2"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
