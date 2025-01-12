# Cryptocurrency Gochapaa takeaway

This is a backend application for tracking cryptocurrencies and managing user portfolios.

## Running the application locally

1. Clone the repository:
   \`\`\`
   git clone https://github.com/hamisirizwan/crypo-gochapaa.git
   cd crypo-gochapaa
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Create a `.env` file in the root directory and add the contents of the .env.example file:

4. Make sure you have MongoDB and Redis running locally.

5. Start the application:
   \`\`\`
   npm start
   \`\`\`

6. The API will be available at `http://localhost:8000` or whatever specified port in .env

## Running with Docker

1. Make sure you have Docker and Docker Compose installed.

2. Build and run the containers:
   \`\`\`
   docker-compose up --build
   \`\`\`

3. The API will be available at `http://localhost:8000`

## Testing the API

1. You can use tools like Postman or cURL to test the endpoints.

2. Swagger documentation is available at: `http://http://localhost:8000/api-docs`

## API Endpoints

- GET /api/crypto/top10 - Get top 10 cryptocurrencies
- GET /api/crypto/{symbol}/price - Get cryptocurrency price by symbol
- POST /api/portfolio - Create a new portfolio entry
- GET /api/portfolio/{userId} - Get user's portfolio
- PUT /api/portfolio/{userId}/{symbol} - Update a portfolio entry
- DELETE /api/portfolio/{userId}/{symbol} - Delete a portfolio entry
- GET /api/portfolio/{userId}/insights - Get portfolio insights

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. To access protected routes, you need to include the JWT token in the Authorization header of your requests.

### Registering a new user

Send a POST request to `/api/auth/register` with the following body:

\`\`\`json
{
  "username": "your_username",
  "password": "your_password"
}
\`\`\`

### Logging in

Send a POST request to `/api/auth/login` with the following body:

\`\`\`json
{
  "username": "your_username",
  "password": "your_password"
}
\`\`\`

Both endpoints will return a JWT token that you can use for authenticated requests.

### Making authenticated requests

Include the JWT token in the Authorization header of your requests:

\`\`\`
Authorization: Bearer your_jwt_token
\`\`\`

Replace `your_jwt_token` with the actual token received from the login or register endpoints.

For detailed information about request/response structures and possible errors, please refer to the Swagger documentation.

