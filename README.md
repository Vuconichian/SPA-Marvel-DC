Marvel & DC Superheroes SPA
Este proyecto es una Single Page Application (SPA) diseñada para gestionar y visualizar una base de datos de personajes de Marvel y DC. 
Permite a los usuarios explorar héroes y villanos, ver detalles específicos y administrar el catálogo mediante operaciones CRUD.

Tecnologías Utilizadas
Frontend: React.js con React Router para la navegación.

Backend: Node.js con Express.

Base de Datos: MongoDB (NoSQL) para una persistencia de datos flexible.

Infraestructura: Docker y Docker Compose para la contenerización de servicios.

Estilos: CSS Modules / Tailwind CSS.

Requisitos del Sistema
Docker y Docker Compose instalados.

Node.js (v18 o superior) para desarrollo local.

Instalación y Despliegue con Docker
Para poner en marcha el proyecto completo (Frontend, Backend y Base de Datos), segui estos pasos:

Clonar el repositorio:

Bash
git clone https://github.com/vuconichian/SPA-Marvel-DC.git
Levantar los contenedores:
Este comando descargará las imágenes necesarias y configurará MongoDB junto con las aplicaciones.

Bash
docker-compose up --build
Acceso:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

MongoDB: mongodb://localhost:27017

Funcionalidades Principales
1. Visualización y Filtros
Vistas por Casa: Rutas dedicadas para /, /marvel y /dc.

Sistema de Cards: Resumen visual con nombre, identidad secreta y biografía truncada.

Búsqueda en Tiempo Real: Filtro del lado del cliente para buscar personajes por nombre en cualquier vista.

2. Detalle del Personaje
Información completa: Año de aparición, equipamiento y biografía.

Identidad Visual: Despliegue automático del logo de la casa (Marvel/DC).

Galería Dinámica: Carrusel de imágenes para personajes con múltiples archivos visuales.

3. Gestión de Datos (CRUD)
Formularios de Carga y Edición: Interfaz intuitiva para agregar o modificar personajes.

Feedback de Usuario: Notificaciones visuales que confirman el éxito o informan errores en las operaciones.

Eliminación: Opción para remover personajes de la base de datos de forma segura.
