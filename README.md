# E-commerce "Infinito Cosmetics"

### Introducción
Infinito Cosmetics es una aplicación creada con fines prácticos y de aprendizaje de la tecnología React que surge como consecuencia del Proyecto Final del curso de dicha tecnología dictado por CoderHouse.

### Funcionalidades 

- Acceso a las distintas categorías de la app, pudiendo así ver todos sus productos.  
- Visibilidad de cada producto con su respectivo detalle que incluye: nombre, precio, categoria a la que pertenece y una imagen ilustrativa.
- Añadir al "Carrito de Compras" cualquiera de los productos disponibles, en las cantidades que se desee, desde el detalle de cada producto. 
- Vista del "Carrito de Compras" (siempre que haya productos en el) que incluye un listado de todos los productos de la orden con su precio total.
- Para confirmar la compra se solicitará datos al cliente como nombre completo, telefono e e-mail. 
- Al confirmar la compra se guardará la misma en la base de datos de Firebase con todos los productos además de la fecha de la misma, devolviéndole al usuario el identificador de su orden. 

### Componentes empleados

- NavBar: menú desplegable con las categorías y acceso al "Carrito de Compras" si existen productos agregados en el. 
- Logo: Logo de la app.
- CartWidget: Icono representativo del "Carrito de compras".
- Cart: Manejo del "Carrito de Compras".
- ItemList: Lista de Productos que se muestran tanto en el home como a partir de alguna categoria elegida del menú.
- ItemDetail: Producto individual con detalle
- ItemCount: Contador de cantidades que aparece en cada producto
- Item: Producto individual sin detalle
- Checkout: Formulario a llenar por el usuario para terminar su compra.


### Librerías utilizadas

- React-Router-Dom: permite la navegabilidad entre los distintos componentes haciendo un enrutamiento dinámico, es decir, que termina renderizando los mismos.
- Firebase: reemplaza nuestro "Backend", ya que es escapa del contenido del curso. Esta libreria nos permitirá tener una base de datos en la nube que simplifica la programación de la app.
- React-icons: utilizado para tomar iconos para la app, en este caso, el ícono del "Carrito de compras".
- boostrap-react: permite poder tener componentes con los estilos de Bootstrap pero basados en React.

### Tecnologías

- React version 17.0.2
- NodeJS version 16.14.2
- Javascript

### Versionado

Para manejar las versiones de la aplicación se utilizó GitHub, creando alli un repositorio. Este software posee un sistema de control de versiones Git.


### Deploy

La aplicación está deployada mediante Netlify. La misma está conectada con el repositorio de GitHub y configurada para que siempre que hayan cambios en el repositorio, se realize automaticamente un nuevo build para deployar.

### Instalación del entorno necesario


- Node.JS: De la pagina web de Node (https://nodejs.org/es/), descargamos el instalador. Luego, corremos el mismo hasta el final. 

- React: En la consola de Visual Studio Code (o del editor de codigo que se prefiera) usamos la siguiente linea de codigo para instalar la tecnología 

```sh
npm install -g create-react-app
```
