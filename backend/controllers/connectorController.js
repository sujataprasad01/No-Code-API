// CRUD Logic
const Connector = require("../models/Connector");

// Create connector
exports.createConnector = async (req, res) => {
  try {
    console.log("📩 Incoming request body:", req.body);

    const connector = await Connector.create({
      userId: "test-user", // temp for testing
      ...req.body,
    });

    console.log("✅ Connector created successfully:", connector);
    res.status(201).json(connector);
  } catch (err) {
    console.error("❌ Error in createConnector:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all connectors
exports.getConnectors = async (req, res) => {
  try {
    console.log("🔎 Fetching connectors for user:", req.auth?.userId);

    const connectors = await Connector.find({
      userId: "test-user",
    });

    console.log("📦 Connectors found:", connectors.length);
    res.json(connectors);
  } catch (err) {
    console.error("❌ Error in getConnectors:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Update connector
exports.updateConnector = async (req, res) => {
  try {
    console.log("✏️ Update request:", req.params.id, req.body);

    const connector = await Connector.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.auth?.userId || "test-user",
      },
      req.body,
      { new: true }
    );

    console.log("✅ Connector updated:", connector);
    res.json(connector);
  } catch (err) {
    console.error("❌ Error in updateConnector:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Delete connector
exports.deleteConnector = async (req, res) => {
  try {
    console.log("🗑️ Delete request for:", req.params.id);

    await Connector.findOneAndDelete({
      _id: req.params.id,
      userId: req.auth?.userId || "test-user",
    });

    console.log("✅ Connector deleted:", req.params.id);
    res.json({ message: "Connector deleted" });
  } catch (err) {
    console.error("❌ Error in deleteConnector:", err.message);
    res.status(500).json({ error: err.message });
  }
};
