import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [error, setError] = useState("");
  const location = useLocation();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // passToogle
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelToogle = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  //   login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("You need to provide email and password");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // navigate after login
        navigate(location?.state ? location.state : "/");
        toast.success("Log in successfully");
      })
      .catch((err) =>
        setError(
          err.message.replace(
            "Firebase: Error (auth/invalid-credential).",
            "Invalid Credential! Make Sure Your email and password is correct"
          )
        )
      );
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-500 ">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handelLogin} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Email</label>
              <label className="input input-bordered flex items-center gap-2">
                <IoMdMail />
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  name="email"
                />
              </label>
            </div>
            <div className="space-y-1 text-sm relative">
              <label className="block text-gray-400">Password</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </label>
              {password && (
                <span
                  className="absolute top-[45%] right-[3%] "
                  onClick={handelToogle}
                >
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </span>
              )}
            </div>
            {error && <p className="mt-2 text-rose-500">{error}</p>}
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-rose-500">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-sm">
              <FaGoogle size={22} />
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Don&#39;t have an account?
            <Link
              to="/register"
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-100 ml-2"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
