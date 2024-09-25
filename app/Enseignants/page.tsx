"use client"
import { useState } from 'react';
import { PlayIcon, UserIcon } from '@heroicons/react/outline';

const Enseignants = () => {
  const [games, setGames] = useState<string[]>([]);
  const [newGame, setNewGame] = useState('');
  const [performances, setPerformances] = useState<{ name: string; score: number }[]>([
    { name: 'Gloire', score: 85 },
    { name: 'Marcel', score: 90 },
    { name: 'Ned', score: 75 },
  ]);

  const handleCreateGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGame.trim()) {
      setGames([...games, newGame]);
      setNewGame('');
    }
  };

  return (
    <div className="p-6 mt-20 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Section Enseignants</h2>
      
      {/* Formulaire de création de jeu */}
      <form onSubmit={handleCreateGame} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newGame}
            onChange={(e) => setNewGame(e.target.value)}
            placeholder="Nom du nouveau jeu"
            className="border border-gray-300 p-2 flex-grow rounded-l-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          >
            <PlayIcon className="h-5 w-5 inline" /> Créer
          </button>
        </div>
      </form>

      {/* Liste des jeux créés */}
      <h3 className="mt-6 text-lg font-semibold">Jeux Créés :</h3>
      <ul className="list-disc list-inside mb-4">
        {games.length > 0 ? (
          games.map((game, index) => <li key={index}>{game}</li>)
        ) : (
          <li>Aucun jeu créé pour le moment.</li>
        )}
      </ul>

      {/* Section des performances */}
      <h3 className="mt-6 text-lg font-semibold">Performances des Apprenants :</h3>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {performances.map((performance, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{performance.name}</td>
              <td className="border px-4 py-2">{performance.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enseignants;
