from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def root():
    return {
        "status": "running",
        "message": "Commercial Court Search Engine"
    }