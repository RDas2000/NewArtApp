import React from "react";

export default function CookiePopup({ onAccept, onDecline }) {
  return (
    <div className="fixed inset-1 flex pt-[35%]  z-50">
      <div className="w-[90%] max-w-md bg-white shadow-2xl border border-gray-200 rounded-2xl p-6 text-center font-poppins">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🍪 Cookie Preferences
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We use cookies to improve your experience and analyze site usage. By
          clicking <strong>Accept</strong>, you consent to our cookies.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onDecline}
            className="px-4 py-2 rounded-lg text-gray-800 bg-gray-100 hover:bg-gray-200 transition"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
