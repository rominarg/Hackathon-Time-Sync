# 🌍 Hackathon Time Sync

> **La herramienta definitiva para equipos distribuidos en Latinoamérica.**
> *Calculadora horaria LATAM*
> <img width="1280" height="794" alt="image" src="https://github.com/user-attachments/assets/d76cefe3-a8ed-4d9c-a34f-5e08885391aa" />

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 💡 El Problema
Nuestro equipo está formado por integrantes de **5 países distintos**:
- 🇦🇷 Argentina
- 🇨🇴 Colombia
- 🇻🇪 Venezuela
- 🇲🇽 México
- 🇵🇪 Perú

Cada vez que decíamos *"Nos vemos a las 6"*, se nos complicaba la diferencia horaia... Tampoco podiamos hacerlo manualmente...

## 🚀 La Solución
Cree **Hackathon Time Sync**, una herramienta web ligera y sin dependencias que nos permite:

1.  **Visualizar en tiempo real** la hora exacta de todos los integrantes del equipo en una sola pantalla.
2.  **Planificador de Reuniones:** Un convertidor inteligente donde seleccionas un país base y una hora propuesta (ej: "6:00 PM Perú") y automáticamente calcula la hora local para el resto del equipo.
3.  **Cero Confusiones:** Estandarizamos todo a formato **AM/PM** para evitar errores de comunicación.

## ✨ Características
- **Zero Dependencies:** Hecho con Vanilla JS, HTML y CSS puro. No requiere instalación de Node.js ni librerías pesadas.
- **Dark Mode:** Diseño oscuro estilo "Dev/Hacker" para no cansar la vista durante la noche.
- **Portabilidad Total:** Funciona en cualquier navegador, incluso desde el móvil.
- **Cálculo Automático de DST:** Utiliza la API nativa `Intl` del navegador para manejar cambios de horario de verano automáticamente.

## 🛠️ Tecnologías
- **HTML5:** Estructura semántica.
- **CSS3:** Variables CSS (Custom Properties), Flexbox y Grid Layout para un diseño responsivo.
- **JavaScript (ES6+):** Lógica de fechas, manipulación del DOM y uso de `Intl.DateTimeFormat`.
