"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import lessons from "@/data/lessons";

export default function LearnPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState(null);
  const [theme, setTheme] = useState(null);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    if (params?.language) {
      setLanguage(params.language);
    }
    if (searchParams) {
      setTheme(searchParams.get("theme"));
    }
  }, [params, searchParams]);

  useEffect(() => {
    if (language && theme) {
      setLesson(lessons[language]?.[theme] || null);
    }
  }, [language, theme]);

  if (!language || !theme) return <div className="text-white">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Learn {language.toUpperCase()}</h1>
      <p className="mb-6 text-lg">Theme: {theme}</p>

      {lesson ? (
        <div className="w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{lesson.title}</h2>
          <p className="mb-4">{lesson.description}</p>
          <pre className="bg-black p-4 rounded-md overflow-x-auto">
            <code>{lesson.example}</code>
          </pre>
        </div>
      ) : (
        <p className="text-red-400">No lesson available for this theme.</p>
      )}
    </div>
  );
}
