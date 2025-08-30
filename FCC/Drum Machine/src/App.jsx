import { useState, useEffect } from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const pads = [
    {
      key: "Q",
      id: "heater-1",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      key: "W",
      id: "heater-2",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      key: "E",
      id: "heater-3",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      key: "A",
      id: "heater-4",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      key: "S",
      id: "clap",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      key: "D",
      id: "open-hh",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      id: "kicknh",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      id: "kick",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      id: "closed-hh",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const pad = pads.find((p) => p.key === key);
    if (pad) playAudio(key);
  };

  const playAudio = (key) => {
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setDisplay(audio.parentElement.id);
  };

  return (
    <Container className="text-center mt-5 border rounded-3">
      <Row>
        <Col>
          <h2 id="display primary-text">{display}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {pads.map((pad) => (
          <Col xs="4" className="mb-3" key={pad.key}>
            <Button
              className="drum-pad w-100"
              id={pad.id}
              variant="secondary"
              onClick={() => playAudio(pad.key)}
            >
              {pad.key}
              <audio className="clip" id={pad.key} src={pad.src}></audio>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
