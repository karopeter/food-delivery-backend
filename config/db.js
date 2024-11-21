import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://karopeter531:Timenamoney1313!@cluster0.c3hk4.mongodb.net/food-del').then(() => console.log("DB Connected"))
}