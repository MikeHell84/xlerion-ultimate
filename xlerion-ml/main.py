from fastapi import FastAPI
from typing import List, Dict, Any
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Middleware
origins = [
    "http://localhost:3001",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/menu", response_model=List[Dict[str, Any]])
def get_menu():
    menu_items = [
      { "href": "/", "title": "Inicio" },
      { "href": "/filosofia", "title": "Filosofía" },
      { "href": "/soluciones", "title": "Soluciones" },
      { "href": "/proyectos", "title": "Proyectos" },
      { "href": "/documentacion", "title": "Docs" },
      { "href": "/sobre-el-fundador", "title": "Fundador" },
      { "href": "/convocatorias-y-alianzas", "title": "Alianzas" },
      { "href": "/contacto", "title": "Contacto" },
      { "href": "/blog-bitacora", "title": "Blog" },
      { "href": "/legal-y-privacidad", "title": "Legal" },
    ]
    return menu_items

@app.get("/api/inicio")
def get_inicio():
    return {
        "title": "Inicio",
        "lead": "Presentar la esencia de Xlerion en segundos.",
        "sections": [
            {
                "type": "header",
                "value": "Xlerion – Soluciones Disruptivas"
            },
            {
                "type": "text",
                "value": "Modularidad que transforma. Diagnóstico que empodera."
            },
            {
                "type": "text",
                "value": "Desde Nocaima, Cundinamarca, nace una propuesta empírica y neurodivergente que redefine la forma en que creamos, automatizamos y documentamos soluciones técnicas para la industria creativa. Xlerion es más que una empresa: es una filosofía modular con impacto cultural."
            },
            {
                "type": "list",
                "items": [
                    "Ver portafolio",
                    "Contactar al fundador",
                    "Descargar dossier institucional"
                ]
            }
        ]
    }

@app.get("/api/filosofia")
def get_filosofia():
    return {
        "title": "Filosofía",
        "lead": "Comunicar tu misión, visión y valores.",
        "sections": [
            {
                "type": "header",
                "value": "Misión"
            },
            {
                "type": "text",
                "value": "Potenciar el desarrollo técnico moderno con soluciones modulares que anticipan errores, optimizan procesos y promueven colaboración sostenible entre creadores, técnicos y comunidades."
            },
            {
                "type": "header",
                "value": "Visión"
            },
            {
                "type": "text",
                "value": "Ser referente latinoamericano en el diseño de toolkits inteligentes que integren técnica, creatividad, documentación y escalabilidad para la industria cultural y tecnológica."
            },
            {
                "type": "header",
                "value": "Valores"
            },
            {
                "type": "list",
                "items": [
                    "Empatía técnica",
                    "Autosuficiencia creativa",
                    "Documentación como legado",
                    "Modularidad como principio",
                    "Impacto cultural y territorial"
                ]
            }
        ]
    }

@app.get("/api/soluciones")
def get_soluciones():
    return {
        "title": "Soluciones",
        "lead": "Mostrar tus servicios y productos técnicos.",
        "sections": [
            {
                "type": "text",
                "value": "Xlerion ofrece herramientas técnicas diseñadas para entornos exigentes como videojuegos AAA, multimedia avanzada y visión por computadora. Cada solución está pensada para ser modular, escalable y autosuficiente."
            },
            {
                "type": "header",
                "value": "Servicios destacados"
            },
            {
                "type": "list",
                "items": [
                    "Toolkits modulares con interfaces jerárquicas y adaptativas",
                    "Sistemas de logging, diagnóstico y comparadores de rendimiento",
                    "Branding técnico-creativo con lógica visual y simbólica",
                    "Documentación estructurada para mantenimiento y transferencia de conocimiento",
                    "Integración con motores como Unreal Engine, Unity y Blender"
                ]
            }
        ]
    }

@app.get("/api/proyectos")
def get_proyectos():
    return {
        "title": "Proyectos",
        "lead": "Exhibir tu portafolio y casos de uso.",
        "sections": [
            {
                "type": "text",
                "value": "Cada proyecto de Xlerion es una manifestación de su filosofía: modularidad, documentación y empoderamiento técnico. Aquí presentamos nuestras iniciativas más representativas."
            },
            {
                "type": "header",
                "value": "Proyectos destacados"
            },
            {
                "type": "list",
                "items": [
                    "Total Darkness – Pelijuego Interactivo: Adaptación de obra literaria original a experiencia narrativa inmersiva con decisiones ramificadas, entornos 3D y cinemáticas filosóficas.",
                    "Xlerion Toolkit: Conjunto de módulos activos para diagnóstico, logging y rendimiento, diseñado para entornos técnicos complejos.",
                    "Participación en Colombia 4.0: Presentación institucional y pitch de impacto cultural y técnico.",
                    "Postulación a CoCrea 2025: Proyecto cultural con enfoque empírico, neurodivergente y territorial."
                ]
            }
        ]
    }

@app.get("/api/documentacion")
def get_documentacion():
    return {
        "title": "Documentación",
        "lead": "Compartir tu enfoque autosuficiente y empoderador.",
        "sections": [
            {
                "type": "text",
                "value": "La documentación es parte esencial del legado de Xlerion. Cada solución incluye guías claras, diagramas modulares y manuales de uso que permiten su mantenimiento, réplica y evolución."
            },
            {
                "type": "header",
                "value": "Contenido"
            },
            {
                "type": "list",
                "items": [
                    "Manuales técnicos por módulo",
                    "Diagramas de flujo y arquitectura",
                    "Guías de instalación y configuración",
                    "Filosofía de documentación como herramienta de empoderamiento"
                ]
            }
        ]
    }

@app.get("/api/sobre-el-fundador")
def get_sobre_el_fundador():
    return {
        "title": "Sobre el Fundador",
        "lead": "Humanizar la marca y mostrar tu trayectoria.",
        "sections": [
            {
                "type": "text",
                "value": "Miguel Eduardo Rodríguez Martínez es un creador empírico con enfoque neurodivergente, especializado en arte digital, modelado 3D, scripting y defensa legal. Su trayectoria autodidacta lo ha llevado a construir soluciones técnicas con impacto cultural desde territorios no centralizados."
            },
            {
                "type": "header",
                "value": "Frase destacada"
            },
            {
                "type": "text",
                "value": "“La frustración técnica y burocrática es mi combustible para crear soluciones que empoderan.”"
            },
            {
                "type": "list",
                "items": [
                    "Fundador de Xlerion TechLab",
                    "Autodidacta en entornos técnicos y creativos",
                    "Defensor de derechos del consumidor y procesos autosuficientes",
                    "Creador de la obra literaria Total Darkness"
                ]
            }
        ]
    }

@app.get("/api/convocatorias-y-alianzas")
def get_convocatorias_y_alianzas():
    return {
        "title": "Convocatorias y Alianzas",
        "lead": "Mostrar tu participación institucional y abrir puertas.",
        "sections": [
            {
                "type": "text",
                "value": "Xlerion participa activamente en convocatorias culturales y tecnológicas, buscando alianzas que fortalezcan su impacto y validen su enfoque empírico."
            },
            {
                "type": "header",
                "value": "Contenido"
            },
            {
                "type": "list",
                "items": [
                    "Postulación a CoCrea 2025 (modalidad PAT)",
                    "Participación en Hackathon IA COL4.0",
                    "Invitación a inversionistas culturales",
                    "Carta de intención de aportes descargable",
                    "Espacio para aliados institucionales"
                ]
            }
        ]
    }

@app.get("/api/contacto")
def get_contacto():
    return {
        "title": "Contacto",
        "lead": "¿Quieres colaborar, invertir o conocer más sobre Xlerion? Estamos listos para conversar.",
        "sections": [
            {
                "type": "header",
                "value": "Formulario de contacto"
            },
            {
                "type": "list",
                "items": [
                    "Nombre",
                    "Correo electrónico",
                    "Mensaje"
                ]
            }
        ],
        "contactInfo": {
            "email": "contacto@xlerion.tech",
            "whatsapp": "https://wa.me/+573208605600", # Xlerion Game Studio
            "whatsappLab": "https://wa.me/+573192590897", # Xlerion Lab
            "socialMedia": [
                {"name": "ArtStation", "url": "#", "icon": "🎨"},
                {"name": "Behance", "url": "#", "icon": "🖌️"},
                {"name": "LinkedIn", "url": "#", "icon": "👔"},
                {"name": "Instagram", "url": "#", "icon": "📸"},
                {"name": "X", "url": "#", "icon": "🐦"},
                {"name": "Indiegogo", "url": "#", "icon": "🚀"},
                {"name": "Kickstarter", "url": "#", "icon": "💰"},
                {"name": "GitHub", "url": "#", "icon": "💻"},
                {"name": "YouTube", "url": "#", "icon": "▶️"}
            ],
            "additionalEmails": [
                "contactus@xlerion.com",
                "totaldarkness@xlerion.com",
                "support@xlerion.com",
                "sales@xlerion.com",
                "admin@xlerion.com",
                "branding@xlerion.com",
                "toolkit@xlerion.com",
                "neuro@xlerion.com",
                "mike@xlerion.com"
            ]
        }
    }

@app.get("/api/blog-bitacora")
def get_legal_y_privacidad():
    return {
        "title": "Legal y Privacidad",
        "lead": "Cumplir con normativas y mostrar transparencia.",
        "sections": [
            {
                "type": "header",
                "value": "Contenido"
            },
            {
                "type": "list",
                "items": [
                    "Política de privacidad de datos",
                    "Términos de uso del sitio y los toolkits",
                    "Licencias de software y contenido",
                    "Declaración de derechos del consumidor"
                ]
            }
        ]
    }


CHATBOT_RESPONSES = {
    "1": {"text": "Xlerion es un laboratorio técnico y creativo que desarrolla soluciones modulares, escalables y autosuficientes para la industria cultural y tecnológica, con un enfoque empírico y neurodivergente.", "link": "/sobre-nosotros"},
    "2": {"text": "Ofrecemos toolkits modulares para diagnóstico, logging y rendimiento, branding técnico-creativo, documentación estructurada y soluciones integradas con motores como Unreal Engine, Unity y Blender.", "link": "/soluciones"},
    "3": {"text": "Miguel Eduardo Rodríguez Martínez, un creador autodidacta con enfoque neurodivergente, especializado en arte digital, modelado 3D, scripting y defensa legal.", "link": "/sobre-el-fundador"},
    "4": {"text": "Entre nuestros proyectos están Total Darkness, un pelijuego interactivo; el Xlerion Toolkit para diagnóstico técnico; y participaciones en eventos como Colombia 4.0 y CoCrea 2025.", "link": "/proyectos"},
    "5": {"text": "Puedes contactarnos por correo electrónico en contacto@xlerion.tech, WhatsApp o a través de nuestras redes sociales como ArtStation, Behance, LinkedIn, Instagram, X, Indiegogo y Kickstarter.", "link": "/contacto"},
    "6": {"text": "Estamos trabajando en un asistente conversacional inteligente, generadores visuales de prototipos, visualizaciones interactivas y demos de documentación automática para potenciar nuestras soluciones modulares.", "link": "/soluciones"}, # Assuming solutions page for AI products
    "7": {"text": "Estamos abiertos a alianzas culturales y tecnológicas. Puedes escribirnos para explorar oportunidades de colaboración o inversión.", "link": "/convocatorias-y-alianzas"},
    "8": {"text": "Nuestra documentación incluye manuales, diagramas y guías que forman parte del legado modular y autosuficiente de Xlerion.", "link": "/documentacion"},
    "9": {"text": "Nuestra filosofía se basa en la empatía técnica, autosuficiencia creativa, documentación como legado, modularidad como principio e impacto cultural y territorial.", "link": "/filosofia"},
    "10": {"text": "Visita nuestra bitácora donde compartimos reflexiones, avances y documentación viva del proceso creativo y técnico.", "link": "/blog-bitacora"},
    "11": {"text": "Gracias por visitar Xlerion. ¡Hasta pronto!", "link": "/"}
}

MENU_MESSAGE = {
    "intro": "Bienvenido al asistente de Xlerion.\nPor favor, selecciona una opción escribiendo el número correspondiente:",
    "options": [
        "1. ¿Qué es Xlerion?",
        "2. ¿Cuáles son los principales servicios que ofrecen?",
        "3. ¿Quién es el fundador de Xlerion?",
        "4. ¿Qué proyectos destacados tiene Xlerion?",
        "5. ¿Cómo puedo contactar a Xlerion?",
        "6. ¿Qué productos con IA están desarrollando?",
        "7. ¿Cómo puedo colaborar o invertir en Xlerion?",
        "8. ¿Dónde puedo encontrar documentación técnica?",
        "9. ¿Qué filosofía guía a Xlerion?",
        "10. ¿Cómo puedo seguir las novedades y avances de Xlerion?",
        "11. Salir"
    ]
}

@app.post("/api/chat")
async def chat_with_ai(message: Dict[str, str]):
    user_message = message.get("message", "").lower().strip()

    if user_message == "" or user_message == "menu":
        return {"response": MENU_MESSAGE}
    elif user_message in CHATBOT_RESPONSES:
        return {"response": CHATBOT_RESPONSES[user_message]}
    else:
        return {"response": "Por favor, selecciona una opción válida del menú o escribe 'menu' para ver las opciones."}


@app.get("/api/sobre-nosotros")
def get_sobre_nosotros():
    return {
        "title": "Sobre Nosotros",
        "lead": "Conoce más sobre Xlerion TechLab.",
        "heroImage": "https://via.placeholder.com/1200x400?text=Imagen+de+Cabecera",
        "heroVideo": "https://videos.pexels.com/video-files/853878/853878-hd_1280_720_25fps.mp4", # Placeholder video
        "sections": [
            {
                "title": "Historia y Visión",
                "text": "Xlerion TechLab nació de la pasión por la innovación y el deseo de empoderar a individuos y comunidades a través de la tecnología. Nuestra visión es ser un faro de autosuficiencia tecnológica en Latinoamérica.",
                "fullText": "Xlerion TechLab nació de la profunda convicción de que la tecnología debe ser una herramienta de empoderamiento accesible para todos. Fundada por un grupo de entusiastas de la innovación, nuestra historia se teje con el compromiso de transformar ideas en soluciones tangibles. Visualizamos un futuro donde cada persona, sin importar su origen, tenga la capacidad de construir, adaptar y defender sus derechos en el ámbito digital. Nos esforzamos por ser un referente en Latinoamérica, impulsando la autosuficiencia tecnológica y fomentando una comunidad autodidacta que no dependa de estructuras tradicionales para innovar y prosperar.",
                "icon": "📚",
                "imageUrl": "https://via.placeholder.com/600x400?text=Historia+y+Vision"
            },
            {
                "title": "Equipo y Roles Clave",
                "text": "Presentación del equipo fundador y los roles esenciales dentro de la organización.",
                "icon": "👥",
                "teamMembers": [
                    {
                        "name": "Juan Pérez",
                        "role": "CEO & Fundador",
                        "imageUrl": "https://via.placeholder.com/150/FF0000/FFFFFF?text=JP"
                    },
                    {
                        "name": "María García",
                        "role": "CTO",
                        "imageUrl": "https://via.placeholder.com/150/00FF00/000000?text=MG"
                    },
                    {
                        "name": "Carlos Ruíz",
                        "role": "Lead Developer",
                        "imageUrl": "https://via.placeholder.com/150/0000FF/FFFFFF?text=CR"
                    }
                ]
            }
        ],
        "cta": {
            "text": "Únete a Nuestro Equipo",
            "link": "/contacto"
        }
    }
