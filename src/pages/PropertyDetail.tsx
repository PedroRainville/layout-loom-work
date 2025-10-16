import { ArrowLeft, Bell, Share2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PropertyDetail() {
  const navigate = useNavigate();
  const [showAcceptDialog, setShowAcceptDialog] = useState(false);

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

          <div className="space-y-1 text-sm text-foreground mb-4">
            <p><strong>Região:</strong> São Paulo - Centro</p>
            <p><strong>Valor aproximado:</strong> R$ 700.000,00</p>
          </div>

          <div className="space-y-3">
            <Button className="w-full">
              Responder oferecendo imóvel
            </Button>
            <Button variant="outline" className="w-full">
              Compartilhar com meus parceiros
            </Button>
          </div>
        </div>

        {/* Property details section - shown when responding */}
        <div className="border-t border-border pt-6 mb-6">
          <p className="text-sm font-semibold mb-4">Descrição: Casa Alto Padrão</p>
          
          <div className="bg-muted rounded-lg p-3 mb-4">
            <img 
              src="/placeholder.svg" 
              alt="Property" 
              className="w-full h-32 object-cover rounded mb-2"
            />
          </div>

          <div className="space-y-2 text-sm mb-4">
            <p><strong>Valor de venda:</strong> 750.000,00</p>
            <p><strong>Região:</strong> Centro</p>
            <p><strong>Status da venda:</strong> Em aberto</p>
            <p><strong>Vendedor principal:</strong> Você</p>
            <p><strong>Percentual de Comissão:</strong> 6%</p>
            <p><strong>Percentual de Parceiro:</strong> Dividido em partes iguais</p>
          </div>

          <div className="border border-border rounded-lg p-4 mb-4">
            <p className="text-center font-semibold text-lg">Situação atual da divisão:</p>
            <p className="text-center text-2xl font-bold mt-2">Yuri Santana + 0</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="text-xs"
              onClick={() => setShowAcceptDialog(true)}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Imóvel Compartilhado
            </Button>
            <Button variant="outline" className="text-xs">
              <X className="h-4 w-4 mr-1" />
              Cancelar Vínculo
            </Button>
          </div>
        </div>

        <Button variant="outline" className="w-full mb-3">
          Compartilhar com meus parceiros
        </Button>

        <Button className="w-full">Voltar</Button>
      </div>

      <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">
              O Parceiro Bruno Pereira aceitou o seu imóvel. Aceita negociar a venda junto com ele?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="grid grid-cols-2 gap-3">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => setShowAcceptDialog(false)}
            >
              Sim
            </Button>
            <Button 
              variant="destructive"
              onClick={() => setShowAcceptDialog(false)}
            >
              Não
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
}
