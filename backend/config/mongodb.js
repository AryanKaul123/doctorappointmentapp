import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      ssl: true,
      tlsAllowInvalidCertificates: false,
    });
  } catch (error) {
    console.error("❌ Initial MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
