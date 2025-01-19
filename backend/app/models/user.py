from datetime import datetime

def create_user_model(user_data):
    return {
        "name": user_data["name"],
        "email": user_data["email"],
        "hashed_password": user_data["hashed_password"],
        "role": user_data["role"],
        "created_at": datetime.utcnow().isoformat(),
        "updated_at": datetime.utcnow().isoformat()
    }
