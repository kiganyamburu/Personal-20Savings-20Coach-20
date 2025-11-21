import { Link } from "react-router-dom";
import { PiggyBank } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
        >
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-2 flex items-center justify-center">
            <PiggyBank className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-bold text-lg">
            Savings Coach
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/chat"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Chat
          </Link>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
