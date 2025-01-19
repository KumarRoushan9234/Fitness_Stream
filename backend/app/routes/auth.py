from fastapi import APIRouter, HTTPException, Depends
from app.schemas.user import UserCreateSchema, UserLoginSchema, UserResponseSchema
from app.utils.security import hash_password, verify_password, create_access_token
from app.database import db
from datetime import datetime
from bson.objectid import ObjectId

router = APIRouter()

@router.post("/signup", response_model=UserResponseSchema)
def signup(user_data: UserCreateSchema):
    if user_data.role not in ["user", "admin", "super admin"]:
        raise HTTPException(status_code=400, detail="Invalid role. Must be 'user', 'admin', or 'super admin'.")
    
    user_collection = db["users"]
    existing_user = user_collection.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(user_data.password)
    
    user = {
        "name": user_data.name,
        "email": user_data.email,
        "phone":user_data.phone,
        "hashed_password": hashed_password,
        "role": user_data.role,
        "created_at": datetime.utcnow().isoformat(),
        "updated_at": datetime.utcnow().isoformat()
    }
    
    result = user_collection.insert_one(user)
    user["_id"] = str(result.inserted_id)
    
    return UserResponseSchema(
        id=user["_id"],
        name=user["name"],
        email=user["email"],
        role=user["role"],
        phone=user["phone"]
    )

@router.post("/login")
def login(user_data: UserLoginSchema):
    user_collection = db["users"]
    user = user_collection.find_one({"email": user_data.email})
    
    if not user or not verify_password(user_data.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    token = create_access_token({"sub": str(user["_id"]), "role": user["role"], "email": user["email"]})
    
    return {"access_token": token, "token_type": "bearer"}


# @router.get("/admin", response_model=UserResponseSchema)
# def get_admin_data(token: str = Depends(get_current_user_role)):
#     if token not in ["admin", "super admin"]:
#         raise HTTPException(status_code=403, detail="Insufficient permissions")
    
#     return {"message": "Access granted to admin route"}
