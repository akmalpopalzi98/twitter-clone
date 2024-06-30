import os
import psycopg2
from psycopg2 import OperationalError, Error
from dotenv import load_dotenv
from datetime import timedelta, datetime


class AddActivity:
    def run(user_id,message):
        expires_at = datetime.now() + timedelta(days=10)
        try:
            conn = psycopg2.connect(F"postgresql://postgres:{os.getenv('DB_PASSWORD')}@localhost/twitterclone")
            with conn:
                with conn.cursor() as curr:
                    curr.execute("INSERT INTO activities(user_id,message,expires_at) VALUES (%s,%s,%s)",(user_id,message,expires_at))
        except (OperationalError,Error) as e:
            print(e)

