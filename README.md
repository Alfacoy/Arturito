# Arturito (Gestor de tareas)

---

## Errores conocidos

### src/components/Arturo/index.js

(1) Este parche, lo que pretende hacer es que, cuando el usuario ingrese
su primer tarea, se borre el mensaje de "No hay tareas pendientes".

Si bien lo borra de forma correcta, hay una posibilidad de que se ingrese
"No hay tareas pendientes" como primer tarea y la lista de tareas quede
vacía.
