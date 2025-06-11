const preguntas = [
  { pregunta: "¿Qué es un dron?", opciones: ["Un robot submarino", "Un dispositivo volador no tripulado", "Una herramienta de jardinería"], respuestaCorrecta: 1 },
  { pregunta: "¿Cuál es una de las funciones principales de un dron militar?", opciones: ["Limpieza de calles", "Exploración y vigilancia", "Fabricación de piezas"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué componente permite que un dron vuele?", opciones: ["Ruedas", "Motores y hélices", "Panel solar"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué ley física explica que un dron se eleva al empujar aire hacia abajo?", opciones: ["Primera Ley de Newton", "Tercera Ley de Newton", "Ley de Ohm"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué fuerza se opone al movimiento del dron en el aire?", opciones: ["Empuje", "Gravedad", "Resistencia del aire"], respuestaCorrecta: 2 },
  { pregunta: "¿Cuál es la función del ESC en un dron?", opciones: ["Grabar video", "Regular la velocidad del motor", "Detectar obstáculos"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué tipo de batería utilizan comúnmente los drones?", opciones: ["Alcalina", "Litio-ion", "Polímero de litio"], respuestaCorrecta: 2 },
  { pregunta: "¿Qué estudia la aerodinámica en los drones?", opciones: ["La señal del GPS", "El flujo del aire y la sustentación", "La batería del dron"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué causa la sustentación en un dron?", opciones: ["La gravedad", "La presión diferencial en las hélices", "El peso del dron"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué debe superar el empuje para que el dron se eleve?", opciones: ["La resistencia del aire", "El peso", "La presión"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué tipo de motor usan los drones modernos?", opciones: ["De combustión interna", "Brushless (sin escobillas)", "Motores hidráulicos"], respuestaCorrecta: 1 },
  { pregunta: "¿Cuál es una función de la IMU en un dron?", opciones: ["Grabar video", "Detectar movimientos y orientación", "Enviar mensajes"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué área matemática ayuda a describir trayectorias en el espacio?", opciones: ["Estadística", "Ecuaciones paramétricas", "Aritmética"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué algoritmos ayudan a trazar rutas para drones?", opciones: ["A* y Dijkstra", "Newton y Gauss", "Turing y Fibonacci"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué función trigonométrica se usa para calcular rotaciones en drones?", opciones: ["Seno", "Raíz cuadrada", "Logaritmo"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué se utiliza para evitar el gimbal lock al rotar un dron?", opciones: ["Vectores normales", "Matrices de rotación", "Cuaterniones"], respuestaCorrecta: 2 },
  { pregunta: "¿Qué elemento del dron permite conocer su altitud mediante presión?", opciones: ["GPS", "IMU", "Barómetro"], respuestaCorrecta: 2 },
  { pregunta: "¿Qué sensor permite evitar obstáculos cercanos?", opciones: ["Sensor de humedad", "Ultrasonido o LIDAR", "Sensor de humo"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué ciencia permite planificar vuelos y analizar mapas?", opciones: ["Biología", "Geografía", "Química"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué técnica permite construir modelos 3D desde fotos de drones?", opciones: ["Fotogrametría", "Radiometría", "Cartografía"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué indica un mapa topográfico creado por un dron?", opciones: ["El clima", "Elevaciones del terreno", "La densidad poblacional"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué se busca minimizar en el diseño aerodinámico del dron?", opciones: ["La sustentación", "La turbulencia", "La velocidad"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué ocurre si un dron vuela sobre zonas boscosas?", opciones: ["Mejor señal GPS", "Requiere vuelos más altos y maniobras precisas", "No hay ningún problema"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué uso geográfico tienen los drones en desastres naturales?", opciones: ["Transporte de alimentos", "Vigilancia y monitoreo de zonas de riesgo", "Cargar personas"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué tipo de análisis permite detectar deforestación?", opciones: ["Análisis de voltaje", "Análisis espacial", "Análisis térmico"], respuestaCorrecta: 1 }
];

const maxPreguntas = 10;

function cargarPreguntas() {
  const seleccionadas = preguntas.sort(() => 0.5 - Math.random()).slice(0, maxPreguntas);
  const formulario = document.getElementById("quizForm");
  formulario.innerHTML = "";

  seleccionadas.forEach((p, index) => {
    const div = document.createElement("div");
    div.classList.add("mb-3");
    div.innerHTML = `
      <strong>${index + 1}. ${p.pregunta}</strong><br>
      ${p.opciones.map((opcion, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${opcion}
        </label><br>
      `).join('')}
    `;
    formulario.appendChild(div);
  });

  // Guardamos las respuestas correctas para evaluar después
  window.respuestasCorrectas = seleccionadas.map(p => p.respuestaCorrecta);
}

function evaluarQuiz() {
  let correctas = 0;
  for (let i = 0; i < maxPreguntas; i++) {
    const seleccionada = document.querySelector(`input[name="q${i}"]:checked`);
    const opciones = document.querySelectorAll(`input[name="q${i}"]`);

    opciones.forEach(opc => {
      opc.parentElement.style.color = "";
      opc.parentElement.classList.remove("correct", "incorrect");
    });

    if (seleccionada && parseInt(seleccionada.value) === window.respuestasCorrectas[i]) {
      correctas++;
      opciones[window.respuestasCorrectas[i]].parentElement.classList.add("correct");
    } else {
      opciones[window.respuestasCorrectas[i]].parentElement.classList.add("correct");
      if (seleccionada) {
        opciones[parseInt(seleccionada.value)].parentElement.classList.add("incorrect");
      }
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `Tu puntaje fue <strong>${correctas}</strong> de <strong>${maxPreguntas}</strong>.`;

  mostrarMensajeFinal(correctas);
}

function mostrarMensajeFinal(score) {
  const mensaje = document.createElement("div");
  mensaje.classList.add("mensaje-final");

  if (score === 10) {
    mensaje.textContent = "¡Excelente! 🌟";
  } else if (score >= 8) {
    mensaje.textContent = "¡Felicidades! Muy bien hecho 🎉";
  } else if (score === 7) {
    mensaje.textContent = "¡Muy bien! 👍";
  } else {
    mensaje.textContent = "¡No te rindas! Sigue practicando 💪";
  }

  document.body.appendChild(mensaje);

  // Animación y desaparición después de 5 segundos
  setTimeout(() => {
    mensaje.classList.add("desvanecer");
    setTimeout(() => mensaje.remove(), 2000);
  }, 3000);
}


// Cargar preguntas al iniciar
window.onload = cargarPreguntas;