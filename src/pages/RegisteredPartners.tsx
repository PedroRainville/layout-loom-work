import { ArrowLeft, Search, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

export default function RegisteredPartners() {
  const navigate = useNavigate();

  const partners = [
    {
      name: "Eduardo da Silva",
      creci: "CRECI 1234568 - SP",
      phone: "Telefone: (11) 9 9999-9999",
      mobile: "Celular: (11) 9 9999-9999",
      email: "E-mail: eduardosilva@gmail.com",
    },
    {
      name: "Paulo Camargo",
      creci: "CRECI 1234567 - SP",
      phone: "Telefone: (11) 9 9999-9999",
      mobile: "Celular: (11) 9 9999-9999",
      email: "E-mail: paulo@gmail.com",
    },
    {
      name: "João de Almeida",
      creci: "CRECI 1234565 - SP",
      phone: "Telefone: (11) 9 9999-9999",
      mobile: "Celular: (11) 9 9999-9999",
      email: "E-mail: joao@gmail.com",
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
        <div className="flex items-center gap-2 mb-4">
          <Logo size="sm" />
          <h1 className="text-xl font-semibold text-foreground">Parceiros cadastrados</h1>
        </div>

        <p className="text-xs text-red-600 mb-4">
          Atenção! Os parceiros cadastrados de outra maneira não será cadastrado aqui! 
          Somente os que você cadastrar manualmente.
        </p>

        <Button className="w-full mb-4" onClick={() => navigate("/partner-register")}>
          + Adicionar
        </Button>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="Pesquisar" className="pl-10" />
        </div>

        <div className="space-y-4 mb-6">
          {partners.map((partner, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Nome: {partner.name}</h3>
                  <p className="text-xs text-muted-foreground">{partner.creci}</p>
                  <p className="text-xs text-muted-foreground">{partner.phone}</p>
                  <p className="text-xs text-muted-foreground">{partner.mobile}</p>
                  <p className="text-xs text-muted-foreground">{partner.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => navigate("/partner-edit")}
                >
                  <Pencil className="h-3 w-3 mr-1" />
                  Editar
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <Trash2 className="h-3 w-3 mr-1" />
                  Excluir
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
