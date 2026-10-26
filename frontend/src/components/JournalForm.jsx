import { useState } from "react";
import axios from "axios";

function JournalForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/entries", {
        title,
        content,
      });
      console.log("Saved:", res.data);   // ✅ check connection
      alert("Entry saved successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Error saving entry");
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Save Entry</button>
    </div>
  );
}

export default JournalForm;
