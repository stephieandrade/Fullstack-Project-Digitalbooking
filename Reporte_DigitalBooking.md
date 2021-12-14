**Reporte**
**__Digitalbooking__**

**Integrantes:**
- Ayelén Stefanía Andrade
- Brenda María Belén Acosta
- Lara Amaya
- Diego Fernando Díaz Aristizábal
- Jesus Eduardo Campo Alvarez
- Andrea Orozco Ramírez


**Secciones**
--

1. Resumen del proyecto

2. Objetivo del proyecto

3. Equipo

4. Metodología de trabajo

4.1. Metodologia Scrum

4.2. Asignación de roles

4.3. Acuerdos y compromisos

5. Bitácora del proyecto

6. Tecnologías utilizadas

7. Documentación técnica del proyecto

7.1.Ambiente de desarrollo

7.1.1. Instructivo para armar el ambiente de desarrollo

7.1.2. Buenas prácticas / convenciones / acuerdos a la hora de desarrollar

7.1.3. Buenas prácticas respecto a los commits, merges y el uso de branches

7.2. Bases de datos

7.3. Componentes y diagramas de la aplicación

7.4. Infraestructura

7.5. Testing y calidad

8. Presentacion final

**1. Resumen del proyecto:**
--

Como estudiantes de la carrera Certified Tech Developer la cual es desarrollada por Digital House, Mercado Libre y Globant, adquirimos amplios conocimientos técnicos en diversas áreas del desarrollo web, informática, bases de datos, testing; y una serie de Soft Skills fundamentales para desempeñarse en equipos de trabajo y en el mercado laboral. 

Estos conocimientos fueron claves para lograr un flujo de trabajo coordinado y colaborativo desde el inicio del desarrollo del proyecto.

Digitalbooking es una plataforma digital dedicada a la oferta de automóviles de diferentes categorías, gamas y cualidades; mediante la cual los usuarios pueden publicar y arrendar autos, para este fin, se cuentan con los roles de usuario y usuario administrador.

Desde el rol de Usuario de la aplicación:

- Se puede registrar un usuario nuevo y también puede loguearse con credenciales válidas ya registradas.
- Se puede navegar en la home page para seleccionar un automóvil con un filtro de cuatro categorías: deportivo, lujoso, económico y eléctrico. 
- También se podrá filtrar según un listado de ciudades y un rango de fechas, escogiendo una ciudad determinada, una fecha inicial y una fecha final para el arrendamiento.
- Dentro de la ficha de cada producto están disponibles las imágenes del automóvil, una bitácora de detalles sobre el auto, un listado de atributos del auto (wifi, aire acondicionado, etc), un calendario con fechas en las que se encuentra disponible y por último las políticas de uso correspondientes al auto.
- A partir de las fechas se puede iniciar una reserva nueva para lo cual debe registrarse previamente en la aplicación . 

La aplicación cuenta con la modalidad de “Registro de nuevo usuario” e “Inicio de sesión”. La autenticación de credenciales son pasos necesarios para poder realizar las reservas de cualquier automóvil. Al momento de registrarse e iniciar sesión, el usuario puede ingresar a la interfaz de reserva del auto que desee. En esta interfaz podrá verificar sus datos como nombre, apellido y correo electrónico, así mismo, podrá ingresar la fecha, la hora y la ciudad en la que desea reservar el auto. Al ingresar los datos correspondientes se realiza la reserva exitosa y se redirige a la página home.

Desde el rol de administrador de la aplicación:

Con el rol de administrador se puede acceder al área de administración de los productos y tiene acceso a la funcionalidad de crear nuevos automóviles para dejar disponibles a reserva. El usuario con rol de administrador debe iniciar sesión con las credenciales predeterminadas para los administradores, esto genera en la página “home” la posibilidad de acceder al área de  “administración”, en la cual se pueden ingresar todos los datos correspondientes al auto:

- Nombre y dirección
- Ciudad y categoría mediante un desplegable 
- Descripción general del producto
- Atributos y sus respectivos íconos 
- Url de imágenes del automóvil
- Politicas de reserva

**2. Objetivo del proyecto:**
--

Poner en práctica todos los conocimientos técnicos y Soft Skills que fuimos adquiriendo en el transcurso de la carrera, mediante el trabajo en equipo y el empleo de la metodología Scrum; persiguiendo el fin de crear un sistema titulado Digital Booking, mediante el cual se deberá abarcar todas las áreas de estudio vistas durante la carrera CTD (Certified Tech Developer), Bases de datos, Infraestructura, Testing, Desarrollo Front end, Back end.

**3. Equipo:**
--

Nombre del integrante: **Andrea Orozco Ramírez**

Tengo 30 años soy profesional en Ingeniería Industrial, Especialista en Gerencia del Talento Humano,  me encuentro certificada como Scrum Master,  anteriormente me desempeñaba en el Area de Gestion Humana, manejando personal y liderando equipos de trabajo.

En el 2020 quise darle un giro a mi carrera 	principalmente porque me apasiona la tecnología además la velocidad con la que está cambiando el mundo, la tecnología y los nuevos desarrollos vi una excelente oportunidad para prepararme y así tener estos nuevos conocimientos.

El primer paso fue certificarme como Scrum Master y luego me postulé a una beca con la Alcaldía de Medellín de Desarrollo Frontend gracias a todo lo aprendido me enamoré aún más y por esta razón me postulé a la carrera Certified Tech developer la cual es una excelente oportunidad para aprender y adquirir todos los conocimientos necesarios para desempeñarme en esta área , en los diferentes sprint me desempeñé en las áreas de Frontend y Testing realizando diferentes tareas y aplicando lo aprendido.

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Front end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Back end | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Infraestructura | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Testing / QA | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Bases de datos | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
>

Nombre del integrante: **Ayelén Andrade**

En 2013 me gradué en Bioquímica, y durante 3 años estuve estudiando la carrera de Bioinformática (con un plan de estudio muy similar a Ingeniería en Sistemas). Desde allí comencé a adentrarme en el mundo de la programación, y adquirí conocimientos de base de datos, data science, y un poco de javascript y desarrollo de frontend. 

A partir de la cursada con CTD comencé a conocer otros aspectos de la programación, como por ejemplo la parte del backend con java, testing, y la aplicación de metodologías ágiles.

Durante los sprints he pasado por todas las áreas de trabajo, aunque me he encontrado más cómoda del lado del backend y manejo de base de datos. En el primer sprint me dediqué a armar los componentes de login y formulario del lado del Frontend en React, con sus correspondientes validaciones. En el segundo sprint estuve trabajando con el Backend en java y base de datos con MySQL. En el tercer sprint, además de hacer tareas de Backend, me sumé al Frontend nuevamente, también intenté dockerizar la aplicación, pero por cuestiones de tiempo me remití a otras áreas ya que era opcional. Durante el cuarto sprint, estuve haciendo la parte de testing en general, manual y automático, con las herramientas Jest, Postman y Cypress.

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Front end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Back end | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Infraestructura | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Testing / QA | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Bases de datos | :large_blue_circle: :white_circle: :white_circle: |
>

Nombre del integrante: **Brenda María Belén Acosta**

Tengo 30 años, soy profesora de Artes Visuales e ilustradora (técnicas tradicionales y digital con tableta gráfica).Al iniciar la carrera tenía conocimientos básicos de HTML, CSS, UX/UI y metodologías ágiles. A finales del 2020, decidí dar un giro rotundo a mi carrera profesional, lo que fue impulsado con el otorgamiento de la beca de CTD, y con la realización de cursos de Javascript y Java en simultáneo. Actualmente estoy iniciando mis estudios en el desarrollo de software blockchain (Solidity para implementar DApps con NFTs y smart contracts en Ethereum) tengo proyectado continuarlos y ampliarlos luego de finalizar esta cursada.

Durante los 4 sprints me enfoque en el área de Backend y base de datos (desarrollo del código y archivos de configuraciones en general), aporté en el área de testing testeo con Postman y algo de Jest, en 3 sprints me desempeñé en algunas tareas de Frontend (maquetación y consumo de datos de la API).

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Back end  | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Bases de datos | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Front end | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Testing / QA | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Infraestructura | :large_blue_circle: :white_circle: :white_circle: |
>

Nombre del integrante: **Diego Fernando Díaz Aristizábal**

Tengo 39 años, soy Ingeniero Electrónico (2006),  durante el curso de dicha carrera se despertó mi interés por la programación (habiendo aprendido lenguaje C durante ella), y una vez graduado empecé a formarme de manera autodidacta en desarrollo de aplicaciones multimedia (Flash) labor que desempeñé durante muchos años hasta la reciente “muerte” de dicha tecnología. Antes de entrar a CTD contaba con conocimientos empíricos en JS, AS3, Python y manejo de algunos servicios de AWS (S3, Lamba, API Gateway, DynamoDB, SES). Estuve por mucho tiempo reacio a incursionar en el desarrollo web pero la pandemia me hizo ver la necesidad de actualizarme y capacitarme formalmente en este campo del desarrollo.

Durante los sprint asumí principalmente el rol de Infraestructura, creando la cuenta, registro de dominio, configuración de DNS, creación de buckets, distribuciones de cloudfront, creación de máquina virtual, BD y realizar el despliegue. Desde el sprint 2 me involucré en la parte del Front desarrollando con React, creación de diversos componentes, rutas dinámicas, peticiones al API, etc., y para el Sprint 3 y 4 adicional al Front me involucré en el Back para desarrollar la parte de Spring Security para autenticación y autorización, creación de token JWT y configuración de roles para recursos privados. El área de testing fue quizás donde menos aportes pude realizar; estuve investigando herramientas como Enzyme, Cypress para testing de componentes, pero finalmente tuvieron poco impacto por el poco tiempo que pude dedicar a dichas labores.

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Front end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Back end | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Infraestructura | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Testing / QA | :large_blue_circle: :white_circle: :white_circle: |
> | Bases de datos | :large_blue_circle: :large_blue_circle:  :white_circle: |
>

Nombre del integrante: **Jesus Eduardo Campo Alvarez**

Tengo 29 años, enfermero profesional especialista en auditoria, especialista en gerencia de seguridad y salud en el trabajo, actualmente residiendo en Antioquia, Colombia. Mi interés en la programación y el desarrollo surge hace 2 años aproximadamente, desde entonces inicie de manera autónoma cursos en línea en los cuales obtuve conocimientos básicos de desarrollo en Python, C++ y HTML.

Durante los 4 sprints el principal rol desempeñado correspondió a la codificación de la parte frontend del sitio (lógica, componentes y estilos). También se prestó apoyo al área de Testing respecto a las pruebas exploratorias, corrección de defectos y las suites. En el último sprint se aportó en la organización de la documentación.

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Front end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Back end | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Infraestructura | :large_blue_circle: :white_circle: :white_circle: |
> | Testing / QA | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Bases de datos | :large_blue_circle: :white_circle:  :white_circle: |
>

Nombre del integrante: **Lara Amaya**

Tengo 19 años, antes de entrar en Certified Tech Developer comenzaba el segundo año en Ciencias Económicas. La mayoría de mis conocimientos sobre IT los adquirí cursando esta carrera y realizando cursos en simultáneo en distintas plataformas como Udemy y Platzi.

Durante los 4 sprints me desempeñé mayormente en realizar la lógica Backend solicitada (creación de clases model y DTOs, implementación de operaciones CRUD a cada entidad, creación de la capa controller, implementación de excepciones, testeos unitarios…), en trabajar con la base de datos en MySQL (insercion de registros a las tablas y consultas a la BDD) y en el área Testing (más enfocado al testeo del Back end con Postman y JUnit; y reporte de defectos en excel) residualmente realicé tareas del lado Frontend (consumo de APIs para el renderizado de datos).

> | Tecnología | Fortaleza |
> |------------|-----------|
> | Front end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Back end | :large_blue_circle: :large_blue_circle: :large_blue_circle: |
> | Infraestructura | :large_blue_circle: :large_blue_circle: :white_circle: |
> | Testing / QA | :large_blue_circle: :white_circle: :white_circle: |
> | Bases de datos | :large_blue_circle: :white_circle:   :white_circle: |
>

**4. Metodología de trabajo:**
--

4.1 Metodologia Scrum:

Durante el desarrollo de los sprint, la metodología Scrum fue parte fundamental para el flujo de trabajo.

El comienzo de cada ciclo fue marcado por la lectura de los requerimientos e historias de usuario. Estos requerimientos son analizados por el grupo de trabajo para posteriormente, durante el evento de refinamiento se atomizar dichas tareas. Posteriormente, en los días de validación de requerimientos se elevaron todas las dudas e inquietudes al Scrum Master, Tech Lead y Product Owner. 

Después del refinamiento el equipo de trabajo procede a la asignación de tareas y a la estimación del tiempo de cada una.

Durante el desarrollo de los sprint, todos los días (exceptuando los días con eventos) se realizaba la correspondiente Daily en conjunto con el Scrum Master, durante la cual los integrantes del grupo exponen:

- Las actividades relacionadas con las tareas del del dia anterior y del presente dia de trabajo
- Los obstáculos o bloqueos presentados
- Las actividades a desarrollar durante el resto del día en relación a las tareas y bloqueos

Al final de la semana se realizaba la ceremonia Weekly durante la cual se hablaba del desarrollo de las tareas cumplidas por cada integrante, bloqueos que no se habían resuelto y plan de trabajo para la siguiente semana.

Cuando se finaliza cada Sprint se procede con la ceremonia de Retrospectiva, durante la cual los integrantes del grupo discuten los bloqueos presentados, ideas de mejora para los siguientes Sprints y se generan compromisos respecto a las mejoras discutidas.

4.2 Asignación de roles:

La asignación de roles se realizó de acuerdo a las fortalezas e intereses de cada integrante. Se planteó un rol principal y secundario los cuales dictan qué tipo de tareas tomaría y en qué áreas prestaría apoyo. Al momento de repartir las tareas, se tomaba en cuenta el rol principal estipulado por cada uno y de acuerdo a la información obtenida durante las dailys y weeklies, se daba apoyo a las áreas que lo necesitaran. De esta manera se garantiza un flujo constante de tareas cumplidas y trabajo en equipo.

> | Roles - Preferenncia | Integrantes |
> |----------------------|-------------|
> | Back end | Lari - Brenda - Aye |
> | Front end | Jesus - Andre - Diego |
> | Infraestructura | Diego - Brenda - Aye |
> | Bases de datos | Aye - Brenda - Andre |
> | Testing / QA  | Andre - Jesus - Lari |
>

> | Roles - 1er Sprint | Integrantes |
> |----------------------|-------------|
> | Back end | Lari - Brenda |
> | Front end | Jesus - Andre - Diego - Brenda - Aye|
> | Infraestructura | Diego |
> | Bases de datos | Brenda |
> | Testing / QA  | Lari - Aye - Andre |
>

> | Roles - 2do Sprint | Integrantes |
> |----------------------|-------------|
> | Back end | Lari - Brenda - Aye |
> | Front end | Jesus - Andre - Diego |
> | Infraestructura | Diego |
> | Bases de datos | Lari - Brenda |
> | Testing / QA  | Andre - Brenda - Lari |
>


> | Roles - 3er Sprint | Integrantes |
> |----------------------|-------------|
> | Back end | Lari - Brenda - Diego - Aye |
> | Front end | Diego - Lari - Jesus- Andre - Aye |
> | Infraestructura | Diego - Aye |
> | Bases de datos | Lari - Brenda - Aye |
> | Testing / QA  | Lari - Andre - Brenda - Aye |
>

> | Roles - 4to Sprint | Integrantes |
> |----------------------|-------------|
> | Back end | Diego - Brenda - Lari - Aye |
> | Front end | Jesus - Andre - Brenda - Aye - Diego |
> | Infraestructura | Diego |
> | Bases de datos | Lari - Brenda |
> | Testing / QA  | Brenda - Andre - Aye - Edu - Lari |
>

4.3. Acuerdos y compromisos:

Durante las ceremonias de Retrospectiva se generaron los siguientes compromisos:

Sprint 1:
 
- Realizar el respectivo pull de la rama principal de trabajo antes de iniciar las jornadas y de acuerdo al avance de las tareas
- Realizar commits y push constantes para mantener las ramas de trabajo lo más actualizadas posibles
- Aportar diariamente a la realización de Test para nutrir el área de testing.
- Tener un límite de 1 hora para las reuniones grupales, repartirse en grupos pequeños en caso de requerir reuniones para temas específicos
- Administrar archivos usando la consola (GIT) para mantener un historial claro de cambios y eliminaciones

Sprint 2:

- Rotar y prestar apoyo a otras áreas que lo requieran
- Fomentar el uso de gitlab para mantener una adecuada administración de versiones
- Mantener las reuniones cortas
- Hacer revision de codigo

Sprint 3:

- Estudiar testing para fortalecer esta área
- Preparar la presentación del proyecto con anticipación
- Repasar lo logrado en cada área con anticipación

**5. Bitácora del proyecto:**
--

Link hacia el documento [Organización del Proyecto](https://docs.google.com/spreadsheets/d/1CbtY9FhWGih2izDKOXUD3bgXL2-WAgOLne7mCCwErJA/edit#gid=1970557665)

- Sprint 1:

**Desafíos:** El comienzo del proyecto representó un gran reto para el grupo respecto al uso de la tecnología que ofrece gitlab para el manejo de versiones. Inicialmente se mantenían archivos locales que no se encontraban versionados y al momento de tratar de hacer la unión se presentaban múltiples conflictos. Para evitar esto se realizó un wiki que contiene toda la información principal respecto a comandos para el uso de la consola y lo que representaría en gitlab. 

Link a la wiki desarrollada [Manejo de GIT](https://gitlab.com/proyecto-integrador-0321/camada-5/grupo-3/-/wikis/Manejo-de-GIT)

En este punto, no se encontraban unidas las áreas de Frontend y Backend estas se encontraban en ramas separadas, se intentó manejar parámetros idénticos con el fin de optimizar el futuro encuentro de las dos partes y no generar conflictos de lógica.

**Fortalezas:** Se mantuvo desde un principio un flujo constante de comunicación que permitió que los bloqueos fueran resueltos expeditamente. Existía compromiso notable con las tareas asignadas a cada integrante así como con el proyecto completo, lo que facilitaba el trabajo en equipo.

El área de infraestructura tuvo un comienzo sólido que permitió avanzar sin tropiezos a la integración en los siguientes sprints.

**Debilidades:** El flujo de versiones del trabajo se vio entorpecido por el manejo limitado que se tenía a la fecha del gitlab y la consola. Se realizaron acuerdos para utilizar únicamente la consola para las acciones de versionado.

Se mantenían reuniones largas para poder planear con exactitud lo que se iba a realizar en el día a día, lo que tomaba tiempo importante del desarrollo de tareas. A pesar de su larga duración, fueron necesarias en su momento para poder tener un flujo de trabajo claro.

La estimación de la duración de las tareas respecto a la duración real de las mismas presentaban una brecha grande.

- Sprint 2:

**Desafíos:** Desde la área de Frontend, lograr mantener los estilos para la parte responsive de la aplicación representó tiempo adicional para su desarrollo, el uso de librerías para componentes como el calendario y mapa resultaron complejas. También tuvimos desafíos con el scope de CSS en la parte de Frontend, y se aplicó un plugin especial para manejar y separar el scope global y de cada componente por separado. Desde el área de testing se inició con el uso del Framework Jest, tecnología de la que el grupo no estaba familiarizado y se tuvo que dedicar muchas horas extras para el aprendizaje. 

**Fortalezas:** Se mejoró la estimación de tiempo de trabajo respecto al tiempo real.

**Debilidades:** Se presentan conflictos con los merge de las versiones. Para resolverlo, se realizaban las reuniones para unir las ramas de trabajo y poder hablar respecto a los conflictos con los integrantes directamente implicados.

- Sprint 3:

**Desafíos:** Conexión completa del área Frontend con el área Backend.

**Fortalezas:** Infraestructura robusta, acuerdos entre las áreas para manejar parámetros que eviten conflictos al momento de unirse.

**Debilidades:** Se necesitaron múltiples librerías para poder cumplir con los requerimientos, lo que representó tiempo de análisis y estudio para encontrar la manera óptima de utilizarlas.

- Sprint 4:

**Desafíos:** Dejar al sitio libre de defectos críticos y bloqueantes. Se realizaron las respectivas pruebas y se identificaron los defectos, estos fueron clasificados y se dio prioridad a los críticos y bloqueantes encontrados, corrigiendolos de inmediato.

**Fortalezas:** Se logró desplegar el sitio completo sin inconvenientes.

**Debilidades:** Cumplir con los exit criteria y las tareas obligatorias de Testing presentaron una gran dificultad que supimos superar dedicándole gran parte del Sprint a corregir defectos, llegar a los porcentajes de cobertura especificados y logrando un mayor refinamiento de las funcionalidades del sistema en general. Pero tuvimos como contrapartida que no pudimos dedicarle ese tiempo a realizar otras tareas opcionales.

**6. Tecnologías utilizadas**
--
Link a [Tecnologías Usadas](https://docs.google.com/spreadsheets/d/1t7sM5j9Usg17kzqePbg_Jdvm3Q8y0nuBiqYKiMJMJdk/edit#gid=0)

**7. Documentación técnica del proyecto:**
--

**7.1. Ambiente de desarrollo:**

**7.1.1. Instructivo para armar el ambiente de desarrollo:**

1. Descargar el IDE IntelliJ IDEA Community Edition 2021.2 (https://www.jetbrains.com/idea/download/) y Visual Studio Code (VSC) (https://code.visualstudio.com/Download). Una vez finalizada la descarga, abrir el archivo descargado y seguir las instrucciones del instalador.

2. Una vez instalados, abrir el proyecto backend y el proyecto frontend

3. Instalar el workbench para la base de datos MySQL Workbench. Utilizar los scripts para generar la base de datos y los datos que le corresponden (ver la sección “instructivo para la creación de la base de datos”)

4. Verificar en el archivo aplication.properties que la contraseña de acceso local para la base de datos sea “root” o la que haya sido escogida al configurar el MySQL. Revisar en la opción “Modify run configuration” que  la variable de entorno esté indicando el perfil correcto(local, aws, etc). Correr el “main” del proyecto de backend desde el IDE.
5. En el VSC, correr en la terminal los comandos npm install (yarn install), npm start (yarn start) y verificar que se abra el proyecto del frontend en el navegador y puerto predeterminado.

**7.1.2. Buenas prácticas / convenciones / acuerdos a la hora de desarrollar:**

- Se realiza en análisis de requerimientos obligatorios y opcionales entregados al inicio de cada sprint, se especifica el área a la que pertenece y se le asigna una duración estimada para su desarrollo. 
- Se procura tener dailys y reuniones cortas (de menos de una hora) para conocer el estado de las tareas de cada compañero, sus bloqueos y sus avances.
- Se realiza apoyo a las áreas que requieran atención de acuerdo a los problemas y bloqueos que presenten.
- Hacer un push a rama principal al final de cada jornada para tener las versiones más actualizadas del proyecto que se hayan desarrollado en el día y se encuentren probados por alguien más, de esta manera se suben cosas funcionales verificadas.
- Realizar pull al comienzo de cada jornada y cada vez que se informe de un cambio importante realizado por las áreas del proyecto. 
- Hacer pruebas de usuario para cada sprint, realizar las pruebas de regresión y suite de smoke, y la prueba exploratoria al finalizar el sprint para detectar defectos y solucionarlos.
- **FRONT:** Se recomienda componentizar la mayor cantidad de funcionalidades según criterio, esto con el fin de reutilizar componentes.
- **BACK:** Se recomienda utilizar siempre la variable de entorno apuntando al application.properties local, ya que esa configuración es para ambiente DEV y QA, para no modificar los registros del RDS. Se utilizó camelCase y estructura de packages estándar, al igual que nombre de clases indicativos de la capa a la que pertenecen.
- **TESTING:** Se recomienda realizar verificaciones de las tareas culminadas con el fin de validar que estas sean funcionales y cumplan con todos los criterios especificados. Se recomienda adicionalmente que estas funcionalidades sean verificadas por un compañero que no haya realizado el código/tarea, con el fin de evitar sesgos.
- **INFRAESTRUCTURA:** Se recomienda crear grupos/políticas de seguridad con la menor cantidad de permisos posibles, únicamente dar permisos para los recursos que se necesite acceder y usar etiquetas para etiquetar los servicios y poder analizar sus costos.
- **BASES DE DATOS:** Se recomienda utilizar el  DUMP de datos de carga siempre en la última versión actualizada, y dejar los registros al igual que este DUMP, es decir si se realizaron pruebas por postman, borrar esos registros de pruebas generados.

**7.1.3. Buenas prácticas respecto a los commits, merges y el uso de branches:**

- Utilizar una única branch principal para desarrollo, denominada ‘dev’ 
- Para cada funcionalidad nueva se deberá trabajar en una branch creada desde la branch ‘dev’ principal. Jamás se trabajará directamente en la branch principal.
- El merge se realizará una vez la tarea esté finalizada, funcional y verificada. En caso de existir conflictos complejos, se deberá consultar con los miembros del equipo que trabajaron en las áreas que se encuentran en conflicto
- Cada rama nueva creada tendrá el nombre del área involucrada, la tarea correspondiente a desarrollar y su nomenclatura. Estas tendrán la siguiente estructura: ÁREA/ACTIVIDAD/TAREA

		Feature: para hacer referencia a una tarea

		Fix: para hacer referencia a un arreglo, cambio o modificación

Ejemplo: 

Front/Feature/Calendario_7.1

Back/Feature/Controller_5.3

Front/Fix/css_calendario_7.1


**7.2. Base de datos:**


- Estructura y diagramas: [Diagrama Entidad-Relación](https://docs.digibook.link/DER_4_sprint.mwb)
- Script con estructura de la BD: [Link](https://docs.digibook.link/script_digitalbooking.sql)
- Script con registros de carga para todas las tablas: [Link](https://docs.digibook.link/SQL-DUMP-ALL_TABLES.sql)

**Instructivo para la creación de la base de datos:**

1. Ya dentro del programa MySQLWorkbench con el perfil elegido(root o uno personalizado), crear el schema.Hay 2 maneras de realizarlo:

a. Con el archivo “script_digitalbooking.sql”, ejecutando dicho archivo con la opción “Open SQL Script”, ó

b. Correr el proyecto desde el IDE IntelliJ Idea, con “Run”, ya que la configuración de Hibernate se encuentra en “update”, por lo que se conectará y creará las tablas mapeadas con las entidades del package Model.

2. Refrescar los schemas e indicar con la sentencia “USE digitalbooking” que se usará dicha base de datos.

3. Abrir con la opción mencionada en punto 1 el scripts de carga de datos completos “SQL-DUMP-ALL_TABLES.sql” y ejecutarlo.

4. En este paso ya estaría la base de datos cargada con los registros necesarios.

**7.3. Componentes y diagramas de la aplicación:**

**Diagrama de secuencia(Login, Reservas)**

- Link para abrir en la app de diagrams.net (solo lectura):
[Diagrama de secuencia.Login,Reservas](https://drive.google.com/file/d/1pHBky44e5W9DxdfYxLr4vZZmKeAovt7F/view)

**UML- Diagrama de clases**

- Link para abrir en la app de diagrams.net (solo lectura):
[Diagrama de Clases-ProyectoIntegrador](https://drive.google.com/file/d/1LYf3ctdlXShZxk1XiPU3K7NkKbsDDdov/view)

**APIs desarrolladas en el proyecto**

- Documentación a través de Swagger: [Ambiente DEV - QA (en local)](http://localhost:8085/swagger-ui.html) - [Ambiente PROD](https://www.digibook.link/swagger-ui.html)

**7.4. Infraestructura:**

[Diagrama de infraestructura](https://docs.google.com/document/d/1vlAJm1ZYqRPHZKHRHXO4tJQ68MXzEMadpVcG6tt-YKY/edit)

**7.5. Testing y calidad:**

[Defectos encontrados y casos de prueba](https://docs.google.com/spreadsheets/d/1HarYtPpiVODAo_eFG1pZQwWhKqU2b4ygvEUL7m-0gyY/edit#gid=1518340320)

[Reporte de testing](https://docs.google.com/document/d/1fLk6Zoznm_V2Lst7xhyshBHNKOMorNFI52H9EYoLcG8/edit#)

**8. Presentacion final:**
--
Presentacion final [DigiBooking Autos](https://www.canva.com/design/DAExm6Q9scU/nNAAYQi7HqeqBCg3S2eUcA/view?utm_content=DAExm6Q9scU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#16)
