# Car-Backend

A Node.js backend API for managing car data. This project uses Express and Mongoose to provide a RESTful API for car resources.

## Project Structure

- **index.js**: Main entry point that sets up the Express server and connects to the database.
- **connect.js**: Handles the MongoDB connection using Mongoose.
- **routes/cars.js**: Defines the API routes for car resources.
- **controllers/cars.js**: Contains the logic for handling car-related requests.
- **models/Car.js**: Defines the Mongoose schema for the Car model.
- **middlewares/notFound.js**: Middleware for handling undefined routes.
- **populate.js**: Script to seed the database with initial car data.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```

## API Documentation

### GET /api/v1/cars

Retrieves a list of cars. Supports query parameters for filtering, sorting, and pagination.

**Query Parameters:**

- `featured`: Filter by featured status (true/false).
- `name`: Filter by car name (case-insensitive).
- `sort`: Sort the results by specified fields (e.g., `sort=price,-rating`).
- `select`: Select specific fields to return (e.g., `select=name,price`).
- `numericFilters`: Filter by numeric fields using operators (e.g., `numericFilters=price-$gt-30,rating-$gt-5`).
- `page`: Page number for pagination (default: 1).
- `limit`: Number of items per page (default: 10).

**Response:**

```json
{
  "nbHits": 10,
  "cars": [
    {
      "name": "Model S",
      "price": 79999,
      "featured": true,
      "rating": 4.9,
      "company": "tesla"
    }
    // ... more cars
  ]
}
```

## Error Handling

- If a route is not defined, the server returns a 404 status with the message "Path not defined".

## Database Seeding

To populate the database with initial car data, run:

```bash
pnpm populate
```

## License

ISC
