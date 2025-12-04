import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error("❌ MONGO_URI missing. Add it in Render environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI, {
      autoIndex: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Mongo connection error:", err.message);
    process.exit(1);
  }
};
