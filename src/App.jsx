import Navbar from "./components/Navbar";

function App() {
  console.log("Environment Variables:", import.meta.env);
  console.log("API Key:", import.meta.env.VITE_MOVIE_API_KEY);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
