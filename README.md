# 📖 Evangelio del Día

Una aplicación web para leer el Evangelio diario, reflexiones espirituales y rezar el Santo Rosario.

**🌐 Demo en vivo:** [https://alberto-dieguez.github.io/evangelio/](https://alberto-dieguez.github.io/evangelio/)

---

## ✨ Características

- **📅 Evangelio Diario** - Lecturas del día según el calendario litúrgico católico
- **💭 Reflexión Diaria** - Meditación y comentario del Evangelio
- **🙏 Santo Rosario** - Misterios del Rosario organizados por día de la semana
- **🔍 Búsqueda por Fecha** - Accede a las lecturas de cualquier día específico
- **🔊 Audio** - Escucha las lecturas con síntesis de voz
- **📱 Responsive** - Diseño optimizado para móvil, tablet y escritorio
- **🌐 Offline Ready** - Funciona sin conexión una vez cargado

---

## 🚀 Instalación

### Opción 1: Usar directamente desde GitHub Pages

Simplemente visita: [https://alberto-dieguez.github.io/evangelio/](https://alberto-dieguez.github.io/evangelio/)

### Opción 2: Clonar y ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/alberto-dieguez/evangelio.git

# Navegar al directorio
cd evangelio

# Abrir index.html en tu navegador
# O usar un servidor local:
python -m http.server 8000
# Luego visita http://localhost:8000
```

### Opción 3: Descargar APK (Android)

Descarga e instala `evangelio_v4.81.apk` en tu dispositivo Android.

---

## 📁 Estructura del Proyecto

```
evangelio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── evangelio.css   # Estilos de la aplicación
│   └── js/
│       ├── evangelio.js    # Lógica principal
│       └── rosario.js      # Misterios del Rosario
├── images/
│   └── evangelio.png       # Icono de la aplicación
├── evangelio_v4.81.apk     # Aplicación Android
└── README.md               # Este archivo
```

---

## 🎨 Diseño

La aplicación utiliza un sistema de diseño inspirado en libros de oración tradicionales:

### Paleta de Colores
- **Púrpura litúrgico** (#5D3A5A) - Color principal, evoca vestiduras sacerdotales
- **Oro iluminado** (#C4A661) - Acentos, como hojas de oro en manuscritos
- **Pergamino** (#F5F1EB - #FEFDFB) - Superficies cálidas como papel antiguo
- **Tinta** (#2B2520) - Texto principal, como tinta sobre pergamino

### Tipografía
- **Crimson Pro** - Fuente serif para títulos y texto sagrado (evoca libros litúrgicos)
- **Inter** - Fuente sans-serif para interfaz (legibilidad moderna)

### Principios de Diseño
- Sistema de espaciado basado en 8px para consistencia visual
- Capas sutiles con bordes suaves en lugar de sombras dramáticas
- El texto del Evangelio como elemento principal (hero content)
- Interfaz limpia sin decoraciones innecesarias

---

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **Vanilla JavaScript** - Sin dependencias externas
- **Web Speech API** - Síntesis de voz para audio
- **Fetch API** - Obtención de datos del servidor

---

## 📖 Fuentes de Datos

Las lecturas y reflexiones se obtienen de:
- [Dominicos.org](https://www.dominicos.org/) - Evangelio del día y reflexiones

*Nota: Se utiliza un proxy CORS para acceder a los datos.*

---

## 🙏 Uso del Rosario

Los botones del Rosario están organizados por día de la semana:

- **L** (Lunes) - Misterios Gozosos
- **M** (Martes) - Misterios Dolorosos
- **X** (Miércoles) - Misterios Gloriosos
- **J** (Jueves) - Misterios Luminosos
- **V** (Viernes) - Misterios Dolorosos
- **S** (Sábado) - Misterios Gozosos
- **D** (Domingo) - Misterios Gloriosos

---

## 📱 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Navegadores móviles (iOS Safari, Chrome Android)
- ✅ Android (APK disponible)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia especificada en el archivo `LICENSE.txt`.

---

## ✝️ Oración

> *"La palabra de Dios es viva y eficaz, y más cortante que cualquier espada de dos filos."*
> — Hebreos 4:12

---

## 📧 Contacto

Para preguntas o sugerencias, abre un [issue](https://github.com/alberto-dieguez/evangelio/issues) en GitHub.

---

**Hecho con 🙏 para la gloria de Dios**
