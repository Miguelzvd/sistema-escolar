export function About() {
  return (
    <section className="mt-24 font-roboto h-fit text-white text-justify p-5 flex flex-col justify-center gap-10">
      <h1 className="text-3xl md:text-4xl font-bold">Sobre</h1>
      {/* Conteudo */}
      <div className="w-[60%]">
        O sistema de gestão escolar foi desenvolvido com o objetivo de facilitar
        o acesso às informações da instituição, dos gestores e dos alunos. A
        plataforma permitirá que os pais possam buscar e analisar o status de
        matrícula, bem como o desempenho individual por disciplina, além de
        proporcionar um contato direto com a equipe pedagógica. Para alcançar
        esses objetivos, forão utilizadas as ferramentas de desenvolvimento web,
        como o Node.js, que será responsável pelo gerenciamento do backend, e a
        biblioteca Javascript React para a interface de usuário. Ambos serão
        integrados a um banco de dados programado em MySQL. Com essa abordagem
        moderna e organizada, espera-se criar uma solução eficiente para o
        gerenciamento das atividades escolares.
      </div>
    </section>
  );
}
