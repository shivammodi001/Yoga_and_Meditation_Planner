import mongoose from "mongoose";

const yogaPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",        // connects plan to specific user
    required: true
  },
  planName: {
    type: String,
    required: true
  },
  yogaType: {
    type: String,        // e.g. "Hatha", "Ashtanga", "Vinyasa"
    required: true
  },
  meditationTime: {
    type: Number,        // in minutes
    default: 0
  },
  durationWeeks: {
    type: Number,
    default: 4
  },
  dailySchedule: {
    type: [String],      // e.g. ["Monday", "Wednesday", "Friday"]
    default: []
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("YogaPlan", yogaPlanSchema);