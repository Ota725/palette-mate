import Link from "next/link";

const Header = () => {
  return (
    <header className="ml-56 bg-gray-50 text-black py-4 border-b">
      <div className="container mx-auto flex justify-end items-center">
        <nav>
          <Link href="/login" className="mr-4 hover:underline">
            ログイン
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            サインアップ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
