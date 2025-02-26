import Link from "next/link";

const AuthButtons = () => {
  return (
    <div>
      <Link
        href="/login"
        className="ml-3 mr-2 px-4 py-2 border box-border border-gray-600 rounded-md"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Signup
      </Link>
    </div>
  );
};

export default AuthButtons;
