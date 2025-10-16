import { ArrowLeft, Bell, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SaleInformation() {
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
        <div className="flex items-center gap-2 mb-6">
          <div className="text-3xl">🏠</div>
          <h1 className="text-xl font-semibold text-foreground">Informe os dados da venda</h1>
        </div>

        <div className="bg-[#1a5f1a] text-white p-3 rounded-lg mb-6">
          <h2 className="font-semibold mb-2">Detalhes de venda</h2>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-foreground mb-1 block">Valor da venda:</label>
              <Input 
                type="text"
                defaultValue="R$ 720.000,00"
              />
            </div>
            <div>
              <label className="text-sm text-foreground mb-1 block">Percentual da comissão:</label>
              <Input 
                type="text"
                defaultValue="6%"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-foreground mb-1 block">Tipo de comissão:</label>
              <Select defaultValue="dividida">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dividida">Dividida em partes iguais</SelectItem>
                  <SelectItem value="personalizada">Personalizada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-foreground mb-1 block">Data da venda:</label>
              <Input 
                type="text"
                defaultValue="21/04/2021"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-foreground mb-2">
              Parceiros envolvidos: Você, Bruno Pereira + 1
            </p>
          </div>

          <div className="bg-[#1a5f1a] text-white p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Uploads de documentos sobre a venda</h3>
          </div>

          <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center">
            <Upload className="h-12 w-12 text-muted-foreground mb-2" />
          </div>

          <div>
            <p className="text-sm text-foreground mb-3">Status alterado pelo parceiro:</p>
            <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a]">
              Confirmar alterações
            </Button>
          </div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
