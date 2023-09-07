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

function submitData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;
    console.log (name,email,phone,msg);
}