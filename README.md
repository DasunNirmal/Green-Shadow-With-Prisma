# GreenShadow API

GreenShadow API is a RESTful backend system for managing crops, fields, equipment, vehicles, staff, and logs. Built with Node.js, Express, Prisma ORM tool and supports JWT authentication for secure access to resources.

## Features
- **Secure**:
    - Implements robust login and signup functionality with JWT tokens.
    - Offers role-based access control, accommodating roles such as ADMIN, MANAGER, SCIENTIST, and OTHER.

- **Resource Management**:
    - CRUD operations for crops, fields, equipment, vehicles, staff, and logs.

## Technologies Used
- **Runtime Environment**: Node.js
- **Security**: Spring Security with JWT
- **Database**: MySQL (configurable)
- **Environment Management**: dotenv

## Setup and Installation Guide

### Ensure you have the following installed:
1. Java 21 or later.
2. Gradle build tool.
3. MySQL database.

### Steps to Run the Project
1. Clone the repository:
   ```bash  
   https://github.com/DasunNirmal/Green-Shadow-With-Prisma.git 
   ```

2. Install dependencies:
   ```run  
    npm install
   ```
3. Set up environment variables in .env file:
   ```
   DATABASE_URL="mysql://your-user-name:your-password@localhost:3306/green_shadow_prisma?createDatabaseIfNotExist=true"
   ```
4. Then run this commands to create the database:
   ```
   npx prisma db push
   npx prisma generate
   ```

## Security and Access Control
GreenShadow API employs Spring Security to ensure secure access to resources. JWT tokens, issued upon successful authentication, are mandatory for accessing protected endpoints.

### User Roles and Permissions
- **ADMIN**: Full access to all endpoints.
- **MANAGER**: Restricted access to certain CRUD operations.
- **SCIENTIST/OTHER**: Limited read/write permissions.
---
