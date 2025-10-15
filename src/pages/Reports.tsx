import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/BottomNav";

export default function Reports() {
  const navigate = useNavigate();

  const stats = [
    { label: "Imóveis Cadastrados", value: "2", color: "bg-[#FF00FF]" },
    { label: "Imóveis Solicitados", value: "1", color: "bg-[#0000FF]" },
    { label: "Alertas para mim", value: "1", color: "bg-[#006400]" },
    { label: "Parceiros", value: "5", color: "bg-[#DC143C]" },
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
          <h1 className="text-xl font-semibold text-foreground">Relatórios</h1>
        </div>

        <Input 
          type="text"
          placeholder="Mês / Ano de Referência"
          className="mb-6"
        />

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-lg p-6 text-white flex flex-col justify-between min-h-[120px]`}
            >
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-4xl font-bold text-right">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
