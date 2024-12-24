export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    React: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Python: "bg-green-500",
    Swift: "bg-orange-500",
    Java: "bg-red-500",
    "HTML/CSS": "bg-purple-500",
    PHP: "bg-indigo-500",
  };

  return colors[language] || "bg-gray-500";
}