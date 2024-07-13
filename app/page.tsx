"use client";

import React, { useState } from "react";

interface LanguageCode {
  language: string;
  code: string;
}

interface Pattern {
  title: string;
  pattern: string;
  codes: LanguageCode[];
}

const patterns: Pattern[] = [
  {
    title: "Pyramid Pattern",
    pattern: `
*
***
*****
*******
*********
    `,
    codes: [
      {
        language: "Python",
        code: `
def print_pyramid(n):
    for i in range(n):
        print(' ' * (n - i - 1) + '*' * (2 * i + 1))

print_pyramid(5)
        `,
      },
    ],
  },
  // Agregar más patrones y lenguajes aquí según sea necesario
];

const Home: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState("Python");

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Código copiado!");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleChangeLanguage("Python")}
          className={`${
            currentLanguage === "Python"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } font-semibold py-2 px-4 mx-2 rounded`}
        >
          Python
        </button>
        <button
          onClick={() => handleChangeLanguage("JavaScript")}
          className={`${
            currentLanguage === "JavaScript"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } font-semibold py-2 px-4 mx-2 rounded`}
        >
          JavaScript
        </button>
        {/* Agregar más botones según los lenguajes disponibles */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{pattern.title}</div>
              <pre className="whitespace-pre-wrap text-gray-700 text-base">
                {pattern.pattern}
              </pre>
              <div className="font-bold text-xl mb-2">
                {currentLanguage} Code
              </div>
              {pattern.codes
                .filter((code) => code.language === currentLanguage)
                .map((code, codeIndex) => (
                  <div key={codeIndex} className="relative">
                    <pre className="whitespace-pre-wrap text-gray-700 text-base">
                      {code.code.trim()}
                    </pre>
                    <button
                      onClick={() => handleCopyCode(code.code)}
                      className="absolute top-0 right-0 bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md"
                    >
                      Copy Code
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
