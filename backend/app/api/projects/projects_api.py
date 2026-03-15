from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from api.projects.projects_schemas import ProjectRead
from business_logic.projects.projects_service import ProjectsService
from data_access.db.session import get_db
from data_access.projects.projects_repository import ProjectsRepository

router = APIRouter()


def get_projects_service(db: AsyncSession = Depends(get_db)) -> ProjectsService:
    repo = ProjectsRepository(db)
    return ProjectsService(repo)


@router.get("/{project_id}", response_model=ProjectRead)
async def get_project_by_id(
    project_id: int,
    service: ProjectsService = Depends(get_projects_service)
):
    project = await service.get_project_by_id(project_id)

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    return project