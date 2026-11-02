type HeroProps = {
  titulo: string;
  descricao: string;
};

export default function Hero({
  titulo,
  descricao,
}: HeroProps) {
  return (
    <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
      <div className="text-center flex flex-col gap-3">

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
          {titulo}
        </h1>

        <p className="text-2xl">
          {descricao}
        </p>

      </div>
    </section>
  );
}