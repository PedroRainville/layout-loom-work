import { ArrowLeft, Bell, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function EditProperty() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </button>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="text-sm text-foreground">Yuri Santana</span>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs">YS</span>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-3xl">🏠</div>
          <h1 className="text-xl font-semibold text-foreground">Meus Imóveis</h1>
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-6">Editar Dados do Imóvel</h2>

        <form className="space-y-4">
          <div>
            <Input 
              type="text"
              value="Casa Alto Padrão"
              readOnly
            />
          </div>

          <div className="relative">
            <Input 
              type="text"
              value="Centro"
              readOnly
            />
            <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          <div>
            <Input 
              type="text"
              value="R$ 750.000,00"
              readOnly
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Tipo do Imóvel: Casa</span>
            <Button variant="link" className="text-primary text-sm p-0">
              Alterar
            </Button>
          </div>

          <Button className="w-full mt-8">
            Confirmar alterações
          </Button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
