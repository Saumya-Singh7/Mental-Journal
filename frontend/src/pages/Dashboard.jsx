import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEntries: 0,
    thisWeek: 0,
    mood: "—",
  });

  useEffect(() => {
    api.get("/api/entries/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-24 px-8">
      <h2 className="text-3xl font-bold mb-6">Welcome Back, Saumya!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Entries</h3>
          <p className="text-2xl font-bold">{stats.totalEntries}</p>
        </div>
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">This Week</h3>
          <p className="text-2xl font-bold">{stats.thisWeek}</p>
        </div>
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Mood</h3>
          <p className="text-2xl font-bold">{stats.mood}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;