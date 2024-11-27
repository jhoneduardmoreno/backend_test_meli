# Mercado Libre Challenge - Backend

This project is the backend implementation for Mercado Libre's technical challenge, built with [NestJS](https://nestjs.com/). The server provides a REST API that serves as an intermediary between the frontend and the Mercado Libre API.

## Features

- Mercado Libre API integration
- Product search endpoints
- Product details endpoints
- Centralized error handling


## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/jhoneduardmoreno/backend_test_meli.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the server
   ```bash
   # development (port 8000)
   npm run start

   # watch mode
   npm run start:dev

   # production mode
   npm run start:prod
   ```

4. The API will be available at [http://localhost:8000](http://localhost:8000)

## Main Endpoints

```
GET /api/items?q=:query - Search products
GET /api/items/:id - Get product details
```

## Available Scripts

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Technologies Used

- NestJS
- TypeScript
- Class Validator
- Class Transformer
- Axios

## Project Structure

```
src/
├── config/         # Configurations
├── controllers/    # Controllers
├── services/      # Services
├── interfaces/    # Interfaces and types
├── dto/           # Data Transfer Objects
├── filters/       # Exception filters
├── interceptors/  # Interceptors
├── decorators/    # Custom decorators
└── main.ts        # Entry point
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.