import os
import mysql.connector
from dotenv import load_dotenv
TempCheckVar = False
load_dotenv()

def connect_to_database():
    connection = mysql.connector.connect(
        host = os.getenv("DB_HOST"),
        user = os.getenv("DB_USER"),
        password = os.getenv("DB_PASSWORD"),
        database = os.getenv("DB_NAME")
    )
    return connection

def insert_user_data(username):
    connection = connect_to_database()
    cursor = connection.cursor()

    insert_query = """
        INSERT INTO users (username)
        VALUES (%s)
    """
    cursor.execute(insert_query, (username,))
    connection.commit()

    cursor.close()
    connection.close()

def user_exists_check(username):
    connection = connect_to_database()
    cursor = connection.cursor()

    select_query = """
        SELECT COUNT(*) FROM users WHERE username = %s
    """
    cursor.execute(select_query, (username,))
    result = cursor.fetchone()
    user_exists = result[0] > 0

    cursor.close()
    connection.close()

    return user_exists