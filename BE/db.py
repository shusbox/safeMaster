import pymysql

def get_db():
    return pymysql.connect(
        host="127.0.0.1",
        port=3307,   
        user="root",
        password="root1234",
        database="userdb",
        cursorclass=pymysql.cursors.DictCursor
    )