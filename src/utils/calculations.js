// src/utils/calculations.js
export const roundToNearest2_5 = (weight) => {
  return Math.round(weight / 2.5) * 2.5;
};

export const calculateSchedule = (orm, liftType) => {
  // Template jadwal 3 minggu berdasarkan metode 5/3/1
  const weeks = [
    {
      week: 1,
      sets: [
        { percentage: 65, reps: '5', setCount: 1 },
        { percentage: 75, reps: '5', setCount: 1 },
        { percentage: 85, reps: '5+', setCount: 1 },
        { percentage: 65, reps: '8+', setCount: 5 }
      ]
    },
    {
      week: 2,
      sets: [
        { percentage: 70, reps: '3', setCount: 1 },
        { percentage: 80, reps: '3', setCount: 1 },
        { percentage: 90, reps: '3+', setCount: 1 },
        { percentage: 70, reps: '8+', setCount: 3 }
      ]
    },
    {
      week: 3,
      sets: [
        { percentage: 75, reps: '5', setCount: 1 },
        { percentage: 85, reps: '3', setCount: 1 },
        { percentage: 95, reps: '1+', setCount: 1 },
        { percentage: 70, reps: '8+', setCount: 4 }
      ]
    }
  ];

  // Hitung weight untuk setiap set berdasarkan percentage
  return weeks.map(week => ({
    ...week,
    liftType,
    sets: week.sets.map(set => ({
      ...set,
      weight: roundToNearest2_5((set.percentage / 100) * orm)
    }))
  }));
};