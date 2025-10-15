import { Home } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "lg" }: LogoProps) => {
  const sizes = {
    sm: {
      icon: "h-6 w-6",
      sideIcon: "h-4 w-4",
      text: "text-lg",
      box: "w-4 h-4",
    },
    md: {
      icon: "h-10 w-10",
      sideIcon: "h-6 w-6",
      text: "text-xl",
      box: "w-5 h-5",
    },
    lg: {
      icon: "h-14 w-14",
      sideIcon: "h-8 w-8",
      text: "text-2xl",
      box: "w-4 h-4",
    },
  };

  const currentSize = sizes[size];

  if (size === "sm") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center">
          <div className={`${currentSize.box} border-2 border-foreground rounded-sm`} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div className="flex items-center justify-center">
          <Home className={`${currentSize.sideIcon} text-foreground absolute -left-8 -top-2 rotate-12`} strokeWidth={2.5} />
          <Home className={`${currentSize.icon} text-foreground z-10`} strokeWidth={2.5} />
          <Home className={`${currentSize.sideIcon} text-foreground absolute -right-8 -top-2 -rotate-12`} strokeWidth={2.5} />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground rounded-full" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className={`${currentSize.box} border-2 border-foreground rounded-sm`} />
        </div>
        <h1 className={`${currentSize.text} font-bold tracking-wide text-foreground`}>
          CLICK BUSINESS
        </h1>
      </div>
    </div>
  );
};

export default Logo;
