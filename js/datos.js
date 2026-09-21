// Ley N° 19.880 - Bases de los Procedimientos Administrativos (LBPA)
// Texto oficial verificado en BCN / LeyChile.
// "comentarioProfesor" son notas de cátedra basadas en Bermúdez, "Derecho Administrativo General", Cap. VII.

const lbpa = [
    {
        numero: 1,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Procedimiento Administrativo",
        texto: "La presente ley establece y regula las bases del procedimiento administrativo de los actos de la Administración del Estado.\nTodo procedimiento administrativo deberá expresarse a través de los medios electrónicos establecidos por ley, salvo las excepciones legales.\nEn caso de que la ley establezca procedimientos administrativos especiales, la presente ley se aplicará con carácter supletorio. Tratándose de los procedimientos seguidos para el otorgamiento de una autorización sectorial, iniciados a solicitud de parte, se estará a lo dispuesto en la Ley Marco de Autorizaciones Sectoriales. En lo no dispuesto en dicha ley, se aplicará la presente ley con carácter supletorio.\nLa toma de razón de los actos de la Administración del Estado se regirán por lo dispuesto en la Constitución y en la Ley Orgánica Constitucional de la Contraloría General de la República.",
        conceptos: ["objeto de la ley", "supletoriedad"]
    },
    {
        numero: 2,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Ámbito de aplicación",
        texto: "Las disposiciones de la presente ley serán aplicables a los ministerios, las intendencias, las gobernaciones y los servicios públicos creados para el cumplimiento de la función administrativa. También se aplicarán a la Contraloría General de la República, a las Fuerzas Armadas y a las Fuerzas de Orden y Seguridad Pública, a los gobiernos regionales y a las municipalidades.\nLas referencias que esta ley haga a la Administración o a la Administración del Estado, se entenderán efectuadas a los órganos y organismos señalados en el inciso precedente.",
        conceptos: ["ámbito de aplicación", "Administración del Estado"]
    },
    {
        numero: 3,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Concepto de Acto administrativo",
        texto: "Las decisiones escritas que adopte la Administración se expresarán por medio de actos administrativos.\nPara efectos de esta ley se entenderá por acto administrativo las decisiones formales que emitan los órganos de la Administración del Estado en las cuales se contienen declaraciones de voluntad, realizadas en el ejercicio de una potestad pública.\nLos actos administrativos tomarán la forma de decretos supremos y resoluciones.\nEl decreto supremo es la orden escrita que dicta el Presidente de la República o un Ministro Por orden del Presidente de la República, sobre asuntos propios de su competencia.\nLas resoluciones son los actos de análoga naturaleza que dictan las autoridades administrativas dotadas de poder de decisión.\nConstituyen, también, actos administrativos los dictámenes o declaraciones de juicio, constancia o conocimiento que realicen los órganos de la Administración en el ejercicio de sus competencias.\nLas decisiones de los órganos administrativos pluripersonales se denominan acuerdos y se llevan a efecto por medio de resoluciones de la autoridad ejecutiva de la entidad correspondiente.\nLos actos administrativos gozan de una presunción de legalidad, de imperio y exigibilidad frente a sus destinatarios, desde su entrada en vigencia, autorizando su ejecución de oficio por la autoridad administrativa, salvo que mediare una orden de suspensión dispuesta por la autoridad administrativa dentro del procedimiento impugnatorio o por el juez, conociendo por la vía jurisdiccional.",
        conceptos: ["acto administrativo", "decreto supremo", "resolución"]
    },
    {
        numero: 4,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principios del procedimiento",
        texto: "El procedimiento administrativo estará sometido a los principios de escrituración, gratuidad, celeridad, conclusivo, economía procedimental, contradictoriedad, imparcialidad, abstención, no formalización, inexcusabilidad, impugnabilidad, transparencia, publicidad y aquellos relativos a los medios electrónicos.",
        conceptos: ["principios", "principios del procedimiento administrativo"]
    },
    {
        numero: 5,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de escrituración",
        texto: "El procedimiento administrativo y los actos administrativos a los cuales da origen se expresarán por escrito a través de medios electrónicos, a menos que se configure alguna excepción establecida en la ley.",
        conceptos: ["principios", "escrituración"]
    },
    {
        numero: 6,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de gratuidad",
        texto: "En el procedimiento administrativo, las actuaciones que deban practicar los órganos de la Administración del Estado y la obtención de documentos e información necesaria para su conclusión serán gratuitas para los interesados, salvo disposición legal en contrario. No procederán cobros entre los órganos de la Administración del Estado que deban participar en su desarrollo e intercambio, salvo disposición legal en contrario.",
        conceptos: ["principios", "gratuidad"],
        comentarioProfesor: "Bermúdez explica que la gratuidad se funda en que el procedimiento es parte de la actividad normal del órgano, cuyos costos ya están cubiertos por la ley de presupuestos; las excepciones quedan entregadas a normas legales especiales (p. 197)."
    },
    {
        numero: 7,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de celeridad",
        texto: "El procedimiento, sometido al criterio de celeridad, se impulsará de oficio en todos sus trámites.\nLas autoridades y funcionarios de los órganos de la Administración del Estado deberán actuar por propia iniciativa en la iniciación del procedimiento de que se trate y en su prosecución, haciendo expeditos los trámites que debe cumplir el expediente y removiendo todo obstáculo que pudiere afectar a su pronta y debida decisión.\nEn el despacho de los expedientes originados en una solicitud o en el ejercicio de un derecho se guardará el orden riguroso de ingreso en asuntos de similar naturaleza, salvo que por el titular de la unidad administrativa se dé orden motivada en contrario, de la que quede constancia.",
        conceptos: ["principios", "celeridad"],
        comentarioProfesor: "Según Bermúdez, esta regla revela el carácter abierto del procedimiento y la primacía de la Administración en su configuración: aunque debe evitarse la dilación, la Administración conserva poder discrecional durante la tramitación (p. 197-198)."
    },
    {
        numero: 8,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio conclusivo",
        texto: "Todo el procedimiento administrativo está destinado a que la Administración dicte un acto decisorio que se pronuncie sobre la cuestión de fondo y en el cual exprese su voluntad.",
        conceptos: ["principios", "conclusivo"],
        comentarioProfesor: "El profesor señala que la LBPA busca evitar procedimientos abiertos indefinidamente, por eso existen también las reglas de silencio administrativo (p. 198-199)."
    },
    {
        numero: 9,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de economía procedimental",
        texto: "La Administración debe responder a la máxima economía de medios con eficacia, evitando trámites dilatorios.\nSe decidirán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo, siempre que no sea obligatorio su cumplimiento sucesivo.\nToda comunicación entre órganos de la Administración que se practique en el marco del procedimiento se realizará por medios electrónicos, dejándose constancia del órgano requirente, el funcionario responsable que practica el requerimiento, destinatario, procedimiento a que corresponde, gestión que se encarga y el plazo establecido para su realización. Asimismo, deberá remitirse una copia electrónica de tal comunicación a todos quienes figuren como interesados en el procedimiento administrativo de que se trate.\nLas cuestiones incidentales que se susciten en el procedimiento, incluso las que se refieran a la nulidad de actuaciones, no suspenderán la tramitación del mismo, a menos que la Administración, por resolución fundada, determine lo contrario.",
        conceptos: ["principios", "economía procedimental"],
        comentarioProfesor: "Bermúdez lo relaciona con la posibilidad de decidir en un solo acto los trámites que admitan impulso simultáneo, y con la acumulación de procedimientos por identidad sustancial o conexión (art. 33 LBPA) (p. 199)."
    },
    {
        numero: 10,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de contradictoriedad",
        texto: "Los interesados podrán, en cualquier momento del procedimiento, aducir alegaciones y aportar documentos u otros elementos de juicio.\nLos interesados podrán, en todo momento, alegar defectos de tramitación, especialmente los que supongan paralización, infracción de los plazos señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. Dichas alegaciones podrán dar lugar, si hubiere razones para ello, a la exigencia de la correspondiente responsabilidad disciplinaria.\nLos interesados podrán, en todo caso, actuar asistidos de asesor cuando lo consideren conveniente en defensa de sus intereses.\nEn cualquier caso, el órgano instructor adoptará las medidas necesarias para lograr el pleno respeto a los principios de contradicción y de igualdad de los interesados en el procedimiento.",
        conceptos: ["principios", "contradictoriedad", "igualdad entre interesados"],
        comentarioProfesor: "Bermúdez destaca que el inciso 4° agrega, además de la contradictoriedad, un principio distinto: la igualdad entre los interesados (igualdad de trato e igualdad de medios jurídicos), aplicable cuando hay varias partes con intereses contrapuestos (p. 200-201)."
    },
    {
        numero: 11,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de imparcialidad",
        texto: "La Administración debe actuar con objetividad y respetar el principio de probidad consagrado en la legislación, tanto en la substanciación del procedimiento como en las decisiones que adopte.\nLos hechos y fundamentos de derecho deberán siempre expresarse en aquellos actos que afectaren los derechos de los particulares, sea que los limiten, restrinjan, priven de ellos, perturben o amenacen su legítimo ejercicio, así como aquellos que resuelvan recursos administrativos.",
        conceptos: ["principios", "imparcialidad", "probidad"],
        comentarioProfesor: "El profesor observa que la exigencia de fundamentación del inciso 2° es en la práctica redundante frente al artículo 41 inciso 4°, que ya exige motivación para todas las resoluciones administrativas, no solo las que afectan derechos (p. 201-202)."
    },
    {
        numero: 12,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
    titulo: "Principio de abstención",
    texto: "Las autoridades y los funcionarios de la Administración en quienes se den algunas de las circunstancias señaladas a continuación, se abstendrán de intervenir en el procedimiento y lo comunicarán a su superior inmediato, quien resolverá lo procedente. Son motivos de abstención los siguientes:",
    numerales: [
        "1. Tener interés personal en el asunto de que se trate o en otro en cuya resolución pudiera influir la de aquél; ser administrador de sociedad o entidad interesada, o tener cuestión litigiosa pendiente con algún interesado.",
        "2. Tener parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo, con cualquiera de los interesados, con los administradores de entidades o sociedades interesadas y también con los asesores, representantes legales o mandatarios que intervengan en el procedimiento, así como compartir despacho profesional o estar asociado con éstos para el asesoramiento, la representación o el mandato.",
        "3. Tener amistad íntima o enemistad manifiesta con alguna de las personas mencionadas anteriormente.",
        "4. Haber tenido intervención como perito o como testigo en el procedimiento de que se trate.",
        "5. Tener relación de servicio con persona natural o jurídica interesada directamente en el asunto, o haberle prestado en los dos últimos años servicios profesionales de cualquier tipo y en cualquier circunstancia o lugar."
    ],
    textoContinuacion: "La actuación de autoridades y los funcionarios de la Administración en los que concurran motivos de abstención no implicará, necesariamente, la invalidez de los actos en que hayan intervenido. La no abstención en los casos en que proceda dará lugar a responsabilidad. En los casos previstos en los incisos precedentes podrá promoverse inhabilitación por los interesados en cualquier momento de la tramitación del procedimiento. La inhabilitación se planteará ante la misma autoridad o funcionario afectado, por escrito, en el que se expresará la causa o causas en que se funda.",
    conceptos: ["principios", "abstención", "conflicto de interés"],
    comentarioProfesor: "Bermúdez explica que estas reglas cumplen tres funciones: garantizar al ciudadano una decisión imparcial, proteger a la Administración de colisiones de interés, y precaver la responsabilidad del propio funcionario (p. 202-203)."
    },
    {
        numero: 13,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de la no formalización",
        texto: "El procedimiento debe desarrollarse con sencillez y eficacia, de modo que las formalidades que se exijan sean aquéllas indispensables para dejar constancia indubitada de lo actuado y evitar perjuicios a los particulares.\nQuienes desempeñen cargos en la Administración no podrán exigir la presentación de autorizaciones notariales de firmas en documentos otorgados en soporte de papel o electrónico, salvo que dicha autorización sea expresamente requerida por mandato legal o reglamentario.\nEl vicio de procedimiento o de forma sólo afecta la validez del acto administrativo cuando recae en algún requisito esencial del mismo, sea por su naturaleza o por mandato del ordenamiento jurídico y genera perjuicio al interesado.\nLa Administración podrá subsanar los vicios de que adolezcan los actos que emita, siempre que con ello no se afectaren intereses de terceros.",
        conceptos: ["principios", "no formalización", "proporcionalidad", "conservación del acto", "convalidación"],
        comentarioProfesor: "El profesor identifica en este artículo tres sub-reglas: el principio de proporcionalidad (inciso 1°), el de conservación del acto —el vicio de forma solo invalida si recae en un requisito esencial y causa perjuicio— (inciso 2°), y el de convalidación —la Administración puede subsanar vicios si no afecta a terceros— (inciso 3°) (p. 203-204)."
    },
    {
        numero: 14,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de inexcusabilidad",
        texto: "La Administración estará obligada a dictar resolución expresa en todos los procedimientos y a notificarla, cualquiera que sea su forma de iniciación.\nRequerido un órgano de la Administración para intervenir en un asunto que no sea de su competencia, enviará de inmediato los antecedentes a la autoridad que deba conocer según el ordenamiento jurídico, informando de ello al interesado.\nEn los casos de prescripción, renuncia del derecho, abandono del procedimiento o desistimiento de la solicitud, así como la desaparición sobreviniente del objeto del procedimiento, la resolución consistirá en la declaración de la circunstancia que concurra en cada caso, con indicación de los hechos producidos y las normas aplicables.",
        conceptos: ["principios", "inexcusabilidad"],
        comentarioProfesor: "Bermúdez lo compara con el principio conclusivo: no se refiere a la rapidez del procedimiento, sino al mandato de que todo procedimiento debe terminar con una resolución, incluso en casos de término anormal (p. 204-205)."
    },
    {
        numero: 15,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de impugnabilidad",
        texto: " Todo acto administrativo es impugnable por el interesado mediante los recursos administrativos de reposición y jerárquico, regulados en esta ley, sin perjuicio del recurso extraordinario de revisión y de los demás recursos que establezcan las leyes especiales.\nSin embargo, los actos de mero trámite son impugnables sólo cuando determinen la imposibilidad de continuar un procedimiento o produzcan indefensión.\nLa autoridad que acogiere un recurso interpuesto en contra de un acto administrativo, podrá dictar por sí misma el acto de reemplazo.",
        conceptos: ["principios", "impugnabilidad", "recursos administrativos"],
        comentarioProfesor: "El profesor destaca la distinción entre actos de mero trámite (solo impugnables si generan indefensión o impiden continuar el procedimiento) y actos terminales (siempre impugnables) (p. 205)."
    },
    {
        numero: 16,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de Transparencia y de Publicidad",
        texto: "El procedimiento administrativo se realizará con transparencia, de manera que permita y promueva el conocimiento, contenidos y fundamentos de las decisiones que se adopten en él.\nEn consecuencia, salvo las excepciones establecidas en la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado y en otras disposiciones legales aprobadas con quórum calificado, son públicos los actos y resoluciones de los órganos de la Administración del Estado, así como sus fundamentos y documentos en que éstos se contengan, y los procedimientos que utilicen en su elaboración o dictación.",
        conceptos: ["principios", "transparencia", "publicidad"],
        comentarioProfesor: "Bermúdez aclara que el interesado en un procedimiento tiene derecho a acceder al expediente directamente (art. 17 letra d) LBPA), sin necesidad de recurrir a la Ley de Transparencia (Ley 20.285), que regula el acceso a la información pública en general (p. 206)."
    },
     {
        numero: 160,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principios generales relativos a los medios electrónicos.",
        texto: "En la tramitación de los procedimientos administrativos por medios electrónicos se deberá cumplir con los principios de neutralidad tecnológica, de actualización, de equivalencia funcional, de fidelidad, de interoperabilidad y de cooperación.\nEn virtud del principio de actualización, los órganos de la Administración del Estado deberán actualizar sus plataformas a tecnologías no obsoletas o carentes de soporte, así como generar medidas que permitan el rescate de los contenidos de formatos de archivo electrónicos que caigan en desuso.\nEl principio de equivalencia funcional consiste en que los actos administrativos suscritos por medio de firma electrónica serán válidos y producirán los mismos efectos que si se hubieren llevado a cabo en soporte de papel.\nEl principio de fidelidad consiste en que todas las actuaciones del procedimiento se registrarán y conservarán íntegramente y en orden sucesivo en el expediente electrónico, el que garantizará su fidelidad, preservación y la reproducción de su contenido.\nEl principio de interoperabilidad consiste en que los medios electrónicos deben ser capaces de interactuar y operar entre sí al interior de la Administración del Estado, a través de estándares abiertos que permitan una segura y expedita interconexión entre ellos.\nEl principio de cooperación consiste en que los distintos órganos de la Administración del Estado deben cooperar efectivamente entre sí en la utilización de medios electrónicos.",
        conceptos: ["principios", "medios electrónicos"],
        comentarioProfesor: "Falta estudiar este principio"
    },
        {
        numero: 17,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Derechos de las personas",
        texto: "Las personas, en sus relaciones con la Administración, tienen derecho a:",
        numerales: [
            "a) Conocer, en cualquier momento, el estado de la tramitación de los procedimientos en los que tengan la condición de interesados, y obtener copia autorizada de los documentos que rolan en el expediente y la devolución de los originales, salvo que por mandato legal o reglamentario éstos deban ser acompañados a los autos, a su costa. Constituye copia autorizada aquella generada por la plataforma electrónica donde se acceda al expediente electrónico, que cuente con un medio de verificación de su autenticidad;",
            "b) Identificar a las autoridades y al personal al servicio de la Administración, bajo cuya responsabilidad se tramiten los procedimientos;",
            "c) Acompañar documentos electrónicos, tales como copias digitalizadas de documentos en soporte de papel o documentos electrónicos en su origen, que no sean emitidos por los órganos de la Administración del Estado, en la medida que conste su autenticidad e integridad, salvo que por mandato legal o reglamentario éstos deban ser acompañados a los autos en soporte de papel, a su costa;",
            "d) Eximirse de presentar documentos que no correspondan al procedimiento o que emanen y se encuentren en poder de cualquier órgano de la Administración del Estado. En este último caso, dichos documentos deberán ser remitidos por el órgano que los tuviere en su poder a aquel que estuviere tramitando el procedimiento administrativo;",
            "e) Acceder a los actos administrativos y sus documentos, en los términos previstos en la ley;",
            "f) Ser tratados con respeto y deferencia por las autoridades y funcionarios, que habrán de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones. Los actos de instrucción que requieran la intervención de los interesados habrán de practicarse en la forma que resulte más cómoda para ellos y sea compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales;",
            "g) Formular alegaciones y aportar documentos en cualquier fase del procedimiento anterior al trámite de audiencia, que deberán ser tenidos en cuenta por el órgano competente al redactar la propuesta de resolución;",
            "h) Exigir las responsabilidades de la Administración Pública y del personal a su servicio, cuando así corresponda legalmente;",
            "i) Obtener información acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos, actuaciones o solicitudes que se propongan realizar, e",
            "j) Cualesquiera otros que les reconozcan la Constitución y las leyes."
        ],
        conceptos: ["derechos de las personas", "interesado", "acceso al expediente", "transparencia"],
        comentarioProfesor: "Bermúdez conecta este catálogo con otros derechos del interesado a lo largo del procedimiento: proponer actuaciones (art. 34), solicitar diligencias probatorias (art. 35), participar en ellas (art. 36), y con el principio de transparencia (art. 16), que exige dar a conocer el fundamento de las decisiones adoptadas (p. 231, 638)."
    },
        {
        numero: 18,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Definición",
        texto: "El procedimiento administrativo es una sucesión de actos trámite vinculados entre sí, emanados de la Administración y, en su caso, de particulares interesados, que tiene por finalidad producir un acto administrativo terminal.\nEl procedimiento administrativo es una sucesión de actos trámite vinculados entre sí, emanados de la Administración y, en su caso, de particulares interesados, que tiene por finalidad producir un acto administrativo terminal.\nTodo el procedimiento administrativo deberá constar en un expediente electrónico, salvo las excepciones contempladas en la ley, en el que se asentarán los documentos presentados por los interesados, por terceros y por otros órganos públicos, con expresión de la fecha y hora de su recepción, respetando su orden de ingreso. Asimismo, se incorporarán las actuaciones y los documentos y resoluciones que el órgano administrativo remita a los interesados, a terceros o a otros órganos públicos y las notificaciones y comunicaciones a que éstas den lugar, con expresión de la fecha y hora de su envío, en estricto orden de ocurrencia o egreso.\nEl ingreso de las solicitudes, formularios o documentos se hará mediante documentos electrónicos o por medio de formatos o medios electrónicos, a través de las plataformas de los órganos de la Administración del Estado.\nAquella persona que carezca de los medios tecnológicos, no tenga acceso a medios electrónicos o sólo actuare excepcionalmente a través de ellos, podrá solicitar por medio de un formulario, ante el órgano respectivo, efectuar presentaciones dentro del procedimiento administrativo en soporte de papel. El órgano respectivo deberá pronunciarse dentro de tercero día, y deberá hacerlo de manera fundada en caso de denegar la solicitud. Sin perjuicio de lo anterior, la presentación de dicha solicitud no suspenderá los plazos para los interesados por lo que, en todo caso, antes del vencimiento de un plazo y mientras no se haya pronunciado la Administración podrán efectuarse las presentaciones en soporte de papel. Las solicitudes, formularios o escritos presentados en soporte de papel serán digitalizados e ingresados al expediente electrónico inmediatamente por el funcionario correspondiente. Un reglamento dictado por el Ministerio de Hacienda establecerá las formas de acreditar el encontrarse dentro de las circunstancias indicadas en este inciso.\nLos expedientes electrónicos, a los que tendrán acceso permanente los interesados, contendrán un registro actualizado de todas las actuaciones del procedimiento, según lo señalado en el inciso tercero, que estará a disposición tanto en las plataformas electrónicas como en las dependencias de la Administración para su consulta. La consulta en las dependencias de la Administración deberá ser guiada y asesorada, si así se requiere, para el caso de quienes estuvieren autorizados para efectuar presentaciones en soporte de papel por la Administración. Sólo podrán ponerse a disposición en soporte de papel en los casos en que no hubiere sido posible digitalizarse según se establece en el artículo 19 bis. En tal evento, así como en el caso de personas autorizadas para efectuar presentaciones en soporte de papel, podrá solicitarse obtención de copias en soporte de papel. Un reglamento, dictado por el Ministerio de Hacienda, regulará aquellos casos en que la Administración pueda excusarse de entregar copias en soporte de papel por razones de distraer indebidamente a los funcionarios del cumplimiento de sus labores habituales, esto es la utilización de un tiempo excesivo considerando su jornada de trabajo, o un alejamiento de sus funciones habituales, así como en los que podrá exigir el pago de los costos directos de reproducción y la fijación de sus valores.\nExcepcionalmente, cuando el sistema o las plataformas electrónicas que soportan los medios electrónicos no se encuentren disponibles por emergencia, fuerza mayor u otro motivo calificado, el jefe superior del servicio, por resolución fundada, podrá autorizar la emisión de ciertos actos administrativos así como efectuar presentaciones en soporte de papel. Lo anterior deberá digitalizarse posteriormente y agregarse en el expediente electrónico correspondiente.",
        conceptos: ["definición de procedimiento administrativo", "acto trámite", "acto terminal"],
        comentarioProfesor: "Bermúdez advierte que esta es una definición tradicional pero restrictiva: solo contempla la producción de un acto administrativo, cuando en realidad el procedimiento también puede dar lugar a reglamentos o contratos administrativos (p. 207)."
    },
    {
        numero: 19,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Uso obligatorio de plataformas electrónicas.",
        texto: "Los órganos de la Administración estarán obligados a disponer y utilizar adecuadamente plataformas electrónicas para efectos de llevar expedientes electrónicos, las que deberán cumplir con estándares de seguridad, interoperabilidad, interconexión y ciberseguridad.\nLos escritos, documentos, actos y actuaciones de toda especie que se presenten o verifiquen en el procedimiento se registrarán en el expediente electrónico correspondiente, siguiendo las nomenclaturas pertinentes, de acuerdo a cada etapa del procedimiento.\nLa conservación de los expedientes electrónicos estará a cargo del órgano respectivo, el cual será el responsable de su integridad, disponibilidad y autenticidad.\nSi fuere necesaria la reconstitución de un expediente o piezas de éste se reemplazará en todo o parte por una copia fiel, que se obtendrá de quien la tuviere, si no se dispusiere de ella directamente.\nSi no existiere copia fiel los actos se dictarán nuevamente, para lo cual la Administración reunirá los antecedentes que le permitan fundamentar su preexistencia y contenido, y las actuaciones se repetirán con las formalidades previstas para cada caso.\n Las comunicaciones oficiales entre los órganos de la Administración serán registradas en una plataforma electrónica destinada al efecto.\nMediante reglamento, dictado por el Ministerio de Hacienda, se fijarán los estándares que deberán cumplir dichas plataformas, en los términos previstos en esta ley considerando, además, condiciones de accesibilidad para los interesados, seguridad, funcionamiento, calidad, protección y conservación de los documentos.",
        conceptos: ["medios electrónicos", "expediente electrónico", "transformación digital"]
    },
    {
        numero: 190,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Documentos electrónicos y digitalización.",
        texto: "Los actos de la Administración y los documentos de los interesados deberán cumplir con lo establecido en la ley Nº 19.799, sobre documentos electrónicos, firma electrónica y servicios de certificación de dicha firma.\nLos documentos presentados por interesados cuyo formato original no sea electrónico podrán presentarse mediante copias digitalizadas directamente en el expediente electrónico. Asimismo, podrán presentarse en la dependencia de la Administración correspondiente, documentos electrónicos o bien en soporte de papel si lo anterior no fuere posible, debiendo el funcionario correspondiente digitalizarlos e ingresarlos inmediatamente al expediente electrónico.\nLa forma de cotejar la autenticidad y conformidad de los documentos en soporte de papel y sus copias digitalizadas presentadas según lo indicado en el inciso anterior será regulada por un reglamento dictado en conjunto por el Ministerio de Hacienda y el Ministerio de las Culturas, las Artes y el Patrimonio. Toda infracción a la autenticidad y conformidad de las copias digitalizadas respecto a los documentos originales en soporte de papel hará incurrir en las sanciones que determine la ley.\nLa forma de cotejar la autenticidad y conformidad de los documentos en soporte de papel y sus copias digitalizadas presentadas según lo indicado en el inciso anterior será regulada por un reglamento dictado en conjunto por el Ministerio de Hacienda y el Ministerio de las Culturas, las Artes y el Patrimonio. Toda infracción a la autenticidad y conformidad de las copias digitalizadas respecto a los documentos originales en soporte de papel hará incurrir en las sanciones que determine la ley.\n En caso de documentos presentados por órganos de la Administración cuyo formato original no sea electrónico, éstos deberán ser digitalizados por el funcionario correspondiente de acuerdo a lo previsto en la ley Nº 18.845, que establece sistemas de microcopia o micrograbación de documentos.\nEn casos excepcionales y cuando se haya autorizado a una persona para efectuar presentaciones en soporte de papel, no será necesario acompañar copias digitalizadas. En estos casos, los documentos presentados en formato que no sea electrónico serán digitalizados e ingresados inmediatamente por el funcionario correspondiente al expediente electrónico, a menos que ello no fuere materialmente posible por su naturaleza, formato o cantidad según los criterios que se establezcan mediante un reglamento dictado en conjunto por el Ministerio de Hacienda y el Ministerio de las Culturas, las Artes y el Patrimonio. En este caso, se dejará constancia de ello en el expediente",
        conceptos: ["Documentos electrónicos", "electrónico", "digitalización"]
    },
    {
        numero: 20,
        titulo: "Capacidad para actuar",
        texto: "Los órganos de la Administración estarán obligados a disponer y utilizar adecuadamente plataformas electrónicas para efectos de llevar expedientes electrónicos, las que deberán cumplir con estándares de seguridad, interoperabilidad, interconexión y ciberseguridad.\nLos escritos, documentos, actos y actuaciones de toda especie que se presenten o verifiquen en el procedimiento se registrarán en el expediente electrónico correspondiente, siguiendo las nomenclaturas pertinentes, de acuerdo a cada etapa del procedimiento.\nLa conservación de los expedientes electrónicos estará a cargo del órgano respectivo, el cual será el responsable de su integridad, disponibilidad y autenticidad.\nSi fuere necesaria la reconstitución de un expediente o piezas de éste se reemplazará en todo o parte por una copia fiel, que se obtendrá de quien la tuviere, si no se dispusiere de ella directamente.\nSi no existiere copia fiel los actos se dictarán nuevamente, para lo cual la Administración reunirá los antecedentes que le permitan fundamentar su preexistencia y contenido, y las actuaciones se repetirán con las formalidades previstas para cada caso.\nLas comunicaciones oficiales entre los órganos de la Administración serán registradas en una plataforma electrónica destinada al efecto.\nMediante reglamento, dictado por el Ministerio de Hacienda, se fijarán los estándares que deberán cumplir dichas plataformas, en los términos previstos en esta ley considerando, además, condiciones de accesibilidad para los interesados, seguridad, funcionamiento, calidad, protección y conservación de los documentos.",
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
