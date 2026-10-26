import { useEffect, useState } from "react";
import axios from "axios";

function JournalList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/entries")
      .then(res => setEntries(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      {entries.map(entry => (
        <div key={entry._id} className="border p-2 mb-2">
          <h2 className="font-bold">{entry.title}</h2>
          <p>{entry.content}</p>
        </div>
      ))}
    </div>
  );
}

export default JournalList;
