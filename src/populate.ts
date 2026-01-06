
import "dotenv/config";
import connectDB from "./config/connect";
import Car from "./models/Car";

const cars = [
  {
    name: "Model S",
    price: 79999,
    featured: true,
    rating: 4.9,
    company: "tesla",
  },
  {
    name: "Model 3",
    price: 42999,
    featured: false,
    rating: 4.8,
    company: "tesla",
  },
  {
    name: "Model X",
    price: 89999,
    featured: true,
    rating: 4.7,
    company: "tesla",
  },
  {
    name: "Model Y",
    price: 50999,
    featured: false,
    rating: 4.6,
    company: "tesla",
  },
  {
    name: "Cybertruck",
    price: 69999,
    featured: true,
    rating: 4.5,
    company: "tesla",
  },

  {
    name: "3 Series",
    price: 40999,
    featured: false,
    rating: 4.2,
    company: "bmw",
  },
  {
    name: "5 Series",
    price: 53999,
    featured: true,
    rating: 4.4,
    company: "bmw",
  },
  { name: "X3", price: 46999, featured: false, rating: 4.1, company: "bmw" },
  { name: "X5", price: 60999, featured: true, rating: 4.6, company: "bmw" },
  { name: "i4", price: 55999, featured: true, rating: 4.5, company: "bmw" },

  {
    name: "Corolla",
    price: 19999,
    featured: false,
    rating: 4.3,
    company: "toyota",
  },
  {
    name: "Camry",
    price: 24999,
    featured: true,
    rating: 4.4,
    company: "toyota",
  },
  {
    name: "RAV4",
    price: 27999,
    featured: false,
    rating: 4.2,
    company: "toyota",
  },
  {
    name: "Highlander",
    price: 35999,
    featured: true,
    rating: 4.5,
    company: "toyota",
  },
  {
    name: "Prius",
    price: 23999,
    featured: false,
    rating: 4.0,
    company: "toyota",
  },
  { name: "A3", price: 33999, featured: false, rating: 4.1, company: "audi" },
  { name: "A4", price: 35999, featured: true, rating: 4.5, company: "audi" },
  { name: "Q5", price: 43999, featured: false, rating: 4.4, company: "audi" },
  { name: "Q7", price: 54999, featured: true, rating: 4.7, company: "audi" },
  {
    name: "e-tron",
    price: 65999,
    featured: true,
    rating: 4.6,
    company: "audi",
  },
];

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    await Car.create(cars);
    console.log("Cars added...");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

populate();