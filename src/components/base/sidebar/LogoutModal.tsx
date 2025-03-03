"use client";

import { logout } from "@/app/auth/actions";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  if (!isOpen) return null; // 開いていないなら何も表示しない

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-4 rounded font-semibold shadow-lg">
        <h2 className="mb-4 text-center">Are you sure you want to log out?</h2>
        <div className="flex justify-end  gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <form action={logout}>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
