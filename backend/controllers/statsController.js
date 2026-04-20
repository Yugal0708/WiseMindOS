import dailyStatsModel from '../models/dailyStatsModel.js';

// SAVE TODAY'S STATS
const saveDailyStats = async (req, res) => {
  try {
    const { productivity, discipline } = req.body;
    const userId = req.body.userId || req.headers.userid;

    if (productivity === undefined || discipline === undefined) {
      return res.json({ success: false, message: 'Scores are required' });
    }

    // ✅ Normalize date (IMPORTANT for unique index)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await dailyStatsModel.findOneAndUpdate(
      { userId, date: today },
      {
        productivity,
        discipline
      },
      {
        upsert: true,
        new: true
      }
    );

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// ✅ GET LAST 7 DAYS STATS
const getWeeklyStats = async (req, res) => {
  try {
    const userId = req.body.userId || req.headers.userid;

    const stats = await dailyStatsModel
      .find({ userId })
      .sort({ date: 1 }); // oldest → newest

    res.json({ success: true, data: stats });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { saveDailyStats, getWeeklyStats };