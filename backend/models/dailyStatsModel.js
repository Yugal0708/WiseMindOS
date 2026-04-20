import mongoose from 'mongoose';

const dailyStatsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  productivity: {
    type: Number,
    required: true
  },

  discipline: {
    type: Number,
    required: true
  }

}, { minimize: false });

// unique per day
dailyStatsSchema.index({ userId: 1, date: 1 }, { unique: true });

// auto delete after 7 days
dailyStatsSchema.index(
  { date: 1 },
  { expireAfterSeconds: 7 * 24 * 60 * 60 }
);

// CREATE MODEL (IMPORTANT)
const dailyStatsModel =
  mongoose.models.dailyStats || mongoose.model('dailyStats', dailyStatsSchema);

// EXPORT DEFAULT (IMPORTANT)
export default dailyStatsModel;