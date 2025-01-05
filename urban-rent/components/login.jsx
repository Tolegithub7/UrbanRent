export default function Login() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="max-w-md w-full p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Welcome Back!</h2>
          <p className="text-center text-gray-400">Glad you're back.!</p>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="text-purple-500" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-semibold hover:opacity-90"
            >
              Login
            </button>
          </form>
          <div className="text-center text-gray-400">OR</div>
          <div className="flex justify-around">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center">
            <a href="/signup" className="text-sm text-purple-400 hover:underline">
              Don't have an account? Signup
            </a>
          </div>
          <div className="text-center">
            <a href="/home" className="text-sm text-gray-400 hover:underline">
              Continue without logging in
            </a>
          </div>
        </div>
      </div>
    );
  }
  