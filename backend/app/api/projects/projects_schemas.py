from pydantic import BaseModel
from datetime import date


class TaskRead(BaseModel):
    id: int
    title: str
    deadline: date
    project_id: int

    class Config:
        from_attributes = True


class ProjectRead(BaseModel):
    id: int
    name: str
    start_date: date
    budget: int
    tasks: list[TaskRead] = []

    class Config:
        from_attributes = True