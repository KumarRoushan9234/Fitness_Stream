# for => MongoDB connection

from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = "Runner_Stream"

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]


