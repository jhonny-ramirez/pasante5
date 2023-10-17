# pasante5

# Proyecto de Gestión de Ubicaciones en Angular

Este proyecto web en Angular te permite gestionar y guardar ubicaciones, junto con su nombre, descripción y coordenadas geográficas. Utiliza varias librerías y tecnologías para ofrecer esta funcionalidad.

## Librerías utilizadas
  - @angular-devkit/build-angular@12.2.18
  - @angular/animations@12.2.17
  - @angular/cli@12.2.18
  - @angular/common@12.2.17
  - @angular/compiler-cli@12.2.17
  - @angular/compiler@12.2.17
  - @angular/core@12.2.17
  - @angular/forms@12.2.17
  - @angular/platform-browser-dynamic@12.2.17
  - @angular/platform-browser@12.2.17
  - @angular/router@12.2.17
  - @types/jasmine@3.8.2
  - @types/node@12.20.55
  - jasmine-core@3.8.0
  - karma-chrome-launcher@3.1.1
  - karma-coverage@2.0.3
  - karma-jasmine-html-reporter@1.7.0
  - karma-jasmine@4.0.2
  - karma@6.3.20
  - ol@8.1.0
  - rxjs@6.6.7
  - sweetalert2@11.7.32
  - tslib@2.6.2
  - typescript@4.3.5
  - zone.js@0.11.8
  - node 16.16.0

## Descripción del proyecto

El proyecto se encuentra elaborado en Angular y se trata de una aplicación web que permite gestionar y guardar ubicaciones visitadas. A continuación, se describen las principales características del proyecto:

- **Guardar ubicaciones**: Los usuarios pueden guardar ubicaciones visitadas proporcionando un nombre, una descripción y definiendo coordenadas geográficas.

- **Mapa de OpenStreetMap**: El proyecto integra un mapa interactivo utilizando la tecnología de OpenStreetMap. Los usuarios pueden seleccionar una ubicación haciendo clic en el mapa, lo que coloca un marcador en las coordenadas seleccionadas.

- **Gestión de ubicaciones**: Después de seleccionar una ubicación en el mapa, los usuarios pueden completar el nombre y la descripción de la ubicación y luego presionar el botón "Agregar" para guardarla.

- **Visualización en tabla**: Las ubicaciones guardadas se muestran en una tabla en la interfaz de usuario. La tabla incluye información sobre el nombre, la descripción y un ícono para eliminar la ubicación.

- **Eliminación de ubicaciones**: Los usuarios pueden eliminar una ubicación haciendo clic en el ícono de la papelera (trash) en la tabla.

- **Tecnologías adicionales**: Además de las librerías de Angular mencionadas, el proyecto utiliza Bootstrap para estilizar la interfaz de usuario, FontAwesome para los íconos, SweetAlert para confirmar acciones del usuario y OpenStreetMap para la visualización de mapas.


¡Diviértete gestionando tus ubicaciones!


# Test unitario

- **Prueba eliminar lugar**: Si tenemos la lista de lugares con un lugar añadido al eliminar el lugar con index 0 deberia estar la lista de lugares vacia. Prueba unitaria definida en formulario-guardado-mis-ubicaciones.component.spec.ts
