## Full-Stack MERN MySQL JWT Authentication Template

### Features Implemented
- #### Backend:

    Express.js server with MySQL database

    Token-based authentication (JWT)

    Access token and refresh token implementation

    Cookie-based authentication

    Protected routes with middleware

    Error handling

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

    3. When access token expires, frontend automatically requests new one using refresh token

    4. Refresh token expires after 7 days

    5. User can logout which invalidates the refresh token

### Database Modeling

``` sql
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