from fastapi import APIRouter
from api.projects.projects_router import api_router as projects_router

api_router = APIRouter()

api_router.include_router(
    projects_router,
    prefix="/api"
)