import { Home } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div className="flex items-center justify-center">
          <Home className="h-8 w-8 text-foreground absolute -left-8 -top-2 rotate-12" strokeWidth={2.5} />
          <Home className="h-14 w-14 text-foreground z-10" strokeWidth={2.5} />
          <Home className="h-8 w-8 text-foreground absolute -right-8 -top-2 -rotate-12" strokeWidth={2.5} />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground rounded-full" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-foreground rounded-sm" />
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-foreground">
          CLICK BUSINESS
        </h1>
      </div>
    </div>
  );
};

export default Logo;
