from motor.motor_asyncio import AsyncIOMotorClient
from os import getenv

MONGO_URI = getenv("MONGO_URI", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URI)
db = client["productdb"]
products_collection = db["products"]
