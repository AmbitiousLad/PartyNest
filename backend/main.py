from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "PartyNest backend is running!"}

# Get all venues
@app.get("/api/venues")
def get_venues(db: Session = Depends(get_db)):
    venues = db.query(models.Venue).all()
    return venues

# Create a venue
@app.post("/api/venues")
def create_venue(venue: dict, db: Session = Depends(get_db)):
    new_venue = models.Venue(
        name=venue["name"],
        description=venue.get("description"),
        address=venue["address"],
        capacity=venue.get("capacity"),
        price_per_hour=venue.get("price_per_hour"),
        host_name=venue.get("host_name"),
        host_phone=venue.get("host_phone"),
    )
    db.add(new_venue)
    db.commit()
    db.refresh(new_venue)
    return new_venue