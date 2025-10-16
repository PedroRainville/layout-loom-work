import { ArrowLeft, Search, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function InvitesReceived() {
  const navigate = useNavigate();

  const invites = [
    {
      name: "José Almeida",
      creci: "CRECI 1478 - SP",
      hasCommonConnections: true,
    },
    {
      name: "Luis Felipe",
      creci: "CRECI 9687 - SP",
      hasCommonConnections: true,
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
          <span className="text-sm text-foreground">Yuri Santana</span>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs">YS</span>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Logo size="sm" />
          <h1 className="text-xl font-semibold text-foreground">Convites Recebidos</h1>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="Pesquisar" className="pl-10" />
        </div>

        <div className="space-y-4 mb-6">
          {invites.map((invite, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{invite.name}</h3>
                  <p className="text-sm text-muted-foreground">{invite.creci}</p>
                  {invite.hasCommonConnections && (
                    <button className="text-xs text-primary underline mt-1">
                      1 parceiro em comum com você
                    </button>
                  )}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mb-2 text-xs">
                👁️ Visualizar Dados
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Check className="h-4 w-4 mr-1" />
                  Aceitar
                </Button>
                <Button size="sm" variant="destructive">
                  <X className="h-4 w-4 mr-1" />
                  Recusar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full">Voltar</Button>
      </div>

      <BottomNav />
    </div>
  );
}
