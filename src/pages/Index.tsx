import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-12">
        <Logo />

        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/login")}
            className="w-full" 
            size="lg"
          >
            ENTRAR
          </Button>

          <Button 
            onClick={() => navigate("/signup-confirmation")}
            variant="outline"
            className="w-full" 
            size="lg"
          >
            CRIAR CONTA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
