// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Banco de preguntas
    // Cada objeto: { question: "...", options: ["...", "...", "...", "..."], correctAnswer: index, explanation: "..." }
    const questionBank = [
        // Unidad 1
        {
            question: "¿Cuál es el objetivo principal de la topografía?",
            options: [
                "Estudiar la composición química del suelo.",
                "Predecir fenómenos meteorológicos.",
                "Codificar la posición de puntos para representarlos en un plano o localizarlos en terreno.",
                "Diseñar la estructura interna de los edificios."
            ],
            correctAnswer: 2,
            explanation: "La topografía se focaliza en el estudio de las posiciones de los puntos de interés que se encuentran en la superficie terrestre o bajo ella, con el objetivo de codificar su posición para representarlos en un plano o localizarlos en el terreno."
        },
        {
            question: "¿Qué tipo de proyección cartográfica mantiene los ángulos que forman dos líneas en la superficie terrestre?",
            options: [
                "Proyecciones equivalentes.",
                "Proyecciones afilácticas.",
                "Proyecciones conformes.",
                "Proyecciones gnomónicas."
            ],
            correctAnswer: 2,
            explanation: "Una proyección cartográfica es conforme cuando mantiene los ángulos que forman dos líneas en la superficie terrestre. Este tipo de proyecciones se utilizan en cartas de navegación."
        },
        {
            question: "En topografía, ¿qué son las coordenadas polares?",
            options: [
                "Latitud y longitud referidas al ecuador.",
                "Ejes ortogonales X e Y en un plano.",
                "Una distancia al origen y dos ángulos (horizontal y vertical).",
                "Un sistema basado únicamente en la altura."
            ],
            correctAnswer: 2,
            explanation: "Las coordenadas polares definen un punto por su distancia al origen (Dg) y dos ángulos (H: horizontal/acimut, V: vertical). Son muy usadas en topografía."
        },
        {
            question: "¿Qué es la planimetría en el contexto de un levantamiento topográfico?",
            options: [
                "La determinación de la cota de un punto.",
                "La proyección de un punto sobre un plano de comparación obteniendo sus coordenadas (x,y).",
                "La medición de errores atmosféricos.",
                "El estudio de los ángulos verticales únicamente."
            ],
            correctAnswer: 1,
            explanation: "La planimetría consiste en la proyección de un punto del terreno sobre un plano de comparación obteniendo sus coordenadas cartesianas (x,y) con respecto a un sistema de referencia."
        },
        {
            question: "¿Qué tipo de error en las medidas se repite de manera constante y está asociado a imperfecciones de los instrumentos?",
            options: [
                "Errores accidentales",
                "Errores humanos",
                "Errores sistemáticos",
                "Errores de apreciación"
            ],
            correctAnswer: 2,
            explanation: "Los errores sistemáticos son errores que se repiten de manera constante a lo largo de todo el conjunto de mediciones. Estos están asociados a imperfecciones o a descalibraciones de los instrumentos."
        },
        {
            question: "La operación de trasladar los puntos y trazados del plano del proyecto al terreno se denomina:",
            options: ["Levantamiento topográfico", "Nivelación", "Replanteo", "Proyección cartográfica"],
            correctAnswer: 2,
            explanation: "El replanteo se basa en trasladar los puntos, alineaciones y demás trazados del plano del proyecto al terreno."
        },
        {
            question: "¿Qué es un ángulo de depresión?",
            options: [
                "Un ángulo medido en un plano horizontal.",
                "El ángulo formado por la horizontal y la línea de mira a un objeto situado encima de la horizontal.",
                "El ángulo formado por la horizontal y la línea de mira a un objeto situado debajo de la horizontal.",
                "Un ángulo siempre mayor de 90 grados."
            ],
            correctAnswer: 2,
            explanation: "El ángulo de depresión es el ángulo formado por la horizontal que pasa por el ojo del observador y la línea de mira dirigida al objeto situado debajo de la horizontal."
        },
        {
            question: "La cartografía utiliza leyes de transformación para pasar al plano aquello que está sobre una superficie:",
            options: ["Plana y regular", "Cilíndrica únicamente", "Esférica irregular", "Cónica únicamente"],
            correctAnswer: 2,
            explanation: "La cartografía usa leyes de transformación y métodos de proyección que nos permiten pasar al plano aquello que está sobre una superficie esférica irregular."
        },
        {
            question: "Los planos que además del valor superficial nos dan las distancias verticales desde un plano de comparación son los:",
            options: ["Planimétricos", "Altimétricos", "Geográficos", "Catastrales"],
            correctAnswer: 1,
            explanation: "Los planos altimétricos, además del valor superficial, nos dan las distancias verticales desde un plano de comparación a los puntos (planos acotados) o bien relacionando a los puntos del espacio unos con otros (planos de curvas de nivel o taquimétricos)."
        },
        {
            question: "¿Cuál es el meridiano principal o meridiano 0 utilizado como referencia en coordenadas geográficas?",
            options: ["El meridiano de París", "El meridiano de Washington", "El meridiano de Greenwich", "El meridiano de Roma"],
            correctAnswer: 2,
            explanation: "En el sistema de coordenadas geográficas, el sistema de referencia está definido por dos círculos máximos, el ecuador y el meridiano principal o meridiano 0 que pasa por Greenwich (Inglaterra)."
        },
        // Unidad 2
        {
            question: "¿Cuál es el objetivo principal del replanteo de un terreno?",
            options: [
                "Analizar la composición del suelo.",
                "Trasladar fielmente al terreno los componentes y dimensiones de los planos del proyecto.",
                "Realizar un estudio histórico de la parcela.",
                "Establecer las rutas de acceso para la maquinaria."
            ],
            correctAnswer: 1,
            explanation: "El replanteo de un terreno es la operación que tiene por objeto trasladar fielmente sobre el terreno, todos los componentes, dimensiones y formas indicadas en los planos que integran la documentación técnica de la obra."
        },
        {
            question: "En la interpretación de documentos para replanteo, ¿qué es la 'precisión'?",
            options: [
                "La unidad de medida más pequeña del instrumento.",
                "El grado de aproximación de una medida a la realidad o verdadera medida.",
                "La velocidad con la que se realiza la medición.",
                "El coste del instrumento de medida."
            ],
            correctAnswer: 1,
            explanation: "Precisión se refiere al grado de aproximación de una medida a la realidad o verdadera medida de un elemento. Depende de la mayor o menor apreciación del instrumento de medida y del método empleado para la medición."
        },
        {
            question: "Si un plano tiene una escala 1/100, ¿qué significa?",
            options: [
                "1 cm en el plano representa 1 metro en la realidad.",
                "1 metro en el plano representa 100 cm en la realidad.",
                "1 cm en el plano representa 100 metros en la realidad.",
                "1 mm en el plano representa 100 cm en la realidad."
            ],
            correctAnswer: 0,
            explanation: "Una escala 1/100 significa que una unidad en el plano representa 100 unidades iguales en la realidad. Por ejemplo, 1 cm en el plano son 100 cm (o 1 metro) en el terreno."
        },
        {
            question: "¿Qué son las 'bases de replanteo'?",
            options: [
                "Los cimientos principales del edificio.",
                "Las herramientas básicas utilizadas en el replanteo.",
                "Puntos de coordenadas conocidas materializadas en el terreno, desde donde se inicia el replanteo.",
                "Los planos que contienen únicamente la información de las bases militares."
            ],
            correctAnswer: 2,
            explanation: "Las bases de replanteo son puntos de coordenadas conocidas materializadas en el terreno. Por lo general, están alejados de la figura a replantear y localizados en zonas donde es posible controlar su área de influencia en la obra."
        },
        {
            question: "El método de replanteo que utiliza coordenadas cartesianas X, Y, Z obtenidas por satélite es el:",
            options: [
                "Replanteo con estación total y prisma.",
                "Replanteo artesanal por abscisas.",
                "Replanteo con GPS.",
                "Replanteo por trilateración."
            ],
            correctAnswer: 2,
            explanation: "La aplicación de un replanteo por coordenadas cartesianas con GPS se basa en situar con el apoyo de la red GPS las posiciones de los puntos de replanteo según sus coordenadas cartesianas."
        },
        {
            question: "¿Qué es un 'proyecto analítico' en el contexto del cálculo de datos de replanteo?",
            options: [
                "Un proyecto que solo contiene dibujos y gráficos.",
                "Un proyecto donde los elementos están definidos numéricamente (coordenadas o acotaciones).",
                "Un proyecto que se analiza mediante software de simulación.",
                "Un proyecto que se replantea exclusivamente con métodos artesanales."
            ],
            correctAnswer: 1,
            explanation: "Un proyecto analítico debe tener los elementos de la obra definidos numéricamente, bien sea por coordenadas o acotaciones, permitiendo calcular directamente los datos de replanteo."
        },
        {
            question: "¿Para qué sirve el 'Acta de Replanteo' en una obra?",
            options: [
                "Para solicitar la licencia de obras.",
                "Para documentar los materiales a utilizar.",
                "Para acreditar la correcta ejecución del replanteo inicial y permitir el inicio de las obras.",
                "Para registrar las horas trabajadas por el personal."
            ],
            correctAnswer: 2,
            explanation: "El acta de comprobación del replanteo refleja la conformidad o disconformidad del mismo respecto de los documentos contractuales del proyecto y su realización es necesaria para el inicio de las obras."
        },
        {
            question: "El método de replanteo artesanal que consiste en obtener la intersección de dos longitudes medidas desde dos puntos conocidos se llama:",
            options: ["Método por abscisas", "Método de retícula ortogonal", "Método de trilateración", "Trazado geométrico"],
            correctAnswer: 2,
            explanation: "El método de trilateración consiste en obtener la intersección de dos longitudes medidas, desde dos puntos conocidos, con el fin de replantear uno nuevo."
        },
        {
            question: "El error gráfico en la lectura de un plano se refiere a:",
            options: [
                "Un error en el cálculo de la escala.",
                "La mínima medida que el ojo humano puede apreciar en un plano (aprox. 0.2 mm).",
                "Un error en la impresión del plano.",
                "La distorsión causada por la proyección cartográfica."
            ],
            correctAnswer: 1,
            explanation: "Al momento de la lectura de un plano, cuando medimos, nuestro ojo no puede apreciar medidas inferiores a 0.2 mm. este valor lo denominaremos error gráfico."
        },
        {
            question: "¿Cuál de los siguientes programas NO es un software comúnmente utilizado en topografía o replanteo según el texto?",
            options: ["AutoCAD", "MAGNET Field", "Microsoft Word", "QGIS"],
            correctAnswer: 2,
            explanation: "AutoCAD, MAGNET Field, Leica SmartWorx Viva, Topocal, Protopo, Topoligonar V3, QGIS, gvSIG Desktop y Python son mencionados como software para topografía y replanteo. Microsoft Word no está en esta categoría."
        },
        // Unidad 3
        {
            question: "¿Qué instrumento topográfico se emplea principalmente para medir desniveles existentes entre dos puntos?",
            options: ["Brújula topográfica", "Nivel topográfico", "Cinta métrica", "Teodolito óptico"],
            correctAnswer: 1,
            explanation: "El nivel topográfico, conocido como equialtimetro, se emplea para medir desniveles existentes entre dos puntos o trasladar cotas."
        },
        {
            question: "¿Cuál es la función principal de una Estación Total?",
            options: [
                "Indicar el norte magnético.",
                "Medir únicamente distancias cortas.",
                "Medir ángulos (horizontales/verticales) y distancias.",
                "Proyectar líneas láser para nivelación."
            ],
            correctAnswer: 2,
            explanation: "La Estación total es un instrumento de tipo electro-óptico que integra un distanciómetro con un microprocesador y un teodolito, permitiendo medir ángulos y distancias."
        },
        {
            question: "La herramienta formada por un peso colgado de un cordel que permite obtener información sobre la verticalidad se llama:",
            options: ["Nivel de burbuja", "Escuadra de albañil", "Plomada", "Jalón"],
            correctAnswer: 2,
            explanation: "La plomada consiste en un peso colgado de un cordel o de un alambre, nos permite obtener información acerca de la verticalidad de una pared o de cualquier elemento."
        },
        {
            question: "¿Para qué se utilizan las estacas de madera, piquetes o varillas de hierro en replanteo?",
            options: [
                "Para medir ángulos.",
                "Como señales de puntería fijas.",
                "Para dejar materializado un punto en el terreno.",
                "Para nivelar el equipo topográfico."
            ],
            correctAnswer: 2,
            explanation: "La señalización de puntos se refiere a los accesorios que utilizamos para dejar materializado un punto en el terreno, como son las estacas de madera, los piquetes y las varillas de hierro."
        },
        {
            question: "Un nivel láser que proyecta un rayo tanto vertical como horizontal es muy utilizado en:",
            options: [
                "Medición de grandes distancias únicamente.",
                "El replanteo de elementos de obra como tabiques.",
                "La determinación del norte magnético.",
                "La calibración de estaciones totales."
            ],
            correctAnswer: 1,
            explanation: "El nivel láser proyecta un rayo láser tanto vertical como horizontal, que nos permite llevar a cabo la medición y es muy utilizado en el replanteo de elementos de obra."
        },
        {
            question: "¿Qué es un distanciómetro electrónico?",
            options: [
                "Un tipo de brújula avanzada.",
                "Un instrumento que mide ángulos con alta precisión.",
                "Un instrumento electrónico que calcula la distancia usando un rayo láser.",
                "Un software para procesar datos de GPS."
            ],
            correctAnswer: 2,
            explanation: "El distanciómetro electrónico es un instrumento electrónico de medición que calcula la distancia desde dos puntos con la utilización de un rayo láser."
        },
        {
            question: "Para que un receptor GPS calcule una posición 3D (latitud, longitud y altitud), ¿a cuántos satélites debe estar conectado como mínimo?",
            options: ["Uno", "Dos", "Tres", "Cuatro o más"],
            correctAnswer: 3,
            explanation: "Con cuatro o más satélites a la vista, el receptor GPS puede determinar la posición 3D del usuario (latitud, longitud y altitud)."
        },
        {
            question: "¿Cuál es una pauta importante para la conservación de los equipos topográficos?",
            options: [
                "Guardarlos siempre con los seguros activados.",
                "Transportarlos fuera de sus estuches para ventilación.",
                "Realizar revisión y calibración anual.",
                "Limpiarlos exclusivamente con productos abrasivos."
            ],
            correctAnswer: 2,
            explanation: "El buen mantenimiento implica revisar y calibrar los equipos anualmente para asegurar su precisión y vida útil."
        },
        {
            question: "La cualidad de un aparato topográfico para dar indicaciones próximas al valor verdadero se denomina:",
            options: ["Resolución", "Fidelidad", "Precisión", "Sensibilidad"],
            correctAnswer: 2,
            explanation: "Precisión es la cualidad de un aparato para dar indicaciones próximas al valor verdadero."
        },
        {
            question: "En la puesta en estación de un teodolito, ¿qué se verifica con la plomada óptica?",
            options: [
                "La correcta orientación al norte.",
                "Que el aparato esté perfectamente horizontal.",
                "Que el centro del teodolito coincida con el punto de estación marcado en el suelo.",
                "La distancia al siguiente punto a medir."
            ],
            correctAnswer: 2,
            explanation: "En la puesta en estación, se verifica con la plomada óptica que el aparato coincida con el trazo realizado sobre la estaca o en la superficie donde se encuentra el punto de estación."
        },
            // Unidad 4
        {
            question: "¿Qué es una 'curva de nivel' en un plano altimétrico?",
            options: [
                "Una línea que marca el límite de una propiedad.",
                "Una línea que une puntos de igual cota o altitud.",
                "Una representación de una carretera curva.",
                "Una línea utilizada para medir ángulos."
            ],
            correctAnswer: 1,
            explanation: "En los planos que muestran una proyección horizontal del terreno, la línea que enlaza varios puntos que están a un mismo nivel se conoce como curva de nivel o curva horizontal."
        },
        {
            question: "La diferencia de cota constante entre dos curvas de nivel consecutivas se conoce como:",
            options: ["Línea de rotura", "Equidistancia", "Cota roja", "Rasante"],
            correctAnswer: 1,
            explanation: "La separación entre dos curvas nivel consecutivas se conoce como equidistancia."
        },
        {
            question: "¿Cuál es el método altimétrico más usado y preciso para obtener el desnivel entre dos puntos, utilizando nivel y mira?",
            options: ["Nivelación barométrica", "Nivelación trigonométrica", "Nivelación geométrica", "Uso de GPS exclusivamente"],
            correctAnswer: 2,
            explanation: "El método más usado para obtener el desnivel entre dos puntos es el denominado nivelación geométrica o por alturas, que utiliza nivel y mira estadimétrica."
        },
        {
            question: "En nivelación geométrica, la lectura realizada sobre la mira situada en el primer punto (punto de partida o conocido) se denomina:",
            options: ["Lectura de frente", "Lectura intermedia", "Lectura de espaldas", "Lectura de mira"],
            correctAnswer: 2,
            explanation: "En nivelación geométrica, la lectura media obtenida sobre la mira situada en el punto A (primer punto) se le conoce como lectura de espaldas LA."
        },
        {
            question: "El error de cierre altimétrico de un itinerario es la discrepancia entre:",
            options: [
                "La primera y la última lectura de mira.",
                "El coste previsto y el coste real de la nivelación.",
                "La cota conocida del punto de llegada y la obtenida a través de los datos de campo del itinerario.",
                "La distancia medida y la distancia real entre dos puntos."
            ],
            correctAnswer: 2,
            explanation: "En todo itinerario altimétrico habrá siempre discrepancia entre el valor exacto de la cota del punto de llegada, conocida de antemano, y la obtenida a través de los datos de campo del itinerario. Su diferencia será el error de cierre altimétrico."
        },
        {
            question: "¿Qué es un 'perfil longitudinal' del terreno?",
            options: [
                "La vista en planta del terreno.",
                "Una sección vertical del terreno perpendicular-mente a una alineación principal.",
                "La representación de una sección vertical del terreno a lo largo de una alineación principal.",
                "Un listado de todas las cotas del terreno."
            ],
            correctAnswer: 2,
            explanation: "Denominamos perfil del terreno a la representación de una sección vertical del mismo. El perfil puede ser longitudinal, cuando el plano vertical sigue una alineación principal."
        },
        {
            question: "La línea que define la posición espacial de un proyecto respecto del plano horizontal, dibujada sobre los perfiles longitudinales, se llama:",
            options: ["Curva de nivel", "Rasante", "Línea de rotura", "Plano de comparación"],
            correctAnswer: 1,
            explanation: "Las rasantes son las líneas que definen la posición espacial de un proyecto respecto del plano horizontal. Se dibujan sobre los perfiles longitudinales."
        },
        {
            question: "¿Qué indica una 'cota roja' positiva?",
            options: [
                "Que se necesita rellenar con tierra (terraplén).",
                "Que hay un exceso de terreno y se debe excavar (desmonte).",
                "Que la cota del terreno y la rasante coinciden.",
                "Que el terreno tiene una pendiente muy pronunciada."
            ],
            correctAnswer: 1,
            explanation: "La cota roja es la diferencia entre las ordenadas del terreno y las de la rasante. Si es positiva, significa que la cota del terreno es mayor que la de la rasante, por lo que se deberá desmontar."
        },
        {
            question: "La operación de superponer la sección tipo de la obra sobre el perfil transversal del terreno se denomina:",
            options: ["Nivelación", "Compensación", "Cajeado", "Replanteo"],
            correctAnswer: 2,
            explanation: "Una vez obtenido el perfil transversal se le puede superponer la sección tipo, que es el perfil transversal que deberá tener la obra una vez terminada. Esta operación se denominada cajeado."
        },
        {
            question: "Los puntos fijos y muy firmes, materializados con cubos de hormigón, que constituyen la red básica de control altimétrico de cotas en una obra se conocen como:",
            options: ["Estacas auxiliares", "Puntos de replanteo", "Bancos de Nivel", "Vértices geodésicos"],
            correctAnswer: 2,
            explanation: "Los puntos permanentes son aquellos puntos que constituyen la red básica de control altimétrico de cotas. Normalmente se materializan sobre el terreno mediante los denominados bancos de nivel."
        },
        // Unidad 5
        {
            question: "¿Cómo se define generalmente una alineación recta en el terreno para su trazado?",
            options: [
                "Por un único punto y una dirección.",
                "Al menos por los dos puntos extremos de la misma.",
                "Mediante una curva suave.",
                "Por la intersección de dos planos."
            ],
            correctAnswer: 1,
            explanation: "Una alineación recta está definida en el terreno, al menos por los dos puntos extremos de la misma, aunque es recomendable replantear por lo menos tres para comprobación."
        },
        {
            question: "La herramienta formada por un recipiente con polvo de tiza y una cuerda, usada para marcar líneas rectas en superficies lisas, es el:",
            options: ["Nivel de manguera", "Tiralíneas o bota de trazar", "Plomada", "Reglón metálico"],
            correctAnswer: 1,
            explanation: "Cuando las alineaciones o rectas que deseamos trazar se encuentran en una superficie relativamente lisa (fachada, suelo, cubierta, etc.) se suele utilizar el tiralíneas para el marcado."
        },
        {
            question: "El método del triángulo 3-4-5 se utiliza para trazar en campo:",
            options: ["Paralelas", "Curvas circulares", "Perpendiculares (ángulos rectos)", "Ángulos de 45 grados"],
            correctAnswer: 2,
            explanation: "Para obtener una perpendicular a una alineación dada por un punto dado de la misma, lo más habitual es recurrir al método del triángulo 3-4-5, que se basa en el teorema de Pitágoras."
        },
        {
            question: "Para trazar una paralela a una alineación AB a una distancia 'd', un método consiste en levantar dos perpendiculares en puntos de AB y medir 'd' sobre ellas. Los puntos obtenidos definen la paralela.",
            options: ["Verdadero", "Falso"],
            correctAnswer: 0,
            explanation: "Para trazar una paralela a una alineación a una distancia dada, d, en dos puntos cualquiera de la alineación AB se levantarán dos perpendiculares. Midiendo sobre dichas perpendiculares la magnitud d, se obtendrán dos puntos que unidos determinarán la paralela pedida."
        },
        {
            question: "¿Cuál es el elemento de una curva circular simple que representa la distancia desde el Punto de Intersección (PI) hasta el Punto de Comienzo (PC) o Punto de Fin (PT)?",
            options: ["Radio (R)", "Cuerda Larga (C)", "Tangente (T)", "Flecha (F)"],
            correctAnswer: 2,
            explanation: "La Tangente (T) es la distancia entre el punto de intersección de las alineaciones rectas (PI) y el punto donde comienza (PC) o termina (PT) la curva."
        },
        {
            question: "El trazado continuo de un arco de curva circular, haciéndolo desde su centro con una cinta o cordel, es más adecuado para:",
            options: [
                "Arcos de radio muy grande y con obstáculos.",
                "Arcos de radio pequeño y sin obstáculos.",
                "Cualquier tipo de arco, es el método más preciso.",
                "Arcos que forman parte de curvas compuestas."
            ],
            correctAnswer: 1,
            explanation: "El trazado continuo desde el centro se emplea solo para arcos de radio pequeño, ya que para radios grandes surgen dificultades por obstáculos y acumulación de error."
        },
        {
            question: "Para replantear una circunferencia completa en el terreno, ¿cuántos puntos no alineados de la misma se necesitan conocer como mínimo?",
            options: ["Uno", "Dos", "Tres", "Cuatro"],
            correctAnswer: 2,
            explanation: "En el caso de que en plano se haya representado alguna circunferencia que debamos replantear en terreno, será necesario conocer, al menos, tres puntos de la circunferencia."
        },
        {
            question: "El centro de una circunferencia se encuentra en la intersección de las _________ de dos cuerdas cualesquiera de dicha circunferencia.",
            options: ["Tangentes", "Bisectrices", "Mediatrices", "Radios"],
            correctAnswer: 2,
            explanation: "El centro de la circunferencia es el punto donde se cortan las mediatrices de dos segmentos (cuerdas) formados por tres puntos conocidos de la circunferencia."
        },
        {
            question: "Si los puntos de replanteo iniciales se pierden durante la obra, ¿cómo se facilita su reposición?",
            options: [
                "Memorizando su ubicación exacta.",
                "Habiendo marcado bien una base de replanteo externa y usando las referencias originales.",
                "Realizando un nuevo levantamiento topográfico completo.",
                "Adivinando su posición aproximada."
            ],
            correctAnswer: 1,
            explanation: "Cuando el replanteo inicial se ha realizado a partir de referencias externas (como una base de replanteo bien marcada), la reposición de los puntos se puede hacer a partir de las mismas referencias y datos originales."
        },
        {
            question: "Al trazar puntos intermedios en una alineación recta muy larga con un taquímetro, ¿qué movimiento principal realiza el anteojo del aparato una vez colimado el extremo?",
            options: [
                "Giro horizontal completo.",
                "Basculación vertical (sin mover la alidada horizontal).",
                "Desplazamiento lateral del trípode.",
                "Cambio de la altura del instrumento."
            ],
            correctAnswer: 1,
            explanation: "Para situar un punto intermedio con taquímetro, el operador deberá bascular convenientemente el anteojo (movimiento vertical), sin mover la alidada (parte que gira horizontalmente), e indicar al ayudante la situación."
        },
        // Unidad 6
        {
            question: "¿En qué fase de la obra se inicia formalmente el trabajo de replanteo?",
            options: [
                "Durante el diseño conceptual.",
                "Una vez presentado el proyecto de ejecución de obra.",
                "Después de finalizar la estructura.",
                "Justo antes de la entrega final de la obra."
            ],
            correctAnswer: 1,
            explanation: "Los trabajos de replanteo se inician una vez que ha sido presentado el proyecto de ejecución de obra. Previamente se habrá realizado el levantamiento topográfico."
        },
        {
            question: "¿Cuál de las siguientes normativas NO se menciona como relevante para los replanteos en el contexto de la edificación en España?",
            options: [
                "Ley de Ordenación de la Edificación (LOE).",
                "Código Técnico de la Edificación (CTE).",
                "Normativa de Seguridad Vial.",
                "Instrucción de Hormigón Estructural (EHE-08)."
            ],
            correctAnswer: 2,
            explanation: "La Ley de Ordenación de la Edificación (LOE), el Código Técnico de la Edificación (CTE) y la Instrucción de Hormigón Estructural (EHE-08) son normativas mencionadas. La normativa de seguridad vial no se cita en este contexto específico."
        },
        {
            question: "Los procedimientos de control geométrico en obra, basados en la medida de ángulos, distancias y desniveles, utilizan principalmente:",
            options: [
                "Plomadas e inclinómetros.",
                "Teodolitos, estaciones totales y niveles topográficos.",
                "Extensómetros y cintas de convergencia.",
                "Análisis químicos del terreno."
            ],
            correctAnswer: 1,
            explanation: "Los procedimientos geométricos se basan en la medida de ángulos, distancias y desniveles mediante los aparatos propios de la topografía: teodolitos, estaciones totales, niveles topográficos."
        },
        {
            question: "Para controlar el aplomo de un pilar, un método topográfico consiste en determinar las coordenadas planimétricas (x, y) de puntos en su base y sus homólogos en:",
            options: ["El centro del pilar", "Un pilar adyacente", "La coronación del pilar", "Un punto de referencia lejano"],
            correctAnswer: 2,
            explanation: "El procedimiento más general para controlar aplomados mediante topografía clásica consiste en determinar las coordenadas planimétricas (x, y) de una serie de puntos situados en su base y las de sus respectivos homólogos en la coronación."
        },
        {
            question: "El control de asientos en una estructura se realiza comúnmente mediante:",
            options: [
                "Radiación con estación total.",
                "Nivelación geométrica desde un punto fijo de control (BN).",
                "Intersección directa de visuales.",
                "Medición de ángulos horizontales únicamente."
            ],
            correctAnswer: 1,
            explanation: "El procedimiento topográfico más adecuado para el control de asientos es la nivelación geométrica, o por alturas, observada con nivel topográfico y mira de nivelación a partir de un punto fijo de control de cota conocida."
        },
        {
            question: "En el replanteo de una fachada de ladrillo, ¿qué es el 'módulo de la hilada'?",
            options: [
                "El tipo de mortero utilizado.",
                "La altura total de la fachada.",
                "La pieza o conjunto de piezas que se repiten en la hilada, más las juntas verticales.",
                "El color del ladrillo."
            ],
            correctAnswer: 2,
            explanation: "Para el replanteo de una hilada debemos considerar que hay una o varias piezas que se repiten en toda la hilada, y es lo que vamos a considerar módulo de la hilada (pieza/s + junta/s)."
        },
        {
            question: "Al replantear una hilada de sogas, el módulo horizontal es:",
            options: ["1 tizón + 1 llaga", "1 soga + 1 tendel", "1 soga + 1 llaga", "2 sogas + 1 llaga"],
            correctAnswer: 2,
            explanation: "El módulo de la hilada de sogas será 1 soga + 1 llaga (junta vertical)."
        },
        {
            question: "En el replanteo vertical de una fachada de ladrillo, ¿qué se utiliza como 'módulo vertical'?",
            options: [
                "La longitud del ladrillo.",
                "El grueso del ladrillo más la dimensión teórica del tendel.",
                "Únicamente el grueso del tendel.",
                "La mitad de la altura del ladrillo."
            ],
            correctAnswer: 1,
            explanation: "Para el replanteo vertical utilizamos el 'módulo' vertical, que se obtiene de sumar a la dimensión del grueso del ladrillo de la hilada la dimensión teórica del tendel (normalmente 1 cm)."
        },
        {
            question: "¿Qué tipo de instrumental NO es comúnmente necesario para el replanteo de instalaciones interiores por los propios instaladores?",
            options: [
                "Flexómetros y cintas métricas.",
                "Nivel láser y plomada.",
                "Estación total o teodolito.",
                "Tiralíneas y puntas de marcar."
            ],
            correctAnswer: 2,
            explanation: "En el replanteo de instalaciones interiores no será necesario el uso de instrumentos topográficos como estaciones totales o teodolitos, aunque sí se requerirá flexómetros, niveles láser, tiralíneas, etc."
        },
        {
            question: "La primera fase en la secuenciación de los trabajos de replanteo es:",
            options: [
                "La ejecución del replanteo de elementos constructivos.",
                "La firma del Acta de Replanteo.",
                "El estudio previo del proyecto (reunir y compatibilizar información).",
                "El replanteo topográfico y establecimiento de ejes."
            ],
            correctAnswer: 2,
            explanation: "La primera fase en la secuenciación de los trabajos de replanteo es el estudio previo del proyecto: reunir, ordenar y compatibilizar toda la información disponible, tanto la que se encuentra en el terreno como la contenida en los planos del proyecto."
        }
    ];

    // --- Lógica del Juego ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let firstAttempt = true;
    const TOTAL_QUESTIONS_PER_GAME = 40;

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


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startGame() {
        if (questionBank.length < TOTAL_QUESTIONS_PER_GAME) {
            if(questionElement) questionElement.textContent = "No hay suficientes preguntas en el banco para iniciar el juego.";
            if(optionsContainer) optionsContainer.innerHTML = "";
            if(cardContainer) cardContainer.style.display = 'none';
            if(progressBarContainer) progressBarContainer.style.display = 'none';
            if(scoreContainer) scoreContainer.style.display = 'none';
            return;
        }

        currentQuestionIndex = 0;
        score = 0;
        
        const shuffledBank = [...questionBank];
        shuffleArray(shuffledBank);
        currentQuestions = shuffledBank.slice(0, TOTAL_QUESTIONS_PER_GAME);

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

            if (!q) {
                // console.error("Error: La pregunta actual (q) es undefined."); // Para depuración
                if(questionElement) questionElement.textContent = "Error al cargar la pregunta.";
                return; 
            }
            if (!q.options || !Array.isArray(q.options)) {
                // console.error("Error: q.options no es un array o es undefined para la pregunta:", q.question); // Para depuración
                 if(questionElement) questionElement.textContent = "Error en el formato de opciones de la pregunta.";
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
            
            if(optionsContainer){ // Comprobación añadida
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
            const progressPercentage = (currentQuestionIndex / TOTAL_QUESTIONS_PER_GAME) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
    }

    function checkAnswer(selectedIndex, buttonElement) {
        const q = currentQuestions[currentQuestionIndex];
        const allOptionButtons = optionsContainer ? optionsContainer.querySelectorAll('.option-button') : [];

        allOptionButtons.forEach(btn => {
            btn.disabled = true;
        });

        if (selectedIndex === q.correctAnswer) {
            buttonElement.classList.add('correct');
            if(explanationArea) {
                explanationArea.textContent = q.explanation;
                explanationArea.style.display = 'block';
            }
            
            if(feedbackArea){
                const feedback = document.createElement('div');
                feedback.textContent = "¡Respuesta Correcta!";
                feedback.className = 'feedback-message correct';
                feedbackArea.innerHTML = ''; 
                feedbackArea.appendChild(feedback);
            }

            if (firstAttempt) {
                score++;
            }
            if(nextButton){
                nextButton.style.display = 'inline-block';
                nextButton.disabled = false;
            }
        } else {
            buttonElement.classList.add('incorrect');
            if(feedbackArea){
                const feedback = document.createElement('div');
                feedback.textContent = "Respuesta incorrecta. La respuesta correcta está resaltada. Lee la explicación.";
                feedback.className = 'feedback-message incorrect';
                feedbackArea.innerHTML = ''; 
                feedbackArea.appendChild(feedback);
            }
            
            if (allOptionButtons.length > q.correctAnswer) { // Comprobar que el índice es válido
                 allOptionButtons[q.correctAnswer].classList.add('correct');
            }

            if(explanationArea) {
                explanationArea.textContent = q.explanation;
                explanationArea.style.display = 'block';
            }
            
            if(nextButton){
                nextButton.style.display = 'inline-block'; 
                nextButton.disabled = false;
            }
        }
        firstAttempt = false; 
        updateScoreDisplay();
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
            startGame();
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
