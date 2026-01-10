# 🌍 Hackathon Time Sync -  Calculadora de Horarios LATAM con exportacion TXT para organizar reuniones.

> **Timezone synchronization tool for distributed LATAM teams**  

> *Hackathon Time Sync es una herramienta web diseñada para **resolver de forma simple y confiable la coordinación horaria en equipos distribuidos**, especialmente en Latinoamérica, donde las diferencias de husos horarios suelen generar confusión.*


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

##  El Problema
Nuestro equipo está formado por integrantes de **6 países distintos**:
- 🇦🇷 Argentina
- 🇨🇴 Colombia
- 🇻🇪 Venezuela
- 🇲🇽 México
- 🇵🇪 Perú
- 🇳🇮 Nicaragua  


Coordinar reuniones se volvió un desafío recurrente. Frases simples como *“nos vemos a las 18:00”* generaban confusión debido a:
- Diferencias de huso horario  
- Cambios por horario de verano (DST)  
- Conversión manual poco confiable  

##  La Solución  

Desarrollé **Hackathon Time Sync**, una aplicación web ligera que permite:  

- **Visualizar en tiempo real** la hora local de cada país del equipo en una única interfaz.
- **Planificar reuniones** a partir de un país base y una hora propuesta, calculando automáticamente la hora correspondiente para el resto de los integrantes.
- **Reducir errores de comunicación**, estandarizando la visualización horaria en formato AM/PM.

##  Funcionalidades Principales

- **Visualización multi-zona en tiempo real**
- **Convertidor horario inteligente por país**
- **Interfaz clara y minimalista**
- **Modo oscuro** orientado a entornos de desarrollo
- **Compatibilidad total** con navegadores modernos y dispositivos móviles
- **Gestión automática de DST** mediante la API nativa `Intl` del navegador
- **Exportación de reuniones en formato `.txt` con horarios locales en AM/PM**

##  Tecnologías
- **HTML5:** Estructura semántica.
- **CSS3:** Variables CSS (Custom Properties), Flexbox y Grid Layout para un diseño responsivo.
- **JavaScript (ES6+):** Lógica de fechas, manipulación del DOM y uso de `Intl.DateTimeFormat`.


<img width="1920" height="1792" alt="Hackathon_calculadora_de_horarios_latam" src="https://github.com/user-attachments/assets/a63d7ed4-3ed8-4e21-9c1a-5b7b2658e7a0" />

**Live Demo:**  
🔗 https://rominarg.github.io/Hackathon-Time-Sync/
