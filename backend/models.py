from pydantic import BaseModel
from typing import List, Optional

class ProductRequest(BaseModel):
    name: str
    brand: str

class ProductData(BaseModel):
    name: str
    brand: str
    analysis: Optional[str] = None
    score: Optional[float] = None
    tags: Optional[List[str]] = []
    raw_gemini_output: Optional[str] = None
