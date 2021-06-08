import React from "react"
import Particles from "react-particles-js"
import "./_particles.scss"

const ParticlesComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          size_random: true,
          size: {
            anim: { enable: true },
            value: 3,
          },
          opacity: {
            anim: { enable: true },
          },
          move: {
            speed: 1,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          resize: true,
        },
        retina_detect: true,
      }}
    />
  )
}

export default ParticlesComponent

/* number: {
            value: 100,
          }, */
