import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function PartnerRegister() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Logo size="sm" />
          <h1 className="text-xl font-semibold text-foreground">Cadastro de Parceiro</h1>
        </div>

        <form className="space-y-4">
          <div>
            <Input 
              type="text"
              placeholder="Nome"
            />
          </div>

          <div>
            <Input 
              type="text"
              placeholder="Apelido"
            />
          </div>

          <div>
            <Input 
              type="text"
              placeholder="Nr CRECI (campo opcional)"
            />
          </div>

          <div>
            <Input 
              type="tel"
              placeholder="Telefone"
            />
          </div>

          <div>
            <Input 
              type="tel"
              placeholder="Celular"
            />
          </div>

          <div>
            <Input 
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div>
            <Textarea 
              placeholder="Observações"
              className="min-h-[100px]"
            />
          </div>

          <Button 
            type="button"
            className="w-full"
            onClick={() => navigate("/profile-photo")}
          >
            Avançar
          </Button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
