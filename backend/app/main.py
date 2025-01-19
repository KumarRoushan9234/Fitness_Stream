from fastapi import FastAPI
from app.routes import auth
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    # Allow your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def root():
    return {"message": "Welcome to the Fitness Tracker API"}


# Why app.main:app?

# The uvicorn.run() function requires the application to be referenced as a string in the format module_name:app_name. In this case:
# module_name: app.main (the main.py file in the app directory)

if __name__=="__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)