export function LandingPage() {
  return (
    <div className="w-full h-screen flex-row">
      <div className="w-full h-full flex items-center justify-center pt-14 pb-24">
        <div className="w-1/2 h-full bg-main bg-opacity-60 rounded-lg p-5 flex flex-col items-center">
          <img src="/images/logo.png" className="rounded-lg mt-7"></img>

          <p className="text-white text-lg text-center pt-10">
            A child's dental journey is always exciting - from the first tooth
            erupting to the first tooth falling out.
            <br />
            Let us be a part of your journey by providing you with the common
            knowledge of how to care for your child's teeth, the steps to take
            to prevent diseases, the most common diseases you can expect and
            much more
          </p>
          <img
            src="/images/care.png"
            alt="cartoon teeth cleaning image"
            className="w-96"></img>
          <p className="text-white text-center text-lg">
            If you have any questions or would like to get your child started on
            dental care,
            <br />
            please create an account and take the time to schedule an
            appointment
            <br />
            at your earliest convenience.
          </p>
          <div className="mt-10">
            <button className="mx-7 w-20 h-7 bg-main rounded-lg text-white">
              Log In
            </button>
            <button className="mx-7 w-20 h-7 bg-main rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
