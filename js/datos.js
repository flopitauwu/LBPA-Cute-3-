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
        conceptos: ["objeto de la ley", "supletoriedad"],
        comentarioProfesor: "Bermúdez advierte que, pese a la redacción amplia, la intención del legislador fue regular la producción de actos administrativos y no de reglamentos ni contratos administrativos (que tienen regulación propia). Sobre la supletoriedad, distingue tres grados:\n 1. aplicación íntegra si no hay procedimiento propio;\n 2. aplicación parcial si la ley especial solo regula ciertos trámites;\n 3. y no aplicación —según la Contraloría— si la ley especial regula el procedimiento en forma completa, por el principio de especialidad.\n (p. 194-195)."
    },
    {
        numero: 2,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Ámbito de aplicación",
        texto: "Las disposiciones de la presente ley serán aplicables a los ministerios, las intendencias, las gobernaciones y los servicios públicos creados para el cumplimiento de la función administrativa. También se aplicarán a la Contraloría General de la República, a las Fuerzas Armadas y a las Fuerzas de Orden y Seguridad Pública, a los gobiernos regionales y a las municipalidades.\nLas referencias que esta ley haga a la Administración o a la Administración del Estado, se entenderán efectuadas a los órganos y organismos señalados en el inciso precedente.",
        conceptos: ["ámbito de aplicación", "Administración del Estado"],
        comentarioProfesor: "El profesor señala que este artículo define un ámbito de aplicación subjetivo amplio, alcanzando tanto a la Administración centralizada como descentralizada. Se resalta la inclusión expresa de la CGR, las FFAA y las Municipalidades, lo que asegura que las garantías del procedimiento formal se extiendan a prácticamente cualquier órgano estatal en el ejercicio de la función administrativa.\n Bermúdez destaca que este artículo da un concepto de Administración del Estado más restringido que el de la LBGAE, dejando fuera al Banco Central (que se rige exclusivamente por su propia ley orgánica), a las empresas públicas creadas por ley (que actúan bajo derecho común) y a los órganos creados para función administrativa como los distintos 'consejos' — exclusión que, según el profesor, carece de justificación y responde a un error de técnica legislativa (p. 195-197)."
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
        comentarioProfesor: "El artículo tiene 3 incisos, y cada uno enseña algo distinto:\n\nInciso 1° — \"se impulsará de oficio en todos sus trámites\". Bermúdez advierte que esto no es del todo cierto: muchas actuaciones dependen de un tercero (el interesado u otro órgano), no de la Administración. Si el interesado no actúa, la única herramienta de la Administración es declarar el abandono del procedimiento (art. 43 LBPA).\n\nInciso 2° — obliga a las autoridades a actuar por propia iniciativa y remover obstáculos. Esto revela dos cosas: primero, la intención evidente del legislador de evitar la dilación; segundo —y más importante— confirma el carácter abierto del procedimiento y la primacía de la Administración para configurarlo. Aunque la decisión final puede ser un acto reglado, durante la tramitación la Administración tiene poder discrecional: decide si inicia o no el procedimiento, si acepta ciertas pruebas, y cómo va armando el expediente. Esto es posible porque los actos de mero trámite generalmente no son impugnables, salvo que hagan imposible continuar el procedimiento o generen indefensión (art. 15 inc. 2°).\n\nInciso 3° — exige tramitar los expedientes en el orden riguroso de su ingreso. Bermúdez conecta esta regla, aparentemente menor, con el principio de probidad: una forma común de tráfico de influencias es adelantar o atrasar injustificadamente la resolución de un caso. Por eso la ley responsabiliza al jefe de la unidad administrativa de mantener ese orden, salvo que dé una orden motivada y por escrito para saltárselo.\n\nEn resumen: la celeridad no es solo 'que todo sea rápido' — revela el poder discrecional de la Administración durante el procedimiento, y se conecta con la probidad al exigir un orden justo en la tramitación (p. 198-199)."
    },
    {
        numero: 8,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio conclusivo",
        texto: "Todo el procedimiento administrativo está destinado a que la Administración dicte un acto decisorio que se pronuncie sobre la cuestión de fondo y en el cual exprese su voluntad.",
        conceptos: ["principios", "conclusivo"],
        comentarioProfesor: "Con este principio, el legislador busca establecer el deber de la Administración de adoptar una resolución sobre el asunto del que conoce: dictar un acto decisorio que se pronuncie sobre la cuestión de fondo.\n\nLa idea de fondo es que no existan procedimientos administrativos abiertos indefinidamente, sino que la tramitación concluya en algún momento. Por eso, además del principio conclusivo, existen las reglas sobre silencio administrativo, que cumplen una función complementaria: si la Administración no resuelve, la ley igual le da un desenlace al procedimiento.\n\nSin embargo, Bermúdez aclara que el procedimiento administrativo no siempre terminará con una decisión de fondo de la autoridad. Esto ocurre especialmente en los casos de terminación anormal del procedimiento (por ejemplo, desistimiento, renuncia o abandono), donde el procedimiento concluye sin que exista un pronunciamiento sobre la cuestión de fondo (p. 199-200)."
    },
    {
        numero: 9,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de economía procedimental",
        texto: "La Administración debe responder a la máxima economía de medios con eficacia, evitando trámites dilatorios.\nSe decidirán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo, siempre que no sea obligatorio su cumplimiento sucesivo.\nToda comunicación entre órganos de la Administración que se practique en el marco del procedimiento se realizará por medios electrónicos, dejándose constancia del órgano requirente, el funcionario responsable que practica el requerimiento, destinatario, procedimiento a que corresponde, gestión que se encarga y el plazo establecido para su realización. Asimismo, deberá remitirse una copia electrónica de tal comunicación a todos quienes figuren como interesados en el procedimiento administrativo de que se trate.\nLas cuestiones incidentales que se susciten en el procedimiento, incluso las que se refieran a la nulidad de actuaciones, no suspenderán la tramitación del mismo, a menos que la Administración, por resolución fundada, determine lo contrario.",
        conceptos: ["principios", "economía procedimental"],
        comentarioProfesor: "Este principio tiene su primera referencia en el artículo 7° inciso 2° (hacer expeditos los trámites y remover obstáculos), y se consagra plenamente en el artículo 9°: la Administración debe responder a la máxima economía de medios con eficacia, evitando trámites dilatorios. La ley lo concreta en reglas prácticas:\n\n 1. Deben decidirse en un solo acto todos los trámites que por su naturaleza admitan un impulso simultáneo, siempre que no sea obligatorio su cumplimiento sucesivo.\n\n2. Al solicitar trámites que deban cumplir otros órganos, debe indicarse el plazo establecido para ello; tratándose de informes u otras actuaciones similares, ese plazo no puede superar los 10 días (art. 24 inc. 2° LBPA).\n\n3. Las cuestiones incidentales que surjan durante el procedimiento —incluso las referidas a nulidad de actuaciones— no suspenden la tramitación, salvo que la Administración, por resolución fundada, decida lo contrario. Esto aplica, por ejemplo, cuando se interpone un recurso administrativo contra un acto trámite que causa indefensión: la Administración no está obligada a suspender, pero puede hacerlo si lo justifica.\n\nBermúdez conecta además esta norma con la posibilidad de acumular procedimientos administrativos cuando exista identidad sustancial o íntima conexión entre ellos (art. 33 LBPA) (p. 200)."
     },
     {
        numero: 10,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de contradictoriedad",
        texto: "Los interesados podrán, en cualquier momento del procedimiento, aducir alegaciones y aportar documentos u otros elementos de juicio.\nLos interesados podrán, en todo momento, alegar defectos de tramitación, especialmente los que supongan paralización, infracción de los plazos señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. Dichas alegaciones podrán dar lugar, si hubiere razones para ello, a la exigencia de la correspondiente responsabilidad disciplinaria.\nLos interesados podrán, en todo caso, actuar asistidos de asesor cuando lo consideren conveniente en defensa de sus intereses.\nEn cualquier caso, el órgano instructor adoptará las medidas necesarias para lograr el pleno respeto a los principios de contradicción y de igualdad de los interesados en el procedimiento.",
        conceptos: ["principios", "contradictoriedad", "igualdad entre interesados"],
        comentarioProfesor: "La contradictoriedad se traduce en la facultad del interesado para formular alegaciones de hecho y de derecho, y para aportar documentos. Es un derecho que puede ejercerse en cualquier fase del procedimiento anterior al trámite de audiencia (art. 17 letra f) LBPA), y que impone a la Administración el deber correlativo de ponderar esas alegaciones y pruebas al dictar la resolución (arts. 11 inc. 2° y 41 incs. 3° y 4° LBPA).\n\nEsta facultad se amplía bastante si se relaciona con el período de prueba: el artículo 35 LBPA permite acreditar los hechos relevantes por cualquier medio admisible en Derecho, y el instructor solo puede rechazar una prueba ofrecida si es improcedente o innecesaria.\n\nEl inciso 2° agrega que los interesados pueden, en cualquier momento, alegar defectos de tramitación —paralización, infracción de plazos, omisión de trámites subsanables— lo que conecta con la convalidación del acto administrativo (art. 13 inc. 3°). Estas alegaciones incluso pueden derivar en responsabilidad disciplinaria si corresponde.\n\nAdemás, los interesados pueden actuar asistidos de un apoderado (art. 22 LBPA), quien tiene todas las facultades necesarias para la consecución del acto, salvo que se exprese lo contrario; su poder debe constar en instrumento privado ante notario o escritura pública (esta última siempre exigible si el acto requiere esa solemnidad).\n\nFinalmente, Bermúdez destaca el inciso 4°, que exige a la Administración adoptar medidas para el pleno respeto de la contradicción Y de la igualdad entre los interesados. Esto agrega un principio distinto: mientras la contradictoriedad se da en la relación Administración-interesado, la igualdad se da entre los propios interesados cuando hay varios con intereses contrapuestos. Bermúdez distingue aquí dos dimensiones:\n 1. La igualdad de trato (perspectiva horizontal entre partes, conforme al art. 19 N° 2 CPR).\n 2. La igualdad de medios jurídicos disponibles para cada interesado (p. 201-202)."
    },
    {
        numero: 11,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de imparcialidad",
        texto: "La Administración debe actuar con objetividad y respetar el principio de probidad consagrado en la legislación, tanto en la substanciación del procedimiento como en las decisiones que adopte.\nLos hechos y fundamentos de derecho deberán siempre expresarse en aquellos actos que afectaren los derechos de los particulares, sea que los limiten, restrinjan, priven de ellos, perturben o amenacen su legítimo ejercicio, así como aquellos que resuelvan recursos administrativos.",
        conceptos: ["principios", "imparcialidad", "probidad"],
        comentarioProfesor: "Esta regla consagra el deber de la Administración de actuar con objetividad, tanto en la sustanciación del procedimiento como en las decisiones que adopte, y hace referencia al respeto del principio de probidad como respaldo de la imparcialidad.\n\nEl inciso 2° exige que los hechos y fundamentos de derecho se expresen siempre en los actos que afecten derechos de los particulares (que los limiten, restrinjan, priven, perturben o amenacen su legítimo ejercicio), así como en los que resuelvan recursos administrativos.\n\nBermúdez es crítico con esta norma: la considera reiterativa y de valor superfluo, ya que el artículo 41 inciso 4° ya establece la obligación de fundamentar todas las resoluciones administrativas, no solo aquellas que afectan derechos o resuelven recursos (p. 202-203)."
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
    comentarioProfesor: "Esta regla materializa un medio para lograr la imparcialidad: los funcionarios y autoridades deben abstenerse de intervenir cuando se dé alguna de las circunstancias del artículo 12, comunicándolo a su superior inmediato para que resuelva.\n\nBermúdez explica que estas reglas cumplen tres funciones: \n1. Garantizar al ciudadano que en la decisión que le afecta no intervendrá un funcionario implicado;\n2. Proteger a la Administración de colisiones de intereses que afecten sus propias finalidades públicas;\n3. Precaver que el propio funcionario incurra en responsabilidad por actuar en conflicto de interés.\n\nComo estas circunstancias dicen relación con la imparcialidad del funcionario más que con la legitimidad del acto mismo, la ley aclara que actuar en dichas circunstancias no implica necesariamente la invalidez de los actos en que se haya intervenido. Sin embargo, la no abstención cuando correspondía sí da lugar a responsabilidad administrativa.\n\nFinalmente, los interesados pueden promover la inhabilitación del funcionario en cualquier momento, por escrito y expresando la causa. Si esta no es acogida, se estará ante un acto trámite que puede causar indefensión y, por tanto, ser impugnable (art. 15 inc. 2°) (p. 203-204)."
    },
    {
        numero: 13,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de la no formalización",
        texto: "El procedimiento debe desarrollarse con sencillez y eficacia, de modo que las formalidades que se exijan sean aquéllas indispensables para dejar constancia indubitada de lo actuado y evitar perjuicios a los particulares.\nQuienes desempeñen cargos en la Administración no podrán exigir la presentación de autorizaciones notariales de firmas en documentos otorgados en soporte de papel o electrónico, salvo que dicha autorización sea expresamente requerida por mandato legal o reglamentario.\nEl vicio de procedimiento o de forma sólo afecta la validez del acto administrativo cuando recae en algún requisito esencial del mismo, sea por su naturaleza o por mandato del ordenamiento jurídico y genera perjuicio al interesado.\nLa Administración podrá subsanar los vicios de que adolezcan los actos que emita, siempre que con ello no se afectaren intereses de terceros.",
        conceptos: ["principios", "no formalización", "proporcionalidad", "conservación del acto", "convalidación"],
        comentarioProfesor: "Bermúdez identifica en este artículo tres reglas distintas que deben analizarse por separado:\n\n1. Principio de proporcionalidad (inciso 1°): el procedimiento debe desarrollarse con sencillez y eficacia, exigiendo solo las formalidades indispensables. El profesor advierte que el procedimiento puede llegar a ser una carga —incluso una limitación a derechos fundamentales— dado el poder discrecional de la Administración; por eso debe ser proporcional a su finalidad, sin medidas desmesuradas o innecesarias.\n\n2. Principio de conservación (inciso 2°): el vicio de procedimiento o de forma solo afecta la validez del acto cuando recae en un requisito esencial y genera perjuicio al interesado.\n\n3. Principio de convalidación (inciso 3°): la Administración puede subsanar los vicios de sus propios actos, siempre que no se afecten intereses de terceros (p. 204-205)."
    },
    {
        numero: 14,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de inexcusabilidad",
        texto: "La Administración estará obligada a dictar resolución expresa en todos los procedimientos y a notificarla, cualquiera que sea su forma de iniciación.\nRequerido un órgano de la Administración para intervenir en un asunto que no sea de su competencia, enviará de inmediato los antecedentes a la autoridad que deba conocer según el ordenamiento jurídico, informando de ello al interesado.\nEn los casos de prescripción, renuncia del derecho, abandono del procedimiento o desistimiento de la solicitud, así como la desaparición sobreviniente del objeto del procedimiento, la resolución consistirá en la declaración de la circunstancia que concurra en cada caso, con indicación de los hechos producidos y las normas aplicables.",
        conceptos: ["principios", "inexcusabilidad"],
        comentarioProfesor: "Bermúdez hace una caracterización muy similar a la del principio conclusivo: la Administración está obligada a dictar resolución expresa en todos los procedimientos y notificarla, sea cual sea su forma de inicio. Aclara que esto no se refiere a la rapidez o acortamiento de plazos, sino al mandato de que todo procedimiento debe concluir.\n\nEl artículo agrega que si un órgano es requerido para un asunto fuera de su competencia, debe enviar de inmediato los antecedentes a la autoridad competente, informando al interesado.\n\nFinalmente, en casos de prescripción, renuncia del derecho, abandono, desistimiento o desaparición sobreviniente del objeto del procedimiento —todos casos de terminación anormal—, la resolución simplemente declarará la circunstancia que concurra, indicando los hechos y las normas aplicables (p. 205-206)."
    },
    {
        numero: 15,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de impugnabilidad",
        texto: " Todo acto administrativo es impugnable por el interesado mediante los recursos administrativos de reposición y jerárquico, regulados en esta ley, sin perjuicio del recurso extraordinario de revisión y de los demás recursos que establezcan las leyes especiales.\nSin embargo, los actos de mero trámite son impugnables sólo cuando determinen la imposibilidad de continuar un procedimiento o produzcan indefensión.\nLa autoridad que acogiere un recurso interpuesto en contra de un acto administrativo, podrá dictar por sí misma el acto de reemplazo.",
        conceptos: ["principios", "impugnabilidad", "recursos administrativos"],
        comentarioProfesor: "El procedimiento administrativo cumple una función de garantía: asegurar que la decisión adoptada sea manifestación del Derecho material. Por eso existen normas de impugnación administrativa. La ley dispone que todo acto administrativo es impugnable mediante reposición y jerárquico, sin perjuicio del recurso extraordinario de revisión y otros recursos especiales.\n\nBermúdez destaca la distinción clave del inciso 2°: los actos de mero trámite solo son impugnables cuando hacen imposible continuar el procedimiento o producen indefensión —a diferencia de los actos terminales, siempre impugnables.\n\nPor último, el inciso final autoriza a la autoridad que acoge un recurso a dictar ella misma el acto de reemplazo, en concordancia con el artículo 59 inciso final, que permite que la resolución que acoge el recurso modifique, reemplace o deje sin efecto el acto impugnado (p. 206)."
    },
    {
        numero: 16,
        capitulo: 1,
        capituloTitulo: "Disposiciones Generales",
        titulo: "Principio de Transparencia y de Publicidad",
        texto: "El procedimiento administrativo se realizará con transparencia, de manera que permita y promueva el conocimiento, contenidos y fundamentos de las decisiones que se adopten en él.\nEn consecuencia, salvo las excepciones establecidas en la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado y en otras disposiciones legales aprobadas con quórum calificado, son públicos los actos y resoluciones de los órganos de la Administración del Estado, así como sus fundamentos y documentos en que éstos se contengan, y los procedimientos que utilicen en su elaboración o dictación.",
        conceptos: ["principios", "transparencia", "publicidad"],
        comentarioProfesor: "El principio de transparencia se expresa en la posibilidad de que la comunidad conozca las actuaciones de la Administración, no solo el acto terminal, sino también lo que ocurre al interior de cualquier procedimiento, llegue o no a dictarse un acto final.\n\nTras la reforma constitucional de 2005, el texto vigente establece que, salvo las excepciones de la Ley de Transparencia y otras leyes de quórum calificado, son públicos los actos y resoluciones de la Administración, sus fundamentos y documentos, y los procedimientos usados para dictarlos.\n\nBermúdez advierte sobre una confusión frecuente en la práctica: muchos órganos creen que el interesado solo puede acceder a la información del procedimiento a través del derecho de acceso a la información pública (Ley N° 20.285). Esto es un error: el interesado en un procedimiento administrativo siempre tiene derecho a conocer su expediente directamente, pues cuenta con un derecho propio para ello en el artículo 17 letra d) LBPA (p. 206)."
    },
     {
        numero: "16 Bis",
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
        parrafo: "Párrafo 1º",            
        parrafoTitulo: "Normas básicas",      
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
        numero: "19 Bis", 
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Documentos electrónicos y digitalización.",
        texto: "Los actos de la Administración y los documentos de los interesados deberán cumplir con lo establecido en la ley Nº 19.799, sobre documentos electrónicos, firma electrónica y servicios de certificación de dicha firma.\nLos documentos presentados por interesados cuyo formato original no sea electrónico podrán presentarse mediante copias digitalizadas directamente en el expediente electrónico. Asimismo, podrán presentarse en la dependencia de la Administración correspondiente, documentos electrónicos o bien en soporte de papel si lo anterior no fuere posible, debiendo el funcionario correspondiente digitalizarlos e ingresarlos inmediatamente al expediente electrónico.\nLa forma de cotejar la autenticidad y conformidad de los documentos en soporte de papel y sus copias digitalizadas presentadas según lo indicado en el inciso anterior será regulada por un reglamento dictado en conjunto por el Ministerio de Hacienda y el Ministerio de las Culturas, las Artes y el Patrimonio. Toda infracción a la autenticidad y conformidad de las copias digitalizadas respecto a los documentos originales en soporte de papel dará lugar a las responsabilidades legales correspondientes.",
        conceptos: ["documentos electrónicos", "digitalización", "firma electrónica"]
    },
    {
        numero: 20,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Capacidad para actuar",
        texto: " Tendrán capacidad de actuar ante la Administración, además de las personas que gocen de ella o la ejerzan con arreglo a las normas generales, los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida por el ordenamiento jurídico-administrativo sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela. Se exceptúa el supuesto de los menores incapacitados, cuando la extensión de la incapacitación afecte al ejercicio y defensa de los derechos o intereses de que se trate.",
        conceptos: ["capacidad para actuar", "interesado", "menores de edad"]
    },
    {
        numero: 21,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Interesados",
        texto: "Se consideran interesados en el procedimiento administrativo:",
        numerales: [
            "1. Quienes lo promuevan como titulares de derechos o intereses individuales o colectivos.",
            "2. Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisión que en el mismo se adopte.",
            "3. Aquéllos cuyos intereses, individuales o colectivos, puedan resultar afectados por la resolución y se apersonen en el procedimiento en tanto no haya recaído resolución definitiva."
        ],
        conceptos: ["interesado", "interés individual", "interés colectivo"],
        comentarioProfesor: "Bermúdez aclara que este artículo no da una verdadera 'definición' de interesado, sino un listado de situaciones; el elemento común es el interés, que ubica a quien solo lo tiene en una posición jurídica distinta —aunque igualmente protegida— a la del titular de un derecho subjetivo. A partir de esto clasifica al interesado en: quien inicia el procedimiento, el tercero afectado por la resolución, y quien impugna mediante un recurso administrativo (p. 229-230)."
    },
    {
        numero: 22,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Apoderados",
        texto: "Los interesados podrán actuar por medio de apoderados, entendiéndose que éstos tienen todas las facultades necesarias para la consecución del acto administrativo, salvo manifestación expresa en contrario.\n    El poder podrá constar en documento suscrito mediante firma electrónica simple o avanzada. Se aceptará también aquel que conste por escritura pública o documento privado suscrito ante notario. Con todo, se requerirá siempre de documento suscrito mediante firma electrónica avanzada o de escritura pública cuando el acto administrativo de que se trate produzca efectos que exijan solemnidad de instrumento o escritura pública.",
        conceptos: ["Apoderados"]
    },
    {
        numero: 23,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Obligación de cumplimiento de los plazos.",
        texto: "Los términos y plazos establecidos en ésta u otras leyes obligan a las autoridades y personal al servicio de la Administración en la tramitación de los asuntos, así como los interesados en los mismos.",
        conceptos: ["Cumplimiento de plazos"]
    },
    {
        numero: 24,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "El funcionario del organismo al que corresponda resolver",
        texto: "El funcionario del organismo al que corresponda resolver, que reciba una solicitud, documento o expediente, deberá hacerlo llegar a la dependencia respectiva, a través de medios electrónicos, a más tardar dentro de las 24 horas siguientes a su recepción.\n Las providencias de mero trámite deberán dictarse por quien deba hacerlo, dentro del plazo de 48 horas contado desde la recepción de la solicitud, documento o expediente.\n Los informes, dictámenes u otras actuaciones similares, deberán evacuarse dentro del plazo de 10 días, contado desde la petición de la diligencia.\nLas decisiones definitivas deberán expedirse dentro de los 20 días siguientes, contados desde que, a petición del interesado, se certifique que el acto se encuentra en estado de resolverse. La prolongación injustificada de la certificación dará origen a responsabilidad administrativa.",
        conceptos: ["funcionario", "corresponda"]
    },
    {
        numero: "24 bis",
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "En virtud de los principios de interoperabilidad y cooperación",
        texto: "En virtud de los principios de interoperabilidad y cooperación, en todo procedimiento administrativo los órganos de la Administración del Estado que tengan en su poder documentos o información respecto de materias de su competencia, que sean necesarios para su conocimiento o resolución, deberán remitirlos por medios electrónicos a aquel órgano ante el cual se estuviere tramitando el respectivo procedimiento, que así lo solicite. No obstante, se requerirá previa autorización del interesado en los términos indicados en la letra f) del artículo 30, en el caso de que dichos documentos o información contengan datos sensibles de aquel interesado, ya sea que estén incluidos o no en bases de datos personales, de conformidad con lo establecido en el artículo 30.\nSe dejará registro de toda solicitud entre los órganos de la Administración del Estado respecto a información de carácter sensible del interesado, al que tendrán acceso. Este registro deberá indicar, al menos, lo siguiente:",
         numerales: [
            "a) El órgano requirente.",
            "b) El funcionario responsable.",
            "c) El órgano destinatario.",
            "d) El procedimiento a que corresponde.",
            "e) Los datos o información que se solicita.",
            "f) El plazo establecido para su realización, si corresponde.",
        ],
         textoContinuacion: " Para efectos de este artículo será aplicable lo dispuesto en los artículos 7º y 11 de la ley Nº 19.628.",
        conceptos: [""]
    },
    {
        numero: 25,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Cómputo de los plazos del procedimiento administrativo.",
        texto: "Cómputo de los plazos del procedimiento administrativo. Los plazos de días establecidos en esta ley son de días hábiles, entendiéndose que son inhábiles los días sábados, los domingos y los festivos.\nLos plazos se computarán desde el día siguiente a aquél en que se notifique o publique el acto de que se trate o se produzca su estimación o su desestimación en virtud del silencio administrativo. Si en el mes de vencimiento no hubiere equivalente al día del mes en que comienza el cómputo, se entenderá que el plazo expira el último día de aquel mes.\n Cuando el último día del plazo sea inhábil, éste se entenderá prorrogado al primer día hábil siguiente.\nLas plataformas electrónicas permitirán la presentación de documentos todos los días del año durante las veinticuatro horas. No obstante, la presentación en un día inhábil se entenderá realizada en la primera hora del primer día hábil siguiente.",
        conceptos: ["computo de los plazos", "plazos"]
    },
    {
        numero: 26,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Ampliación de los plazos.",
        texto: "Ampliación de los plazos. La Administración, salvo disposición en contrario, podrá conceder, de oficio o a petición de los interesados, una ampliación de los plazos establecidos, que no exceda de la mitad de los mismos, si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero.\nTanto la petición de los interesados como la decisión sobre la ampliación, deberán producirse, en todo caso, antes del vencimiento del plazo de que se trate.\nEn ningún caso podrá ser objeto de ampliación un plazo ya vencido.",
        conceptos: ["ampliación de los plazos", "plazos"]
    },
    {
        numero: 27,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Salvo caso fortuito o fuerza mayor",
        texto: "Salvo caso fortuito o fuerza mayor, el procedimiento administrativo no podrá exceder de 6 meses, desde su iniciación hasta la fecha en que se emita la decisión final.",
        conceptos: ["ampliación de los plazos", "plazos"]
    },
    {
        numero: 28,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Inicio.",
        texto: "Inicio. Los procedimientos podrán iniciarse de oficio o a solicitud de persona interesada.",
        conceptos: ["inicio", "inicio de los procedimientos"]
    },
    {
        numero: 29,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Inicio de oficio.",
        texto: "Inicio de oficio. Los procedimientos se iniciarán de oficio por propia iniciativa, como consecuencia de una orden superior, a petición de otros órganos o por denuncia.\nCon anterioridad al acuerdo de iniciación, podrá el órgano competente abrir un período de información previa con el fin de conocer las circunstancias del caso concreto y la conveniencia o no de iniciar el procedimiento.",
        conceptos: ["inicio de oficio"]
    },
    {
        numero: 30,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Inicio a solicitud de parte.",
        texto: "Inicio a solicitud de parte. En caso que el procedimiento se inicie a petición de parte interesada, la solicitud que se formule deberá contener:",
         numerales: [
            "a) Nombre y apellidos del interesado o su razón social y, en su caso, de su apoderado o representante legal.",
            "b) Excepcionalmente, en los casos a los que se refiere el artículo 46, medio electrónico a través del cual se llevarán a cabo las notificaciones.",
            "c) Hechos, razones y peticiones en que consiste la solicitud",
            "d) Lugar y fecha.",
            "e) Firma del solicitante o acreditación de la autenticidad de su voluntad expresada por cualquier medio habilitado.",
            "f) Órgano administrativo al que se dirige.",
            "g) Manifestación si se autoriza al órgano de la Administración del Estado que tuviera en su poder documentos o información que contengan datos de carácter sensible del interesado, para que éstos sean remitidos por medios electrónicos al órgano que corresponda resolver en el procedimiento respectivo, conforme al artículo 9º de la ley Nº 19.628."
        ],
         textoContinuacion: " Cuando las pretensiones correspondientes a una pluralidad de personas, tengan un contenido y fundamento idéntico o sustancialmente similar, podrán ser formuladas en una única solicitud, salvo que las normas reguladoras de los procedimientos específicos dispongan otra cosa.\nDe las solicitudes, comunicaciones y escritos que presenten los interesados en las oficinas de la Administración, podrán éstos exigir el correspondiente recibo que acredite la fecha de presentación, considerándose suficiente acreditación un certificado de ingreso generado por la plataforma electrónica donde se acceda al expediente electrónico, en el que figure la fecha de presentación.\nLa Administración deberá establecer formularios de solicitudes cuando se trate de procedimientos de común tramitación, los que estarán a disposición de los ciudadanos por medios electrónicos o en las dependencias administrativas, en los casos autorizados de tramitación mediante presentaciones en soporte de papel. En dichos formularios el organismo señalará expresamente el medio a través del cual se practicarán las notificaciones a los interesados. Excepcionalmente, podrá indicar un medio alternativo de notificación, en los términos señalados en el artículo 46.\n Los solicitantes podrán acompañar los documentos que estimen convenientes para precisar o completar los datos del formulario, los cuales deberán ser admitidos y tenidos en cuenta por el órgano al que se dirijan.",
        conceptos: ["inicio a solicitud de parte", "inicio"]
    },
    {
        numero: 31,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Antecedentes adicionales.",
        texto: "Antecedentes adicionales. Si la solicitud de iniciación no reúne los requisitos señalados en el artículo precedente y los exigidos, en su caso, por la legislación específica aplicable, se requerirá al interesado para que, en un plazo de cinco días, subsane la falta o acompañe los documentos respectivos, con indicación de que, si así no lo hiciere, se le tendrá por desistido de su petición.\n En los procedimientos iniciados a solicitud de los interesados, el órgano competente podrá recabar del solicitante la modificación o mejora voluntarias de los términos de aquélla. De ello se levantará acta sucinta, que se incorporará al procedimiento.",
        conceptos: ["antecedentes", "antecedentes adicionales"]
    },
    {
        numero: 32,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Medidas provisionales.",
        texto: " Medidas provisionales. Iniciado el procedimiento, el órgano administrativo podrá adoptar, de oficio o a petición de parte, las medidas provisionales que estime oportunas para asegurar la eficacia de la decisión que pudiera recaer, si existiesen elementos de juicio suficientes para ello.\nSin embargo, antes de la iniciación del procedimiento administrativo, el órgano competente, de oficio o a petición de parte, en los casos de urgencia y para la protección provisional de los intereses implicados, podrá adoptar las medidas correspondientes. Estas medidas provisionales deberán ser confirmadas, modificadas o levantadas en la iniciación del procedimiento, que deberá efectuarse dentro de los quince días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.\nEn todo caso, las medidas a que se refiere el inciso anterior, quedarán sin efecto si no se inicia el procedimiento en dicho plazo, o cuando la decisión de iniciación no contenga un pronunciamiento expreso acerca de las mismas.\n No se podrán adoptar medidas provisionales que puedan causar perjuicio de difícil o imposible reparación a los interesados, o que impliquen violación de derechos amparados por las leyes.\nLas medidas provisionales podrán ser alzadas o modificadas durante la tramitación del procedimiento, de oficio o a petición de parte, en virtud de circunstancias sobrevinientes o que no pudieron ser tenidas en cuenta en el momento de su adopción.\nEn todo caso, las medidas de que trata este artículo, se extinguirán con la eficacia de la resolución administrativa que ponga fin al procedimiento correspondiente.",
        conceptos: ["medidas provisionales"]
    },
    {
        numero: 33,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Acumulación o desacumulación de procedimientos.",
        texto: "Acumulación o desacumulación de procedimientos. El órgano administrativo que inicie o tramite un procedimiento, cualquiera que haya sido la forma de su iniciación, podrá disponer su acumulación a otros más antiguos con los que guarde identidad sustancial o íntima conexión, o su desacumulación.\nContra esta resolución no procederá recurso alguno.",
        conceptos: ["acumulación", "desacumulación de procedimientos"]
    },
    {
        numero: 34,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Actos de instrucción.",
        texto: "Actos de instrucción. Los actos de instrucción son aquéllos necesarios para la determinación, conocimiento y comprobación de los datos en virtud de los cuales deba pronunciarse el acto.\nSe realizarán de oficio por el órgano que tramite el procedimiento, sin perjuicio del derecho de los interesados a proponer aquellas actuaciones que requieran su intervención, o constituyan trámites legal o reglamentariamente establecidos.",
        conceptos: [" Instrucción del procedimiento", "actos de instrucción", "instrucción"]
    },
    {
        numero: 35,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Prueba.",
        texto: "Prueba. Los hechos relevantes para la decisión de un procedimiento, podrán acreditarse por cualquier medio de prueba admisible en derecho, apreciándose en conciencia.\n Cuando a la Administración no le consten los hechos alegados por los interesados o la naturaleza del procedimiento lo exija, el instructor del mismo ordenará la apertura de un período de prueba, por un plazo no superior a treinta días ni inferior a diez, a fin de que puedan practicarse cuantas juzgue pertinentes.\nEl instructor del procedimiento sólo podrá rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resolución motivada.",
        conceptos: ["prueba", "inicio de los procedimientos"]
    },
        {
        numero: 36,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Momento de la prueba.",
        texto: "Momento de la prueba. La Administración comunicará a los interesados, con la suficiente antelación, el inicio de las actuaciones necesarias para la realización de las pruebas que hayan sido admitidas.\nEn la notificación se consignará el lugar, fecha y hora en que se practicará la prueba, con la advertencia, en su caso, de que el interesado puede nombrar peritos para que le asistan.",
        conceptos: ["momento de la prueba"]
    },
        {
        numero: 37,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Informes.",
        texto: "Informes. Para los efectos de la resolución del procedimiento, se solicitarán aquellos informes que señalen las disposiciones legales, y los que se juzguen necesarios para resolver, citándose el precepto que los exija o fundamentando, en su caso, la conveniencia de requerirlos.",
        conceptos: ["Informes."]
    },
    {
        numero: "37 bis",
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "bis del 37",
        texto: "Cuando un órgano de la Administración del Estado deba evacuar un acto administrativo de carácter general que tenga claros efectos en los ámbitos de competencia de otro órgano, le remitirá todos los antecedentes y requerirá de éste un informe para efectos de evitar o precaver conflictos de normas, con el objeto de resguardar la coordinación, cooperación y colaboración entre los órganos involucrados en su dictación.\nLos órganos administrativos cuyo informe se solicite deberán evacuarlo dentro del plazo de treinta días corridos, contado desde la fecha en que hubieren recibido el requerimiento a que se refiere el inciso precedente. El requirente valorará el contenido de la opinión del órgano administrativo requerido, expresándolo en la motivación del acto administrativo de carácter general que dicte, de conformidad con lo dispuesto en el artículo 41. Transcurrido el plazo sin que se hubiere recibido el correspondiente informe, se procederá conforme al inciso segundo del artículo 38.\nEl requerimiento y los informes que emitan los órganos administrativos en virtud de los incisos anteriores se sujetarán en su forma, valor y tramitación a lo señalado en los artículos 37 y 38.\nNo regirá lo establecido en los incisos anteriores en los casos en que el acto administrativo de carácter general requiera aplicación inmediata o en el más breve plazo posible, atendida su naturaleza y urgencia, circunstancia que deberá ser justificada y de la cual se dejará constancia en su texto.\nCon todo, el órgano administrativo autor de dicho acto, con posterioridad a su dictación, deberá remitirle a los otros órganos administrativos competentes todos los antecedentes tenidos a la vista y requerir de éstos un informe, con el propósito de cumplir con los objetivos señalados en el inciso primero, en la aplicación del acto administrativo respectivo.",
        conceptos: ["."]
    },
    {
        numero: 38,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Valor de los informes.",
        texto: "Valor de los informes. Salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes.\nSi el informe debiera ser emitido por un órgano de la Administración distinto del que tramita el procedimiento en orden a expresar el punto de vista correspondiente a sus competencias respectivas, y transcurriera el plazo sin que aquél se hubiera evacuado, se podrán proseguir las actuaciones.",
        conceptos: ["valor de los informes", "informes"]
    },
    {
        numero: 39,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Información pública.",
        texto: "Información pública. El órgano al que corresponda la resolución del procedimiento, cuando la naturaleza de éste lo requiera, podrá ordenar un período de información pública.\nPara tales efectos, se anunciará en el Diario Oficial o en un diario de circulación nacional, a fin de que cualquier persona pueda examinar el procedimiento, o la parte del mismo que se indique.\n El anuncio señalará el lugar de exhibición y determinará el plazo para formular observaciones, que en ningún caso podrá ser inferior a diez días.\nLa falta de actuación en este trámite, no impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento.\nLa actuación en el trámite de información pública no otorga, por sí misma, la condición de interesado. En todo caso, la Administración otorgará una respuesta razonada, en lo pertinente, que podrá ser común para todas aquellas observaciones que planteen cuestiones sustancialmente iguales.",
        conceptos: ["información pública"]
    },
    {
        numero: 40,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Conclusión del procedimiento.",
        texto: "Conclusión del procedimiento. Pondrán término al procedimiento la resolución final, el desistimiento, la declaración de abandono y la renuncia al derecho en que se funde la solicitud, cuando tal renuncia no esté prohibida por el ordenamiento jurídico.\nTambién producirá la terminación del procedimiento la imposibilidad material de continuarlo por causas sobrevinientes. La resolución que se dicte deberá ser fundada en todo caso.",
        conceptos: ["conclusión del procedimiento", "procedimientos"]
    },
    {
        numero: 41,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Contenido de la resolución final.",
        texto: "Contenido de la resolución final. La resolución que ponga fin al procedimiento decidirá las cuestiones planteadas por los interesados.\nCuando en la elaboración de la resolución final se adviertan cuestiones conexas, ellas serán puestas en conocimiento de los interesados, quienes dispondrán de un plazo de quince días para formular las alegaciones que estimen pertinentes y aportar, en su caso, medios de prueba. Transcurrido ese plazo el órgano competente decidirá sobre ellas en la resolución final.\nEn los procedimientos tramitados a solicitud del interesado, la resolución deberá ajustarse a las peticiones formuladas por éste, sin que en ningún caso pueda agravar su situación inicial y sin perjuicio de la potestad de la Administración de incoar de oficio un nuevo procedimiento, si fuere procedente.\nLas resoluciones contendrán la decisión, que será fundada. Expresarán, además, los recursos que contra la misma procedan, órgano administrativo o judicial ante el que hubieran de presentarse y plazo para interponerlos, sin perjuicio de que los interesados puedan ejercitar cualquier otro que estimen oportuno.\nEn ningún caso podrá la Administración abstenerse de resolver so pretexto de silencio, oscuridad o insuficiencia de los preceptos legales aplicables al caso, aunque podrá resolver la inadmisibilidad de las solicitudes de reconocimiento de derechos no previstos en el ordenamiento jurídico o manifiestamente carentes de fundamento.\nLa aceptación de informes o dictámenes servirá de motivación a la resolución cuando se incorporen al texto de la misma.",
        conceptos: ["Contenido de la resolución final."]
    },
    {
        numero: 42,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Renuncia y Desistimiento.",
        texto: "Renuncia y Desistimiento. Todo interesado podrá desistirse de su solicitud o, cuando ello no esté prohibido por el ordenamiento jurídico, renunciar a sus derechos.\nSi la solicitud de iniciación se hubiera formulado por dos o más interesados, el desistimiento o la renuncia sólo afectará a aquéllos que la hubiesen formulado.\n Tanto el desistimiento como la renuncia podrán hacerse por cualquier medio que permita su constancia.",
        conceptos: ["Renuncia y Desistimiento","renuncia", "desistimiento"]
    },
    {
        numero: 43,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Abandono.",
        texto: "Abandono. Cuando por la inactividad de un interesado se produzca por más de treinta días la paralización del procedimiento iniciado por él, la Administración le advertirá que si no efectúa las diligencias de su cargo en el plazo de siete días, declarará el abandono de ese procedimiento.\nTranscurrido el plazo señalado precedentemente, sin que el particular requerido realice las actividades necesarias para reanudar la tramitación, la Administración declarará abandonado el procedimiento y ordenará su archivo, notificándoselo al interesado.\nEl abandono no producirá por sí solo la prescripción de las acciones del particular o de la Administración. En todo caso, los procedimientos abandonados no interrumpirán el plazo de prescripción.",
        conceptos: ["Abandono"]
    },
    {
        numero: 44,
        capitulo: 2,
        capituloTitulo: "El Procedimiento Administrativo",
        titulo: "Excepción del abandono.",
        texto: "Excepción del abandono. La Administración podrá no declarar el abandono, cuando la cuestión suscitada afecte al interés general o fuera conveniente continuarla para su definición y esclarecimiento.",
        conceptos: ["inicio", "inicio de los procedimientos"]
    },
    {
        numero: 45,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Procedencia",
        texto: "Procedencia. Los actos administrativos de efectos individuales, deberán ser notificados a los interesados conteniendo su texto íntegro.\nLas notificaciones deberán practicarse, a más tardar, en los cinco días siguientes a aquél en que ha quedado totalmente tramitado el acto administrativo.\nNo obstante lo anterior, los actos administrativos que afectaren a personas cuyo paradero fuere ignorado, deberán publicarse en el Diario Oficial.",
        conceptos: ["procedencia"]
    },
    {
        numero: 46,
       capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: " Procedimiento",
        texto: "Procedimiento. Las notificaciones se practicarán por medios electrónicos en base a la información contenida en un registro único dependiente de la Secretaría de Gobierno Digital de la Subsecretaría de Hacienda sobre el cual se configurarán domicilios digitales únicos, cuyas características y operatividad será regulada mediante reglamento dictado conjuntamente por el Ministerio de Hacienda. Dichas notificaciones tendrán el carácter de personal. Las notificaciones, citaciones y comunicaciones a través del domicilio único digital definido por la ley, producirán pleno efecto legal y se entenderán practicadas al tercer día hábil siguiente contado desde la fecha de su envío\nQuienes carezcan de los medios tecnológicos, no tengan acceso a medios electrónicos o sólo actuaren excepcionalmente a través de ellos, podrán solicitar por medio de un formulario, ante el órgano respectivo que la notificación se practique mediante forma diversa, quien deberá pronunciarse dentro del tercer día, según lo establezca el reglamento, y deberá hacerlo de manera fundada en caso de denegar la solicitud. La notificación se realizará en la forma solicitada si fuere posible o mediante carta certificada dirigida al domicilio que debiere designar al presentar esta solicitud. En caso de notificaciones por carta certificada, éstas se entenderán practicadas a contar del tercer día siguiente a su recepción en la oficina de correos que corresponda.\n Asimismo, las notificaciones podrán hacerse en las dependencias de la Administración, si el interesado se apersonare a recibirla, dejándose constancia de ello en el expediente electrónico, consignándose la fecha y hora de la misma. Si el interesado requiriere copia del acto o resolución que se le notifica se le dará, sin más trámite, en el mismo momento, en el formato que se tramite el procedimiento.\nEn los procedimientos administrativos especiales en los que la ley establezca un medio de notificación distinto al establecido en el inciso primero, los órganos de la Administración podrán practicar las notificaciones a través de dichos medios de notificación especial o en la forma establecida en el presente artículo. Los órganos de la Administración del Estado deberán informar expresamente a los interesados el medio a través del cual se les practicarán las notificaciones, en los formularios a los que se refieren los artículos 18 y 30.\nMediante el reglamento referido en el inciso primero se regulará de qué forma los órganos de la Administración deberán practicar las notificaciones electrónicas, considerarlas practicadas y obtener información necesaria para llevar el registro indicado, estableciendo, a lo menos, los requisitos y condiciones necesarios que aseguren la constancia de la fecha y hora de envío de notificaciones, la recepción o acceso por el interesado o su apoderado, especialmente en el caso de la primera notificación para resguardar su derecho a la defensa, así como la integridad del contenido, la identidad fidedigna del remitente y el destinatario de la misma.",
        conceptos: ["procedimiento"]
    },
    {
        numero: 47,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Notificación tácita.",
        texto: "Notificación tácita. Aun cuando no hubiere sido practicada notificación alguna, o la que existiere fuere viciada, se entenderá el acto debidamente notificado si el interesado a quien afectare, hiciere cualquier gestión en el procedimiento, con posterioridad al acto, que suponga necesariamente su conocimiento, sin haber reclamado previamente de su falta o nulidad.",
        conceptos: ["notificación","notificación tácita"]
    },
    {
        numero: 48,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Obligación de publicar",
        texto: "Obligación de publicar. Deberán publicarse en el Diario Oficial los siguientes actos administrativos:",
       numerales: [
            "a) Los que contengan normas de general aplicación o que miren al interés general;",
            "b) Los que interesen a un número indeterminado de personas;",
            "c) Los que afectaren a personas cuyo paradero fuere ignorado, de conformidad a lo establecido en el artículo 45;",
            "d) Los que ordenare publicar el Presidente de la República; y",
            "e) Los actos respecto de los cuales la ley ordenare especialmente este trámite.",
        ],
         textoContinuacion: "Tratándose de los actos a que se refiere la letra c), la publicación deberá efectuarse los días 1º ó 15 de cada mes o al día siguiente, si fuese inhábil.",
        conceptos: ["obligación de publicar", "obligación", "publicar"]
    },
    {
        numero: 49,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Autenticación.",
        texto: "Autenticación. Los actos publicados en el Diario Oficial se tendrán como auténticos y oficialmente notificados, obligando desde esa fecha a su íntegro y cabal cumplimiento, salvo que se establecieren reglas diferentes sobre la fecha en que haya de entrar en vigencia.",
        conceptos: ["autenticación"]
    },
    {
        numero: 50,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Título.",
        texto: "Título. La Administración Pública no iniciará ninguna actuación material de ejecución de resoluciones que limite derechos de los particulares sin que previamente haya sido adoptada la resolución que le sirva de fundamento jurídico.\n El órgano que ordene un acto de ejecución material de resoluciones estará obligado a notificar al particular interesado la resolución que autorice la actuación administrativa.",
        conceptos: ["publicidad", "Publicidad y ejecutividad de los actos administrativos","ejecutividad"]
    },
    {
        numero: 51,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Ejecutoriedad.",
        texto: "Ejecutoriedad. Los actos de la Administración Pública sujetos al Derecho Administrativo causan inmediata ejecutoriedad, salvo en aquellos casos en que una disposición establezca lo contrario o necesiten aprobación o autorización superior.\nLos decretos y las resoluciones producirán efectos jurídicos desde su notificación o publicación, según sean de contenido individual o general.",
        conceptos: ["ejecutoriedad"]
    },
    {
        numero: 52,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Retroactividad.",
        texto: "Retroactividad. Los actos administrativos no tendrán efecto retroactivo, salvo cuando produzcan consecuencias favorables para los interesados y no lesionen derechos de terceros.",
        conceptos: ["procedencia"]
    },
    {
        numero: 48,
        capitulo: 3,
        capituloTitulo: "Publicidad y ejecutividad de los actos administrativos",
        titulo: "Procedencia",
        texto: "k",
        conceptos: ["procedencia"]
    },
];
