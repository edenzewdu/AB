import tsParticles  from "tsparticles";


const updateParticles = () => {
    const particlesConfig = require(`presets/${sessionStorage.preset}.json`);
    tsParticles.load("tsparticles", particlesConfig);
  };

const cmbPreset = document.querySelector("#preset") as HTMLSelectElement;

if (cmbPreset) {
  cmbPreset.addEventListener("change", () => {
    sessionStorage.preset = cmbPreset.value;

    updateParticles();
  });

  if (
    sessionStorage.preset === undefined ||
    sessionStorage.preset === null ||
    sessionStorage.preset === ""
  ) {
    const presets = cmbPreset.querySelectorAll("option");
    const index = Math.floor(presets.length * Math.random());
    const option = presets[index];

    sessionStorage.preset = option.value;
  }

  cmbPreset.value = sessionStorage.preset;

  // Create a new 'change' event
  const event = new Event("change");

  // Dispatch it.
  cmbPreset.dispatchEvent(event);
}
