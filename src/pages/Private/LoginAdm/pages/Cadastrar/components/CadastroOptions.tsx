import { useNavigate } from "react-router-dom";
import { Button, Card } from "src/components";

export function CadastroOptions() {
  const navigate = useNavigate();

  return (
    <Card title="CADASTRO">
      <main className="p-10 w-[55%] h-full text-black flex flex-col gap-8 justify-around items-center">
        <Button text="Aluno" onClick={() => navigate("student")} />
        <Button text="Professor" onClick={() => navigate("teacher")} />
      </main>
    </Card>
  );
}
