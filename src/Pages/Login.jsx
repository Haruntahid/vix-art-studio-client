import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Login() {
  const { loginUser, googleLogin, setUser, githubLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
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

  //   google login
  const handelGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      navigate(location?.state ? location.state : "/");
      toast.success("Log in successfully");
    });
  };

  // github login
  const handelGithubLogin = () => {
    githubLogin().then((result) => {
      setUser(result.user);
      navigate(location?.state ? location.state : "/");
      toast.success("Log in successfully");
    });
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center h-[70vh] lg:h-[80vh] p-2 lg:p-0">
        <div className="w-full max-w-md p-4 lg:p-8 space-y-3 rounded-xl bg-gray-800 text-gray-500">
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
            <button onClick={handelGoogleLogin} className="p-3 rounded-sm">
              <FaGoogle size={25} />
            </button>
            <button
              onClick={handelGithubLogin}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
            >
              <FaGithub size={25} />
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
