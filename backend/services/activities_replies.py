import psycopg2
from psycopg2 import OperationalError, Error

class ActivitiesReplies:
    def run():
        data = []
        try:
            conn = psycopg2.connect("postgresql://postgres:P0037979@localhost/twitterclone")
            with conn:
                with conn.cursor() as curr:
                    curr.execute("""
                        SELECT u.handle, u.name, q1.reply_message, q1.activity_id, q1.created_at
                        FROM (
                            SELECT r.reply_message, r.user_id, r.created_at, r.activity_id
                            FROM replies as r
                            JOIN activities as a ON r.activity_id=a.id
                        ) as q1
                        JOIN users as u ON u.cognito_id = q1.user_id;
                    """)
                    results = curr.fetchall()
                    col_names = [name[0] for name in curr.description]
                    for record in results:
                        obj = dict(zip(col_names,record))
                        data.append(obj)
                    return data
        except (OperationalError, Error) as e:
            print("Error:", e)
