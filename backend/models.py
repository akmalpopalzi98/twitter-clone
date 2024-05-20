from sqlalchemy import  Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from db import Base
from sqlalchemy.sql.expression import text

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    handle = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
    cognito_id = Column(String, nullable=False, unique=True)

    activities = relationship("Activity", back_populates="user")
    replies = relationship("Reply", back_populates="user")


class Activity(Base):
    __tablename__ = "activities"

    id = Column(Integer, primary_key=True)
    user_id = Column( String, ForeignKey("users.cognito_id", ondelete="CASCADE"), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
    expires_at = Column(TIMESTAMP(timezone=True), nullable=False)
  

    user = relationship("User", back_populates="activities")
    replies = relationship("Reply", back_populates="activity")


class Reply(Base):
    __tablename__ = "replies"

    id = Column(Integer, primary_key=True)
    activity_id = Column(Integer, ForeignKey("activities.id", ondelete="CASCADE"), nullable=False)
    user_id = Column(String, ForeignKey("users.cognito_id", ondelete="CASCADE"), nullable=False)
    reply_message = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
  

    activity = relationship("Activity", back_populates="replies")
    user = relationship("User", back_populates="replies")
