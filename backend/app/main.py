from fastapi import FastAPI
from api.api_router import api_router

app = FastAPI(title="Project Task API")

app.include_router(api_router)