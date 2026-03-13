from pydantic import BaseModel
from datetime import date


class ProjectCreate(BaseModel):
    name: str
    start_date: date
    budget: float


class ProjectResponse(BaseModel):
    id: int
    name: str
    start_date: date
    budget: float

    class Config:
        from_attributes = True