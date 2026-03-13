from fastapi import APIRouter
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()

def get_projects_service(db: AsyncSession = Depends(get_bd)) -> ProjectsService:
    