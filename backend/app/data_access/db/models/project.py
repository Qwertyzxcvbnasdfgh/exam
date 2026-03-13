from sqlalchemy import Column, Integer, String, Date, Numeric
from app.data_access.db.base import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)
    budget = Column(Numeric, nullable=False)