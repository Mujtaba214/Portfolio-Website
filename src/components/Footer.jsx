import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-8 bg-card relative border-t border-border mt-12 flex flex-wrap justify-center items-center text-center">
      {" "}
      <p className="text-sm text-center text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Mujtaba.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 ml-6 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
