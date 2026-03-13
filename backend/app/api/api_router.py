from fastapi import APIRouter
from api.projects.projects_router import api_router as projects_router
from api.tasks.tasks_router import api_router as tasks_router

api_router = APIRouter

api_router.include_router(
    projects_router,
    tasks_router,
    prefix="/api"
)