from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from database import Base

class Venue(Base):
    __tablename__ = "venues"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    address = Column(String, nullable=False)
    city = Column(String, default="Bangalore")
    capacity = Column(Integer)
    price_per_hour = Column(Float)
    host_name = Column(String)
    host_phone = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())