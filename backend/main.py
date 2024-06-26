from fastapi import FastAPI
from routes import activities
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.include_router(activities.router)

origins = [
    "http://localhost",
    "http://localhost:5173"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Adjust this to the origin(s) of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)
