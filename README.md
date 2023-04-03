# rest-api-node-typescript-base-datos-mongodb

## Te explico rápidamente la estructura del proyecto

**src** *carpeta donde está todo nuestro desarrollo.*

**controller** *contiene los controladores que son los encargados de procesar las peticiones  y retornar la información.*

**models** *contiene los modelos que usamos para manejar los datos de nuestra db.*

**routes** *es donde armamos las rutas que tienen nuestras peticiones.*

**services** *es donde realizamos las consultas a la db.*

**server.ts** *es la clase de inicio de nuestra aplicación.*

*En este proyecto utilizamos MongoDB Atlas que prácticamente es un servicio que te permite tener tu servidor de mongodb en la nube(te permite poder probarlo gratis) así que deberás crear una cuenta MongoDB Atlas una vez registrado lo único que debes hacer es crear un cluster y con esto podrás obtener los datos para poder conectarte al servidor de mongodb, para este ejemplo yo cree el cluster con el nombre por defecto que es @cluster0 y cree una base de datos llamada mario22*