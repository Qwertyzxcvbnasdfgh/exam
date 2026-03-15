import asyncio
from datetime import date

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from data_access.db.models.project import Project
from data_access.db.models.task import Task
from data_access.db.session import AsyncSessionLocal


async def seed_projects(db: AsyncSession):
    projects_data = [
        {
            "name": "Website Development",
            "start_date": date(2026, 3, 1),
            "budget": 500000,
        },
        {
            "name": "Mobile App",
            "start_date": date(2026, 4, 10),
            "budget": 750000,
        },
    ]

    for item in projects_data:
        result = await db.execute(
            select(Project).where(Project.name == item["name"])
        )
        exists = result.scalar_one_or_none()

        if not exists:
            project = Project(
                name=item["name"],
                start_date=item["start_date"],
                budget=item["budget"],
            )
            db.add(project)

    await db.commit()


async def seed_tasks(db: AsyncSession):
    website_project_result = await db.execute(
        select(Project).where(Project.name == "Website Development")
    )
    website_project = website_project_result.scalar_one()

    mobile_project_result = await db.execute(
        select(Project).where(Project.name == "Mobile App")
    )
    mobile_project = mobile_project_result.scalar_one()

    tasks_data = [
        {
            "title": "Create homepage",
            "deadline": date(2026, 3, 15),
            "project_id": website_project.id,
        },
        {
            "title": "Connect backend",
            "deadline": date(2026, 3, 20),
            "project_id": website_project.id,
        },
        {
            "title": "Build login screen",
            "deadline": date(2026, 4, 20),
            "project_id": mobile_project.id,
        },
    ]

    for item in tasks_data:
        result = await db.execute(
            select(Task).where(
                Task.title == item["title"],
                Task.project_id == item["project_id"],
            )
        )
        exists = result.scalar_one_or_none()

        if not exists:
            task = Task(
                title=item["title"],
                deadline=item["deadline"],
                project_id=item["project_id"],
            )
            db.add(task)

    await db.commit()


async def run_seeders(db: AsyncSession):
    await seed_projects(db)
    await seed_tasks(db)


async def main():
    async with AsyncSessionLocal() as db:
        await run_seeders(db)


if __name__ == "__main__":
    asyncio.run(main())