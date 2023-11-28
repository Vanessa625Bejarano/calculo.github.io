const API_KEY = "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";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      // prompt: "give a random example of programming language",
      prompt: prompt,
      max_tokens: 500,
    }),
  });

  const data = await response.json();
  // console.log(data)
  return data;
}

// getCompletion()

const prompt1 = " genera una integral definada con valores ";
const button1 = document.querySelector("#generate1");
const output1 = document.querySelector("#output1");

button1.addEventListener("click", async () => {
  console.log(prompt1.value);

  if (!prompt1) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt1);
  console.log(response);
  output1.innerHTML = response.choices[0].text;
});

const prompt2 = "genera una integral indefinida";
const button2 = document.querySelector("#generate2");
const output2 = document.querySelector("#output2");

button2.addEventListener("click", async () => {
  console.log(prompt2.value);

  if (!prompt2) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt2);
  console.log(response);
  output2.innerHTML = response.choices[0].text;
});

const prompt3 = "genera un problema de una integracion por fracciones parciales sin respuesta";
const button3 = document.querySelector("#generate3");
const output3 = document.querySelector("#output3");

button3.addEventListener("click", async () => {
  console.log(prompt3.value);

  if (!prompt3) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt3);
  console.log(response);
  output3.innerHTML = response.choices[0].text;
});

particlesJS(
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
