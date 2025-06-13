let index = 0;

const frases = [
  [
    "Los drones tienen sus raíces en la Primera Guerra Mundial, con aviones controlados a distancia para misiones de reconocimiento y bombardeo.",
    "Se utilizan en misiones de rescate y en situaciones de emergencia, gracias a su capacidad de volar en lugares peligrosos.",
    "Ayudan a los agricultores a monitorear cultivos y aplicar fertilizantes de forma precisa.",
    "Son ideales para inspeccionar infraestructuras y terrenos en lugares de difícil acceso.",
    "Los drones también son usados para crear mapas 3D precisos de terrenos y ciudades.",
    "Algunos drones pueden seguir rutas programadas mediante GPS sin intervención humana.",
    "Drones con cámaras térmicas pueden detectar personas entre los escombros tras un desastre natural."
  ],
  [
    "Algunos drones pueden volar a más de 100 km/h y tienen autonomía de hasta una hora.",
    "Los drones se usan para grabar películas y transmisiones deportivas con tomas aéreas espectaculares.",
    "En arqueología, los drones ayudan a descubrir sitios antiguos sin dañar el terreno.",
    "También se usan para entregar paquetes en zonas rurales o de difícil acceso.",
    "Drones equipados con sensores ayudan a detectar incendios forestales en etapas tempranas.",
    "En eventos masivos, los drones son usados para vigilancia y control de multitudes.",
    "Algunas universidades ya ofrecen carreras enfocadas en tecnología de drones y navegación aérea autónoma."
  ],
  [
    "Los drones recreativos deben seguir reglas de vuelo civil para evitar accidentes.",
    "Algunos drones están equipados con inteligencia artificial para seguir objetos o personas.",
    "Existen carreras de drones con circuitos y obstáculos controlados remotamente.",
    "Los drones submarinos también existen y se usan en exploraciones marinas.",
    "Los drones con luces LED se usan en espectáculos nocturnos como alternativa a los fuegos artificiales.",
    "En África, los drones ayudan a entregar medicamentos y muestras médicas entre comunidades rurales.",
    "Algunos modelos de drones pueden plegarse y caber en un bolsillo, facilitando su transporte."
  ]
];

function actualizarFrases() {
  const lista = document.getElementById("sabiasque-list");
  if (!lista) return;

  lista.innerHTML = "";

  // Elegir sección aleatoria
  const seccionAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // Agregar frases al <ul>
  seccionAleatoria.forEach(function(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
}

// Iniciar rotación
document.addEventListener("DOMContentLoaded", function () {
  actualizarFrases();
  setInterval(actualizarFrases, 10000); // cada 20 segundos
});
