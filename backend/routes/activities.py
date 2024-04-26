from fastapi import APIRouter, status

from services.home_activities import HomeActivities


router = APIRouter(tags=["activities"])

@router.get("/homeactivities",status_code=status.HTTP_200_OK)
def get_home_activities():
    data = HomeActivities.run()
    return data

