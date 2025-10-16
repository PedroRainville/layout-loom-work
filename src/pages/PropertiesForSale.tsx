import { ArrowLeft, Search, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function PropertiesForSale() {
  const navigate = useNavigate();

  const statusOptions = ["Todos", "Não Respondido", "Em negociação", "Bloqueado", "Vendido"];

  const properties = [
    {
      name: "Bruno Pereira",
      creci: "CRECI 1234 - SP",
      message: "Olá Yuri Santana!\nEstou à procura de uma casa de alto padrão no centro de São Paulo, poderia me ajudar?",
      region: "Região: São Paulo - Centro",
      value: "Valor aproximado: R$ 700.000,00",
      status: "Não Respondido",
    },
    {
      name: "Cesar Augusto",
      creci: "CRECI 1234 - SP",
      message: "Olá Yuri Santana!\nEstou à procura de um apartamento de alto padrão no centro de São Paulo, poderia me ajudar?",
      region: "Região: São Paulo - Centro",
      value: "Valor aproximado: R$ 700.000,00",
      status: "Em negociação",
      propertyCode: "Código do Imóvel: 1",
    },
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
        <div className="flex items-center gap-2 mb-4">
          <Logo size="sm" />
          <div>
            <h1 className="text-xl font-semibold text-foreground">Imóveis a Venda</h1>
            <p className="text-xs text-muted-foreground">Status: Não Respondido</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold mb-2">Status</p>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status, index) => (
              <Button
                key={index}
                variant={status === "Não Respondido" ? "default" : "outline"}
                size="sm"
                className="text-xs"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        <p className="text-xs text-red-600 mb-4">
          O status bloqueado é utilizado apenas para casos de mais pedir excluir
        </p>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="Pesquisar" className="pl-10" />
        </div>

        <div className="space-y-4 mb-6">
          {properties.map((property, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{property.name}</h3>
                  <p className="text-xs text-muted-foreground">{property.creci}</p>
                </div>
              </div>
              <p className="text-sm text-foreground mb-2 whitespace-pre-line">{property.message}</p>
              <p className="text-xs text-muted-foreground">{property.region}</p>
              <p className="text-xs text-muted-foreground mb-2">{property.value}</p>
              <p className="text-xs font-semibold text-foreground mb-2">Status: {property.status}</p>
              {property.propertyCode && (
                <p className="text-xs text-muted-foreground mb-2">{property.propertyCode}</p>
              )}
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  size="sm" 
                  className="text-xs"
                  onClick={() => navigate("/property-detail")}
                >
                  ↩️ Responder
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  🚫 Ignorar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
