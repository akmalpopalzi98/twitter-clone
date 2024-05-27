import psycopg2
from psycopg2 import OperationalError, Error


class AddActivity:
    def run():
        try:
            conn = psycopg2.connect("postgresql://postgres:P0037979@localhost/twitterclone")
            with conn:
                with conn.cursor() as curr:
                    curr.execute()
        except (OperationalError,Error) as e:
            print(e)

