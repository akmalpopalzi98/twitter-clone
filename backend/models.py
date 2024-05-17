from sqlalchemy import  Column, ForeignKey, Integer, String, UUID, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from db import Base
from sqlalchemy.sql.expression import text

class User(Base):
    __tablename__ = "users"

    uuid = Column(UUID, primary_key=True)
    name = Column(String, nullable=False)
    handle = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    activities = relationship("Activity", back_populates="user")
    replies = relationship("Reply", back_populates="user")


class Activity(Base):
    __tablename__ = "activities"

    uuid = Column(UUID, primary_key=True)
    user_uuid = Column(UUID, ForeignKey("users.uuid", ondelete="CASCADE"), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
    expires_at = Column(TIMESTAMP(timezone=True), nullable=False)
    likes_count = Column(Integer, default=0)
    reposts_count = Column(Integer, default=0)

    user = relationship("User", back_populates="activities")
    replies = relationship("Reply", back_populates="activity")


class Reply(Base):
    __tablename__ = "replies"

    uuid = Column(UUID, primary_key=True)
    activity_uuid = Column(UUID, ForeignKey("activities.uuid", ondelete="CASCADE"), nullable=False)
    user_uuid = Column(UUID, ForeignKey("users.uuid", ondelete="CASCADE"), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
    likes_count = Column(Integer, default=0)
    reposts_count = Column(Integer, default=0)

    activity = relationship("Activity", back_populates="replies")
    user = relationship("User", back_populates="replies")
