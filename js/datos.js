// Ley N° 19.880 - Bases de los Procedimientos Administrativos (LBPA)
// Texto oficial verificado en BCN / LeyChile.
// "comentarioProfesor" son notas de cátedra basadas en Bermúdez, "Derecho Administrativo General", Cap. VII.

const lbpa = [
    {
        numero: 1,
        titulo: "Procedimiento Administrativo",
        texto: "La presente ley establece y regula las bases del procedimiento administrativo de los actos de la Administración del Estado. Todo procedimiento administrativo deberá expresarse a través de los medios electrónicos establecidos por ley, salvo las excepciones legales. En caso de que la ley establezca procedimientos administrativos especiales, la presente ley se aplicará con carácter supletorio. Tratándose de los procedimientos seguidos para el otorgamiento de una autorización sectorial, iniciados a solicitud de parte, se estará a lo dispuesto en la Ley Marco de Autorizaciones Sectoriales. En lo no dispuesto en dicha ley, se aplicará la presente ley con carácter supletorio. La toma de razón de los actos de la Administración del Estado se regirán por lo dispuesto en la Constitución y en la Ley Orgánica Constitucional de la Contraloría General de la República.",
        conceptos: ["objeto de la ley", "supletoriedad"]
    },
    {
        numero: 2,
        titulo: "Ámbito de aplicación",
        texto: "Las disposiciones de la presente ley serán aplicables a los ministerios, las intendencias, las gobernaciones y los servicios públicos creados para el cumplimiento de la función administrativa. También se aplicarán a la Contraloría General de la República, a las Fuerzas Armadas y a las Fuerzas de Orden y Seguridad Pública, a los gobiernos regionales y a las municipalidades. Las referencias que esta ley haga a la Administración o a la Administración del Estado, se entenderán efectuadas a los órganos y organismos señalados en el inciso precedente.",
        conceptos: ["ámbito de aplicación", "Administración del Estado"]
    },
    {
        numero: 3,
        titulo: "Concepto de Acto administrativo",
        conceptos: ["principios", "contradictoriedad", "igualdad entre interesados"],
        texto: "Las decisiones escritas que adopte la Administración se expresarán por medio de actos administrativos. Para efectos de esta ley se entenderá por acto administrativo las decisiones formales que emitan los órganos de la Administración del Estado en las cuales se contienen declaraciones de voluntad, realizadas en el ejercicio de una potestad pública. Los actos administrativos tomarán la forma de decretos supremos y resoluciones. El decreto supremo es la orden escrita que dicta el Presidente de la República o un Ministro [Por orden del Presidente de la República], sobre asuntos propios de su competencia. Las resoluciones son los actos de análoga naturaleza que dictan las autoridades administrativas dotadas de poder de decisión. Constituyen, también, actos administrativos los dictámenes o declaraciones de juicio, constancia o conocimiento que realicen los órganos de la Administración en el ejercicio de sus competencias. Las decisiones de los órganos administrativos pluripersonales se denominan acuerdos y se llevan a efecto por medio de resoluciones de la autoridad ejecutiva de la entidad correspondiente. Los actos administrativos gozan de una presunción de legalidad, de imperio y exigibilidad frente a sus destinatarios, desde su entrada en vigencia, autorizando su ejecución de oficio por la autoridad administrativa, salvo que mediare una orden de suspensión dispuesta por la autoridad administrativa dentro del procedimiento impugnatorio o por el juez, conociendo por la vía jurisdiccional.",
        conceptos: ["acto administrativo", "decreto supremo", "resolución"]
    },
    {
        numero: 4,
        titulo: "Principios del procedimiento",
        texto: "El procedimiento administrativo estará sometido a los principios de escrituración, gratuidad, celeridad, conclusivo, economía procedimental, contradictoriedad, imparcialidad, abstención, no formalización, inexcusabilidad, impugnabilidad, transparencia y publicidad.",
        conceptos: ["principios", "principios del procedimiento administrativo"]
    },
    {
        numero: 5,
        titulo: "Principio de escrituración",
        texto: "El procedimiento administrativo y los actos administrativos a los cuales da origen, se expresarán por escrito o por medios electrónicos, a menos que su naturaleza exija o permita otra forma más adecuada de expresión y constancia.",
        conceptos: ["principios", "escrituración"]
    },
    {
        numero: 6,
        titulo: "Principio de gratuidad",
        texto: "En el procedimiento administrativo, las actuaciones que deban practicar los órganos de la Administración del Estado y la obtención de documentos e información necesaria para su conclusión serán gratuitas para los interesados, salvo disposición legal en contrario.",
        conceptos: ["principios", "gratuidad"],
        comentarioProfesor: "Bermúdez explica que la gratuidad se funda en que el procedimiento es parte de la actividad normal del órgano, cuyos costos ya están cubiertos por la ley de presupuestos; las excepciones quedan entregadas a normas legales especiales (p. 197)."
    },
    {
        numero: 7,
        titulo: "Principio de celeridad",
        texto: "El procedimiento, sometido al criterio de celeridad, se impulsará de oficio en todos sus trámites.",
        conceptos: ["principios", "celeridad"],
        comentarioProfesor: "Según Bermúdez, esta regla revela el carácter abierto del procedimiento y la primacía de la Administración en su configuración: aunque debe evitarse la dilación, la Administración conserva poder discrecional durante la tramitación (p. 197-198)."
    },
    {
        numero: 8,
        titulo: "Principio conclusivo",
        texto: "Todo el procedimiento administrativo está destinado a que la Administración dicte un acto decisorio que se pronuncie sobre la cuestión de fondo y en el cual exprese su voluntad.",
        conceptos: ["principios", "conclusivo"],
        comentarioProfesor: "El profesor señala que la LBPA busca evitar procedimientos abiertos indefinidamente, por eso existen también las reglas de silencio administrativo (p. 198-199)."
    },
    {
        numero: 9,
        titulo: "Principio de economía procedimental",
        texto: "La Administración debe responder a la máxima economía de medios con eficacia, evitando trámites dilatorios.",
        conceptos: ["principios", "economía procedimental"],
        comentarioProfesor: "Bermúdez lo relaciona con la posibilidad de decidir en un solo acto los trámites que admitan impulso simultáneo, y con la acumulación de procedimientos por identidad sustancial o conexión (art. 33 LBPA) (p. 199)."
    },
    {
        numero: 10,
        titulo: "Principio de contradictoriedad",
        texto: "Los interesados podrán, en cualquier momento del procedimiento, aducir alegaciones y aportar documentos u otros elementos de juicio.",
        conceptos: ["principios", "contradictoriedad", "igualdad entre interesados"],
        comentarioProfesor: "Bermúdez destaca que el inciso 4° agrega, además de la contradictoriedad, un principio distinto: la igualdad entre los interesados (igualdad de trato e igualdad de medios jurídicos), aplicable cuando hay varias partes con intereses contrapuestos (p. 200-201)."
    },
    {
        numero: 11,
        titulo: "Principio de imparcialidad",
        texto: "La Administración debe actuar con objetividad y respetar el principio de probidad consagrado en la legislación, tanto en la substanciación del procedimiento como en las decisiones que adopte.",
        conceptos: ["principios", "imparcialidad", "probidad"],
        comentarioProfesor: "El profesor observa que la exigencia de fundamentación del inciso 2° es en la práctica redundante frente al artículo 41 inciso 4°, que ya exige motivación para todas las resoluciones administrativas, no solo las que afectan derechos (p. 201-202)."
    },
    {
        numero: 12,
        titulo: "Principio de abstención",
        texto: "Las autoridades y los funcionarios de la Administración en quienes se den algunas de las circunstancias señaladas a continuación, se abstendrán de intervenir en el procedimiento y lo comunicarán a su superior inmediato, quien resolverá lo procedente.",
        conceptos: ["principios", "abstención", "conflicto de interés"],
        comentarioProfesor: "Bermúdez explica que estas reglas cumplen tres funciones: garantizar al ciudadano una decisión imparcial, proteger a la Administración de colisiones de interés, y precaver la responsabilidad del propio funcionario (p. 202-203)."
    },
    {
        numero: 13,
        titulo: "Principio de la no formalización",
        texto: "El procedimiento debe desarrollarse con sencillez y eficacia, de modo que las formalidades que se exijan sean aquéllas indispensables para dejar constancia indubitada de lo actuado y evitar perjuicios a los particulares.",
        conceptos: ["principios", "no formalización", "proporcionalidad", "conservación del acto", "convalidación"],
        comentarioProfesor: "El profesor identifica en este artículo tres sub-reglas: el principio de proporcionalidad (inciso 1°), el de conservación del acto —el vicio de forma solo invalida si recae en un requisito esencial y causa perjuicio— (inciso 2°), y el de convalidación —la Administración puede subsanar vicios si no afecta a terceros— (inciso 3°) (p. 203-204)."
    },
    {
        numero: 14,
        titulo: "Principio de inexcusabilidad",
        texto: "La Administración estará obligada a dictar resolución expresa en todos los procedimientos y a notificarla, cualquiera que sea su forma de iniciación.",
        conceptos: ["principios", "inexcusabilidad"],
        comentarioProfesor: "Bermúdez lo compara con el principio conclusivo: no se refiere a la rapidez del procedimiento, sino al mandato de que todo procedimiento debe terminar con una resolución, incluso en casos de término anormal (p. 204-205)."
    },
    {
        numero: 15,
        titulo: "Principio de impugnabilidad",
        texto: "Todo acto administrativo es impugnable por el interesado mediante los recursos administrativos de reposición y jerárquico, regulados en esta ley, sin perjuicio del recurso extraordinario de revisión y de los demás recursos que establezcan las leyes especiales.",
        conceptos: ["principios", "impugnabilidad", "recursos administrativos"],
        comentarioProfesor: "El profesor destaca la distinción entre actos de mero trámite (solo impugnables si generan indefensión o impiden continuar el procedimiento) y actos terminales (siempre impugnables) (p. 205)."
    },
    {
        numero: 16,
        titulo: "Principio de Transparencia y de Publicidad",
        texto: "El procedimiento administrativo se realizará con transparencia, de manera que permita y promueva el conocimiento, contenidos y fundamentos de las decisiones que se adopten en él.",
        conceptos: ["principios", "transparencia", "publicidad"],
        comentarioProfesor: "Bermúdez aclara que el interesado en un procedimiento tiene derecho a acceder al expediente directamente (art. 17 letra d) LBPA), sin necesidad de recurrir a la Ley de Transparencia (Ley 20.285), que regula el acceso a la información pública en general (p. 206)."
    },
        {
        numero: 17,
        titulo: "Derechos de las personas",
        texto: "Las personas, en sus relaciones con la Administración, tienen derecho a:",
        numerales: [
            "a) Conocer, en cualquier momento, el estado de la tramitación de los procedimientos en los que tengan la condición de interesados, y obtener copia autorizada de los documentos que rolan en el expediente y la devolución de los originales.",
            "b) Identificar a las autoridades y al personal al servicio de la Administración, bajo cuya responsabilidad se tramiten los procedimientos.",
            "c) Eximirse de presentar documentos que no correspondan al procedimiento, o que ya se encuentren en poder de la Administración.",
            "d) Acceder a los actos administrativos y sus documentos, en los términos previstos en la ley.",
            "e) Ser tratados con respeto y deferencia por las autoridades y funcionarios, que habrán de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.",
            "f) Que los actos de instrucción que requieran su intervención se practiquen en la forma que resulte más cómoda para ellos y compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales.",
            "g) Formular alegaciones y aportar documentos en cualquier fase del procedimiento anterior al trámite de audiencia, que deberán ser tenidos en cuenta por el órgano competente al redactar la propuesta de resolución.",
            "h) Exigir las responsabilidades de la Administración Pública y del personal a su servicio, cuando así corresponda legalmente.",
            "i) Obtener información acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos, actuaciones o solicitudes que se propongan realizar.",
            "j) Cualesquiera otros que les reconozcan la Constitución y las leyes."
        ],
        conceptos: ["derechos de las personas", "interesado", "acceso al expediente", "transparencia"],
        comentarioProfesor: "Bermúdez conecta este catálogo con otros derechos del interesado a lo largo del procedimiento: proponer actuaciones (art. 34), solicitar diligencias probatorias (art. 35), participar en ellas (art. 36), y con el principio de transparencia (art. 16), que exige dar a conocer el fundamento de las decisiones adoptadas (p. 231, 638)."
    },
        {
        numero: 18,
        titulo: "Definición",
        texto: "El procedimiento administrativo es una sucesión de actos trámite vinculados entre sí, emanados de la Administración y, en su caso, de particulares interesados, que tiene por finalidad producir un acto administrativo terminal.",
        conceptos: ["definición de procedimiento administrativo", "acto trámite", "acto terminal"],
        comentarioProfesor: "Bermúdez advierte que esta es una definición tradicional pero restrictiva: solo contempla la producción de un acto administrativo, cuando en realidad el procedimiento también puede dar lugar a reglamentos o contratos administrativos (p. 207)."
    },
    {
        numero: 19,
        titulo: "Utilización de medios electrónicos",
        texto: "El procedimiento administrativo podrá realizarse a través de técnicas y medios electrónicos.",
        conceptos: ["medios electrónicos", "expediente electrónico", "transformación digital"]
    },
    {
        numero: 20,
        titulo: "Capacidad para actuar",
        texto: "Tendrán capacidad de actuar ante la Administración, además de las personas que gocen de ella o la ejerzan con arreglo a las normas generales, los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida por el ordenamiento jurídico-administrativo sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela. Se exceptúa el supuesto de los menores incapacitados, cuando la extensión de la incapacitación afecte al ejercicio y defensa de los derechos o intereses de que se trate.",
        conceptos: ["capacidad para actuar", "interesado", "menores de edad"]
    },
    {
        numero: 21,
        titulo: "Interesados",
        texto: "Se consideran interesados en el procedimiento administrativo:",
        numerales: [
            "1. Quienes lo promuevan como titulares de derechos o intereses individuales o colectivos.",
            "2. Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisión que en el mismo se adopte.",
            "3. Aquéllos cuyos intereses, individuales o colectivos, puedan resultar afectados por la resolución y se apersonen en el procedimiento en tanto no haya recaído resolución definitiva."
        ],
        conceptos: ["interesado", "interés individual", "interés colectivo"],
        comentarioProfesor: "Bermúdez aclara que este artículo no da una verdadera 'definición' de interesado, sino un listado de situaciones; el elemento común es el interés, que ubica a quien solo lo tiene en una posición jurídica distinta —aunque igualmente protegida— a la del titular de un derecho subjetivo. A partir de esto clasifica al interesado en: quien inicia el procedimiento, el tercero afectado por la resolución, y quien impugna mediante un recurso administrativo (p. 229-230)."
    }
];
