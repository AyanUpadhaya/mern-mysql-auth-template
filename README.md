## Full-Stack MERN MySQL JWT Authentication Template

### Installation guide

```bash
npm install
npm start
```

Note: packages inside the directories or folder needs to be installed seperately

```bash
cd frontend
npm install

cd backend
npm install
```

**\* if you don't have concurrently installed **

Install concurrently as a dev dependency in the root directory with package.json

```bash
npm init -y
npm install --save-dev concurrently
```

2. Modify the root package.json to include a combined start script

```json
{
  "name": "your-project-root",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"npm run start:backend\" \"npm run start:frontend\"",
    "start:frontend": "cd frontend && npm run dev",
    "start:backend": "cd backend && node server.js"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

3. Run the combined command

```bash
npm start
```

### Features Implemented

- #### Backend:

  - Express.js server with MySQL database

  - Token-based authentication (JWT)

  - Access token and refresh token implementation

  - Cookie-based authentication

  - Protected routes with middleware

  - Error handling

- #### Frontend:

  - React with TypeScript

  - React Query for data fetching and state management

  - Axios with interceptors for automatic token refresh

  - Protected routes

  - Login/Register forms

  - Dashboard with product listing

  - Automatic logout when tokens expire

  ### Authentication Flow:

  1. User registers with email/password

  2. User logs in and receives access/refresh tokens

  3. Access token expires after 15 minutes

  4. When access token expires, frontend automatically requests new one using refresh token

  5. Refresh token expires after 7 days

  6. User can logout which invalidates the refresh token

### Env Sample

```.env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=mern_auth_template
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
FRONTEND_URL=http://localhost:5173
PORT=5000
```

### Database Modeling

```sql
CREATE DATABASE mern_auth_template;

USE mern_auth_template;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  refresh_token VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some dummy products
INSERT INTO products (name, description, price, stock) VALUES
('Laptop', 'High performance laptop with 16GB RAM', 999.99, 50),
('Smartphone', 'Latest smartphone with 5G support', 699.99, 100),
('Headphones', 'Noise cancelling wireless headphones', 199.99, 75),
('Smartwatch', 'Fitness tracking smartwatch', 249.99, 30);

```
