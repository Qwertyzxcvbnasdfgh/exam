from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select


class ProjectsRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_all(self) -> list[ProjectRead]:
        result = await self.db.execute(
            select(
                Project.id,
                Project.name,
                Project.start_date,
                Project.budget,
            )
        )