import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function Partners() {
  const navigate = useNavigate();

  const searchResults = [
    {
      name: "Bruno Pereira",
      commonConnections: 1,
      isConnected: true,
    },
    {
      name: "Bruno dos Santos",
      commonConnections: 0,
      isConnected: false,
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
          <h1 className="text-xl font-semibold text-foreground">Parceiros</h1>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="Bruno" className="pl-10" />
        </div>

        <div className="space-y-3 mb-6">
          {searchResults.map((result, index) => (
            <div key={index} className="border border-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{result.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {result.commonConnections} parceiro{result.commonConnections !== 1 ? 's' : ''} em comum com você
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-xs">
                {result.isConnected ? "Sua conexão" : "Enviar Convite"}
              </Button>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full bg-green-700 hover:bg-green-800 text-white relative"
            onClick={() => navigate("/my-connections")}
          >
            Minhas Conexões
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              1
            </span>
          </Button>
          
          <Button 
            className="w-full bg-green-700 hover:bg-green-800 text-white relative"
            onClick={() => navigate("/invites-received")}
          >
            Convites Recebidos
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              2
            </span>
          </Button>
          
          <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
            Convites Enviados
          </Button>
          
          <Button 
            className="w-full bg-green-700 hover:bg-green-800 text-white"
            onClick={() => navigate("/registered-partners")}
          >
            Parceiros cadastrados por mim
          </Button>
        </div>

        <p className="text-xs text-red-600 mt-4">
          Atenção: se durante o cadastro o sistema reconhecer o parceiro pelo Telefone e E-mail, 
          ele retornará uma mensagem informando que ele já está cadastrado e mostrará a partir 
          de quando você já conectado para este parceiro.
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
