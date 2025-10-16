import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function MyProperties() {
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Editar Dados do Imóvel", path: "/edit-property" },
    { label: "Imóvel como parte do pagamento ou troca", path: "#" },
    { label: "Direto com o proprietário?", path: "#" },
    { label: "Comissão", path: "#" },
    { label: "Fotos / Vídeos do Imóvel", path: "#" },
    { label: "Documentações do Imóvel", path: "#" },
    { label: "Informações sobre a venda do Imóvel", path: "#" },
  ];

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

        <div className="space-y-3">
          {menuOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full h-auto py-4 text-sm justify-start"
              onClick={() => option.path !== "#" && navigate(option.path)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <p className="text-xs text-red-600 mt-6">
          Essas informações só vai aparecer se o imóvel for vendido
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
