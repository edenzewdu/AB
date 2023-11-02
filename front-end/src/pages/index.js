import { useEffect, useState } from "react";
import { tsParticles } from "tsparticles";

const ParticleComponent = () => {
  const [preset, setPreset] = useState("");

  useEffect(() => {
    const updateParticles = async () => {
      const response = await fetch(`presets/${preset}.json`);
      const particlesConfig = await response.json();
      tsParticles.load("tsparticles", particlesConfig);
    };

    updateParticles();
  }, [preset]);

  const handlePresetChange = (event) => {
    const selectedPreset = event.target.value;
    setPreset(selectedPreset);
  };

  useEffect(() => {
    const presets = document.querySelectorAll("#preset option");
    const index = Math.floor(Math.random() * presets.length);
    const option = presets[index];
    setPreset(option.value);
  }, []);

  return (
    <div>
      <select id="preset" onChange={handlePresetChange} value={preset}>
        {/* Add your options here */}
      </select>
      {/* Other component content */}
    </div>
  );
};

export default ParticleComponent;