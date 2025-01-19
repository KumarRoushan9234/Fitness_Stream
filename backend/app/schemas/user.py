from pydantic import BaseModel

class UserCreateSchema(BaseModel):
    name: str
    email: str
    password: str
    phone:int
    role: str

class UserLoginSchema(BaseModel):
    email: str
    password: str

class UserResponseSchema(BaseModel):
    id: str
    name: str
    email: str
    phone:int
    role: str
