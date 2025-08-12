import mongoose from "mongoose";

const slotBookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true, 
    },
    time: {
      type: String,
      required: true, 
    },
    bookedBy: {
      type: String, 
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true, 
  }
);

slotBookingSchema.index({ date: 1, time: 1, sport: 1 }, { unique: true });

export default mongoose.model("SlotBooking", slotBookingSchema);