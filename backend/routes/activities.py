from typing import List
from fastapi import APIRouter, HTTPException, status

from services.home_activities import HomeActivities


router = APIRouter(tags=["activities"])

@router.get("/homeactivities",status_code=status.HTTP_200_OK)
def get_home_activities():
    data = HomeActivities.run()
    if data != None:
        return data
    raise HTTPException(status_code=status.HTTP_204_NO_CONTENT,detail="No data")

