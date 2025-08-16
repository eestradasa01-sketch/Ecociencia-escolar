function mostrarInfo(tipo){
    let info = "";
    let imagenSrc = "";

    if (tipo === 'plastico') {
        info = `
            <h3>Plástico</h3>
            <p><strong>Estructura:</strong> Polímeros de carbono e hidrógeno.</p>
            <p><strong>Átomos principales:</strong> Carbono (C), Hidrógeno (H).</p>
            <p><strong>Destino:</strong> Tacho de reciclaje.</p>
            <p><strong>Proceso:</strong> Se derrite y se transforma en nuevos productos.</p>
            <p><strong>Impacto ambiental:</strong> Tarda cientos de años en degradarse, contamina océanos y afecta la fauna.</p>
            <p><strong>Dato curioso:</strong> Una botella de plástico puede tardar hasta 1000 años en degradarse.</p>
            <p><strong>Ejemplos comunes:</strong> Botellas, envoltorios, bolsas, utensilios descartables.</p>
            <p><strong>Tiempo de degradación:</strong> Aproximadamente entre 100 a 1000 años.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> Enjuagar y comprimir botellas antes de depositarlas en el tacho de reciclaje.</p>
        `;
        imagenSrc = "imagenes/plastico.png";
        linkFuente = "https://www.textoscientificos.com/polimeros/sinteticos";
        linkFuenteTexto = "https://www.textoscientificos.com/"
    } else if (tipo === 'papel'){
        info = `
            <h3>Papel</h3>
            <p><strong>Estructura:</strong> Celulosa (glucosa unida).</p>
            <p><strong>Átomos principales:</strong> Carbono (C), Hidrógeno (H), Oxígeno (O).</p>
            <p><strong>Destino:</strong> Tacho de reciclaje.</p>
            <p><strong>Proceso:</strong> Se descompone y reutiliza para fabricar nuevo papel.</p>
            <p><strong>Impacto ambiental:</strong> Su producción consume grandes cantidades de agua y árboles.</p>
            <p><strong>Dato curioso:</strong> Reciclar una tonelada de papel ahorra 17 árboles y 26 mil litros de agua.</p>
            <p><strong>Ejemplos comunes:</strong> Hojas usadas, cuadernos, cajas de cartón limpias.</p>
            <p><strong>Tiempo de degradación:</strong> Aproximadamente entre 2 a 5 meses.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> No mezclar con papel sucio o con grasa (como servilletas usadas).</p>
        `;
        imagenSrc = "imagenes/papel.png";
        linkFuente = "https://www.acs.org/content/dam/acsorg/education/resources/highschool/chemmatters/spanishtranslations/cm-april2019-celebrate-paper-spanish.pdf";
        linkFuenteTexto = "https://www.acs.org/"
    } else if (tipo === 'organico') {
        info = `
            <h3>Orgánico</h3>
            <p><strong>Estructura:</strong> Materia vegetal y restos de alimentos.</p>
            <p><strong>Átomos principales:</strong> Carbono (C), Hidrógeno (H), Oxígeno (O), Nitrógeno (N).</p>
            <p><strong>Destino:</strong> Tacho de orgánicos.</p>
            <p><strong>Proceso:</strong> Se descompone y forma abono, liberando CO₂ y nutrientes.</p>
            <p><strong>Impacto ambiental:</strong> Si no se gestiona bien, produce gases como el metano en los vertederos.</p>
            <p><strong>Dato curioso:</strong> Los residuos orgánicos pueden convertirse en compost para plantas.</p>
            <p><strong>Ejemplos comunes:</strong> Restos de comida, cáscaras de frutas, hojas secas.</p>
            <p><strong>Tiempo de degradación:</strong> Días a semanas, dependiendo del tipo.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> Separar bien los orgánicos para compostaje o programas municipales.</p>
        `;
        imagenSrc = "imagenes/organico.png";
        linkFuente = "https://es.wikipedia.org/wiki/Compuesto_org%C3%A1nico";
        linkFuenteTexto = "https://es.wikipedia.org/"
    } else if (tipo === 'vidrio') {
        info = `
            <h3>Vidrio</h3>
            <p><strong>Estructura:</strong> Dióxido de silicio (SiO₂).</p>
            <p><strong>Átomos principales:</strong> Silicio (Si), Oxígeno (O).</p>
            <p><strong>Destino:</strong> Contenedor de vidrio.</p>
            <p><strong>Proceso:</strong> Se funde y se moldea para crear nuevos productos.</p>
            <p><strong>Impacto ambiental:</strong> No se degrada facilmente de forma natural, pero es 100% reciclable infinitas veces.</p>
            <p><strong>Dato curioso:</strong> El vidrio reciclado conserva la misma calidad que el original.</p>
            <p><strong>Ejemplos comunes:</strong> Botellas, frascos, envases.</p>
            <p><strong>Tiempo de degradación:</strong> Más de 4000 años.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> No mezclar con cerámica o espejos; enjuagar bien los envases.</p>
        `;
        imagenSrc = "imagenes/vidrio.png";
        linkFuente = "https://espanol.libretexts.org/Quimica/Qu%C3%ADmica_Inorg%C3%A1nica/Introducci%C3%B3n_a_la_Qu%C3%ADmica_de_Estado_S%C3%B3lido/06%3A_Recitaciones/6.20%3A_Formadores_de_vidrio_y_modificadores_de_red";
        linkFuenteTexto = "https://espanol.libretexts.org/"
    } else if (tipo === 'metales') {
        info = `
            <h3>Metales</h3>
            <p><strong>Estructura:</strong> Red metálica de iones positivos y electrones libres.</p>
            <p><strong>Átomos principales:</strong> Hierro (Fe), Aluminio (Al), Cobre (Cu), etc.</p>
            <p><strong>Destino:</strong> Punto de reciclaje de metales.</p>
            <p><strong>Proceso:</strong> Se funden y reutilizan en nuevas aleaciones o productos.</p>
            <p><strong>Impacto ambiental:</strong> Su extracción contamina el suelo y consume mucha energía.</p>
            <p><strong>Dato curioso:</strong> El aluminio reciclado ahorra el 95% de la energía comparado con producirlo desde cero.</p>
            <p><strong>Ejemplos comunes:</strong> Latas, cables, objetos metálicos.</p>
            <p><strong>Tiempo de degradación:</strong> De 50 a 500 años, aunque depende del metal y su calidad.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> Aplastar latas y limpiar restos de alimentos antes de reciclar.</p>
        `;
        imagenSrc = "imagenes/metal.jpg";
        linkFuente = "https://www.lifeder.com/estructura-de-los-materiales/";
        linkFuenteTexto = "https://www.lifeder.com/"
    } else if (tipo === 'peligroso') {
        info = `
            <h3>Materiales Peligrosos</h3>
            <p><strong>Estructura:</strong> Compuestos químicos reactivos o tóxicos.</p>
            <p><strong>Átomos principales:</strong> Varían (P, Cl, Hg, etc.).</p>
            <p><strong>Destino:</strong> Punto de recolección de residuos peligrosos.</p>
            <p><strong>Proceso:</strong> Manejo especializado para evitar contaminación.</p>
            <p><strong>Impacto ambiental:</strong> Altamente contaminantes; pueden dañar la salud humana y el ambiente.</p>
            <p><strong>Dato curioso:</strong> Pilas y baterías pueden contaminar miles de litros de agua si no se desechan bien.</p>
            <p><strong>Ejemplos comunes:</strong> Pilas, baterías, medicamentos vencidos, productos químicos.</p>
            <p><strong>Tiempo de degradación:</strong> Desde unos pocos hasta miles de años, dependiendo del tipo de residuo.</p>
            <p><strong>Consejo de reciclaje correcto:</strong> Llevarlos a puntos de recolección especializados o campañas municipales.</p>
        `;
        imagenSrc = "imagenes/peligroso.jpg";
        linkFuente = "https://www.researchgate.net/figure/Figura-5-Codigo-CRETI-para-sustancias-y-residuos-quimicos-peligrosos_fig4_349724585";
        linkFuenteTexto = "https://www.researchgate.net/"
      }

    document.getElementById("molVisual").innerHTML = `
    ${info}
    <div class="contenedor-imagen">
      <img src="${imagenSrc}" class="imagen-molecula">
      <p class="fuente">Fuente: <a href="${linkFuente}" target="_blank">${linkFuenteTexto}</a></p>
    </div>
  `;
}

const preguntas = [
  {
    texto: "¿Dónde se debe botar el papel?",
    opciones: ["Orgánico", "Inorgánico", "Reciclaje"],
    correcta: "Reciclaje"
  },
  {
    texto: "¿Dónde se debe botar una cáscara de plátano?",
    opciones: ["Orgánico", "Reciclaje", "Inorgánico"],
    correcta: "Orgánico"
  },
  {
    texto: "¿Dónde se debe botar una botella de plástico?",
    opciones: ["Reciclaje", "Orgánico", "Inorgánico"],
    correcta: "Reciclaje"
  },
  {
    texto: "¿Dónde se debe botar una bolsa de papas fritas metalizada?",
    opciones: ["Reciclaje", "Orgánico", "Inorgánico"],
    correcta: "Inorgánico"
  },
  {
    texto: "¿Dónde se debe botar restos de comida cocida?",
    opciones: ["Reciclaje", "Inorgánico", "Orgánico"],
    correcta: "Orgánico"
  },
  {
    texto: "¿Dónde se debe botar una botella de vidrio?",
    opciones: ["Orgánico", "Reciclaje", "Peligroso"],
    correcta: "Reciclaje"
  },
  {
    texto: "¿Dónde se debe botar una lata de atún?",
    opciones: ["Reciclaje", "Orgánico", "Peligroso"],
    correcta: "Reciclaje"
  },
  {
    texto: "¿Dónde se debe botar una pila usada?",
    opciones: ["Inorgánico", "Reciclaje", "Peligroso"],
    correcta: "Peligroso"
  },
  {
    texto: "¿Dónde se debe botar una caja de cartón?",
    opciones: ["Reciclaje", "Orgánico", "Inorgánico"],
    correcta: "Reciclaje"
  },
  {
    texto: "¿Dónde se debe botar una servilleta usada?",
    opciones: ["Reciclaje", "Orgánico", "Inorgánico"],
    correcta: "Inorgánico"
  }
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").innerHTML = `<p><strong>${pregunta.texto}</strong></p>`;
  const opcionesHTML = pregunta.opciones.map(opcion => {
    return `<button onclick="verificarRespuesta('${opcion}')">${opcion}</button>`;
  }).join("");
  document.getElementById("opciones").innerHTML = opcionesHTML;
  document.getElementById("resultadoQuiz").textContent = "";
}

function verificarRespuesta(respuestaSeleccionada) {
  const pregunta = preguntas[preguntaActual];
  const resultado = document.getElementById("resultadoQuiz");

  if (respuestaSeleccionada === pregunta.correcta) {
    puntaje++;
    resultado.textContent = "✅ ¡Correcto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ Incorrecto. La respuesta correcta era: ${pregunta.correcta}.`;
    resultado.style.color = "red";
  }

  // Esperar un momento antes de pasar a la siguiente
  setTimeout(() => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultadoFinal();
    }
  }, 1500);
}

function mostrarResultadoFinal() {
  document.getElementById("pregunta").innerHTML = `<h3>¡Quiz terminado!</h3>`;
  document.getElementById("opciones").innerHTML = "";
  document.getElementById("resultadoQuiz").textContent = `Tu puntaje: ${puntaje} de ${preguntas.length}`;
  document.getElementById("resultadoQuiz").style.color = "#000";
}

// Mostrar la primera pregunta automáticamente al cargar
window.onload = mostrarPregunta;
