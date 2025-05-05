import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
        enabled ? "bg-purple-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
