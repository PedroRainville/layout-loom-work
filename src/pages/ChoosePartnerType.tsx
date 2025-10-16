import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function ChoosePartnerType() {
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
        <div className="flex items-center gap-2 mb-4">
          <div className="text-3xl">🏠</div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Imóveis a Venda</h1>
            <p className="text-xs text-muted-foreground">Status: Não Respondido</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Bruno Pereira</h3>
              <p className="text-xs text-muted-foreground">CRECI 1234 - SP</p>
            </div>
          </div>

          <p className="text-sm text-foreground mb-4">
            Olá Yuri Santana!<br />
            Estou à procura de uma casa de alto padrão no centro de São Paulo, poderia me ajudar?
          </p>

          <div className="space-y-1 text-sm text-foreground mb-6">
            <p><strong>Região:</strong> São Paulo - Centro</p>
            <p><strong>Valor aproximado:</strong> R$ 700.000,00</p>
          </div>

          <div className="space-y-3 mb-6">
            <Button variant="outline" className="w-full">
              Responder oferecendo imóvel
            </Button>
            <Button variant="outline" className="w-full">
              Compartilhar com meus parceiros
            </Button>
          </div>

          <div className="bg-[#1a5f1a] text-white p-3 rounded-lg mb-4">
            <p className="text-center font-semibold">Escolha o tipo de parceiro</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button 
              className="bg-[#1e40af] hover:bg-[#1e3a8a]"
              onClick={() => navigate("/my-connections")}
            >
              Minhas Conexões
            </Button>
            <Button 
              className="bg-[#1e40af] hover:bg-[#1e3a8a]"
              onClick={() => navigate("/registered-partners")}
            >
              Parceiros Cadastrados
            </Button>
          </div>
        </div>

        <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] mb-8">
          Voltar
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
