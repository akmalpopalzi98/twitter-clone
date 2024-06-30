from typing import List
from fastapi import APIRouter, Body, HTTPException, Request, status

from services.add_activity import AddActivity
from services.home_activities import HomeActivities
from services.activities_replies import ActivitiesReplies


router = APIRouter(tags=["activities"])

@router.get("/homeactivities",status_code=status.HTTP_200_OK)
def get_home_activities():
    data = HomeActivities.run()
    if data != None:
        return data
    raise HTTPException(status_code=status.HTTP_204_NO_CONTENT,detail="No data")

@router.get("/homeactivitiesreplies",status_code=status.HTTP_200_OK)
def get_reply_activities():
    data = ActivitiesReplies.run()
    if data != None:
        return data
    raise HTTPException(status_code=status.HTTP_204_NO_CONTENT,detail="No data")

@router.post("/addhomeactivity",status_code=status.HTTP_201_CREATED)
def add_activity(user_id:str = Body(...), message:str = Body(...)):
    AddActivity.run(user_id,message)
    return