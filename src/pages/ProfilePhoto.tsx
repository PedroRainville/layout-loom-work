import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProfilePhoto() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-xl font-semibold text-foreground mb-12 text-center">
          Carregar imagem do perfil
        </h1>

        <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-6 overflow-hidden">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User className="h-16 w-16 text-muted-foreground" />
          )}
        </div>

        <label htmlFor="photo-upload" className="cursor-pointer">
          <span className="text-secondary text-sm">Procurar imagem</span>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <span className="text-muted-foreground text-xs mt-1">*Opcional</span>

        <Button 
          className="w-full mt-32"
          onClick={() => navigate("/partner-edit")}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
}
