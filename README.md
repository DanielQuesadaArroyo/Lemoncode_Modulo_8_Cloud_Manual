# Laboratorio REST API

## Introducción

En este laboratorio vamos a consumir una API pública para mostrar datos de la serie **Rick & Morty**.

- **API Oficial:** [Rick & Morty API](https://rickandmortyapi.com/)
- **Punto de entrada:** Boilerplate `laboratory`.

## Tareas Principales

- [ ] Cambiar las escenas, rutas y pods a `character-collection` y `character`.

---

### Ejercicio 1: Consumir API Real

Obtener una lista de personajes de la API Rest de Rick & Morty utilizando **Axios** o **Fetch**.

- [Documentación REST](https://rickandmortyapi.com/documentation/#rest)
- Al navegar a la página de un personaje (`character`), se debe mostrar el detalle del mismo (segunda llamada a la API Rest).

### Ejercicio 2: Servidor Local (Mock)

Para simular escrituras, utilizaremos un servidor local (ubicado en la carpeta `server` del proyecto). Este servidor mock tiene precargados los 5 primeros personajes.

**Endpoints soportados:**

- `GET /characters`: Listado de personajes.
- `GET /characters/:id`: Detalle de un personaje.
- `PUT /characters/:id`: Actualizar datos del personaje.

**Nuevas funcionalidades:**

- Se ha añadido el campo `bestSentence` para guardar la mejor frase de cada personaje.
- **Objetivo:** Reemplazar los endpoints para que apunten al servidor local y permitir al usuario editar y guardar el campo `bestSentence`.

---

## Opcionales

- [ ] Implementar la misma aplicación del Ejercicio 1 pero utilizando la API de **GraphQL**.
  - [Documentación GraphQL](https://rickandmortyapi.com/documentation/#graphql)
  - [GraphQL Playground](https://rickandmortyapi.com/graphql)

---

## Challenges

- [ ] Implementar paginación.
- [ ] Implementar búsqueda de personajes.
- [ ] Implementar componentes para recuperar y mostrar:
  - [ ] Lugares (`Locations`).
  - [ ] Episodios (`Episodes`).
