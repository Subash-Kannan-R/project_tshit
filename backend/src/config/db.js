import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://subashkannan0309_db_user:YOUR_PASSWORD@cluster0.knjnkt5.mongodb.net/tshirtDB?retryWrites=true&w=majority&appName=Cluster0
';
  try {
    await mongoose.connect(MONGO_URI, {
      autoIndex: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  }
};
