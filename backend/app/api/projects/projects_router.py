from fastapi import APIRouter
from . import projects_api

api_router = APIRouter(
    prefix="/projects",
)

api_router.include_router(
    projects_api,
    tags=["projects"]
)