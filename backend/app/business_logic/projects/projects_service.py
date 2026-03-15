from data_access.projects.projects_repository import ProjectsRepository


class ProjectsService:
    def __init__(self, repo: ProjectsRepository):
        self.repo = repo

    async def get_project_by_id(self, project_id: int):
        return await self.repo.get_by_id(project_id)