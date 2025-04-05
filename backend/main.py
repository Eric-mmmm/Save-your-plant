from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from gemini_api import analyze_environmental_impact

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Server is running"}

@app.post("/analyze")
async def analyze_product(product: dict):
    try:
        result = await analyze_environmental_impact(
            product.get("name", ""),
            product.get("brand", "")
        )
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}
