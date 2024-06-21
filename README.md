# Formcore App - Una App de prueba para Teamcore
Este proyecto corresponde a una aplicación mobile que permite obtener un formulario y responder el mismo conectándose a una API de pruebas de Teamcore.

## Funcionalidad de la aplicación

La aplicación tiene como funcionalidad principal presentar al usuario un formulario, permitirle responder las preguntas,
enviarlas y mostrar una pantalla que le permite elegir si desea responderlo nuevamente o si desea finalizar.
En caso de que el usuario desee finalizar se le manda a una pantalla de Finalización.

Adicionalmente se agregó una pantalla de error en caso de que haya una caida de internet o fallo en el servicio de obtención de las preguntas
y un Snackbar en caso de fallo en el servicio de envio de respuestas.

Las pantallas se puede ver a continuación:

| Launcher     | Formulario | Formulario con respuestas |
| ---      | ---       | --- |
| ![image](https://github.com/diegocalero0/FormCore/assets/20039102/668f0da2-73fe-4bab-80e7-c8b74466bc83) |![image](https://github.com/diegocalero0/FormCore/assets/20039102/d61877db-855e-4a04-81ff-397098cf5b8c)|![image](https://github.com/diegocalero0/FormCore/assets/20039102/691b0b7c-ac56-4dba-a676-956ca533ec5b) |

| Error cargando preguntas     | Preguntas enviadas | Finalización |
| ---      | ---       | --- |
|![image](https://github.com/diegocalero0/FormCore/assets/20039102/fbf736d1-5791-42d0-9c97-f546f3077068)|![image](https://github.com/diegocalero0/FormCore/assets/20039102/f287380f-6677-49e4-a241-02f9699f253e)|![image](https://github.com/diegocalero0/FormCore/assets/20039102/f984f69c-256a-4cb2-9902-7f49d9985aa9)|


También Tiene Modo Noche 🌙
| Formulario     | Preguntas enviadas | Finalización |
| ---      | ---       | --- |
|![image](https://github.com/diegocalero0/FormCore/assets/20039102/25c2f2c8-9722-4a65-b786-681b3a4ae142)|![image](https://github.com/diegocalero0/FormCore/assets/20039102/8ec371a2-0a5a-4c91-871b-9feef75c0483)|![image](https://github.com/diegocalero0/FormCore/assets/20039102/d21a02c5-17f7-4194-8610-6bcad23cf7b6)|


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
