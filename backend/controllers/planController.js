import YogaPlan from "../models/Plan.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendSMS } from "../utils/sendSMS.js";

export const createPlan = async (req, res) => {
  try {
    const {
      planName,
      yogaType,
      meditationTime,
      durationWeeks,
      dailySchedule,
      notes,
    } = req.body;

    const plan = new YogaPlan({
      user: req.user.id,
      planName,
      yogaType,
      meditationTime,
      durationWeeks,
      dailySchedule,
      notes,
    });

    await plan.save();

    // ✅ Send Email (make sure req.user.email and req.user.name exist)
    if (req.user.email) {
      await sendEmail(
        req.user.email,
        "🧘 Yoga Plan Created Successfully",
        `Hi ${req.user.name || "User"},\n\nYour yoga plan "${
          plan.planName
        }" has been created successfully!\nKeep practicing and stay consistent.\n\n- Yoga Planner App`
      );
    }

    // ✅ Send SMS (make sure req.user.phone exists)
    if (req.user.phone) {
      await sendSMS(
        req.user.phone,
        `Hi ${req.user.name || "User"}, your yoga plan "${
          plan.planName
        }" is ready! Stay consistent 🧘‍♂️`
      );
    }

    res.status(201).json({
      message: "Plan created successfully. Email & SMS sent!",
      plan,
    });
  } catch (err) {
    console.error("❌ Error creating plan:", err);
    res
      .status(500)
      .json({ message: "Error creating plan", error: err.message });
  }
};

export const getPlans = async (req, res) => {
  try {
    const plans = await YogaPlan.find({ user: req.user.id });
    res.json(plans);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching plans", error: err.message });
  }
};

export const deletePlan = async (req, res) => {
  try {
    await YogaPlan.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting plan", error: err.message });
  }
};

// mark as completed
export const markPlanCompleted = async (req, res) => {
  try {
    const plan = await YogaPlan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    plan.completed = true;
    await plan.save();

    // sending mail notification for completion
    if (req.user.email) {
      await sendEmail(
        req.user.email,
        "🧘 Yoga Plan Completed",
        `Hi ${req.user.name || "User"},\n\nYour yoga plan "${
          plan.planName
        }" has been marked as completed!\nKeep practicing and stay consistent.\n\n- Yoga Planner App`
      );
    }

    res.json({ message: "Plan marked as completed", plan });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error marking plan as completed", error: err.message });
  }
};


// Get plan statistics
export const getPlanStats = async (req, res) => {
  try {
    const totalPlans = await YogaPlan.countDocuments({ user: req.user.id });
    const completedPlans = await YogaPlan.countDocuments({ 
      user: req.user.id, 
      completed: true 
    });
    const pendingPlans = totalPlans - completedPlans;
    const completionRate = totalPlans > 0 ? (completedPlans / totalPlans) * 100 : 0;

    res.json({
      totalPlans,
      completedPlans,
      pendingPlans,
      completionRate: Math.round(completionRate * 100) / 100 // Round to 2 decimal places
    });
  } catch (err) {
    res.status(500).json({ 
      message: "Error fetching plan statistics", 
      error: err.message 
    });
  }
};