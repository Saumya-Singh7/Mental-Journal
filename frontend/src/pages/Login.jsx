import React from "react";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Login;
