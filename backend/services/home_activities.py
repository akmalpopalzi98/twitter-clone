from datetime import datetime, timedelta, timezone
import psycopg2
from psycopg2 import OperationalError, Error


class HomeActivities:
    def run():
        data = []
        try:
            conn = psycopg2.connect("postgresql://postgres:P0037979@localhost/twitterclone")
            print("Connection successful")
            with conn:
                with conn.cursor() as curr:
                    curr.execute("SELECT * FROM activities JOIN users ON users.id = activities.user_id;") 
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

    