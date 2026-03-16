from sqlalchemy import Column, String, Date, ForeignKey, TIMESTAMP, BigInteger
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from sqlalchemy.sql import func

from data_access.db.base import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    name = Column(String(255), nullable=False)

    start_date = Column(Date, nullable=False)

    budget = Column(BigInteger, nullable=False)

    created_at = Column(TIMESTAMP, server_default=func.now())

    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

    tasks = relationship("Task", back_populates="project")
