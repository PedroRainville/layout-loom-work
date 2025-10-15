import { ArrowLeft, User, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PartnerEdit() {
  const navigate = useNavigate();
  const [showPropertyTypeDialog, setShowPropertyTypeDialog] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState("Todos os tipos de imóveis");

  const propertyTypes = [
    "Todos os tipos de imóveis",
    "Apartamento",
    "Área para Loteamento",
    "Casa",
    "Casa de Condomínio",
    "Cobertura",
    "Comercial",
    "Edifício Residencial",
    "Fazenda / Sítios / Chácaras",
    "Galpão",
    "Internacional (País)",
    "Kitnet / Conjugado",
    "Lote / Terreno",
    "Praia",
    "Sobrado",
    "Veraneio / Montanha / Estância",
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </button>
        <span className="text-sm text-foreground">Yuri Santana</span>
      </div>

      {/* Content */}
      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Logo size="sm" />
          <h1 className="text-xl font-semibold text-foreground">Alterar dados do Parceiro</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Nome: Eduardo da Silva</label>
            <Input type="text" placeholder="Apelido" />
          </div>

          <div className="flex items-center gap-2">
            <Input type="text" value="REFCRECI: 1234568" readOnly className="flex-1" />
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              onClick={() => setShowPropertyTypeDialog(true)}
            >
              <span className="text-xl">⚙️</span>
            </Button>
          </div>

          <div>
            <Input type="tel" value="Telefone: [11] 5555-5555" readOnly />
          </div>

          <div>
            <Input type="tel" placeholder="Celular" />
          </div>

          <div>
            <Input type="email" value="E-mail: eduardo@example.com" readOnly />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Apelido principal: Casa</span>
            <Button variant="link" className="text-secondary text-sm p-0 h-auto">
              Outros Itens
            </Button>
          </div>

          {/* Meu Endereço Section */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5" />
              <h2 className="font-semibold text-foreground">Meu Endereço</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Input type="text" placeholder="Cep" className="flex-1" />
                <Button variant="link" className="text-secondary text-sm">
                  Editar meu cep
                </Button>
              </div>

              <Input type="text" placeholder="Endereço" />

              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="Número" />
                <Input type="text" placeholder="Complemento" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
              </div>

              <Input type="text" placeholder="Estado" />
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="pt-4">
            <h2 className="font-semibold text-foreground mb-4">Imagem do perfil</h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-2">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
              <Button variant="link" className="text-secondary text-sm">
                Procurar imagem
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-4">
            <p className="text-sm text-center text-foreground mb-4">
              Deseja enviar convite para a parceria se cadastrar no sistema?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="flex flex-col items-center gap-2"
                onClick={() => window.open(`https://wa.me/`, '_blank')}
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-foreground">Whatsapp</span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center gap-2"
                onClick={() => window.open(`mailto:`, '_blank')}
              >
                <div className="w-12 h-12 bg-muted border border-border rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <span className="text-xs text-foreground">E-mail</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-4">
            Situação do convite: Não Enviado
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <Button
              type="button"
              variant="destructive"
              onClick={() => navigate(-1)}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              Adicionar
            </Button>
          </div>
        </form>
      </div>

      {/* Property Type Dialog */}
      <Dialog open={showPropertyTypeDialog} onOpenChange={setShowPropertyTypeDialog}>
        <DialogContent className="max-w-sm max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Alterar dados do Parceiro</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-semibold mb-4">Apelido principal</h3>
            <RadioGroup value={selectedPropertyType} onValueChange={setSelectedPropertyType}>
              {propertyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type} className="font-normal cursor-pointer flex-1">
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowPropertyTypeDialog(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => setShowPropertyTypeDialog(false)}
              className="flex-1"
            >
              Ok
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
}
