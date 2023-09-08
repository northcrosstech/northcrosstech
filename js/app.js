(async () => {
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

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
};

function submitData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("message").value;

    if (name && msg && phone && validateEmail(email)) {
        emailjs.send("service_iulovok", "template_z459sc7", {
            name, email, phone, msg
        }, "PH4yWCVdj-veTtpOy")
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }
}