# vishmo-backend-assignment
Express API for Jr. Dev assessment


## 1. Installation & Usage

```bash
git clone https://github.com/Tarunsaini123/vishmo-backend-assignment.git
cd vishmo-backend-assignment
npm install
# Development
npm run dev
# Production
npm start
The API runs at http://localhost:3000.

2. API Endpoints
GET /services
GET http://localhost:3000/services

Response
[
  { "id": 1, "name": "Web Development",   "provider": "Alice", "price": 1500 },
  { "id": 2, "name": "Mobile App Design", "provider": "Bob",   "price": 2000 },
  { "id": 3, "name": "SEO Optimization",  "provider": "Carol", "price": 1200 }
]

POST /services
POST http://localhost:3000/services
Content-Type: application/json

#Request Body

{ "name": "Logo Design", "provider": "Dave", "price": 800 }

#Success Response (201 Created)
{ "id": 4, "name": "Logo Design", "provider": "Dave", "price": 800 }

#Validation Error (400 Bad Request)
{ "error": "name, provider, price(number) required" }

#GET /health
GET http://localhost:3000/health

#Response
OK

