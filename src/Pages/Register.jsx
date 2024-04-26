import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const { registerUser, setUser, user } = useContext(AuthContext);

  const auth = getAuth();

  // handel password toogle button
  const handelToogle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  // handel register and update profile
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // check all the data is filled
    if (!name || !email || !photo || !password) {
      toast.error("You must fill all the field");
      return;
    }

    // password validation
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setError("Password must contain at least one uppercase");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setError("Password must contain at least one lowercase");
      return;
    }

    // error state empty when all correct
    setError("");

    // register a user
    registerUser(email, password)
      .then(() => {
        // update  user
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            event.target.reset();
            navigate("/");
            toast.success("Registration Successfully!");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
            toast.error("Failed to update user profile");
          });
      })
      .catch((err) =>
        setError(
          err.message.replace(
            "Firebase: Error (auth/email-already-in-use).",
            "Email Aleready Exist!"
          )
        )
      );
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-500 ">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form onSubmit={handelRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Name</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input
                  type="text"
                  className="grow"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">PhotoURL</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaLink />
                <input
                  type="text"
                  className="grow"
                  placeholder="PhotoURL"
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Email</label>
              <label className="input input-bordered flex items-center gap-2">
                <IoMdMail />
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="space-y-1 text-sm relative">
              <label className="block text-gray-400">Password</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className="grow"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </label>
              {password && (
                <span
                  className="absolute top-[45%] right-[5%] "
                  onClick={handelToogle}
                >
                  {showPassword ? (
                    <FaRegEye size={22} />
                  ) : (
                    <FaRegEyeSlash size={22} />
                  )}
                </span>
              )}
            </div>
            <div>
              {error && <span className="text-rose-600 mt-4">{error}</span>}
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
