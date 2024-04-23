from fastapi import FastAPI
from backend.routes import activities

app = FastAPI()


app.add_route(activities.router)
