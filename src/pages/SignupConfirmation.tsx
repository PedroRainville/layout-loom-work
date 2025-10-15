import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignupConfirmation = () => {
  const navigate = useNavigate();
  const [email] = useState("yuri.santana@bitflag.systems");

  const handleResendEmail = () => {
    console.log("Resending confirmation email to:", email);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Obrigado pelo Cadastro!
          </h1>

          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">
              Você irá receber em breve um e-mail em
            </p>
            <p className="text-lg font-semibold text-foreground">
              {email}
            </p>
            <p className="text-lg text-muted-foreground">
              com um link para confirmar seu e-mail
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleResendEmail}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            Reenviar e-mail de Confirmação
          </Button>

          <Button
            onClick={() => navigate("/login")}
            className="w-full"
            size="lg"
          >
            Acessar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmation;
