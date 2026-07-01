from fastapi import FastAPI
from app.routes.health import router as health_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(health_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root():
    return {
        "status": "running",
        "message": "Commercial Court Search Engine"
    }