// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Banco Reducido de preguntas (180 preguntas - 30 por unidad)
    const questionBank = [
        // --- Unidad 1 (30 Preguntas) ---
        { question: "¿Cuál es el objetivo principal de la topografía?", options: ["Estudiar la composición química del suelo.", "Predecir fenómenos meteorológicos.", "Codificar la posición de puntos para representarlos en un plano o localizarlos en terreno.", "Diseñar la estructura interna de los edificios."], correctAnswer: 2, explanation: "La topografía se focaliza en el estudio de las posiciones de los puntos de interés en la superficie terrestre o bajo ella, para representarlos en un plano o localizarlos en el terreno." },
        { question: "¿Qué tipo de proyección cartográfica mantiene los ángulos?", options: ["Equivalentes", "Afilácticas", "Conformes", "Gnomónicas"], correctAnswer: 2, explanation: "Una proyección cartográfica es conforme cuando mantiene los ángulos. Se utilizan en cartas de navegación." },
        { question: "En topografía, ¿qué son las coordenadas polares?", options: ["Latitud y longitud.", "Ejes X e Y.", "Una distancia al origen y dos ángulos (horizontal y vertical).", "Solo la altura."], correctAnswer: 2, explanation: "Las coordenadas polares definen un punto por su distancia al origen (Dg) y dos ángulos (H: horizontal/acimut, V: vertical)." },
        { question: "¿Qué es la planimetría en un levantamiento?", options: ["Determinación de la cota.", "Proyección del punto en un plano (coordenadas x,y).", "Medición de errores atmosféricos.", "Estudio de ángulos verticales."], correctAnswer: 1, explanation: "La planimetría consiste en la proyección de un punto del terreno sobre un plano de comparación obteniendo sus coordenadas cartesianas (x,y)." },
        { question: "¿Qué error se repite constantemente por imperfecciones del instrumento?", options: ["Accidentales", "Humanos", "Sistemáticos", "De apreciación"], correctAnswer: 2, explanation: "Los errores sistemáticos se repiten de manera constante y están asociados a imperfecciones o descalibraciones de los instrumentos." },
        { question: "La operación de trasladar puntos del plano al terreno se llama:", options: ["Levantamiento", "Nivelación", "Replanteo", "Proyección"], correctAnswer: 2, explanation: "El replanteo se basa en trasladar los puntos, alineaciones y demás trazados del plano del proyecto al terreno." },
        { question: "¿Qué es un ángulo de depresión?", options: ["Ángulo horizontal.", "Ángulo a un objeto por encima de la horizontal.", "Ángulo a un objeto por debajo de la horizontal.", "Ángulo mayor de 90°."], correctAnswer: 2, explanation: "El ángulo de depresión es el formado por la horizontal y la línea de mira a un objeto situado debajo de la horizontal." },
        { question: "La cartografía representa la superficie terrestre, que es:", options: ["Plana y regular", "Cilíndrica", "Esférica irregular", "Cónica"], correctAnswer: 2, explanation: "La cartografía representa la superficie terrestre, que es esférica e irregular, en un plano." },
        { question: "Los planos que incluyen alturas (cotas, curvas de nivel) son:", options: ["Planimétricos", "Altimétricos", "Geográficos", "Catastrales"], correctAnswer: 1, explanation: "Los planos altimétricos, además del valor superficial, dan las distancias verticales (alturas)." },
        { question: "¿Cuál es el meridiano 0 de referencia geográfica?", options: ["París", "Washington", "Greenwich", "Roma"], correctAnswer: 2, explanation: "El meridiano principal o meridiano 0 utilizado como referencia pasa por Greenwich (Inglaterra)." },
        { question: "¿Qué tres elementos combinan las medidas topográficas?", options: ["Color, textura, forma", "Distancia, elevación, dirección", "Peso, volumen, densidad", "Tiempo, velocidad, aceleración"], correctAnswer: 1, explanation: "Las medidas topográficas combinan distancia, elevación y dirección." },
        { question: "¿Cuál es una proyección 'en desarrollo' muy usada?", options: ["Gnomónica", "Estereográfica", "Mercator", "Ortográfica"], correctAnswer: 2, explanation: "La proyección de Mercator es una proyección en desarrollo muy usada en cartografía." },
        { question: "Los mapas topográficos representan:", options: ["Solo fronteras", "Solo ciudades", "Todos los detalles de la superficie", "Solo transportes"], correctAnswer: 2, explanation: "Los mapas topográficos representan todos los detalles de la superficie terrestre." },
        { question: "¿Cómo se llama el eje horizontal en coordenadas cartesianas?", options: ["Ordenadas (y)", "Cotas (z)", "Abscisas (x)", "Polar"], correctAnswer: 2, explanation: "El eje horizontal en coordenadas cartesianas es el eje de abscisas (x)." },
        { question: "En coordenadas polares (Dg, H, V), ¿qué es 'H'?", options: ["Distancia", "Ángulo vertical", "Altura instrumento", "Ángulo horizontal (acimut)"], correctAnswer: 3, explanation: "H representa el ángulo horizontal o acimut en coordenadas polares topográficas." },
        { question: "La primera red en planimetría, basada en una base medida, es la:", options: ["Radiación", "Topográfica", "Trigonométrica", "Nivelación"], correctAnswer: 2, explanation: "La 1ª red o red trigonométrica parte de una base perfectamente medida y orientada." },
        { question: "El método de levantamiento en la 2ª red (topográfica) es el:", options: ["Intersección", "Itinerario", "Radiación", "Nivelación"], correctAnswer: 1, explanation: "En la 2ª red o red topográfica, el método operativo se denomina itinerario (levantar una poligonal)." },
        { question: "Los errores fortuitos asociados al observador son:", options: ["Sistemáticos", "Apreciación", "Atmosféricos", "Accidentales"], correctAnswer: 3, explanation: "Los errores accidentales están asociados a los encargados de realizar las mediciones y son fortuitos." },
        { question: "¿Cómo se expresa comúnmente la pendiente?", options: ["Kelvin", "m/s", "%, ‰ o quebrado", "Ha/parcela"], correctAnswer: 2, explanation: "La pendiente suele expresarse en forma de quebrado, tanto por ciento (%) o tanto por mil (‰)." },
        { question: "La proyección horizontal de la distancia inclinada es la distancia:", options: ["Natural", "Reducida", "Cenital", "Polar"], correctAnswer: 1, explanation: "La distancia reducida es la proyección de la distancia inclinada o geométrica sobre un plano horizontal." },
        { question: "¿Qué replanteo define la posición de tabiques interiores?", options: ["Topográfico", "Instalaciones", "Interno/Distribuciones", "Viviendas"], correctAnswer: 2, explanation: "Los replanteos internos, distribuciones y tabiquería interior definen la posición de las compartimentaciones." },
        { question: "La lectura del limbo cenital se hace respecto al:", options: ["Norte", "Horizonte", "Cenit (cero vertical)", "Sur"], correctAnswer: 2, explanation: "La lectura del limbo cenital se realiza con respecto al cero vertical (cenit)." },
        { question: "La ciencia de representar gráficamente la superficie terrestre es la:", options: ["Topología", "Geodesia", "Cartografía", "Fotogrametría"], correctAnswer: 2, explanation: "La cartografía es la ciencia que representa gráficamente la superficie terrestre en un mapa." },
        { question: "¿Qué conservan las proyecciones equivalentes?", options: ["Ángulos", "Distancias", "Áreas", "Formas exactas"], correctAnswer: 2, explanation: "Las proyecciones equivalentes preservan las proporciones de las áreas." },
        { question: "Las proyecciones cónicas o cilíndricas son de tipo:", options: ["Perspectivas", "Gnomónicas", "En desarrollo", "Ortográficas"], correctAnswer: 2, explanation: "Las proyecciones en desarrollo usan figuras auxiliares como conos o cilindros." },
        { question: "Los planos topográficos que solo muestran el valor superficial son:", options: ["Altimétricos", "Planimétricos", "Catastrales", "Taquimétricos"], correctAnswer: 1, explanation: "Los planos planimétricos tienen por finalidad únicamente el valor superficial." },
        { question: "El punto de intersección de los ejes X e Y se llama:", options: ["Fuga", "Cenital", "Origen de coordenadas", "Inflexión"], correctAnswer: 2, explanation: "El punto donde se cortan los ejes X e Y es el origen de las coordenadas (0,0)." },
        { question: "¿En qué cuadrante cartesiano X es negativo e Y es positivo?", options: ["I", "II", "III", "IV"], correctAnswer: 1, explanation: "En el segundo cuadrante (II), la coordenada X es negativa y la Y es positiva." },
        { question: "El método de levantar detalles midiendo distancias y ángulos desde vértices de un itinerario es la:", options: ["Triangulación", "Nivelación", "Intersección", "Radiación"], correctAnswer: 3, explanation: "La radiación consiste en levantar detalles midiendo distancias y ángulos desde vértices conocidos." },
        { question: "La nivelación trigonométrica es adecuada para trabajos:", options: ["Muy precisos", "Menos precisos (taquimétricos)", "Solo planimétricos", "Solo angulares"], correctAnswer: 1, explanation: "La nivelación trigonométrica se utiliza en trabajos menos precisos, como los taquimétricos." },

        // --- Unidad 2 (30 Preguntas) ---
        { question: "¿Cuál es el objetivo principal del replanteo de un terreno?", options: ["Analizar suelo.", "Trasladar fielmente el proyecto al terreno.", "Estudio histórico.", "Rutas maquinaria."], correctAnswer: 1, explanation: "El replanteo tiene por objeto trasladar fielmente al terreno los componentes, dimensiones y formas indicadas en los planos del proyecto." },
        { question: "En replanteo, ¿qué es la 'precisión'?", options: ["Mínima división.", "Grado de aproximación a la medida real.", "Velocidad medición.", "Coste instrumento."], correctAnswer: 1, explanation: "Precisión se refiere al grado de aproximación de una medida a la realidad o verdadera medida." },
        { question: "Una escala 1/50 significa que 1 cm en plano son:", options: ["0.5 cm reales", "50 cm reales", "5 metros reales", "50 metros reales"], correctAnswer: 1, explanation: "Una escala 1/50 significa que 1 cm en el plano representa 50 cm en la realidad." },
        { question: "¿Qué son las 'bases de replanteo'?", options: ["Cimientos.", "Herramientas.", "Puntos de coordenadas conocidas en terreno para iniciar replanteo.", "Planos militares."], correctAnswer: 2, explanation: "Las bases de replanteo son puntos de coordenadas conocidas materializadas en el terreno, desde donde se inicia el replanteo." },
        { question: "El método de replanteo con GPS utiliza:", options: ["Estación total", "Coordenadas polares", "Coordenadas cartesianas (X,Y,Z) de satélite", "Trilateración manual"], correctAnswer: 2, explanation: "El replanteo por coordenadas cartesianas con GPS se basa en situar las posiciones usando la red GPS." },
        { question: "¿Qué es un 'proyecto analítico' para replanteo?", options: ["Solo gráficos.", "Elementos definidos numéricamente (coordenadas/acotaciones).", "Simulación software.", "Métodos artesanales."], correctAnswer: 1, explanation: "Un proyecto analítico tiene los elementos definidos numéricamente, permitiendo calcular directamente los datos de replanteo." },
        { question: "¿Para qué sirve el 'Acta de Replanteo'?", options: ["Solicitar licencia.", "Listar materiales.", "Acreditar replanteo inicial y permitir inicio de obras.", "Registro horas."], correctAnswer: 2, explanation: "El Acta de Replanteo acredita la correcta ejecución del replanteo inicial y es necesaria para el inicio legal de las obras." },
        { question: "El método artesanal por intersección de dos longitudes desde puntos conocidos es:", options: ["Abscisas", "Retícula", "Trilateración", "Geométrico"], correctAnswer: 2, explanation: "El método de trilateración consiste en obtener la intersección de dos longitudes medidas desde dos puntos conocidos." },
        { question: "El error gráfico (aprox. 0.2 mm) limita:", options: ["Cálculo escala.", "Representación de elementos muy pequeños en el plano.", "Impresión.", "Proyección."], correctAnswer: 1, explanation: "El error gráfico es la mínima medida apreciable en un plano, limitando la representación de detalles pequeños." },
        { question: "AutoCAD, Topocal, QGIS son ejemplos de:", options: ["Hardware topográfico", "Métodos de nivelación", "Software para topografía/replanteo/SIG", "Normativas"], correctAnswer: 2, explanation: "Estos son ejemplos de software utilizados en dibujo técnico, topografía y Sistemas de Información Geográfica (SIG)." },
        { question: "¿Qué replanteo se usa en viviendas sin equipos complejos?", options: ["GPS", "Estación total", "Artesanal", "Satélite"], correctAnswer: 2, explanation: "En pequeñas construcciones como viviendas se opta por un replanteo artesanal." },
        { question: "¿Cómo se define un punto en planos acotados?", options: ["Solo X,Y", "Proyección horizontal (x,y) y cota (z)", "Solo cota (z)", "Latitud/Longitud"], correctAnswer: 1, explanation: "Un punto se define por su proyección horizontal (x,y) y su cota (z) respecto a un plano de referencia." },
        { question: "Los puntos característicos para definir forma y situación del proyecto son:", options: ["Bases", "Control", "Puntos de replanteo", "Vértices"], correctAnswer: 2, explanation: "Los puntos de replanteo son los puntos característicos necesarios para definir el elemento proyectado." },
        { question: "¿Qué coordenadas usa el replanteo con Estación Total?", options: ["Geográficas", "Cartesianas", "Polares (ángulo y distancia)", "UTM"], correctAnswer: 2, explanation: "El replanteo con estación total determina las coordenadas polares de los puntos desde la base." },
        { question: "El método por abscisas sobre una recta usa un eje y distancias:", options: ["Radiales", "Paralelas", "Perpendiculares", "Curvas"], correctAnswer: 2, explanation: "El método por abscisas mide distancias sobre un eje (abscisa) y distancias perpendiculares a él (ordenada)." },
        { question: "Si hay que medir sobre planos para obtener datos, el proyecto es:", options: ["Analítico", "Gráfico", "Sintético", "Numérico"], correctAnswer: 1, explanation: "Se definen como proyectos gráficos aquellos donde se debe recurrir a la medición sobre planos." },
        { question: "MAGNET Field es un software para:", options: ["Dibujo CAD", "Cálculo estructuras", "Recopilar datos y replanteo en campo", "Programación"], correctAnswer: 2, explanation: "MAGNET Field es un software de campo para recopilar datos y realizar replanteos con equipos topográficos." },
        { question: "El Acta de Comprobación del Replanteo es un acto:", options: ["Unilateral", "Informativo", "Bilateral y formal", "Opcional"], correctAnswer: 2, explanation: "El acta de comprobación del replanteo es un acto formal y bilateral (Administración y contratista)." },
        { question: "¿Quién debe estar conforme con los resultados del Acta de Replanteo?", options: ["Solo el promotor", "El jefe de obra", "El arquitecto", "El topógrafo"], correctAnswer: 2, explanation: "El Acta de Replanteo debe ir firmada por el arquitecto, conforme con los resultados." },
        { question: "Comparar una magnitud con una unidad es:", options: ["Precisar", "Medir", "Escalar", "Proyectar"], correctAnswer: 1, explanation: "Medir es establecer las veces que una magnitud es mayor o menor a otra tomada como unidad." },
        { question: "En el sistema centesimal, 1 grado (ᵍ) son:", options: ["60 minutos (')", "100 minutos (ᶜ)", "60 segundos ('')", "100 segundos (ᶜᶜ)"], correctAnswer: 1, explanation: "En el sistema centesimal, cada grado (ᵍ) son 100 minutos (ᶜ)." },
        { question: "El punto de referencia conocido para iniciar replanteo artesanal es la:", options: ["Estación", "Vértice", "Base de replanteo", "Origen"], correctAnswer: 2, explanation: "El punto de referencia conocido desde donde se inicia el replanteo artesanal es la base de replanteo." },
        { question: "Al replantear con Estación Total, tras fijar el ángulo, se mide la:", options: ["Altura", "Distancia", "Temperatura", "Presión"], correctAnswer: 1, explanation: "Fijando el ángulo o dirección de replanteo, sobre esa alineación [...] vamos midiendo las distancias." },
        { question: "El replanteo con GPS requiere una base fija y una:", options: ["Mira", "Base móvil (receptor)", "Estación total", "Brújula"], correctAnswer: 1, explanation: "En el replanteo con GPS se trabaja con una base fija y una base móvil (receptor)." },
        { question: "Simplificar trazados a figuras geométricas elementales es el método:", options: ["Cuadrícula", "Trilateración", "Trazado geométrico", "Ortogonal"], correctAnswer: 2, explanation: "Simplificar trazados a figuras geométricas elementales (rectas, ángulos, arcos) es el trazado geométrico." },
        { question: "Obtener datos de replanteo midiendo en plano puntos reconocibles en terreno es:", options: ["Coord. Gráficas", "Medición a puntos fijos", "Poligonal", "Analítico"], correctAnswer: 1, explanation: "Medición a puntos fijos consiste en localizar puntos reconocibles en plano y terreno y medir desde ellos." },
        { question: "Topocal es un software de:", options: ["Presentaciones", "Bases de datos", "CAD y Topografía (MDT, tierras)", "Horarios"], correctAnswer: 2, explanation: "Topocal es un software de CAD y Topografía para crear MDT y calcular movimientos de tierras." },
        { question: "La no realización del Acta de Replanteo impide el:", options: ["Diseño", "Inicio de obras y cómputo del plazo", "Seguro", "Presupuesto"], correctAnswer: 1, explanation: "Su no realización impide el inicio de las obras y el cómputo del plazo de ejecución." },
        { question: "El Acta de Replanteo refleja conformidad respecto a:", options: ["Estética", "Documentos contractuales del proyecto", "Normativa previa", "Geotecnia"], correctAnswer: 1, explanation: "El acta refleja la conformidad o disconformidad respecto de los documentos contractuales del proyecto." },
        { question: "Una 'medida directa' se consigue por:", options: ["Cálculo", "Satélite", "Yuxtaposición del instrumento con el objeto", "Estimación"], correctAnswer: 2, explanation: "Medidas directas se consiguen por yuxtaposición de un elemento comparador con el objeto a medir (ej. cinta métrica)." },

        // --- Unidad 3 (30 Preguntas) ---
        { question: "¿Qué instrumento mide principalmente desniveles?", options: ["Brújula", "Nivel topográfico", "Cinta métrica", "Teodolito"], correctAnswer: 1, explanation: "El nivel topográfico (equialtimetro) se emplea para medir desniveles." },
        { question: "¿Función principal de una Estación Total?", options: ["Norte magnético.", "Distancias cortas.", "Medir ángulos y distancias.", "Proyectar láser."], correctAnswer: 2, explanation: "La Estación Total mide ángulos (horizontales/verticales) y distancias." },
        { question: "Herramienta con peso y cordel para verificar verticalidad:", options: ["Nivel burbuja", "Escuadra", "Plomada", "Jalón"], correctAnswer: 2, explanation: "La plomada (peso colgado de un cordel) permite verificar la verticalidad." },
        { question: "¿Para qué se usan estacas, piquetes o varillas en replanteo?", options: ["Medir ángulos.", "Señales fijas.", "Materializar un punto en el terreno.", "Nivelar equipo."], correctAnswer: 2, explanation: "Se usan para señalizar (materializar) un punto en el terreno." },
        { question: "Un nivel láser es muy útil en:", options: ["Medir distancias largas.", "Replanteo de elementos de obra (tabiques).", "Determinar norte.", "Calibrar estaciones."], correctAnswer: 1, explanation: "El nivel láser es muy utilizado en el replanteo de elementos de obra como tabiques, techos, etc." },
        { question: "¿Qué es un distanciómetro electrónico?", options: ["Brújula avanzada.", "Medidor ángulos.", "Calcula distancia con rayo láser.", "Software GPS."], correctAnswer: 2, explanation: "Es un instrumento electrónico que calcula la distancia usando un rayo láser." },
        { question: "Para posición 3D, ¿cuántos satélites GPS mínimo?", options: ["Uno", "Dos", "Tres", "Cuatro o más"], correctAnswer: 3, explanation: "Con cuatro o más satélites a la vista, el receptor GPS puede determinar la posición 3D." },
        { question: "¿Pauta importante para conservar equipos topográficos?", options: ["Seguros activados.", "Fuera estuches.", "Revisión y calibración anual.", "Limpieza abrasiva."], correctAnswer: 2, explanation: "El buen mantenimiento implica revisar y calibrar los equipos anualmente." },
        { question: "Cualidad de dar indicaciones próximas al valor verdadero:", options: ["Resolución", "Fidelidad", "Precisión", "Sensibilidad"], correctAnswer: 2, explanation: "Precisión es la cualidad de un aparato para dar indicaciones próximas al valor verdadero." },
        { question: "¿Qué se verifica con la plomada óptica en la puesta en estación?", options: ["Orientación N.", "Horizontalidad.", "Coincidencia con el punto de estación.", "Distancia."], correctAnswer: 2, explanation: "Se verifica con la plomada óptica que el centro del aparato coincida con el punto de estación marcado." },
        { question: "¿Qué instrumento se usa con el nivel para medir desniveles?", options: ["Brújula", "Mira estadimétrica", "GPS", "Plomada"], correctAnswer: 1, explanation: "La mira estadimétrica se usa junto con el nivel topográfico para medir desniveles." },
        { question: "Finalidad principal del Teodolito óptico:", options: ["Distancias largas", "Medición de ángulos (Vert/Horiz)", "Coordenadas GPS", "Temperaturas"], correctAnswer: 1, explanation: "El Teodolito óptico tiene como finalidad principal la medición de ángulos verticales y horizontales." },
        { question: "¿Qué es la libreta de campo?", options: ["Nivel pequeño", "Software cálculo", "Herramienta para documentar detalles y actividades", "Manual equipos"], correctAnswer: 2, explanation: "La libreta de campo es donde se documentan los detalles y actividades del proyecto topográfico." },
        { question: "Instrumentos que miden ángulos acimutales y cenitales son de medida:", options: ["Lineal", "Angular", "Conjunta", "Desnivel"], correctAnswer: 1, explanation: "Los instrumentos de medida angular miden ángulos acimutales (horizontales) y cenitales (verticales)." },
        { question: "Para medir distancias de 5 a 50 m, se usa:", options: ["Estación total", "GPS", "Cinta métrica/flexómetro", "Distanciómetro largo alcance"], correctAnswer: 2, explanation: "Para pequeñas distancias (5-50m) se recurre a la cinta métrica, flexómetro o rodete." },
        { question: "El trípode y plataformas nivelantes sirven para:", options: ["Medir distancias", "Correcta nivelación de equipos", "Reflejar láser", "Marcar puntos"], correctAnswer: 1, explanation: "Se utilizan para la correcta nivelación de los equipos topográficos." },
        { question: "La escuadra de albañil sirve para trazar:", options: ["Curvas", "Paralelas", "Perpendiculares y ángulos (90, 30, 60)", "Niveles"], correctAnswer: 2, explanation: "La escuadra de albañil sirve para trazar perpendiculares y ángulos rectos, de 30° y 60°." },
        { question: "El nivel de agua o manguera funciona por:", options: ["Capilaridad", "Vasos comunicantes", "Refracción", "Dilatación"], correctAnswer: 1, explanation: "Funciona por el principio de vasos comunicantes para trasladar niveles." },
        { question: "Jalones y jaloncillos son señales de puntería:", options: ["Fijas", "Permanentes", "Móviles", "Electrónicas"], correctAnswer: 2, explanation: "Los jalones, jaloncillos y lapiceros son señales de puntería móviles." },
        { question: "Para marcar alineaciones sobre hormigón se usa:", options: ["Jalón y estaca", "Nivel manguera", "Tiralíneas y polvo trazador", "GPS"], correctAnswer: 2, explanation: "Es muy habitual el uso del tiralíneas y polvo trazador para marcar alineaciones sobre hormigón." },
        { question: "Niveles automáticos destacan por:", options: ["Medir ángulos", "Horizontalidad automática de la visual", "Múltiples láser", "No necesitar mira"], correctAnswer: 1, explanation: "Los niveles automáticos o autonivelantes destacan por la horizontalidad automática de la línea de colimación." },
        { question: "Funcionamiento del distanciómetro electrónico:", options: ["Atravesar objeto", "Absorción", "Medir tiempo ida y vuelta de señal láser", "Desviación"], correctAnswer: 2, explanation: "Calcula la distancia midiendo el tiempo que tarda una señal láser en ir al objetivo y volver." },
        { question: "Factor que puede degradar señal GPS:", options: ["Color receptor", "Viento", "Retardos ionosfera/troposfera", "Marca vehículo"], correctAnswer: 2, explanation: "Retardos de ionosfera y tropósfera pueden degradar la señal GPS." },
        { question: "Cualidad de dar siempre mismas indicaciones en iguales condiciones:", options: ["Precisión", "Resolución", "Justeza", "Fidelidad"], correctAnswer: 3, explanation: "Fidelidad es dar siempre las mismas indicaciones a igualdad de condiciones." },
        { question: "Menor fracción que puede leerse en un aparato:", options: ["Precisión", "Resolución", "Justeza", "Sensibilidad"], correctAnswer: 1, explanation: "Resolución es la menor fracción que puede leerse en un aparato." },
        { question: "Primer paso en puesta en estación:", options: ["Nivelar", "Identificar actividad a realizar", "Apuntar plomada", "Ajustar trípode"], correctAnswer: 1, explanation: "El primer paso es la identificación de la actividad que vamos a realizar con el equipo." },
        { question: "¿Qué instrumento integra teodolito, distanciómetro y microprocesador?", options: ["Nivel", "Brújula GPS", "Estación total", "Mira Invar"], correctAnswer: 2, explanation: "La Estación total integra un teodolito, un distanciómetro y un microprocesador." },
        { question: "¿Con qué se usan los prismas reflectores?", options: ["Niveles", "Plomadas", "Estaciones totales/distanciómetros", "Cintas"], correctAnswer: 2, explanation: "Se usan con estaciones totales o distanciómetros para reflejar la señal." },
        { question: "Una niveleta tiene forma de:", options: ["Círculo", "Triángulo", "T", "Cilindro"], correctAnswer: 2, explanation: "La niveleta es una pieza en forma de T." },
        { question: "Para señalizar puntos en roca u hormigón se usan:", options: ["Estacas madera", "Clavos de acero", "Pintura soluble", "Mojones plástico"], correctAnswer: 1, explanation: "En roca u hormigón se recurre a clavos de acero." },

        // --- Unidad 4 (30 Preguntas) ---
        { question: "¿Qué es una 'curva de nivel'?", options: ["Límite propiedad.", "Línea que une puntos de igual cota.", "Carretera curva.", "Línea para medir ángulos."], correctAnswer: 1, explanation: "Una curva de nivel es una línea en un plano que une puntos de igual cota o altitud." },
        { question: "Diferencia de cota constante entre curvas de nivel:", options: ["Línea rotura", "Equidistancia", "Cota roja", "Rasante"], correctAnswer: 1, explanation: "La diferencia de cota constante entre curvas de nivel consecutivas es la equidistancia." },
        { question: "Método altimétrico más preciso con nivel y mira:", options: ["Barométrica", "Trigonométrica", "Geométrica", "GPS"], correctAnswer: 2, explanation: "La nivelación geométrica (por alturas), usando nivel y mira, es el método más preciso." },
        { question: "Lectura en nivelación geométrica sobre el primer punto:", options: ["Frente", "Intermedia", "Espaldas", "Mira"], correctAnswer: 2, explanation: "La lectura realizada sobre la mira situada en el primer punto (o punto conocido) se llama lectura de espaldas." },
        { question: "Error de cierre altimétrico es la diferencia entre cota final conocida y:", options: ["Primera lectura.", "Coste real.", "Cota calculada en itinerario.", "Distancia real."], correctAnswer: 2, explanation: "Es la discrepancia entre la cota conocida del punto de llegada y la obtenida a través de los datos de campo del itinerario." },
        { question: "¿Qué es un 'perfil longitudinal'?", options: ["Vista en planta.", "Sección vertical perpendicular al eje.", "Sección vertical a lo largo del eje principal.", "Listado cotas."], correctAnswer: 2, explanation: "Es la representación de una sección vertical del terreno a lo largo de una alineación principal." },
        { question: "Línea que define la posición final del proyecto en el perfil:", options: ["Curva nivel", "Rasante", "Línea rotura", "Plano comparación"], correctAnswer: 1, explanation: "La rasante es la línea que define la posición espacial (altura) final de un proyecto en el perfil longitudinal." },
        { question: "¿Qué indica una 'cota roja' positiva?", options: ["Terraplén", "Desmonte", "Cotas iguales", "Pendiente fuerte"], correctAnswer: 1, explanation: "Una cota roja positiva (Cota Terreno > Cota Rasante) indica que hay exceso de terreno, por lo que se necesita desmonte (excavar)." },
        { question: "Superponer la sección tipo sobre el perfil transversal es:", options: ["Nivelación", "Compensación", "Cajeado", "Replanteo"], correctAnswer: 2, explanation: "La operación de superponer la sección tipo (forma final de la obra) sobre el perfil transversal se denomina cajeado." },
        { question: "Puntos fijos y firmes para control altimétrico en obra:", options: ["Estacas aux.", "Puntos replanteo", "Bancos de Nivel (BN)", "Vértices geod."], correctAnswer: 2, explanation: "Los puntos permanentes, fijos y firmes, que constituyen la red básica de control altimétrico son los Bancos de Nivel." },
        { question: "El 'relleno altimétrico' es:", options: ["Añadir tierra.", "Toma de datos para representar relieve.", "Corregir planos.", "Rellenar huecos MDT."], correctAnswer: 1, explanation: "Consiste en la toma de datos de campo necesarios para poder representar gráficamente el relieve del terreno." },
        { question: "Líneas que definen el relieve (vaguadas, divisorias):", options: ["Fallas", "Líneas de rotura", "Curvas maestras", "Límites parcela"], correctAnswer: 1, explanation: "Las líneas de rotura son aquellas que determinan el relieve del terreno: vaguadas, divisorias, cambios de pendiente." },
        { question: "Puntos tomados entre líneas de rotura para guiar curvas de nivel:", options: ["Control", "Vértices", "Complementarios", "BN"], correctAnswer: 2, explanation: "Los puntos complementarios se toman entre las líneas de rotura para guiar el trazado de las curvas de nivel." },
        { question: "Nivelación con taquímetro/estación total y visual inclinada:", options: ["Geométrica", "Barométrica", "Trigonométrica", "Diferencial"], correctAnswer: 2, explanation: "La nivelación trigonométrica se realiza con taquímetro/estación total y las visuales pueden tener cualquier pendiente." },
        { question: "¿Dónde se estaciona el nivel en nivelación geométrica por punto medio?", options: ["Sobre A", "Sobre B", "Equidistante a A y B", "Lejos"], correctAnswer: 2, explanation: "Se estaciona el nivel en un punto aproximadamente equidistante a los puntos A y B." },
        { question: "¿Cómo se calcula desnivel total en nivelación compuesta?", options: ["Suma lecturas", "Resta primera y última", "Σ(Espaldas) - Σ(Frentes)", "Promedio espaldas"], correctAnswer: 2, explanation: "El desnivel total es la resta del sumatorio de lecturas de espaldas menos el sumatorio de lecturas de frente." },
        { question: "Itinerario altimétrico entre puntos distintos de cotas conocidas:", options: ["Cerrado", "Abierto", "Encuadrado", "Radial"], correctAnswer: 2, explanation: "Un itinerario entre puntos distintos de cotas conocidas (referidas al mismo plano) es encuadrado." },
        { question: "Si error cierre altimétrico > tolerancia, el itinerario debe ser:", options: ["Aceptado", "Compensado", "Rechazado", "Remedido parcial"], correctAnswer: 2, explanation: "Si el error de cierre supera la tolerancia establecida, el itinerario debe ser rechazado." },
        { question: "¿Cómo se compensa error cierre altimétrico válido?", options: ["Todo al inicio", "Todo al final", "Repartiendo el error entre los tramos", "Ignorándolo"], correctAnswer: 2, explanation: "Se divide el error entre el número de tramos y se aplica la corrección a cada desnivel parcial." },
        { question: "Sección vertical perpendicular al eje longitudinal:", options: ["Perfil long.", "Perfil transversal", "Planta", "Croquis"], correctAnswer: 1, explanation: "El perfil transversal es la representación de una sección vertical perpendicular a la alineación longitudinal." },
        { question: "Relación escalas H:V habitual en perfiles longitudinales:", options: ["1:1", "10:1", "1:10", "Iguales"], correctAnswer: 2, explanation: "Es habitual una relación 1:10 (Horizontal:Vertical) para realzar el relieve." },
        { question: "Línea base horizontal con cota arbitraria en dibujo de perfil:", options: ["Rasante", "Línea tierra", "Plano de comparación", "Eje abscisas"], correctAnswer: 2, explanation: "Se traza una recta base con cota arbitraria inferior a las del perfil, llamada plano de comparación." },
        { question: "Franjas con datos bajo el perfil longitudinal:", options: ["Leyenda", "Tabla cotas", "Guitarra del perfil", "Banda info"], correctAnswer: 2, explanation: "Las franjas con datos ordenados bajo el perfil se conocen coloquialmente como la guitarra." },
        { question: "Al establecer rasantes, se busca idealmente:", options: ["Maximizar tierras", "Todo desmonte", "Todo terraplén", "Minimizar tierras (compensar)"], correctAnswer: 3, explanation: "Se busca minimizar el movimiento de tierras, intentando compensar desmonte y terraplén." },
        { question: "Diferencia Cota Terreno - Cota Rasante:", options: ["Desnivel", "Pendiente", "Cota roja", "Equidistancia"], correctAnswer: 2, explanation: "La cota roja es la diferencia entre la cota del terreno y la cota de la rasante." },
        { question: "Perfil transversal final de la obra:", options: ["Natural", "Sección tipo", "Modificado", "Control"], correctAnswer: 1, explanation: "La sección tipo es el perfil transversal que deberá tener la obra una vez terminada." },
        { question: "Cálculo volumen movimiento tierras se basa en fórmula del:", options: ["Cubo", "Cilindro", "Prismoide", "Cono"], correctAnswer: 2, explanation: "Se fundamentan en la fórmula del volumen del prismoide." },
        { question: "Fórmula sección media para volúmenes:", options: ["V=Sm*d", "V=(S1+S2)/2*d", "V=(S1*S2)/d", "Simpson"], correctAnswer: 1, explanation: "La fórmula de la sección media es V = (S1 + S2)/2 * d." },
        { question: "Para calcular volumen excavación solar, se necesita cotas esquinas y cota de:", options: ["Calle", "Punto alto", "Excavación", "Nivel freático"], correctAnswer: 2, explanation: "Se necesita conocer las cotas de las esquinas y la cota final de la excavación." },
        { question: "Puntos referencia altimétrica fijos y duraderos:", options: ["Auxiliares", "Replanteo", "Permanentes (BN)", "Estacas"], correctAnswer: 2, explanation: "Los puntos permanentes (Bancos de Nivel) son fijos, firmes y deben durar toda la obra." },

        // --- Unidad 5 (30 Preguntas) ---
        { question: "El replanteo topográfico se hace siempre:", options: ["Por líneas", "Por áreas", "Por puntos", "Por volúmenes"], correctAnswer: 2, explanation: "El replanteo topográfico se hace siempre por puntos, situando cada uno individualmente." },
        { question: "¿Por qué marcar bien la base de replanteo externa?", options: ["Punto más alto", "Permite reponer otros puntos si se pierden", "Define escala", "Indica norte"], correctAnswer: 1, explanation: "Permite volver a replantear otros puntos si se pierden, usando las referencias originales." },
        { question: "Para trazar una recta entre estacas se usa:", options: ["Regla", "Nivel burbuja", "Cinta o cordel de albañil", "Plomada"], correctAnswer: 2, explanation: "Se utiliza comúnmente una cinta o cordel de albañil tensado entre estacas." },
        { question: "Para marcar puntos intermedios en alineaciones largas se usa:", options: ["Nivel", "GPS mano", "Taquímetro/Estación total", "Brújula"], correctAnswer: 2, explanation: "Se usa taquímetro o estación total para marcar puntos intermedios con precisión." },
        { question: "¿Dónde se usa mejor el tiralíneas?", options: ["Terreno irregular", "Agua", "Superficies lisas (suelo, pared)", "Metal curvo"], correctAnswer: 2, explanation: "Es adecuado para marcar rectas sobre superficies relativamente lisas." },
        { question: "Método 3-4-5: ¿distancia sobre la alineación desde P?", options: ["3m", "4m", "5m", "8m"], correctAnswer: 1, explanation: "Se miden 4 metros sobre la alineación desde el punto P." },
        { question: "Método 3-4-5: ¿distancia entre punto M (en alineación) y N?", options: ["3m", "4m", "5m", "Depende"], correctAnswer: 2, explanation: "La distancia entre M y N (la hipotenusa) debe ser de 5 metros." },
        { question: "Perpendicular desde P exterior a AB con cuerda: ¿pie de la perpendicular?", options: ["En P", "Medio P-AB", "Punto medio del segmento A'B' (corte arco-AB)", "En A' o B'"], correctAnswer: 2, explanation: "El pie de la perpendicular está en el punto medio del segmento A'B' creado por el arco." },
        { question: "Paralela desde P exterior a AB con taquímetro: ángulo β desde PA'?", options: ["α", "90-α", "180-α", "α/2"], correctAnswer: 2, explanation: "Desde P, se traza un ángulo β = 180° - α respecto a la línea PA' (donde α es el ángulo medido en A')." },
        { question: "Curva simple empalma:", options: ["Curvas inversas", "Dos tangentes (rectas)", "Punto y recta", "Dos puntos"], correctAnswer: 1, explanation: "Una curva circular simple empalma dos alineaciones rectas (tangentes)." },
        { question: "Punto donde termina la curva simple:", options: ["PI", "PC", "PT", "O"], correctAnswer: 2, explanation: "El Punto de Fin o Principio de Tangente (PT) es donde termina la curva." },
        { question: "Distancia recta entre PC y PT:", options: ["Tangente (T)", "Longitud Curva (LC)", "Cuerda Larga (C)", "Externa (E)"], correctAnswer: 2, explanation: "La Cuerda Larga (C) es la distancia recta entre PC y PT." },
        { question: "Ángulo central máx. entre puntos de trazado de arco para evitar línea quebrada:", options: ["1°", "6°", "10°", "15°"], correctAnswer: 1, explanation: "El ángulo central entre puntos consecutivos debe ser menor de 6 grados." },
        { question: "Lugar geométrico puntos equidistantes a un centro:", options: ["Recta", "Elipse", "Parábola", "Circunferencia"], correctAnswer: 3, explanation: "La circunferencia es el lugar geométrico de los puntos que equidistan de un punto fijo (centro)." },
        { question: "Segmento que une dos puntos de circunferencia pasando por centro:", options: ["Radio", "Cuerda", "Diámetro", "Tangente"], correctAnswer: 2, explanation: "El diámetro une dos puntos de la circunferencia pasando por el centro." },
        { question: "Recta que divide un ángulo en dos iguales:", options: ["Mediatriz", "Bisectriz", "Perpendicular", "Paralela"], correctAnswer: 1, explanation: "La bisectriz de un ángulo lo divide en dos ángulos iguales." },
        { question: "Para trazar circunferencia por 3 puntos, se usan las:", options: ["Bisectrices", "Mediatrices de las cuerdas", "Tangentes", "Paralelas"], correctAnswer: 1, explanation: "El centro se halla en la intersección de las mediatrices de las cuerdas formadas por los puntos." },
        { question: "Al replantear una planta de edificio, se replantean individualmente:", options: ["Áreas", "Volúmenes", "Puntos geométricos clave", "Líneas principales"], correctAnswer: 2, explanation: "Se descompone en puntos geométricos clave que se replantean individualmente." },
        { question: "Reposición de puntos perdidos es más fácil si:", options: ["Puntos interiores", "Se usaron referencias externas fijas", "Marcas temporales", "Estimación visual"], correctAnswer: 1, explanation: "La reposición es más sencilla si se usaron referencias externas bien definidas." },
        { question: "Al usar tiralíneas en distancia larga, puede ser necesario:", options: ["Enfriar cuerda", "Varias sacudidas intermedias", "Tiza líquida", "Tensar al máximo"], correctAnswer: 1, explanation: "Si la distancia es larga, pueden ser necesarias varias sacudidas intermedias." },
        { question: "Método 3-4-5 se basa en teorema de:", options: ["Tales", "Pitágoras", "Bolzano", "Euclides"], correctAnswer: 1, explanation: "Se basa en el Teorema de Pitágoras." },
        { question: "Trazar perpendicular desde P exterior a AB con taquímetro: ¿dónde se estaciona primero?", options: ["En P", "En punto C de AB", "Medio AB", "Fuera"], correctAnswer: 1, explanation: "Se estaciona primero en un punto cualquiera C de la alineación AB." },
        { question: "Curva compuesta formada por:", options: ["Un arco", "Dos o más arcos de diferente radio", "Recta y arco", "Arcos separados"], correctAnswer: 1, explanation: "Está compuesta por dos o más arcos de diferente radio, tangentes entre sí." },
        { question: "Ángulo entre prolongación de una tangente y la siguiente:", options: ["Tangencia", "Central o deflexión (α)", "Cuerda", "Externo"], correctAnswer: 1, explanation: "Es el ángulo de deflexión o ángulo central (α)." },
        { question: "Distancia del punto medio de cuerda larga a punto medio de arco:", options: ["Tangente (T)", "Externa (E)", "Flecha (F)", "Longitud Curva (LC)"], correctAnswer: 2, explanation: "Es la Flecha (F)." },
        { question: "Trazado de arcos por polares desde tangente requiere:", options: ["Solo cinta", "Nivel", "Taquímetro/Estación total", "GPS"], correctAnswer: 2, explanation: "Requiere un taquímetro o estación total." },
        { question: "Segmento que une centro con punto de circunferencia:", options: ["Diámetro", "Cuerda", "Radio", "Arco"], correctAnswer: 2, explanation: "Es el Radio (R)." },
        { question: "Mediatriz de una cuerda siempre pasa por:", options: ["Medio arco", "Tangente", "Centro circunferencia", "Extremo cuerda"], correctAnswer: 2, explanation: "La mediatriz de una cuerda siempre pasa por el centro de la circunferencia." },
        { question: "Para trazar bisectriz, desde puntos 1 y 2 en lados se trazan:", options: ["Perpendiculares", "Paralelas", "Dos arcos iguales que se cortan", "Rectas al vértice"], correctAnswer: 2, explanation: "Desde los puntos 1 y 2 se trazan dos arcos de igual radio que se cortan en un punto M." },
        { question: "Operaciones de delinear figuras geométricas en terreno:", options: ["Nivelaciones", "Compensaciones", "Trazados", "Estimaciones"], correctAnswer: 2, explanation: "Se denominan trazados." },

        // --- Unidad 6 (30 Preguntas) ---
        { question: "¿Cuándo se inicia formalmente el replanteo?", options: ["Diseño conceptual.", "Tras presentar proyecto de ejecución.", "Tras finalizar estructura.", "Antes entrega final."], correctAnswer: 1, explanation: "El replanteo se inicia una vez presentado el proyecto de ejecución de obra." },
        { question: "¿Normativa NO mencionada como relevante para replanteos?", options: ["LOE", "CTE", "Seguridad Vial", "EHE-08"], correctAnswer: 2, explanation: "La LOE, CTE y EHE-08 son relevantes; la de Seguridad Vial no se menciona en este contexto." },
        { question: "Control geométrico usa principalmente:", options: ["Plomadas", "Teodolitos, estaciones, niveles", "Extensómetros", "Análisis químicos"], correctAnswer: 1, explanation: "Utiliza aparatos propios de la topografía: teodolitos, estaciones totales, niveles." },
        { question: "Control aplomado pilar: comparar coordenadas (x,y) de base y:", options: ["Centro", "Pilar adyacente", "Coronación", "Referencia lejana"], correctAnswer: 2, explanation: "Se comparan coordenadas de puntos en la base y sus homólogos en la coronación." },
        { question: "Control de asientos se realiza comúnmente mediante:", options: ["Radiación", "Nivelación geométrica desde BN", "Intersección", "Ángulos H."], correctAnswer: 1, explanation: "Se realiza mediante nivelación geométrica desde un punto fijo de control (Banco de Nivel)." },
        { question: "En replanteo fachada ladrillo, ¿qué es el 'módulo de hilada'?", options: ["Mortero", "Altura fachada", "Pieza/s repetidas + juntas verticales", "Color ladrillo"], correctAnswer: 2, explanation: "Es la dimensión de la pieza o conjunto de piezas que se repiten más las juntas verticales (llagas)." },
        { question: "Módulo horizontal hilada de sogas:", options: ["1 tizón + 1 llaga", "1 soga + 1 tendel", "1 soga + 1 llaga", "2 sogas + 1 llaga"], correctAnswer: 2, explanation: "El módulo de la hilada de sogas es 1 soga + 1 llaga." },
        { question: "Módulo vertical en replanteo fachada:", options: ["Longitud ladrillo", "Grueso ladrillo + tendel", "Solo tendel", "Mitad altura ladrillo"], correctAnswer: 1, explanation: "El módulo vertical es el grueso del ladrillo más la dimensión teórica del tendel." },
        { question: "¿Qué instrumental NO suele ser necesario para replanteo de instalaciones interiores?", options: ["Flexómetros", "Nivel láser", "Estación total/Teodolito", "Tiralíneas"], correctAnswer: 2, explanation: "No suele ser necesario el uso de instrumentos topográficos como estaciones totales o teodolitos." },
        { question: "Primera fase en secuenciación trabajos replanteo:", options: ["Ejecución replanteo", "Firma Acta", "Estudio previo del proyecto", "Replanteo ejes"], correctAnswer: 2, explanation: "La primera fase es el estudio previo del proyecto (reunir y compatibilizar información)." },
        { question: "En estudio previo, ¿qué hacer con planos de distintas especialidades?", options: ["Ignorarlos", "Compilar, cotejar y comparar", "Usar solo recientes", "Archivar"], correctAnswer: 1, explanation: "Se deben compilar, cotejar y comparar para evitar errores y asegurar compatibilidad." },
        { question: "¿Qué tecnología ayuda a unificar trazados (instalaciones, estructura)?", options: ["GPS", "Láser", "Modelado BIM", "Fotogrametría"], correctAnswer: 2, explanation: "El modelado BIM ayuda a unificar los trazados de las distintas instalaciones con la geometría constructiva." },
        { question: "Fase 'Comprobación del Terreno' incluye verificar:", options: ["Resistencia suelo", "Plano topográfico y encaje del proyecto en solar", "Materiales", "Clima"], correctAnswer: 1, explanation: "Se verifica el plano topográfico y que el proyecto encaje en el solar." },
        { question: "¿Qué info incluyen planos de replanteo?", options: ["Solo estética", "Solo cotas", "Ejes, cotas, cimentación, estructura, etc.", "Solo refs externas"], correctAnswer: 2, explanation: "Deben incluir ejes acotados, cotas, niveles, cimentaciones, estructura, tabiquería, instalaciones, etc." },
        { question: "Tras identificar puntos referencia, ¿qué paso sigue en replanteo topográfico?", options: ["Firmar acta", "Importar datos a estación total", "Excavar", "Control asientos"], correctAnswer: 1, explanation: "Se importan los datos del levantamiento al equipo topográfico (ej. estación total)." },
        { question: "Tras marcar puntos y linderos, ¿qué se marca para facilitar resto replanteo?", options: ["Curvas nivel", "Ejes de replanteo", "Zonas acopio", "Rutas evacuación"], correctAnswer: 1, explanation: "Se marcan los ejes de replanteo en el terreno como referencia." },
        { question: "¿Qué elementos se marcan en fase 'Ejecución del Replanteo'?", options: ["Solo límites ext.", "Medianeras, pilares, muros, vigas, etc.", "Solo estructura", "Solo plataformas"], correctAnswer: 1, explanation: "Se marcan los distintos elementos constructivos: medianeras, pilares, muros, vigas, escaleras, etc." },
        { question: "¿Qué ley regula aspectos básicos proceso construcción en España?", options: ["Código Civil", "LOE", "EHE-08", "REBT"], correctAnswer: 1, explanation: "La Ley de Ordenación de la Edificación (LOE) regula los aspectos básicos del proceso constructivo." },
        { question: "El CTE establece requisitos mínimos de:", options: ["Costes", "Eficiencia energ.", "Seguridad y habitabilidad", "Estética"], correctAnswer: 2, explanation: "El CTE establece requisitos mínimos de seguridad y habitabilidad." },
        { question: "La EHE-08 regula el uso de:", options: ["Acero", "Madera", "Hormigón", "Ladrillo"], correctAnswer: 2, explanation: "La Instrucción de Hormigón Estructural (EHE-08) regula el uso del hormigón." },
        { question: "Control mecánico-físico (plomada) mide variaciones:", options: ["Absolutas", "Relativas", "Solo H", "Solo V"], correctAnswer: 1, explanation: "Miden variaciones de situación relativas entre puntos del propio elemento." },
        { question: "Ventaja control geométrico (topográfico):", options: ["Más rápido", "No cualificado", "Detecta movimientos absolutos", "Mide esfuerzos"], correctAnswer: 2, explanation: "Pueden detectar movimientos absolutos respecto a puntos fijos externos." },
        { question: "Método topográfico para desplazamientos horizontales:", options: ["Nivelación", "Radiación/Intersección (coords x,y)", "Nivel. Trigonométrica", "Control asientos"], correctAnswer: 1, explanation: "Se usan métodos como radiación e intersección para obtener coordenadas planimétricas (x, y)." },
        { question: "Método topográfico para desplazamientos verticales (asientos):", options: ["Radiación", "Intersección", "Nivelaciones (geométrica/trigonométrica) para cotas (z)", "Control aplomados"], correctAnswer: 2, explanation: "Se usan nivelaciones para obtener cotas (z) y detectar asientos." },
        { question: "Método taquimétrico obtiene coordenadas (X,Y,Z) para detectar:", options: ["Solo asientos", "Solo despl. H", "Giros", "Fisuras"], correctAnswer: 2, explanation: "Permiten obtener coordenadas espaciales (X, Y, Z) para detectar giros." },
        { question: "Inspección muro: comprobar si punto intermedio está en recta de extremos es para detectar:", options: ["Humedad", "Desplazamiento horizontal", "Asiento diferencial", "Fisuración"], correctAnswer: 1, explanation: "Comprobar si un punto está en la recta definida por los extremos sirve para detectar si está desplazado." },
        { question: "Control aplomado pilar con taquímetro: recorrer arista con hilo vertical se hace con movimiento:", options: ["Horizontal", "Campaneo (vertical) del anteojo", "Zoom", "Enfoque"], correctAnswer: 1, explanation: "Se recorre la arista mediante el campaneo (movimiento vertical) del anteojo." },
        { question: "¿Cómo saber si un asiento es dinámico?", options: ["Temperatura", "Comparar cotas mismo punto en diferentes momentos", "Horizontalidad nivel", "Análisis terreno"], correctAnswer: 1, explanation: "Comparando cotas del mismo punto en observaciones temporales diferentes." },
        { question: "Módulo hilada de tizones:", options: ["1 soga + 1 llaga", "1 tizón + 1 tendel", "1 tizón + 1 llaga", "2 tizones + 1 llaga"], correctAnswer: 2, explanation: "El módulo de la hilada de tizones es 1 tizón + 1 llaga." },
        { question: "Replanteo horizontal fachada: ¿qué se hace primero?", options: ["Huecos", "Considerar fachada ciega y calcular llaga general", "Definir mortero", "Colocar esquinas"], correctAnswer: 1, explanation: "Se empieza considerando la fachada como si fuese totalmente ciega." }
    ];

    // --- Lógica del Juego ---
    let currentQuestions = []; // Preguntas para la partida actual
    let availableQuestions = []; // Preguntas aún no usadas entre sesiones
    let usedQuestionIndices = new Set(); // Indices de preguntas usadas (respecto a questionBank original)

    let currentQuestionIndex = 0;
    let score = 0;
    let firstAttempt = true;
    const TOTAL_QUESTIONS_PER_GAME = 40;
    const MIN_QUESTIONS_BEFORE_RESET = TOTAL_QUESTIONS_PER_GAME; // Umbral para reiniciar el ciclo

    // Obtener referencias a elementos del DOM
    const gameContainer = document.getElementById('game-container');
    const cardContainer = document.getElementById('card-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const explanationArea = document.getElementById('explanation-area');
    const feedbackArea = document.getElementById('feedback-area');
    const nextButton = document.getElementById('next-button');
    const finalScoreCard = document.getElementById('final-score-card');
    const playAgainButton = document.getElementById('play-again-button');
    const questionNumberDisplay = document.getElementById('question-number');
    const currentScoreDisplay = document.getElementById('current-score');
    const finalScoreDisplay = document.getElementById('final-score');
    const progressBar = document.getElementById('progress-bar');
    const progressBarContainer = document.getElementById('progress-bar-container');
    const scoreContainer = document.getElementById('score-container');

    // --- Funciones Auxiliares ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array; // Devolver el array barajado
    }

    function loadUsedQuestions() {
        const storedIndices = localStorage.getItem('usedQuizQuestionIndices');
        if (storedIndices) {
            try {
                // Parsear los índices almacenados
                const parsedIndices = JSON.parse(storedIndices);
                // Crear un Set a partir de los índices parseados
                usedQuestionIndices = new Set(parsedIndices);
            } catch (e) {
                console.error("Error al parsear índices usados de localStorage:", e);
                usedQuestionIndices = new Set(); // Empezar de cero si hay error
                localStorage.removeItem('usedQuizQuestionIndices'); // Limpiar almacenamiento erróneo
            }
        } else {
            usedQuestionIndices = new Set(); // Empezar de cero si no hay nada almacenado
        }
        // console.log("Índices usados cargados:", Array.from(usedQuestionIndices)); // Para depuración
    }


    function saveUsedQuestions() {
         // Convertir el Set a un Array para poder usar JSON.stringify
        const indicesArray = Array.from(usedQuestionIndices);
        try {
            localStorage.setItem('usedQuizQuestionIndices', JSON.stringify(indicesArray));
            // console.log("Índices usados guardados:", indicesArray); // Para depuración
        } catch (e) {
            console.error("Error al guardar índices usados en localStorage:", e);
        }
    }

    function getAvailableQuestions() {
        // Filtrar el banco principal para obtener solo las preguntas cuyos índices NO están en usedQuestionIndices
        availableQuestions = questionBank
            .map((question, index) => ({ ...question, originalIndex: index })) // Añadir índice original
            .filter(question => !usedQuestionIndices.has(question.originalIndex));

        // console.log("Preguntas disponibles:", availableQuestions.length); // Para depuración

        // Si no quedan suficientes preguntas disponibles, reiniciar el ciclo
        if (availableQuestions.length < MIN_QUESTIONS_BEFORE_RESET) {
            // console.log("Pocas preguntas disponibles, reiniciando ciclo."); // Para depuración
            usedQuestionIndices.clear(); // Limpiar el Set de usadas
            saveUsedQuestions(); // Guardar el Set vacío en localStorage
            // Volver a obtener las disponibles (ahora serán todas)
            availableQuestions = questionBank.map((question, index) => ({ ...question, originalIndex: index }));
        }
    }

    // --- Lógica Principal del Juego ---

    function startGame() {
        loadUsedQuestions(); // Cargar índices usados al inicio
        getAvailableQuestions(); // Determinar qué preguntas están disponibles

        // Asegurarse de que hay suficientes preguntas disponibles para la partida
        if (availableQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
             // Esto podría pasar si TOTAL_QUESTIONS_PER_GAME > questionBank.length
             if(questionElement) questionElement.textContent = "No hay suficientes preguntas únicas para esta partida. Intenta reiniciar.";
             console.error("Error: No hay suficientes preguntas disponibles para iniciar una partida.");
             if(optionsContainer) optionsContainer.innerHTML = "";
             // Ocultar elementos de juego si no se puede iniciar
             if(cardContainer) cardContainer.style.display = 'none';
             if(progressBarContainer) progressBarContainer.style.display = 'none';
             if(scoreContainer) scoreContainer.style.display = 'none';
             if(finalScoreCard) finalScoreCard.style.display = 'none';
             return; // Salir si no hay suficientes preguntas
        }

        currentQuestionIndex = 0;
        score = 0;

        // Barajar solo las preguntas disponibles y seleccionar las necesarias
        const shuffledAvailable = shuffleArray([...availableQuestions]);
        currentQuestions = shuffledAvailable.slice(0, TOTAL_QUESTIONS_PER_GAME);

        // Marcar las preguntas seleccionadas para esta partida como usadas
        currentQuestions.forEach(q => {
            usedQuestionIndices.add(q.originalIndex);
        });
        saveUsedQuestions(); // Guardar los índices actualizados

        // Mostrar elementos del juego
        if(cardContainer) cardContainer.style.display = 'block';
        if(finalScoreCard) finalScoreCard.style.display = 'none';
        if(nextButton) nextButton.style.display = 'none';
        if(progressBarContainer) progressBarContainer.style.display = 'block';
        if(scoreContainer) scoreContainer.style.display = 'block';

        updateScoreDisplay();
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < currentQuestions.length) {
            const q = currentQuestions[currentQuestionIndex];

            if (!q || !q.options || !Array.isArray(q.options)) {
                 console.error("Error: Pregunta o formato de opciones inválido en el índice:", currentQuestionIndex, q);
                 if(questionElement) questionElement.textContent = "Error al cargar la pregunta.";
                 if(optionsContainer) optionsContainer.innerHTML = ''; // Limpiar por si acaso
                 // Considerar mostrar un mensaje al usuario o intentar saltar a la siguiente
                 return;
            }

            firstAttempt = true;

            if(questionElement) questionElement.textContent = q.question;
            if(optionsContainer) optionsContainer.innerHTML = '';
            if(explanationArea) {
                explanationArea.style.display = 'none';
                explanationArea.textContent = '';
            }
            if(feedbackArea) feedbackArea.innerHTML = '';

            if(optionsContainer){
                q.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('option-button');
                    button.onclick = () => checkAnswer(index, button);
                    optionsContainer.appendChild(button);
                });
            }

            if(nextButton) {
                nextButton.style.display = 'none';
                nextButton.disabled = true;
            }
            updateScoreDisplay();
            updateProgressBar();

        } else {
            endGame();
        }
    }

    function updateProgressBar() {
        if(progressBar){
            const progressPercentage = ((currentQuestionIndex + 1) / TOTAL_QUESTIONS_PER_GAME) * 100; // +1 para reflejar progreso actual
            progressBar.style.width = `${progressPercentage}%`;
        }
    }

    function checkAnswer(selectedIndex, buttonElement) {
        const q = currentQuestions[currentQuestionIndex];
        const allOptionButtons = optionsContainer ? optionsContainer.querySelectorAll('.option-button') : [];

        allOptionButtons.forEach(btn => {
            btn.disabled = true;
        });

        const isCorrect = selectedIndex === q.correctAnswer;

        buttonElement.classList.add(isCorrect ? 'correct' : 'incorrect');

        if(explanationArea) {
            explanationArea.textContent = q.explanation;
            explanationArea.style.display = 'block';
        }

        if(feedbackArea){
            const feedback = document.createElement('div');
            feedback.textContent = isCorrect ? "¡Respuesta Correcta!" : "Respuesta incorrecta. La respuesta correcta está resaltada. Lee la explicación.";
            feedback.className = `feedback-message ${isCorrect ? 'correct' : 'incorrect'}`;
            feedbackArea.innerHTML = '';
            feedbackArea.appendChild(feedback);
        }

        if (!isCorrect && allOptionButtons.length > q.correctAnswer) {
             allOptionButtons[q.correctAnswer].classList.add('correct');
        }

        if (isCorrect && firstAttempt) {
            score++;
        }

        if(nextButton){
            nextButton.style.display = 'inline-block';
            nextButton.disabled = false;
        }

        firstAttempt = false;
        updateScoreDisplay(); // Actualizar puntuación mostrada
    }

    function updateScoreDisplay() {
        if (questionNumberDisplay && currentScoreDisplay) {
            questionNumberDisplay.textContent = `${Math.min(currentQuestionIndex + 1, TOTAL_QUESTIONS_PER_GAME)}`;
            currentScoreDisplay.textContent = score;
        }
    }

    if (nextButton) {
        nextButton.onclick = () => {
            currentQuestionIndex++;
            loadQuestion();
        };
    }

    if (playAgainButton) {
        playAgainButton.onclick = () => {
            startGame(); // Reiniciar el juego buscará nuevas preguntas no usadas
        };
    }

    function endGame() {
        if (cardContainer && finalScoreCard && finalScoreDisplay && progressBarContainer && scoreContainer) {
            cardContainer.style.display = 'none';
            finalScoreCard.style.display = 'block';
            finalScoreDisplay.textContent = score;
            progressBarContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
        }
    }

    // Iniciar el juego
    startGame();
});
