import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Política de Privacidad | Flumen Solutions',
    description: 'Conoce cómo Flumen Solutions recopila, usa y protege tus datos personales.',
}

export default function PrivacyPage() {
    return (
        <main className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidad</h1>
                    <p className="text-slate-400">Última actualización: Noviembre 2025</p>
                </div>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <p className="mb-4">
                            FLUMEN SOLUTIONS S.A.S. (en adelante, “FLUMEN”), sociedad comercial legalmente constituida en Colombia, identificada con NIT 902.004.333-8,
                            con domicilio principal en la Carrera 128 # 144-28 de la ciudad de Bogotá D.C., y correo electrónico de contacto contacto@flumensolutions.com,
                            en cumplimiento de lo previsto en la Ley Estatutaria 1581 de 2012, el Decreto 1074 de 2015 y las demás normas que regulan la protección de
                            datos personales en Colombia, en su calidad de Responsable del Tratamiento, adopta la presente Política de Tratamiento de Datos Personales (en adelante, la “Política”).
                        </p>
                        <p>
                            El propósito de esta Política es establecer los lineamientos aplicables a la recolección, uso, circulación, almacenamiento, transmisión,
                            transferencia, supresión y, en general, al tratamiento de los datos personales obtenidos de titulares, usuarios, proveedores, empleados y
                            terceros a través de los distintos canales habilitados por FLUMEN en desarrollo de sus actividades comerciales y operativas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Alcance</h2>
                        <p className="mb-4">
                            La presente Política aplica a todo tratamiento de datos personales realizado por FLUMEN, en el marco de sus actividades comerciales, contractuales,
                            administrativas y operativas, incluyendo la relación con clientes, usuarios, proveedores, aliados, empleados, candidatos a vinculación y cualquier
                            titular cuyos datos sean tratados por la compañía a través de los distintos canales de recolección habilitados.
                        </p>
                        <p className="mb-4">
                            El tratamiento de los datos personales se realizará conforme a las finalidades previamente informadas al titular, y estará limitado a la recolección
                            de información pertinente, adecuada y necesaria para el desarrollo de las actividades de FLUMEN, en cumplimiento de la normativa vigente sobre
                            protección de datos personales en Colombia.
                        </p>
                        <p>
                            Esta Política resulta obligatoria para todo el personal interno, contratistas, encargados del tratamiento y terceros que, en virtud de una relación
                            jurídica, tengan acceso a datos personales cuyo tratamiento sea responsabilidad de FLUMEN.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Destinatarios</h2>
                        <p>
                            La presente Política está dirigida a todos los titulares de datos personales cuyo tratamiento sea realizado por FLUMEN, incluidos, sin limitarse a:
                            clientes, usuarios, proveedores, contratistas, colaboradores, candidatos a vinculación laboral, aliados comerciales y, en general, cualquier tercero
                            respecto del cual FLUMEN trate información personal en el desarrollo de sus actividades.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Definiciones</h2>
                        <p className="mb-6">
                            Para efectos de la presente Política, los términos que se indican a continuación tendrán el significado que aquí se les asigna, sin perjuicio de
                            aquellos definidos expresamente en la Ley Estatutaria 1581 de 2012, el Decreto 1074 de 2015 y las normas que los modifiquen, adicionen o sustituyan.
                            Las definiciones aplican independientemente de que los términos se utilicen en mayúscula o minúscula, en singular o plural.
                        </p>
                        <ul className="space-y-4 list-none">
                            <li>
                                <strong className="text-white">Autorización:</strong> Consentimiento previo, expreso e informado otorgado por el Titular para el Tratamiento de sus Datos Personales.
                                La Autorización podrá manifestarse por cualquier medio válido que permita su posterior consulta, incluida la aceptación por medios físicos, electrónicos,
                                digitales, telefónicos o por conductas inequívocas que permitan inferirla de manera razonable. La Autorización constituye requisito indispensable para
                                que FLUMEN realice el Tratamiento, salvo que medie una excepción legal o judicial.
                            </li>
                            <li>
                                <strong className="text-white">Aviso de Privacidad:</strong> Comunicación verbal o escrita generada por FLUMEN, dirigida al Titular, mediante la cual se le informa acerca
                                de la existencia de esta Política, las finalidades del Tratamiento y la forma de ejercer sus derechos.
                            </li>
                            <li>
                                <strong className="text-white">Base de Datos:</strong> Conjunto organizado de Datos Personales sometidos a Tratamiento, cualquiera sea su soporte, físico, electrónico o de
                                cualquier otra naturaleza, y administrado por FLUMEN o por terceros en virtud de una relación jurídica.
                            </li>
                            <li>
                                <strong className="text-white">Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
                                Se encuentran incluidos, entre otros, datos de identificación, contacto, localización, formación, trayectoria contractual o laboral, preferencias de
                                uso de plataformas, firmas manuscritas o digitales y cualquier otro dato que permita establecer la identidad del Titular.
                            </li>
                            <li>
                                <strong className="text-white">Dato Público:</strong> Dato Personal calificado como tal por la ley o la Constitución, o que no sea semiprivado, privado o sensible.
                                Son ejemplos los datos relativos al estado civil, profesión, calidad de comerciante, información contenida en registros públicos o actos públicos.
                            </li>
                            <li>
                                <strong className="text-white">Dato Privado:</strong> Dato Personal que, por su naturaleza íntima o reservada, solo es relevante para el Titular y cuyo acceso o tratamiento requiere Autorización.
                            </li>
                            <li>
                                <strong className="text-white">Dato Semiprivado:</strong> Dato Personal que no tiene naturaleza pública ni estrictamente privada. Su conocimiento interesa tanto al Titular
                                como a un determinado sector, grupo o tercero. Son ejemplos los datos financieros, comerciales y relativos al comportamiento de servicios, siempre
                                que no tengan la calidad de sensibles.
                            </li>
                            <li>
                                <strong className="text-white">Dato Sensible:</strong> Dato Personal que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación.
                                Se consideran sensibles, entre otros, los relacionados con su origen racial o étnico, orientación política, convicciones religiosas o filosóficas,
                                afiliación sindical, datos biométricos, datos relativos a la salud, vida sexual o datos de menores de edad.
                            </li>
                            <li>
                                <strong className="text-white">Encargado del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que trata Datos Personales por cuenta de FLUMEN y
                                conforme a sus instrucciones, sin decidir sobre la finalidad ni el alcance del Tratamiento.
                            </li>
                            <li>
                                <strong className="text-white">Responsable del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que decide sobre la finalidad,
                                contenido y alcance del Tratamiento. Para efectos de esta Política, el Responsable es FLUMEN SOLUTIONS S.A.S.
                            </li>
                            <li>
                                <strong className="text-white">Titular:</strong> Persona natural cuyos Datos Personales son objeto de Tratamiento por parte de FLUMEN.
                            </li>
                            <li>
                                <strong className="text-white">Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como recolección, almacenamiento, uso,
                                circulación, análisis, segmentación, transmisión, transferencia, actualización, supresión o cualquier otra acción derivada del manejo de información personal.
                            </li>
                            <li>
                                <strong className="text-white">Cliente de FLUMEN:</strong> Persona natural o jurídica que contrata los servicios tecnológicos, de automatización, desarrollo, integración,
                                chatbot u otras soluciones ofrecidas por FLUMEN. En los casos en que la prestación de dichos servicios implique el Tratamiento de Datos Personales
                                de empleados, usuarios internos, contratistas o terceros vinculados al Cliente, FLUMEN podrá actuar como Responsable o como Encargado del Tratamiento,
                                según corresponda y de conformidad con lo estipulado en el contrato y en la normativa aplicable en materia de protección de datos personales.
                            </li>
                            <li>
                                <strong className="text-white">Habeas Data:</strong> Derecho fundamental que asiste a todo Titular para conocer, actualizar, rectificar, suprimir y revocar el
                                Tratamiento de sus Datos Personales, así como a ser informado sobre el uso que se les da.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Principios de Tratamiento de Datos Personales</h2>
                        <p className="mb-4">
                            FLUMEN se compromete a realizar el Tratamiento de Datos Personales de los Titulares de conformidad con los principios establecidos en la legislación
                            colombiana vigente en materia de protección de datos personales, en especial los previstos en el artículo 4 de la Ley Estatutaria 1581 de 2012 y las
                            normas que la reglamentan. En virtud de lo anterior, el Tratamiento se regirá por los siguientes principios:
                        </p>
                        <ul className="space-y-4 list-disc pl-5">
                            <li><strong className="text-white">Principio de legalidad:</strong> El Tratamiento de Datos Personales es una actividad reglada que debe sujetarse a lo dispuesto en la Ley 1581 de 2012,
                                el Decreto 1074 de 2015 y las demás normas que las modifiquen o complementen. Ningún Tratamiento podrá realizarse al margen del ordenamiento jurídico.</li>

                            <li><strong className="text-white">Principio de finalidad:</strong> El Tratamiento debe obedecer a una finalidad legítima, informada al Titular y acorde con la Constitución y la ley.
                                Ningún Dato Personal será tratado con finalidades distintas o incompatibles con las autorizadas.</li>

                            <li><strong className="text-white">Principio de libertad:</strong> El Tratamiento solo podrá realizarse cuando exista Autorización previa, expresa e informada del Titular,
                                salvo en los casos de excepción legal. Ningún Dato Personal será obtenido o divulgado sin autorización o sin mandato legal o judicial.</li>

                            <li><strong className="text-white">Principio de veracidad o calidad:</strong> La información objeto de Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.
                                FLUMEN no tratará datos parciales, fraccionados, erróneos o que puedan inducir a interpretación engañosa.</li>

                            <li><strong className="text-white">Principio de transparencia:</strong> FLUMEN garantiza al Titular el derecho a obtener, en cualquier momento y sin restricciones indebidas, información sobre la existencia y el Tratamiento de sus Datos Personales.</li>

                            <li><strong className="text-white">Principio de acceso y circulación restringida:</strong> El Tratamiento se realizará dentro de los límites derivados de la naturaleza de los datos
                                y de la Autorización otorgada. Salvo la información pública, los Datos Personales no podrán estar disponibles en Internet ni en otros medios de divulgación masiva,
                                salvo que exista control técnico que permita restringir el acceso a titulares o terceros autorizados.</li>

                            <li><strong className="text-white">Principio de seguridad:</strong> FLUMEN implementará las medidas técnicas, humanas y administrativas necesarias para proteger los Datos Personales frente a pérdida,
                                adulteración, consulta, uso o acceso no autorizado o fraudulento.</li>

                            <li><strong className="text-white">Principio de confidencialidad:</strong> Toda persona que intervenga en el Tratamiento de Datos Personales está obligada a garantizar la reserva de la información,
                                incluso después de finalizada su relación con FLUMEN. La comunicación o suministro de Datos Personales solo procederá en los casos autorizados legalmente o contractualmente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. ¿Quiénes somos?</h2>
                        <p className="mb-4">
                            FLUMEN SOLUTIONS S.A.S. es una sociedad por acciones simplificada constituida conforme a las leyes de la República de Colombia, identificada con NIT 902.004.333-8, domiciliada en la ciudad de Bogotá D.C., y con correo electrónico de contacto contacto@flumensolutions.com.
                        </p>
                        <p>
                            FLUMEN opera bajo su propia denominación social y puede utilizar nombres comerciales o marcas relacionadas con los servicios tecnológicos que desarrolla, sin que ello implique la existencia de personas jurídicas distintas o autónomas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Calidad en el Tratamiento de Datos Personales</h2>
                        <p className="mb-4">
                            Según la naturaleza del servicio contratado y el flujo de datos involucrado, FLUMEN podrá actuar como Responsable o como Encargado del Tratamiento de Datos Personales. El rol aplicable en cada caso será definido contractualmente y determinado conforme a lo previsto en la Ley 1581 de 2012 y sus normas reglamentarias.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">FLUMEN como Responsable del Tratamiento</h3>
                        <p className="mb-4">
                            FLUMEN actúa como Responsable cuando decide de manera autónoma la finalidad y los medios del Tratamiento de los Datos Personales que recolecta directamente para la gestión administrativa, comercial, operativa o laboral de la compañía.
                        </p>
                        <p className="mb-2">En estos casos, los datos tratados incluyen, entre otros:</p>
                        <ul className="list-disc pl-5 mb-6 space-y-1">
                            <li>Datos de identificación y contacto de clientes potenciales y actuales.</li>
                            <li>Datos de proveedores, aliados comerciales y contratistas.</li>
                            <li>Datos de empleados, candidatos y personal vinculado.</li>
                            <li>Datos recolectados a través de formularios web, correos electrónicos corporativos, eventos, reuniones o comunicaciones institucionales.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">FLUMEN como Encargado del Tratamiento</h3>
                        <p className="mb-4">
                            FLUMEN actúa como Encargado cuando recibe, accede o trata Datos Personales por cuenta de un tercero que es el Responsable del Tratamiento (por ejemplo, una empresa cliente que implementa una solución tecnológica desarrollada por FLUMEN).
                        </p>
                        <p className="mb-2">En este escenario, FLUMEN:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>No define la finalidad del Tratamiento.</li>
                            <li>Trata los datos únicamente según las instrucciones documentadas del Responsable.</li>
                            <li>Implementa medidas de seguridad, confidencialidad y custodia conforme al contrato y la ley.</li>
                            <li>No usa los datos para fines propios.</li>
                        </ul>
                        <p>
                            Los datos procesados como Encargado pueden corresponder, entre otros, a empleados, usuarios internos, proveedores o terceros cuya información sea administrada a través de plataformas, integraciones, automatizaciones o soluciones tecnológicas desarrolladas por FLUMEN.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. ¿Qué tipo de información se recolecta?</h2>
                        <p className="mb-4">
                            FLUMEN realizará el Tratamiento de Datos Personales de distintas categorías de titulares, de acuerdo con su relación con la empresa y con las finalidades autorizadas. La información tratada puede incluir datos de identificación, contacto, información laboral, información técnica asociada al uso de soluciones tecnológicas y, cuando aplique, datos suministrados por los clientes corporativos en el marco de los servicios contratados.
                        </p>
                        <p className="mb-6">
                            El tipo de datos que pueden ser tratados incluye, entre otros, información de identificación, contacto, información contractual, laboral, técnica y metadatos derivados del uso de herramientas tecnológicas. FLUMEN no trata datos financieros, crediticios o patrimoniales de los Titulares, salvo que el cliente los suministre y exista obligación contractual y legal para ello.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">7.1. Si usted es Cliente de FLUMEN</h3>
                        <p className="mb-4">
                            Para efectos de esta Política, se entiende como Cliente la persona natural o jurídica que contrata los servicios de FLUMEN. En el marco de dicha relación, FLUMEN puede tratar los Datos Personales de las personas naturales que actúen como representantes legales, administradores, contactos comerciales o usuarios designados por el Cliente.
                        </p>
                        <p className="mb-2">Los datos tratados en este contexto pueden incluir:</p>
                        <ul className="list-disc pl-5 mb-6 space-y-1">
                            <li>Nombre y apellidos.</li>
                            <li>Número de identificación.</li>
                            <li>Cargo y rol dentro de la empresa.</li>
                            <li>Datos de contacto (correo electrónico institucional, teléfono de contacto, país o ciudad de operación).</li>
                            <li>Información necesaria para la gestión contractual, facturación, soporte técnico y comunicaciones comerciales autorizadas.</li>
                            <li>Credenciales de acceso a plataformas tecnológicas o paneles administrados por FLUMEN, cuando aplique.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">7.2. Si usted es Usuario interno, empleado o tercero vinculado a un Cliente de FLUMEN</h3>
                        <p className="mb-4">
                            Cuando FLUMEN presta servicios tecnológicos que implican el acceso o Tratamiento de Datos Personales de empleados, usuarios internos, agentes de soporte, proveedores o cualquier tercero asociado al Cliente, FLUMEN actúa como Encargado del Tratamiento. En este caso, los datos no son recolectados directamente por FLUMEN, sino suministrados, cargados o integrados por el Cliente en el marco del servicio contratado.
                        </p>
                        <p className="mb-2">Los datos tratados en estos escenarios pueden incluir, entre otros:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Nombre y apellidos.</li>
                            <li>Correo electrónico corporativo, identificación interna o usuario asignado.</li>
                            <li>Cargo, rol o área funcional dentro de la empresa cliente.</li>
                            <li>Registros derivados del uso de plataformas o herramientas tecnológicas (por ejemplo: interacciones con chatbots, logs de operación, trazabilidad de formularios o acciones dentro de flujos automatizados).</li>
                            <li>Datos técnicos de conexión o dispositivo (IPs, georreferencia aproximada, agente de navegador, interacción con el sistema).</li>
                        </ul>
                        <p className="mb-6">
                            El alcance, conservación, tratamiento y eliminación de estos datos se rige por lo dispuesto en el contrato de prestación de servicios celebrado con el Cliente y por las instrucciones documentadas del Responsable del Tratamiento.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">7.3. Si usted es Proveedor de FLUMEN</h3>
                        <p className="mb-4">
                            FLUMEN podrá tratar los Datos Personales de proveedores, contratistas o aliados estratégicos para la ejecución de relaciones comerciales, contractuales, administrativas y de cumplimiento legal. Los datos tratados pueden incluir:
                        </p>
                        <ul className="list-disc pl-5 mb-6 space-y-1">
                            <li>Nombre y apellidos o razón social.</li>
                            <li>Tipo y número de identificación.</li>
                            <li>Datos de contacto y ubicación.</li>
                            <li>Información bancaria necesaria para pagos y cumplimiento tributario.</li>
                            <li>Certificaciones, soportes documentales y datos exigidos por políticas de debida diligencia, gestión de riesgos o cumplimiento corporativo.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">7.4. Si usted es Colaborador, candidato o aspirante a vinculación laboral con FLUMEN</h3>
                        <p className="mb-4">
                            FLUMEN podrá tratar Datos Personales de empleados, practicantes, candidatos y ex empleados en el marco de procesos de selección, contratación, ejecución del vínculo laboral o contractual, cumplimiento normativo, seguridad social, recursos humanos y deberes derivados de la legislación laboral vigente.
                        </p>
                        <p className="mb-2">Los datos tratados pueden incluir:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Identificación y contacto.</li>
                            <li>Información académica, laboral, curricular y de experiencia profesional.</li>
                            <li>Información requerida para afiliación al sistema de seguridad social, salud y riesgos laborales.</li>
                            <li>Historial de vinculación, evaluaciones, beneficios y datos derivados del ciclo laboral.</li>
                        </ul>
                        <p className="mb-6">
                            El tratamiento de datos sensibles en este contexto será opcional, proporcional y sometido a autorización reforzada del Titular, conforme a lo previsto en la Ley 1581 de 2012.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">7.5. Datos recolectados mediante el uso de sitios web, plataformas, integraciones y canales digitales</h3>
                        <p className="mb-4">
                            Cuando los Titulares navegan por el sitio web o interactúan con herramientas tecnológicas administradas por FLUMEN, se pueden recolectar datos asociados a:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Dirección IP, identificadores técnicos de dispositivo o navegador.</li>
                            <li>Actividad dentro de la plataforma, estadísticas de uso, interacción con módulos, tiempos de sesión y eventos registrados.</li>
                            <li>Cookies, etiquetas de seguimiento, analítica web o telemetría del sistema.</li>
                        </ul>
                        <p className="mb-6">
                            El uso de dichos datos se regula en la Política de Cookies y no implicará perfilamiento automatizado con efectos jurídicos, salvo autorización específica.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">7.6. Datos que FLUMEN NO recolecta</h3>
                        <p className="mb-2">FLUMEN no trata, salvo que exista instrucción contractual y autorización válida:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Datos financieros, crediticios o patrimoniales.</li>
                            <li>Datos de menores de edad, excepto cuando el Cliente lo exija y existan garantías reforzadas.</li>
                            <li>Datos biométricos o sensibles, salvo que sean estrictamente necesarios para la prestación del servicio y estén autorizados por el Titular o Responsable.</li>
                            <li>Información relativa a convicciones políticas, religiosas, filosóficas o afiliación sindical.</li>
                        </ul>
                        <p>
                            FLUMEN no realiza venta, cesión, monetización ni explotación comercial de Datos Personales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Autorización para realizar el Tratamiento de los Datos Personales</h2>
                        <p className="mb-4">
                            FLUMEN realizará el Tratamiento de Datos Personales únicamente cuando cuente con la Autorización previa, expresa e informada del Titular, salvo que concurra una de las excepciones legales previstas en la normativa colombiana de protección de datos. La Autorización podrá otorgarse mediante medios físicos, electrónicos, formularios digitales, aceptación a través de plataformas tecnológicas, declaraciones de voluntad inequívocas u otros mecanismos que permitan su verificación posterior. FLUMEN conservará prueba de la Autorización otorgada, aplicando medidas de seguridad que garanticen la confidencialidad, integridad y disponibilidad de la información.
                        </p>
                        <p className="mb-4">
                            No será necesaria la Autorización del Titular cuando el Tratamiento: (i) sea requerido por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial, (ii) recaiga sobre datos de naturaleza pública, (iii) se realice para fines históricos, estadísticos o científicos, siempre que se adopten procesos de supresión o anonimización que impidan la identificación del Titular, (iv) resulte necesario para el desarrollo de una relación contractual, precontractual, laboral o de prestación de servicios con el Titular, dentro de los límites de la ley, o (v) se derive de situaciones de urgencia médica o sanitaria en los términos definidos por la normatividad vigente.
                        </p>
                        <p>
                            El Titular podrá revocar la Autorización otorgada, total o parcialmente, así como solicitar la supresión de sus datos personales, salvo cuando exista un deber legal o contractual que exija su permanencia en la Base de Datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Tratamiento de los Datos Personales</h2>
                        <p className="mb-4">
                            FLUMEN, en su calidad de Responsable del Tratamiento y, cuando corresponda, a través de Encargados debidamente designados, podrá realizar operaciones de recolección, almacenamiento, uso, circulación, actualización, transmisión, transferencia, conservación y supresión de los Datos Personales suministrados por el Titular o entregados por un Cliente en el marco de la prestación de servicios tecnológicos. El Tratamiento se realizará conforme a las finalidades autorizadas por el Titular, a lo previsto en la presente Política y a las obligaciones establecidas en la Ley 1581 de 2012 y sus normas reglamentarias.
                        </p>
                        <p className="mb-4">
                            FLUMEN podrá designar Encargados del Tratamiento para ejecutar actividades operativas, técnicas, tecnológicas, administrativas o de soporte, siempre bajo instrucciones documentadas y con las garantías de seguridad y confidencialidad exigidas por la normativa aplicable. Dichos Encargados deberán suscribir los acuerdos necesarios para asegurar la protección de los Datos Personales.
                        </p>
                        <p className="mb-4">
                            FLUMEN podrá transferir o transmitir Datos Personales a empresas vinculadas, proveedores tecnológicos, aliados estratégicos, subcontratistas, prestadores de servicios en la nube o entidades que intervengan en la ejecución de los servicios contratados, ubicados en Colombia o en el exterior, incluso cuando el país receptor no cuente con un nivel adecuado de protección de datos. En tales casos, la operación se realizará con fundamento en la Autorización del Titular, en los contratos de transmisión o transferencia exigidos por la normativa colombiana y en las medidas de seguridad adoptadas para la protección de la información.
                        </p>
                        <p className="mb-4">
                            En el marco del desarrollo de soluciones tecnológicas basadas en inteligencia artificial o procesamiento automatizado de información, FLUMEN podrá utilizar servicios provistos por terceros internacionales, incluidos pero no limitados a proveedores como OpenAI, que podrán actuar como Encargados o Subencargados del Tratamiento. Dichos proveedores tratarán los Datos Personales exclusivamente para la ejecución técnica de las funcionalidades contratadas, sin conservarlos, almacenarlos ni utilizarlos para fines propios, de conformidad con las políticas de retención, seguridad y confidencialidad definidas por el proveedor y verificadas previamente por FLUMEN. En todo caso, FLUMEN mantendrá la condición de Responsable del Tratamiento frente a los Titulares y garantizará el cumplimiento de la legislación colombiana, sin perjuicio de la normativa extranjera aplicable al proveedor tecnológico.
                        </p>
                        <p className="mb-4">
                            FLUMEN también podrá suministrar Datos Personales a auditores, asesores jurídicos, entidades de control, o autoridades administrativas o judiciales cuando así sea requerido en ejercicio de sus competencias legales, mediante orden formal que cumpla con los requisitos jurídicos aplicables.
                        </p>
                        <p className="mb-4">
                            Los Datos Personales serán conservados durante la vigencia de la relación contractual, comercial o laboral que les dio origen, y posteriormente durante el tiempo necesario para el cumplimiento de obligaciones legales, contables, fiscales, regulatorias o de archivo; o hasta que el Titular solicite su supresión, siempre que no exista deber legal o contractual que exija su conservación. Cumplida la finalidad del Tratamiento o vencido el término legal de conservación, los datos serán eliminados, anonimizados o bloqueados, según corresponda.
                        </p>
                        <p>
                            FLUMEN no comercializa, vende, alquila, intercambia ni cede Datos Personales con fines lucrativos. Su Tratamiento se limita a las finalidades autorizadas por el Titular o derivadas de la relación jurídica que lo vincula con la compañía.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Derechos de los Titulares de los Datos Personales</h2>
                        <p className="mb-4">
                            Los Titulares de los Datos Personales tratados por FLUMEN tienen los siguientes derechos, los cuales podrán ejercer en cualquier momento, de manera gratuita y de conformidad con los procedimientos establecidos en la presente Política y en la legislación vigente:
                        </p>
                        <ul className="space-y-4 list-disc pl-5 mb-4">
                            <li>Conocer, actualizar y rectificar sus Datos Personales frente al Responsable o Encargado del Tratamiento. Este derecho podrá ejercerse respecto de datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o cuyo Tratamiento esté prohibido o no haya sido autorizado.</li>
                            <li>Solicitar prueba de la Autorización otorgada, salvo en los casos en los que el Tratamiento no requiera autorización del Titular, conforme a lo previsto en el artículo 10 de la Ley 1581 de 2012.</li>
                            <li>Ser informado acerca del uso que FLUMEN ha dado a sus Datos Personales, previa solicitud formal.</li>
                            <li>Solicitar la supresión de los Datos Personales o la revocatoria de la Autorización cuando el Titular considere que no se están respetando los principios, derechos o garantías constitucionales y legales. FLUMEN podrá negar la supresión o revocatoria cuando exista un deber legal o contractual que exija la conservación de la información.</li>
                            <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a lo dispuesto en la Ley 1581 de 2012 y demás normas que regulan la protección de Datos Personales en Colombia.</li>
                            <li>Acceder en forma gratuita a los Datos Personales objeto de Tratamiento, al menos una vez al mes calendario, o cada vez que existan modificaciones sustanciales en la presente Política.</li>
                        </ul>
                        <p>
                            El Titular se obliga a suministrar a FLUMEN información veraz, completa, exacta, actualizada y verificable. El Titular asume la responsabilidad por los datos entregados y por los perjuicios que su suministro inexacto o fraudulento pueda generar a FLUMEN o a terceros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Deberes de FLUMEN</h2>
                        <p className="mb-4">
                            En su calidad de Responsable del Tratamiento de los Datos Personales, FLUMEN se obliga a cumplir con los deberes establecidos en la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas aplicables. En consecuencia, FLUMEN asumirá, entre otras, las siguientes obligaciones:
                        </p>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>Garantizar al Titular el pleno y efectivo ejercicio de sus derechos, en los términos previstos por la normativa vigente y la presente Política.</li>
                            <li>Solicitar, obtener y conservar prueba de la Autorización otorgada por el Titular, cuando sea requerida para el Tratamiento, mediante mecanismos que permitan su verificación posterior.</li>
                            <li>Informar al Titular sobre la finalidad del Tratamiento, los derechos que le asisten y los canales habilitados para ejercerlos, manteniendo disponible la presente Política en medios físicos y/o digitales de fácil acceso.</li>
                            <li>Conservar los Datos Personales bajo condiciones de seguridad técnicas, humanas y administrativas, que eviten su pérdida, divulgación no autorizada, adulteración, acceso fraudulento o uso indebido.</li>
                            <li>Garantizar que la información objeto de Tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible, y adoptar las medidas necesarias para su corrección cuando sea inexacta o incompleta.</li>
                            <li>Actualizar oportunamente la información contenida en las Bases de Datos, e informar dichas actualizaciones a los Encargados del Tratamiento o terceros que hayan recibido los datos.</li>
                            <li>Rectificar los Datos Personales cuando exista inexactitud, y comunicar dicha rectificación a quienes corresponda, cuando proceda.</li>
                            <li>Exigir a los Encargados del Tratamiento la adopción de medidas de seguridad y confidencialidad equivalentes o superiores a las implementadas por FLUMEN, verificando que el Tratamiento se realice conforme a las instrucciones impartidas y a la legislación aplicable.</li>
                            <li>Suscribir los acuerdos contractuales exigidos para la transmisión, transferencia o acceso a Datos Personales, garantizando que los terceros actúen bajo criterios de privacidad y protección adecuados.</li>
                            <li>Dar trámite a las consultas, reclamos y solicitudes presentadas por los Titulares, bajo los procedimientos, términos y plazos previstos en la ley y en esta Política.</li>
                            <li>Reportar a la Superintendencia de Industria y Comercio (SIC) cualquier incidente de seguridad que comprometa la integridad, confidencialidad o disponibilidad de los Datos Personales, cuando el evento configure un riesgo significativo para los Titulares, conforme a las reglas fijadas por la autoridad de control.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Medidas de seguridad para la Protección de los Datos Personales</h2>
                        <p className="mb-4">
                            FLUMEN adopta medidas técnicas, administrativas y organizacionales razonables para proteger los Datos Personales frente a pérdida, acceso no autorizado, uso indebido, alteración o divulgación no permitida. Estas medidas se ajustan a los estándares mínimos establecidos por la legislación colombiana y se revisan de forma periódica para mantener su efectividad.
                        </p>
                        <p className="mb-4">
                            Si bien FLUMEN aplica controles de seguridad apropiados, ninguna medida tecnológica es infalible, por lo que no asume responsabilidad por incidentes que se deriven de fuerza mayor, caso fortuito, fallas ajenas a su control o acciones ilícitas de terceros que vulneren los sistemas de seguridad, siempre que se haya actuado con la debida diligencia.
                        </p>
                        <p>
                            Los Titulares podrán ejercer sus derechos de acceso, actualización, rectificación, supresión o revocatoria de autorización a través de los canales dispuestos por FLUMEN, los cuales se encuentran indicados en la presente Política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Atención de consultas, quejas y reclamos</h2>
                        <p className="mb-4">
                            Los Titulares podrán ejercer sus derechos de acceso, actualización, rectificación, supresión o revocatoria de la autorización frente a FLUMEN mediante solicitud escrita enviada al correo electrónico contacto@flumensolutions.com, indicando su nombre completo, número de identificación y el detalle de la petición. Las solicitudes serán atendidas dentro de los plazos establecidos en la Ley 1581 de 2012 y su normativa reglamentaria, y recibirán respuesta directa por parte del área responsable del Tratamiento de Datos Personales.
                        </p>
                        <p className="mb-4">
                            <strong className="text-white">Consultas:</strong> El Titular podrá solicitar información sobre sus Datos Personales y el Tratamiento que FLUMEN realiza sobre ellos. La solicitud será resuelta dentro de los diez (10) días hábiles siguientes a su recepción. En caso de requerirse un plazo adicional, se informará al Titular, sin que la respuesta pueda exceder cinco (5) días hábiles adicionales.
                        </p>
                        <p className="mb-4">
                            <strong className="text-white">Reclamos (corrección, actualización, supresión o reporte de incumplimiento):</strong> El Titular podrá presentar un reclamo cuando considere que la información debe ser corregida, actualizada o suprimida, o cuando crea que existe incumplimiento en el Tratamiento. El reclamo será atendido dentro de los quince (15) días hábiles siguientes a su recibo. Si se requiere un plazo adicional, se informará al Titular, por una sola vez, por un periodo máximo de ocho (8) días hábiles adicionales.
                        </p>
                        <p className="mb-4">
                            <strong className="text-white">Supresión y revocatoria:</strong> El Titular podrá solicitar la supresión de sus datos o la revocatoria de la Autorización, salvo cuando exista deber legal o contractual que exija su conservación.
                        </p>
                        <p>
                            <strong className="text-white">Recurso ante la Superintendencia de Industria y Comercio:</strong> El Titular solo podrá elevar queja ante la SIC una vez haya agotado el trámite de consulta o reclamo directamente ante FLUMEN.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Transferencia y Transmisión de Datos Personales</h2>
                        <p className="mb-4">
                            FLUMEN podrá realizar la transferencia o transmisión nacional o internacional de Datos Personales a terceros cuando ello sea necesario para el desarrollo de sus actividades, la ejecución de contratos, la prestación de sus servicios tecnológicos o el cumplimiento de obligaciones legales. Toda operación de transferencia o transmisión se realizará conforme a la Autorización otorgada por el Titular, a los contratos exigidos por la normativa colombiana y a las garantías de seguridad y confidencialidad aplicables al Tratamiento.
                        </p>
                        <p className="mb-4">
                            FLUMEN podrá celebrar contratos de transmisión o transferencia con proveedores, aliados tecnológicos, encargados del procesamiento de información o entidades vinculadas, ubicadas dentro o fuera del territorio colombiano, incluyendo países que no cuenten con un nivel adecuado de protección de datos personales. En tales casos, FLUMEN verificará que el Encargado implemente medidas de seguridad apropiadas y que el Tratamiento se realice únicamente para las finalidades autorizadas.
                        </p>
                        <p>
                            Cuando FLUMEN utilice servicios de terceros tecnológicos internacionales (incluyendo proveedores de inteligencia artificial, infraestructura en la nube o procesamiento automatizado de datos), la transferencia o transmisión se realizará bajo los mismos criterios de seguridad, confidencialidad y cumplimiento normativo, manteniéndose FLUMEN como Responsable del Tratamiento frente al Titular.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. Datos personales de menores de edad</h2>
                        <p className="mb-4">
                            FLUMEN no dirige sus servicios a menores de edad y, por tanto, no recolecta, trata ni almacena Datos Personales de niños, niñas o adolescentes de manera intencional. En caso de que, de forma excepcional, se reciba información de menores por acción del Titular o del Cliente, FLUMEN aplicará las reglas previstas en el artículo 12 de la Ley 1581 de 2012, garantizando el interés superior del menor, el respeto de sus derechos fundamentales y la obtención de la autorización válida de su representante legal.
                        </p>
                        <p>
                            En ningún caso los datos de menores de edad serán utilizados para finalidades comerciales, de perfilamiento, análisis automatizado o cualquier tratamiento distinto al autorizado por la ley.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. Modificaciones a la Política</h2>
                        <p>
                            FLUMEN podrá modificar, actualizar o complementar la presente Política en cualquier momento. Toda modificación se entenderá vigente a partir de la fecha de publicación en los canales oficiales de FLUMEN. Se recomienda a los Titulares consultar periódicamente la Política con el fin de conocer los cambios que puedan afectarlos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">17. Vigencia de la Política y control de cambios</h2>
                        <p>
                            La presente Política entra en vigencia a partir del 15 de noviembre de 2025 y permanecerá vigente mientras FLUMEN realice Tratamiento de Datos Personales. La Política podrá ser modificada en cualquier momento de manera unilateral por parte de FLUMEN, sin perjuicio del respeto de los derechos de los Titulares.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
