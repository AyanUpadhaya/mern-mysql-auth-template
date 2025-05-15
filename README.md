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