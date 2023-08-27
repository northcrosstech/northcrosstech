(async () => {
    // await loadLinksPreset(tsParticles); // this is required only if you are not using the bundle script
    await tsParticles.load("tsparticles", {
        background: {
            color: {
                value: "#ffff",
            }
        },
        fullScreen: false,
        particles: {
            color: {
                value: '#C2BABA'
            },
            opacity: {
              value: 0.5
            },
            lineLinked: {
                color: {
                    value: '#000000'
                },
                consent: true
            }
        },
        preset: "snow",
    });
})();

// (async () => {
//     await loadPolygonPath(tsParticles);
  
//     await tsParticles.load("tsparticles-hex", {
//       particles: {
//         color: {
//           value: "#FFC709",
//           animation: {
//             enable: true,
//             speed: 10
//           }
//         },
//         move: {
//           attract: {
//             enable: false,
//             distance: 100,
//             rotate: {
//               x: 2000,
//               y: 2000
//             }
//           },
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "destroy"
//           },
//           path: {
//             clamp: false,
//             enable: true,
//             delay: {
//               value: 0
//             },
//             generator: "polygonPathGenerator",
//             options: {
//               sides: 6,
//               turnSteps: 30,
//               angle: 30
//             }
//           },
//           random: false,
//           speed: 3,
//           straight: false,
//           trail: {
//             fillColor: "#ffff",
//             length: 20,
//             enable: true
//           }
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 800
//           },
//           value: 0
//         },
//         opacity: {
//           value: 1
//         },
//         shape: {
//           type: "circle"
//         },
//         size: {
//           value: 2
//         }
//       },
//       background: {
//         color: {
//             value: "#ffff"
//         }
//       },
//       fullScreen: false,
//       emitters: {
//         direction: "none",
//         rate: {
//           quantity: 1,
//           delay: 0.25
//         },
//         size: {
//           width: 0,
//           height: 0
//         },
//         position: {
//           x: 50,
//           y: 50
//         }
//       }
//     });
//   })();