import httpx
import os
from env import OPENROUTER_API_KEY

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "google/gemini-pro"

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

HEADERS = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "Content-Type": "application/json"
}

async def analyze_environmental_impact(name: str, brand: str) -> str:
    prompt = (
        f"Analyze the environmental impact of a product based on the following:\n"
        f"Product: {name}\nBrand: {brand}\n\n"
        f"Return a concise summary of the sustainability impact including ingredients, packaging, and brand reputation."
    )

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(OPENROUTER_URL, headers=HEADERS, json=payload)
        response.raise_for_status()
        result = response.json()
        return result["choices"][0]["message"]["content"]
