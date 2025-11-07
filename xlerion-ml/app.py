from fastapi import FastAPI
from knowledge_base import knowledge_base
from fastapi.middleware.cors import CORSMiddleware # Import CORS middleware

app = FastAPI()

# Configure CORS to allow requests from your Next.js frontend
origins = [
    "http://localhost:3000",  # Assuming your Next.js app runs on port 3000
    "http://127.0.0.1:3000",
    "http://192.168.1.3:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ask")
async def ask_question(question: str):
    question_lower = question.lower()
    for item in knowledge_base:
        if question_lower in item["question"].lower():
            return {"answer": item["answer"]}
    return {"answer": "Lo siento, no tengo una respuesta para esa pregunta en este momento. Por favor, intenta con otra pregunta."}

@app.get("/api/menu")
async def get_menu_items():
    menu_items = [
        {"title": "Blog y Bitácora", "href": "/blog-bitacora"},
        {"title": "Contacto", "href": "/contacto"},
        {"title": "Convocatorias y Alianzas", "href": "/convocatorias-y-alianzas"},
        {"title": "Cronograma y Progreso", "href": "/cronograma-y-progreso"},
        {"title": "Documentación", "href": "/documentacion"},
        {"title": "Documentación y Recursos", "href": "/documentacion-y-recursos"},
        {
            "title": "Filosofía",
            "href": "/filosofia",
            "isDropdown": True,
            "dropdownItems": [
                {"title": "Filosofía", "href": "/filosofia"},
                {"title": "Sobre Nosotros", "href": "/sobre-nosotros"},
            ],
        },
        {"title": "Inversionistas y Alianzas", "href": "/inversionistas-y-alianzas"},
        {"title": "Legal y Privacidad", "href": "/legal-y-privacidad"},
        {"title": "Noticias y Eventos", "href": "/noticias-y-eventos"},
        {"title": "Proyectos", "href": "/proyectos"},
        {"title": "Servicios y Productos", "href": "/servicios-y-productos"},
        {"title": "Sobre el Fundador", "href": "/sobre-el-fundador"},
        {"title": "Soluciones", "href": "/soluciones"},
    ]
    return menu_items
