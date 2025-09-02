import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-gray-800">
        Bem-vindo ao Editor de Currículo
      </h1>
      <p className="mb-8 max-w-2xl text-xl text-gray-600">
        Crie um currículo profissional em minutos. Preencha seus dados e veja a
        mágica acontecer!
      </p>
      <Link
        to="/editor"
        className="transform rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-transform hover:scale-105 hover:bg-blue-700"
      >
        Começar a Criar Agora
      </Link>
    </div>
  );
}

export default HomePage;
