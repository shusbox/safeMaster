import pymysql

def get_db():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="root1234",
        database="userdb",
        cursorclass=pymysql.cursors.DictCursor
    )