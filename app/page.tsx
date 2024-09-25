import { PlayIcon, UserIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image'
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <h1 className="text-5xl font-bold mb-6 animate-bounce">Bienvenue sur l'Application de Jeux Interactifs</h1>
      <p className="mb-8 text-lg">Sélectionnez une section ci-dessous :</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/Enseignants">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <PlayIcon className="h-12 w-12 text-blue-500 mb-2" />
            <h2 className="font-semibold">Créer un Jeu</h2>
          </div>
        </Link>

        <Link href="/apprenants">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <UserIcon className="h-12 w-12 text-green-500 mb-2" />
            <h2 className="font-semibold">Section Apprenants</h2>
          </div>
        </Link>

        <Link href="/performances">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <ChartBarIcon className="h-12 w-12 text-orange-500 mb-2" />
            <h2 className="font-semibold">Consulter Performances</h2>
          </div>
        </Link>

        <Link href="/admin">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <AcademicCapIcon className="h-12 w-12 text-purple-500 mb-2" />
            <h2 className="font-semibold">Admin Dashboard</h2>
          </div>
        </Link>
      </div>
      
      <div className="mt-12">
        <Image  src="/logoTop.png" width={200} height={200} alt="Chapeau de diplômé" className="w-24 animate-pulse" />
      </div>
    </div>
  );
};

export default Home;
