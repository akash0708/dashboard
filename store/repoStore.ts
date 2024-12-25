import { create } from "zustand";

interface Repository {
  name: string;
  visibility: "Public" | "Private";
  technology: string;
  size: string;
  updatedAt: string;
}

interface RepositoryState {
  repositories: Repository[];
  addRepository: (repo: Repository) => void;
  setRepositories: (repos: Repository[]) => void;
}

export const useRepositoryStore = create<RepositoryState>((set) => ({
  repositories: [
    {
      name: "design-system",
      visibility: "Public",
      technology: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      technology: "JavaScript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      technology: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      technology: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      technology: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      technology: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      technology: "PHP",
      size: "5432 KB",
      updatedAt: "7 days ago",
    },
  ],

  addRepository: (repo) =>
    set((state) => ({
      repositories: [repo, ...state.repositories],
    })),

  setRepositories: (repos) =>
    set(() => ({
      repositories: repos,
    })),
}));
