export default function ForgotPassword() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="max-w-md w-full p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Forgot Password?</h2>
          <p className="text-center text-gray-400">Please enter your email</p>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@mail.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-semibold hover:opacity-90"
            >
              Reset Password
            </button>
          </form>
          <div className="text-center">
            <a href="/login" className="text-sm text-purple-400 hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    );
  }
  