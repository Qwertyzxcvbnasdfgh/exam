from sqlalchemy import Column, Integer, String, Date, ForeignKey
from app.data_access.db.base import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    deadline = Column(Date, nullable=False)
    project_id = Column(Integer, ForeignKey("projects.id"))