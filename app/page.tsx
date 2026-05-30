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
import { TbBrandCSharp } from "react-icons/tb";
import { FiBookOpen, FiX, FiMenu, FiGrid } from "react-icons/fi";

// ─── Types ──────────────────────────────────────────────────────────────

interface Pattern {
  id: number;
  title: string;
  description: string;
  patternOutput: string;
  code: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  category: "Triangle" | "Square" | "Pyramid" | "Diamond" | "Number" | "Alphabet";
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
    title: "Pattern Programs in C",
    author: "Hernando Abella",
    image: "/c-programs.jpg",
    link: "https://www.amazon.com/dp/B0D442PCLX/"
  },
  {
    id: 2,
    title: "Pattern Programs in C++",
    author: "Hernando Abella",
    image: "/cpp-programs.png",
    link: "https://www.amazon.com/dp/B0CN51HJQQ/"
  },
  {
    id: 3,
    title: "Pattern Programs in Java",
    author: "Hernando Abella",
    image: "/java-programs.jpg",
    link: "https://www.amazon.com/dp/B0CYHZ5QKJ"
  },
  {
    id: 4,
    title: "Pattern Programs in Python",
    author: "Hernando Abella",
    image: "/python-programs.jpg",
    link: "https://www.amazon.com/dp/B0CXF57XT9"
  },
  {
    id: 5,
    title: "Pattern Programs in JavaScript",
    author: "Hernando Abella",
    image: "/javascript-programs.jpg",
    link: "https://www.amazon.com/dp/B0D2ZM71J8"
  }
];

// ─── Patterns Data by Language ─────────────────────────────────────────

const patternsData: Record<string, Pattern[]> = {
  javascript: [
    {
      id: 1,
      title: "Right Triangle Star Pattern",
      description: "Prints a right-angled triangle using stars (*).",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `// Right Triangle Star Pattern
const n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid Star Pattern",
      description: "Creates a centered pyramid shape with stars.",
      patternOutput: "    *\n   ***\n  *****\n *******\n*********",
      code: `// Pyramid Star Pattern
const n = 5;
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
      title: "Diamond Pattern",
      description: "Prints a diamond shape using stars.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `// Diamond Pattern
const n = 5;
// Upper half
for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}
// Lower half
for (let i = n - 1; i >= 1; i--) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Number Triangle",
      description: "Prints a triangle with increasing numbers.",
      patternOutput: "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
      code: `// Number Triangle
const n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}`,
      difficulty: "Easy",
      category: "Number"
    },
    {
      id: 5,
      title: "Hollow Square",
      description: "Creates a hollow square with stars on borders only.",
      patternOutput: "*****\n*   *\n*   *\n*   *\n*****",
      code: `// Hollow Square Pattern
const n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}`,
      difficulty: "Easy",
      category: "Square"
    }
  ],
  python: [
    {
      id: 1,
      title: "Right Triangle Star Pattern",
      description: "Prints a right-angled triangle using stars (*).",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `# Right Triangle Star Pattern
n = 5
for i in range(1, n + 1):
    print('* ' * i)`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid Star Pattern",
      description: "Creates a centered pyramid shape with stars.",
      patternOutput: "    *\n   ***\n  *****\n *******\n*********",
      code: `# Pyramid Star Pattern
n = 5
for i in range(1, n + 1):
    spaces = ' ' * (n - i)
    stars = '*' * (2 * i - 1)
    print(spaces + stars)`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond Pattern",
      description: "Prints a diamond shape using stars.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `# Diamond Pattern
n = 5
# Upper half
for i in range(1, n + 1):
    spaces = ' ' * (n - i)
    stars = '*' * (2 * i - 1)
    print(spaces + stars)
# Lower half
for i in range(n - 1, 0, -1):
    spaces = ' ' * (n - i)
    stars = '*' * (2 * i - 1)
    print(spaces + stars)`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Floyd's Triangle",
      description: "Prints Floyd's triangle with consecutive numbers.",
      patternOutput: "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15",
      code: `# Floyd's Triangle
n = 5
num = 1
for i in range(1, n + 1):
    row = ''
    for j in range(i):
        row += str(num) + ' '
        num += 1
    print(row)`,
      difficulty: "Easy",
      category: "Number"
    },
    {
      id: 5,
      title: "Alphabet Pyramid",
      description: "Creates a pyramid pattern with letters.",
      patternOutput: "    A\n   ABC\n  ABCDE\n ABCDEFG\nABCDEFGHI",
      code: `# Alphabet Pyramid
n = 5
for i in range(1, n + 1):
    spaces = ' ' * (n - i)
    letters = ''
    for j in range(65, 65 + (2 * i - 1)):
        letters += chr(j)
    print(spaces + letters)`,
      difficulty: "Intermediate",
      category: "Alphabet"
    }
  ],
  java: [
    {
      id: 1,
      title: "Right Triangle Star Pattern",
      description: "Prints a right-angled triangle using stars (*).",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `// Right Triangle Star Pattern
public class Pattern {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid Star Pattern",
      description: "Creates a centered pyramid shape with stars.",
      patternOutput: "    *\n   ***\n  *****\n *******\n*********",
      code: `// Pyramid Star Pattern
public class Pyramid {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond Pattern",
      description: "Prints a diamond shape using stars.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `// Diamond Pattern
public class Diamond {
    public static void main(String[] args) {
        int n = 5;
        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Pascal's Triangle",
      description: "Prints Pascal's triangle using binomial coefficients.",
      patternOutput: "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1",
      code: `// Pascal's Triangle
public class Pascal {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            int num = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(num + " ");
                num = num * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`,
      difficulty: "Advanced",
      category: "Number"
    },
    {
      id: 5,
      title: "Hollow Diamond",
      description: "Creates a hollow diamond pattern with stars.",
      patternOutput: "  *\n * *\n*   *\n * *\n  *",
      code: `// Hollow Diamond Pattern
public class HollowDiamond {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                if (j == 1 || j == 2 * i - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                if (j == 1 || j == 2 * i - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}`,
      difficulty: "Advanced",
      category: "Diamond"
    }
  ],
  cpp: [
    {
      id: 1,
      title: "Right Triangle Star Pattern",
      description: "Prints a right-angled triangle using stars (*).",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `// Right Triangle Star Pattern
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid Star Pattern",
      description: "Creates a centered pyramid shape with stars.",
      patternOutput: "    *\n   ***\n  *****\n *******\n*********",
      code: `// Pyramid Star Pattern
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond Pattern",
      description: "Prints a diamond shape using stars.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `// Diamond Pattern
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
        cout << endl;
    }
    return 0;
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Number Pyramid",
      description: "Prints a pyramid with repeating numbers.",
      patternOutput: "    1\n   222\n  33333\n 4444444\n555555555",
      code: `// Number Pyramid
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int k = 1; k <= 2 * i - 1; k++) cout << i;
        cout << endl;
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Number"
    },
    {
      id: 5,
      title: "X Shape Pattern",
      description: "Creates an X shape using stars.",
      patternOutput: "*   *\n * *\n  *\n * *\n*   *",
      code: `// X Shape Pattern
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == j || i + j == n + 1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}`,
      difficulty: "Intermediate",
      category: "Square"
    }
  ],
  c: [
    {
      id: 1,
      title: "Right Triangle Star Pattern",
      description: "Prints a right-angled triangle using stars (*).",
      patternOutput: "*\n**\n***\n****\n*****",
      code: `// Right Triangle Star Pattern
#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Triangle"
    },
    {
      id: 2,
      title: "Pyramid Star Pattern",
      description: "Creates a centered pyramid shape with stars.",
      patternOutput: "    *\n   ***\n  *****\n *******\n*********",
      code: `// Pyramid Star Pattern
#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Pyramid"
    },
    {
      id: 3,
      title: "Diamond Pattern",
      description: "Prints a diamond shape using stars.",
      patternOutput: "  *\n ***\n*****\n ***\n  *",
      code: `// Diamond Pattern
#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\n");
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\n");
    }
    return 0;
}`,
      difficulty: "Intermediate",
      category: "Diamond"
    },
    {
      id: 4,
      title: "Hollow Square",
      description: "Creates a hollow square with stars on borders only.",
      patternOutput: "*****\n*   *\n*   *\n*   *\n*****",
      code: `// Hollow Square Pattern
#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                printf("*");
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Square"
    },
    {
      id: 5,
      title: "Floyd's Triangle",
      description: "Prints Floyd's triangle with consecutive numbers.",
      patternOutput: "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15",
      code: `// Floyd's Triangle
#include <stdio.h>
int main() {
    int n = 5, num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", num++);
        }
        printf("\n");
    }
    return 0;
}`,
      difficulty: "Easy",
      category: "Number"
    }
  ]
};

// Languages with icons
const languages: Language[] = [
  { id: "javascript", name: "JavaScript", icon: <SiJavascript size={18} />, color: "#F7DF1E", syntax: "javascript" },
  { id: "python", name: "Python", icon: <SiPython size={18} />, color: "#3776AB", syntax: "python" },
  { id: "java", name: "Java", icon: <FaJava size={18} />, color: "#ED8B00", syntax: "java" },
  { id: "cpp", name: "C++", icon: <SiCplusplus size={18} />, color: "#00599C", syntax: "cpp" },
  { id: "c", name: "C", icon: <SiC size={18} />, color: "#A8B9CC", syntax: "c" }
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
      className="px-3 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition font-medium"
    >
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    Easy: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colors = {
    Triangle: "bg-blue-100 text-blue-700",
    Square: "bg-purple-100 text-purple-700",
    Pyramid: "bg-green-100 text-green-700",
    Diamond: "bg-pink-100 text-pink-700",
    Number: "bg-yellow-100 text-yellow-700",
    Alphabet: "bg-indigo-100 text-indigo-700"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[category as keyof typeof colors]}`}>
      {category}
    </span>
  );
}

function PatternCard({ pattern, syntax }: { pattern: Pattern; syntax: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-semibold text-gray-900">
                {pattern.id}. {pattern.title}
              </h3>
              <CategoryBadge category={pattern.category} />
              <DifficultyBadge difficulty={pattern.difficulty} />
            </div>
            <p className="text-sm text-gray-600">{pattern.description}</p>
          </div>
        </div>
        
        {/* Pattern Output Preview */}
        <div className="mt-3 p-3 bg-gray-900 rounded-lg font-mono text-xs whitespace-pre overflow-x-auto">
          <div className="text-green-400 mb-1 text-xs">▼ Output Preview:</div>
          <pre className="text-gray-300">{pattern.patternOutput}</pre>
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-gray-400">
            {expanded ? "▼ Click to hide code" : "▶ Click to view code"}
          </span>
        </div>
      </div>
      
      {expanded && (
        <div className="border-t border-gray-200">
          <div className="relative">
            <SyntaxHighlighter
              language={syntax}
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "13px",
                borderRadius: 0
              }}
            >
              {pattern.code}
            </SyntaxHighlighter>
            <div className="absolute top-2 right-2">
              <CopyButton code={pattern.code} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BooksSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FiBookOpen className="text-blue-600" />
            <h2 className="font-semibold text-gray-900">Get the Book</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <FiX size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {booksData.map((book) => (
            <div key={book.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition group">
              <div className="w-full">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-48 flex items-center justify-center bg-gray-100';
                      fallback.innerHTML = '<svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{book.author}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block w-full text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition"
                >
                  🇺🇸 Buy on Amazon →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            ⭐ Pattern Programs Collection | 5 Languages
          </p>
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Triangle", "Square", "Pyramid", "Diamond", "Number", "Alphabet"];
  const currentPatterns = patternsData[selectedLanguage] || [];
  
  const filteredPatterns = currentPatterns.filter(pattern => {
    const matchesSearch = pattern.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || pattern.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentLanguage = languages.find(l => l.id === selectedLanguage)!;

  return (
    <>
      <BooksSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FiGrid className="text-blue-600" size={28} />
                <h1 className="text-3xl font-bold text-gray-900">Pattern Programs</h1>
              </div>
              <p className="text-gray-600 text-sm">
                Master patterns with stars, numbers, and letters
              </p>
            </div>
            
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition text-sm text-gray-700 shadow-sm"
            >
              <FiBookOpen size={18} />
              <span className="hidden sm:inline">Get the Book</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition border ${
                  selectedLanguage === lang.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-base">{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition border ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat === "all" ? "📐 All" : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={`Search ${currentLanguage.name} patterns...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Results Count */}
          <div className="mb-4 text-xs text-gray-500">
            ⭐ {filteredPatterns.length} pattern(s) found
          </div>

          {/* Patterns Grid */}
          <div className="space-y-4">
            {filteredPatterns.map(pattern => (
              <PatternCard
                key={pattern.id}
                pattern={pattern}
                syntax={currentLanguage.syntax}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPatterns.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              <FiGrid className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>No patterns found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}