require("dotenv").config();
const express=require("express");
const connectDB=require("./config/db");
const connectorRoutes=require("./routes/connectorRoutes");
const app=express();

// Connect to DB
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/connectors", connectorRoutes);

// Health cherk (optional)
app.get("/", (req, res)=>{
    res.send("API is running...");
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});