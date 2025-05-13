const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// CORS Configuration - Fixed syntax and structure
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://naresh-front-dev.github.io",
    "https://flight-booking-react-project-3.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// Your original flight data remains unchanged
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
]; // Keep all your existing flight data here

// Fixed filterFlights function (same logic, just cleaner)
function filterFlights(query) {
  return flights.filter((flight) => {
    if (query.from && flight.departure.city.toLowerCase() !== query.from.toLowerCase())
      return false;
    if (query.to && flight.arrival.city.toLowerCase() !== query.to.toLowerCase())
      return false;
    if (query.date && flight.departure.date !== query.date)
      return false;
    if (query.cabin_class && flight.cabin_class.toLowerCase() !== query.cabin_class.toLowerCase())
      return false;
    if (query.airline && flight.airline.toLowerCase() !== query.airline.toLowerCase())
      return false;
    if (query.min_price && flight.price.amount < parseInt(query.min_price))
      return false;
    if (query.max_price && flight.price.amount > parseInt(query.max_price))
      return false;
    return true;
  });
}

// Main endpoint - Fixed with better error handling
app.get("/", (req, res) => {
  try {
    const { from, to, date, cabin_class, airline, min_price, max_price } = req.query;

    const filteredFlights = filterFlights({
      from,
      to,
      date,
      cabin_class,
      airline,
      min_price,
      max_price
    });

    setTimeout(() => {
      res.json(filteredFlights);
    }, 1500);

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server - Added '0.0.0.0' for better deployment compatibility
app.listen(port, '0.0.0.0', () => {
  console.log(`Flight search API is running at http://localhost:${port}`);
});