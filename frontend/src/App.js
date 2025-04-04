import { useState } from "react";
import axios from "axios";

function App() {
    const [lyrics, setLyrics] = useState('');
  
    const fetchLyrics = async () => {
      try {
        const artist = 'Coldplay';
        const title = 'Adventure of a Lifetime';
        const res = await axios.get(`/api/lyrics/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
        setLyrics(res.data.lyrics);
      } catch (err) {
        console.error(err);
        setLyrics('Lyrics not found 😢');
      }
    };
  
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>🎶 Sing-Along App</h1>
        <button onClick={fetchLyrics}>Get Lyrics for "Adventure of a Lifetime"</button>
        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>{lyrics}</pre>
      </div>
    );
  }
  
  export default App;