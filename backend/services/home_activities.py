from datetime import datetime, timedelta, timezone
import psycopg2
from psycopg2 import OperationalError, Error
from dotenv import load_dotenv
import os

load_dotenv()

class HomeActivities:
    def run():
        data = []
        try:
            conn = psycopg2.connect(f"postgresql://postgres:{os.getenv('DB_PASSWORD')}@localhost/twitterclone")
            with conn:
                with conn.cursor() as curr:
                    curr.execute("SELECT * FROM activities JOIN users ON users.cognito_id = activities.user_id;") 
                    results = curr.fetchall()
                    col_names = [name[0] for name in curr.description]
                    for record in results:
                        obj = dict(zip(col_names,record))
                        data.append(obj)
                    return data
        
        except (OperationalError,Error) as e:
            print("Did not connect")
            print(e)
            return None

    