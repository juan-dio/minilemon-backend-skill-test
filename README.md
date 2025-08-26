# Minilemon Backend Skill Test

Aplikasi RESTful API sederhana untuk manajemen user, dibangun menggunakan **Express.js** dengan database **MongoDB**.

---

## Cara Menjalankan Aplikasi

### 1. Clone Repository
```bash
git clone https://github.com/juan-dio/minilemon-backend-skill-test.git
cd minilemon-backend-skill-test
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konvigurasi .env
```conf
PORT=3000
CONNECTION_URL=mongodb://localhost:27017/userdb
```

### 4. Jalankan Server
```bash
npm start
```
Server akan berjalan di 
http://localhost:3000

### 5. Akses Dokumentasi Swagger
http://localhost:3000/api-docs

---


## Dokumentasi API

### Base URL
```bash
http://localhost:3000/api/v1
```

---
### 1. Create User
**Endpoint:**
```bash
POST /users
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "081234567890",
  "department": "IT"
}
```
**Response 201 (Created):**
```json
{
  "code": 201,
  "status": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "id": "66c8c5b5f8f4a7",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "081234567890",
      "department": "IT"
    }
  }
}
```

### 2. Get All User
**Endpoint:**
```bash
GET /users
```
**Response 200:**
```json
{
  "code": 200,
  "status": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "66c8c5b5f8f4a7",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "081234567890",
        "department": "IT"
      },
      {
        "id": "66c8c5b5f8f4b0",
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "phone": "082345678901",
        "department": "Finance"
      }
    ]
  }
}
```

### 3. Update User
**Endpoint:**
```bash
PUT /users/{id}
```
**Request Body:**
```json
{
  "name": "Jane Smith Updated",
  "email": "jane.updated@example.com",
  "phone": "081298765432",
  "department": "Engineering"
}
```
**Response 200:**
```json
{
  "code": 200,
  "status": true,
  "message": "User updated successfully",
  "data": {
    "user": {
      "id": "66c8c5b5f8f4a7",
      "name": "Jane Smith Updated",
      "email": "jane.updated@example.com",
      "phone": "081298765432",
      "department": "Engineering"
    }
  }
}
```

### 4. Delete User
**Endpoint:**
```bash
DELETE /users/{id}
```
**Response 200:**
```json
{
  "code": 200,
  "status": true,
  "message": "User deleted successfully",
  "data": null
}
```

---
### Dokumentasi lengkap tersedia dalam format Swagger (OpenAPI):
```
http://localhost:3000/api-docs
```

---

## Tech Stack
- **Node.js** + **Express.js** – Backend Framework
- **MongoDB** + **Mongoose** – Database

---

## Link Deploy

```
https://minilemon-backend-skill-test.vercel.app/api/v1/
```
Dokumentasi swagger (ui tidak dapat load di vercel)
```
https://minilemon-backend-skill-test.vercel.app/api-docs.json
```