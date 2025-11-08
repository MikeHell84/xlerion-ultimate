from fastapi import FastAPI
from knowledge_base import knowledge_base
from fastapi.middleware.cors import CORSMiddleware
import re
from thefuzz import fuzz, process

app = FastAPI()

# Configure CORS to allow requests from your Next.js frontend
origins = [
    "http://localhost:3000",
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

@app.get("/api/ask")
async def ask_question(question: str):
    # 1. Normalize the user's question
    question_lower = question.lower().strip()

    # 2. Extract the core keyword if it's a numbered option from the menu
    search_term = question_lower
    keyword_match = re.match(r"^\d+\.\s*(.*)", question_lower)
    if keyword_match:
        search_term = keyword_match.group(1).strip()

    # 3. Use fuzzy matching to find the best match in the knowledge base
    questions_list = [item["question"] for item in knowledge_base]
    best_match = process.extractOne(search_term, questions_list, scorer=fuzz.WRatio)

    # 4. Check if the match score is above a certain threshold
    if best_match and best_match[1] > 80:
        matched_question = best_match[0]
        for item in knowledge_base:
            if item["question"] == matched_question:
                response_content = {"text": item["answer"]}
                if "link" in item:
                    response_content["link"] = item["link"]
                return {"answer": response_content}

    # 5. If no good match is found, return the default response
    return {"answer": "Lo siento, no tengo una respuesta para esa pregunta en este momento. Por favor, intenta con otra pregunta."}

@app.get("/api/menu")
async def get_menu_items():
    menu_items = [
        {"title": "Inicio", "shortTitle": "Inicio", "href": "/"},
        {"title": "Filosofía", "shortTitle": "Filosofía", "href": "/filosofia"},
        {"title": "Soluciones", "shortTitle": "Soluciones", "href": "/soluciones"},
        {"title": "Proyectos", "shortTitle": "Proyectos", "href": "/proyectos"},
        {"title": "Documentación", "shortTitle": "Docs", "href": "/documentacion"},
        {"title": "Sobre el Fundador", "shortTitle": "Fundador", "href": "/sobre-el-fundador"},
        {"title": "Convocatorias y Alianzas", "shortTitle": "Alianzas", "href": "/convocatorias-y-alianzas"},
        {"title": "Contacto", "shortTitle": "Contacto", "href": "/contacto"},
        {"title": "Blog y Bitácora", "shortTitle": "Blog", "href": "/blog-bitacora"},
        {"title": "Legal y Privacidad", "shortTitle": "Legal", "href": "/legal-y-privacidad"},
    ]
    return menu_items

@app.get("/api/contacto")
async def get_contact_info():
    contact_info = {
        "email": "contacto@xlerion.com",
        "whatsapp": "https://wa.me/573001234567",
        "whatsappLab": "https://wa.me/573007654321",
        "socialMedia": [
            {"name": "ArtStation", "url": "https://www.artstation.com/xlerion"},
            {"name": "Behance", "url": "https://www.behance.net/xlerion"},
            {"name": "LinkedIn", "url": "https://www.linkedin.com/company/xlerion"},
            {"name": "Instagram", "url": "https://www.instagram.com/xlerion"},
            {"name": "X", "url": "https://twitter.com/xlerion"},
            {"name": "GitHub", "url": "https://github.com/xlerion"},
            {"name": "YouTube", "url": "https://www.youtube.com/xlerion"},
        ],
    }
    return {"contactInfo": contact_info}
