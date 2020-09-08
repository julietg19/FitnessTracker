const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    date: {
      type: Date,
      default: () => new Date(),
    },

    exercises: [
      {
        type: {
          type: String,

          trim: true,

          required: "please enter exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "please enter a name for the exercise",
        },
        duration: {
          type: umber,
          required: "please enter duration of exercise",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(() => {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});