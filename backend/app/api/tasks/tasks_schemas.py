from pydantic import BaseModel
from datetime import date


class TaskCreate(BaseModel):
    title: str
    deadline: date
    project_id: int


class TaskResponse(BaseModel):
    id: int
    title: str
    deadline: date
    project_id: int

    class Config:
        from_attributes = True