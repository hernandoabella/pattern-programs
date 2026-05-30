"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus,
  SiC
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiBookOpen, FiX, FiGrid } from "react-icons/fi";

// ─── Types ──────────────────────────────────────────────────────────────

interface Pattern {
  id: number;
  title: string;
  description: string;
  patternOutput: string;
  code: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  category: "Triangle" | "Square" | "Pyramid" | "Diamond" | "Number";
}

interface Language {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  syntax: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  link: string;
}

// ─── Books Data ─────────────────────────────────────────────────────────

const booksData: Book[] = [
  {
    id: 1,
    title: "150+ Python Pattern Programs",
    author: "Hernando Abella",
    image: "/pattern-1.jpg",
    link: "https://www.amazon.com/-/es/150-Python-Pattern-Programs-creativity/dp/B0CVNPVTM2"
  },
  {
    id: 2,
    title: "150+ C Pattern Programs",
    author: "Hernando Abella",
    image: "/pattern-3.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CTPZ6SVD"
  },
  {
    id: 3,
    title: "150+ JavaScript Pattern Programs",
    author: "Hernando Abella",
    image: "/pattern-2.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CTYK7NFR"
  },
];

// ─── Patterns Data ─────────────────────────────────────────────────────

const patternsData: Record<string, Pattern[]> = {
  javascript: [
    {
      id: 1,
      title: "Right Triangle",
      description: "Prints a right-angled triangle using stars.",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `const n = 5;
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid",
      description: "Creates a centered pyramid shape.",
      patternOutput: "  *\n ***\n*****",
      code: `const n = 3;
for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond",
      description: "Prints a diamond shape.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `const n = 3;
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}
for (let i = n - 1; i >= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Hollow square with borders only.",
      patternOutput: "****\n*  *\n*  *\n****",
      code: `const n = 4;
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
        row += (i === 0 || i === n-1 || j === 0 || j === n-1) ? '*' : ' ';
    }
    console.log(row);
}`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Number Triangle",
      description: "Triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3",
      code: `const n = 3;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}`,
      difficulty: "Easy",
      category: "Number"
    }
  ],
  python: [
    {
      id: 1,
      title: "Right Triangle",
      description: "Prints a right-angled triangle using stars.",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `n = 5
for i in range(1, n + 1):
    print('*' * i)`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid",
      description: "Creates a centered pyramid shape.",
      patternOutput: "  *\n ***\n*****",
      code: `n = 3
for i in range(1, n + 1):
    print(' ' * (n - i) + '*' * (2 * i - 1))`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond",
      description: "Prints a diamond shape.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `n = 3
for i in range(1, n + 1):
    print(' ' * (n - i) + '*' * (2 * i - 1))
for i in range(n - 1, 0, -1):
    print(' ' * (n - i) + '*' * (2 * i - 1))`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Hollow square with borders only.",
      patternOutput: "****\n*  *\n*  *\n****",
      code: `n = 4
for i in range(n):
    for j in range(n):
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print('*', end='')
        else:
            print(' ', end='')
    print()`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Number Triangle",
      description: "Triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3",
      code: `n = 3
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=' ')
    print()`,
      difficulty: "Easy",
      category: "Number"
    }
  ],
  java: [
    {
      id: 1,
      title: "Right Triangle",
      description: "Prints a right-angled triangle using stars.",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid",
      description: "Creates a centered pyramid shape.",
      patternOutput: "  *\n ***\n*****",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond",
      description: "Prints a diamond shape.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}
for (int i = n - 1; i >= 1; i--) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Hollow square with borders only.",
      patternOutput: "****\n*  *\n*  *\n****",
      code: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n)
            System.out.print("*");
        else
            System.out.print(" ");
    }
    System.out.println();
}`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Number Triangle",
      description: "Triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}`,
      difficulty: "Easy",
      category: "Number"
    }
  ],
  cpp: [
    {
      id: 1,
      title: "Right Triangle",
      description: "Prints a right-angled triangle using stars.",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) cout << "*";
    cout << endl;
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid",
      description: "Creates a centered pyramid shape.",
      patternOutput: "  *\n ***\n*****",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) cout << " ";
    for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
    cout << endl;
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond",
      description: "Prints a diamond shape.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) cout << " ";
    for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
    cout << endl;
}
for (int i = n - 1; i >= 1; i--) {
    for (int j = 1; j <= n - i; j++) cout << " ";
    for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
    cout << endl;
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Hollow square with borders only.",
      patternOutput: "****\n*  *\n*  *\n****",
      code: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) cout << "*";
        else cout << " ";
    }
    cout << endl;
}`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Number Triangle",
      description: "Triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) cout << j << " ";
    cout << endl;
}`,
      difficulty: "Easy",
      category: "Number"
    }
  ],
  c: [
    {
      id: 1,
      title: "Right Triangle",
      description: "Prints a right-angled triangle using stars.",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) printf("*");
    printf("\n");
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid",
      description: "Creates a centered pyramid shape.",
      patternOutput: "  *\n ***\n*****",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) printf(" ");
    for (int k = 1; k <= 2 * i - 1; k++) printf("*");
    printf("\n");
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond",
      description: "Prints a diamond shape.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) printf(" ");
    for (int k = 1; k <= 2 * i - 1; k++) printf("*");
    printf("\n");
}
for (int i = n - 1; i >= 1; i--) {
    for (int j = 1; j <= n - i; j++) printf(" ");
    for (int k = 1; k <= 2 * i - 1; k++) printf("*");
    printf("\n");
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Hollow square with borders only.",
      patternOutput: "****\n*  *\n*  *\n****",
      code: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) printf("*");
        else printf(" ");
    }
    printf("\n");
}`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Number Triangle",
      description: "Triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3",
      code: `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) printf("%d ", j);
    printf("\n");
}`,
      difficulty: "Easy",
      category: "Number"
    }
  ]
};

// Languages
const languages: Language[] = [
  { id: "javascript", name: "JavaScript", icon: <SiJavascript size={16} />, color: "#F7DF1E", syntax: "javascript" },
  { id: "python", name: "Python", icon: <SiPython size={16} />, color: "#3776AB", syntax: "python" },
  { id: "java", name: "Java", icon: <FaJava size={16} />, color: "#ED8B00", syntax: "java" },
  { id: "cpp", name: "C++", icon: <SiCplusplus size={16} />, color: "#00599C", syntax: "cpp" },
  { id: "c", name: "C", icon: <SiC size={16} />, color: "#A8B9CC", syntax: "c" }
];

// ─── Components ─────────────────────────────────────────────────────────

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
    >
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}

// Modal con preview del patrón y código
function CodeModal({ pattern, syntax, onClose }: { pattern: Pattern | null; syntax: string; onClose: () => void }) {
  if (!pattern) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-5xl max-h-[85vh] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <div>
            <h3 className="font-semibold text-gray-900">{pattern.title}</h3>
            <p className="text-xs text-gray-500">{pattern.description}</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-lg transition">
            <FiX size={20} />
          </button>
        </div>
        
        {/* Two columns: Pattern Preview + Code */}
        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pattern Preview Column */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h4 className="text-sm font-medium text-gray-700">Pattern Output</h4>
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {pattern.patternOutput}
              </pre>
              <p className="text-xs text-gray-400 mt-3 text-center">
                ✨ Visual representation of the pattern
              </p>
            </div>
            
            {/* Code Column */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="text-sm font-medium text-gray-700">Source Code</h4>
                  <span className="text-xs text-gray-400">({syntax.toUpperCase()})</span>
                </div>
                <CopyButton code={pattern.code} />
              </div>
              <div className="max-h-[400px] overflow-auto">
                <SyntaxHighlighter
                  language={syntax}
                  style={oneLight}
                  customStyle={{
                    margin: 0,
                    padding: "1rem",
                    fontSize: "13px",
                    borderRadius: "8px",
                  }}
                >
                  {pattern.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-3 border-t bg-gray-50 text-center">
          <p className="text-xs text-gray-500">
            💡 You can copy the code and run it yourself
          </p>
        </div>
      </div>
    </>
  );
}

function PatternCard({ pattern, onViewCode }: { pattern: Pattern; onViewCode: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-3 hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-medium text-gray-900 text-sm">{pattern.id}. {pattern.title}</h3>
        <span className={`px-1.5 py-0.5 rounded text-xs ${
          pattern.difficulty === "Easy" ? "bg-green-100 text-green-700" :
          pattern.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
        }`}>
          {pattern.difficulty}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-2">{pattern.description}</p>
      <pre className="text-xs bg-gray-900 text-green-400 p-2 rounded mb-2 overflow-x-auto">
        {pattern.patternOutput}
      </pre>
      <button
        onClick={onViewCode}
        className="w-full py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        View Code
      </button>
    </div>
  );
}

// BooksSidebar - Con imágenes COMPLETAS (sin recortes)
function BooksSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-between items-center p-3 border-b">
          <h2 className="font-semibold text-gray-900">Books</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <FiX size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-3 space-y-3">
          {booksData.map((book) => (
            <div key={book.id} className="border rounded-lg overflow-hidden bg-white">
              {/* Imagen COMPLETA - sin recortar, mostrando la imagen completa */}
              <div className="w-full bg-gray-100 flex items-center justify-center">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-auto object-contain" 
                />
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm line-clamp-2">{book.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{book.author}</p>
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 block text-center text-xs bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition"
                >
                  Buy on Amazon →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalPattern, setModalPattern] = useState<Pattern | null>(null);

  const currentPatterns = patternsData[selectedLanguage] || [];
  
  const filteredPatterns = currentPatterns.filter(pattern =>
    pattern.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pattern.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentLanguage = languages.find(l => l.id === selectedLanguage)!;

  return (
    <>
      <CodeModal pattern={modalPattern} syntax={currentLanguage.syntax} onClose={() => setModalPattern(null)} />
      <BooksSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Pattern Programs</h1>
              <p className="text-sm text-gray-500">Stars, numbers & letters patterns</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border rounded-lg text-sm"
            >
              <FiBookOpen size={16} />
              Books
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-sm transition ${
                  selectedLanguage === lang.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border hover:bg-gray-50"
                }`}
              >
                {lang.icon}
                {lang.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder={`Search ${currentLanguage.name} patterns...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-white border rounded-lg text-sm mb-4 focus:outline-none focus:border-blue-500"
          />

          {/* Results count */}
          <p className="text-xs text-gray-500 mb-3">{filteredPatterns.length} patterns found</p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredPatterns.map(pattern => (
              <PatternCard key={pattern.id} pattern={pattern} onViewCode={() => setModalPattern(pattern)} />
            ))}
          </div>

          {/* Empty */}
          {filteredPatterns.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p>No patterns found</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}