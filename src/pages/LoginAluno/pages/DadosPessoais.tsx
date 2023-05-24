import { Card } from "../components";

export function DadosPessoais() {
  return (
    <>
        <Card title="DADOS PESSOAIS">
            <main className="w-full text-white flex flex-col gap-4">
              <div className="w-full h-fit flex flex-row bg-black">
                  <p>Nome:</p>

                  <p></p>
              </div>
              <div className="w-full h-fit flex flex-row bg-black">
                  <p>Nome:</p>
              </div>
              <div className="w-full h-fit flex flex-row bg-black">
                  <p>Nome:</p>
              </div>
              <div className="w-full h-fit flex flex-row bg-black">
                  <p>Nome:</p>
              </div>

            </main>
        </Card>
    </>
  );
}
