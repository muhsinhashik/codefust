"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false }); // Disable SSR for react-select

const languages = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "c++", label: "C++" },
];

const themes = [
  { value: "football", label: "Football" },
  { value: "space", label: "Space" },
  { value: "movies", label: "Movies" },
];

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration errors

  const handleStartLearning = () => {
    if (selectedLanguage && selectedTheme) {
      router.push(`/learn/${selectedLanguage.value}?theme=${selectedTheme.value}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Codefust</h1>
      <p className="mb-4 text-lg">Customize your learning experience</p>

      <div className="w-80">
        <Select
          options={languages}
          placeholder="Select Language"
          onChange={setSelectedLanguage}
          className="mb-4 text-black"
        />
        <Select
          options={themes}
          placeholder="Select Theme"
          onChange={setSelectedTheme}
          className="mb-6 text-black"
        />
        <button
          onClick={handleStartLearning}
          className={`w-full py-2 text-lg font-semibold rounded-lg transition ${
            selectedLanguage && selectedTheme
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          disabled={!selectedLanguage || !selectedTheme}
        >
          Start Learning 🚀
        </button>
      </div>
    </div>
  );
}
