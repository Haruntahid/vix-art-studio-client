import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-full lg:w-[50%] max-w-full"
            src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
            alt=""
          />
          <Link className="btn btn-accent" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
