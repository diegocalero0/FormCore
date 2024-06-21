# Formcore App - Una App de prueba para Teamcore
Este proyecto corresponde a una aplicación mobile que permite obtener un formulario y responder el mismo conectándose a una API de pruebas de Teamcore.

## Arquitectura de la aplicación
Formcore fue desarrollada utilizando React Native en su versión 0.74.2 y utilizando como lenguage de programación principal TypeScript.

### Clean Architecture
Para el desarrollo de esta aplicación se implementó clean architecture con algunas variaciones permitiendo desacoplar las vistas, de la lógica de negocio y de los datos. Por tal motivo la aplicación se encuentra dividida en los siguientes componentes

Adicional cabe aclarar que la aplicación se encuentra modularizada, de tal manera que se aplica Clean Architecture a cada módulo.

#### Data
Dentro de la capa de Datos contamos con los siguientes componentes:

* Api
* Repositorios
* DTOs
* Mappers

#### Domain
Dentro de la capa de Dominio contamos con los siguientes componentes:

* Slices (Representación de casos de uso usando Redux)
* Modelos

#### Presentation

Dentro de la capa de presentación encontramos los Widgets y Pantallas que usamos en la aplicación.

## Probar la aplicación

Para probar la aplicación pueden hacerlo de 2 modos, instalando el APK o ejecutando el proyecto directamente.

### Instalar APK:

Para instalar el APK solo necesitan ingresar al siguiente enlace: [https://drive.google.com/file/d/1XmHh7stUkKj6RA3WfQPw_Wce4aAfTbcW/view?usp=drive_link](https://drive.google.com/file/d/1XmHh7stUkKj6RA3WfQPw_Wce4aAfTbcW/view?usp=drive_link)
Descargar la aplicación en un dispositivo Android, instalarla y probar todos sus flujos.

### Ejecutar el proyecto:
Para la ejecución del proyecto es importante tener un archivo **.env** en la raíz del proyecto, dicho archivo ha sido compartido en el Email enviado.

Una vez clonado el proyecto y agregado el archivo .env solo basta con correr el comando:
```
npm install
```

Para instalar todas las dependencias que requiere el proyecto. Y ejecutar:
```
npx react-native run-android
```
Para correr el proyecto en un emulador o dispositivo Android.