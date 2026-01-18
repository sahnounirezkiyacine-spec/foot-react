function App() {
  const players = [
    {
      name: "Messi",
      team: "Inter Miami",
      age: 36,
      image: "/public/Lionel Messi.png"
    },
    {
      name: "Ronaldo",
      team: "Al Nassr",
      age: 39,
      image: "/public/Cristiano Ronaldo.png"
    },
    {
      name: "Mbappé",
      team: "PSG",
      age: 25,
      image: "/public/Kylian Mbappé.png"
    }
    
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        ⚽ FIFA Players
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >
        {players.map((player, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              width: "230px",
              padding: "15px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
            }}
          >
          
            <img
              src={player.image}
              alt={player.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3 style={{ color: "#2c5364", marginTop: "10px" }}>
              {player.name}
            </h3>
            <p>🏟️ {player.team}</p>
            <p>🎂 {player.age} ans</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
