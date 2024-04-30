function GetInTouch() {
  return (
    <>
      <div className="text-center mt-10 lg:mt-20 mb-5 lg:mb-10">
        <p className="text-3xl lg:text-6xl font-bold">Get in Touch</p>
      </div>
      <div className="grid container grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-rose-500 text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let&apos;s Connect!
            </h2>
            <div className="text-gray-700">
              Together, we can create something extraordinary. Share your vision
              with me and let&apos;s bring it to life.
            </div>
          </div>
          <img
            src="https://i.ibb.co/YW0dmXZ/5124556-removebg-preview.png"
            alt=""
            className="p-6 w-full lg:w-[70%]"
          />
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-800 mt-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-800 mt-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-800 mt-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
