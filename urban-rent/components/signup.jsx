export default function Signup() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="max-w-md w-full p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Create Your Account</h2>
          <p className="text-center text-gray-400">Sign up to explore rental opportunities!</p>
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
              <label className="block mb-1 text-sm font-medium" htmlFor="email">
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email or phone"
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
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-semibold hover:opacity-90"
            >
              Sign Up
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
            <a href="/login" className="text-sm text-purple-400 hover:underline">
              Already have an account? Login here
            </a>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center space-y-2 text-sm text-gray-400">
            <p>
              By signing up, you agree to our 
              <a href="/terms" className="text-purple-400 hover:underline"> Terms & Conditions</a>
            </p>
            <p>
              Need help? Contact 
              <a href="/support" className="text-purple-400 hover:underline"> Support</a> or our 
              <a href="/customer-care" className="text-purple-400 hover:underline"> Customer Care</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  