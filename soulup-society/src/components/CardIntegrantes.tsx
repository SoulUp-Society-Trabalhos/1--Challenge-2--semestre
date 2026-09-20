type CardIntegranteProps = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

export default function CardIntegrantes({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: CardIntegranteProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        className="mx-auto w-48 h-48 object-cover rounded-full m-3!"
      />

      <div className="mt-4! text-center">
        <h3 className="text-lg font-bold p-1!">
          {nome}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Aluno - RM{rm}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Turma - {turma}
        </p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="integrantes__redes"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="integrantes__redes"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}