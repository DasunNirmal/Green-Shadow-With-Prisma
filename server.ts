import express from 'express';
import cors from 'cors';
import fieldRoutes from "./routes/field-routes";
import cropsRoutes from "./routes/crops-routes";
import staffRoutes from "./routes/staff-routes";
import vehicleRoutes from "./routes/vehicle-routes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",  // Allow frontend requests
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}));

app.use('/field', fieldRoutes);
app.use('/crops', cropsRoutes);
app.use('/staff', staffRoutes);
app.use('/vehicle', vehicleRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});