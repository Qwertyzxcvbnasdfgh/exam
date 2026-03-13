from fastapi import APIRouter
from . import tasks_api

api_router = APIRouter(
    prefix="/tasks",
)

api_router.include_router(
    tasks_api,
    tags=["tasks"]
)