# Lemoncode_Modulo_8_Cloud_Automatico

## Básico

### Desplegar en Github Pages de forma manual
- Tenemos un repo en Github.
- Queremos desplegar una app.
- Realizar el despliegue manual.

### Automatizar el proceso de despliegue
- Queremos que cada vez que se haga un merge a la rama `main` (principal) de este ejercicio, se dispare un flujo de build y despliegue.
- Usar Github Actions para esto.
- Para simplificar la entrega de los ejercicios podéis crear un repositorio por cada uno.

> **Importante:** Github necesita que los workflows estén en la ruta raíz del proyecto en la subcarpeta `.github/workflows`.

---

## Opcional

Elegir en el orden que se desee:

1. Desplegar la app en Render, usando despliegue manual.
2. Automatizar el despliegue de la app en Render, usando Docker.
3. Desplegar la app en Azure, usando Docker y Github Actions.
4. Desplegar la app en AWS y la imagen de Docker en Docker Hub.
