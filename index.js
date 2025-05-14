const dotenv = require("dotenv");
const express = require("express");
// const bodyParser = require("body-parser"); // Explicitly require body-parser
const app = express();
dotenv.config();
const port = 3000;

// Middleware

const cors = require("cors");

// Configure CORS middleware
app.use(cors({
  origin: "*"
}));;


app.use(express.json()); // for parsing application/json

// Sample flight data (in-memory database)
const flights = [
  {
    "flight_id": "AI202",
    "airline": "Air India",
    "departure": {
      "airport": "DEL",
      "city": "Delhi",
      "country": "India",
      "date": "2025-05-07",
      "time": "06:30"
    },
    "arrival": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-05-07",
      "time": "08:00"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Boeing 787",
      "capacity": 256
    },
    "cabin_class": "Economy",
    "price": {
      "currency": "INR",
      "amount": 5000
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "AI204",
    "airline": "Indigo",
    "departure": {
      "airport": "DEL",
      "city": "Delhi",
      "country": "India",
      "date": "2025-05-07",
      "time": "07:30"
    },
    "arrival": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-05-07",
      "time": "09:00"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Boeing 787",
      "capacity": 256
    },
    "cabin_class": "Bussiness",
    "price": {
      "currency": "INR",
      "amount": 8000
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "6E202",
    "airline": "Indigo",
    "departure": {
      "airport": "DEL",
      "city": "Delhi",
      "country": "India",
      "date": "2025-05-10",
      "time": "08:30"
    },
    "arrival": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-05-03",
      "time": "10:00"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "Business",
    "price": {
      "currency": "INR",
      "amount": 5250
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "AI205",
    "airline": "Air India",
    "departure": {
      "airport": "DEL",
      "city": "New Delhi",
      "country": "India",
      "date": "2025-03-19",
      "time": "12:15"
    },
    "arrival": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-03-19",
      "time": "13:45"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "First Class",
    "price": {
      "currency": "INR",
      "amount": 8400
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "AI301",
    "airline": "Air India",
    "departure": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-03-19",
      "time": "06:00"
    },
    "arrival": {
      "airport": "BLR",
      "city": "Bengaluru",
      "country": "India",
      "date": "2025-03-19",
      "time": "07:30"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Boeing 777",
      "capacity": 350
    },
    "cabin_class": "Economy",
    "price": {
      "currency": "INR",
      "amount": 6500
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "2 bags (23 kg each)"
    }
  },
  {
    "flight_id": "G8 510",
    "airline": "GoAir",
    "departure": {
      "airport": "MAA",
      "city": "Chennai",
      "country": "India",
      "date": "2025-05-10",
      "time": "08:45"
    },
    "arrival": {
      "airport": "DEL",
      "city": "Delhi",
      "country": "India",
      "date": "2025-03-19",
      "time": "10:30"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "Business",
    "price": {
      "currency": "INR",
      "amount": 5250
    },
    "flight_duration": "2h 15m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "6E308",
    "airline": "Indigo",
    "departure": {
      "airport": "BLR",
      "city": "Bengaluru",
      "country": "India",
      "date": "2025-03-19",
      "time": "07:00"
    },
    "arrival": {
      "airport": "MAA",
      "city": "Chennai",
      "country": "India",
      "date": "2025-03-19",
      "time": "08:30"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "Economy",
    "price": {
      "currency": "INR",
      "amount": 2900
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "AI907",
    "airline": "Air India",
    "departure": {
      "airport": "CCU",
      "city": "Kolkata",
      "country": "India",
      "date": "2025-03-19",
      "time": "06:00"
    },
    "arrival": {
      "airport": "DEL",
      "city": "New Delhi",
      "country": "India",
      "date": "2025-03-19",
      "time": "07:45"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Boeing 777",
      "capacity": 350
    },
    "cabin_class": "First Class",
    "price": {
      "currency": "INR",
      "amount": 11200
    },
    "flight_duration": "1h 45m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "2 bags (23 kg each)"
    }
  },
  {
    "flight_id": "6E403",
    "airline": "Indigo",
    "departure": {
      "airport": "BOM",
      "city": "Mumbai",
      "country": "India",
      "date": "2025-05-10",
      "time": "09:00"
    },
    "arrival": {
      "airport": "BLR",
      "city": "Bengaluru",
      "country": "India",
      "date": "2025-05-10",
      "time": "10:30"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "Business",
    "price": {
      "currency": "INR",
      "amount": 5700
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "1 bag (20 kg)"
    }
  },
  {
    "flight_id": "UK802",
    "airline": "Vistara",
    "departure": {
      "airport": "BLR",
      "city": "Bengaluru",
      "country": "India",
      "date": "2025-03-19",
      "time": "10:00"
    },
    "arrival": {
      "airport": "DEL",
      "city": "New Delhi",
      "country": "India",
      "date": "2025-03-19",
      "time": "11:30"
    },
    "status": "On Time",
    "aircraft": {
      "model": "Airbus A320",
      "capacity": 180
    },
    "cabin_class": "First Class",
    "price": {
      "currency": "INR",
      "amount": 8000
    },
    "flight_duration": "1h 30m",
    "baggage_allowance": {
      "carry_on": "1 bag (7 kg)",
      "checked": "2 bags (23 kg each)"
    }
  }
];

// Flight search route

// Filter function for flights
function filterFlights(query) {
  return flights.filter((flight) => {
    // From city filter
    if (
      query.from &&
      query.from.toLowerCase() &&
      flight.departure.city.toLowerCase() !== query.from.toLowerCase()
    )
      return false;

    // To city filter
    if (
      query.to &&
      query.to.toLowerCase() &&
      flight.arrival.city.toLowerCase() !== query.to.toLowerCase()
    )
      return false;

    // Date filter
    if (query.date && flight.departure.date !== query.date) return false;

    // Cabin class filter
    if (
      query.cabin_class &&
      query.cabin_class.toLowerCase() &&
      flight.cabin_class.toLowerCase() !== query.cabin_class.toLowerCase()
    )
      return false;

    // Airline filter
    if (
      query.airline &&
      query.airline.toLowerCase() &&
      flight.airline.toLowerCase() !== query.airline.toLowerCase()
    )
      return false;

    // Price filter (min and max price)
    if (query.min_price && flight.price.amount < query.min_price) return false;
    if (query.max_price && flight.price.amount > query.max_price) return false;

    return true;
  });
}

// API endpoint for searching flights
app.get("/", async (req, res) => {
  const { from, to, date, cabin_class, airline, min_price, max_price } =
    req.query;
  console.log(req.query);
  // Filter flights based on the query parameters
  const filteredFlights = await filterFlights({
    from,
    to,
    date,
    cabin_class,
    airline,
    min_price: min_price ? parseInt(min_price) : undefined,
    max_price: max_price ? parseInt(max_price) : undefined,
  });

  setTimeout(() => {
    res.json(filteredFlights);
  }, 1500);
});

// Debugging: Log the filtered flights
// console.log("Filtered flights:", filteredFlights);

// Send response with filtered flights after 1 second (to simulate a delay)
//   setTimeout(() => {
//     if (filteredFlights.length === 0) {
//       return res.status(404).json({ message: "No flights found for the given criteria." });
//     }
// 
//     res.status(200).json(filteredFlights);
//   }, 1000);
// });nodemon index.js

// Root route for testing
// app.get("/", (req, res) => {
//   res.send(flights);
// });
// 
// // Start the server
app.listen(port, () => {
  console.log(`Flight search API is running at http://localhost:${port}`);
});
// npm run server