# 🔥 POWA! - Powerlifting Schedule Generator

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<br />

<div align="center">
  <h3>💪 Stronger Every Week</h3>
  <p>A modern web application for generating powerlifting training schedules based on the 5/3/1 methodology</p>
</div>

---

## 📖 About

**POWA!** is a powerlifting schedule generator that creates personalized 3-week training programs based on your one-rep max (1RM) for the big three lifts: Squat, Bench Press, and Deadlift. 

The app uses the proven **5/3/1 method** by Jim Wendler, featuring progressive overload and AMRAP (As Many Reps As Possible) sets to help you build strength consistently.

### ✨ Key Features

- 📝 **Simple Input**: Enter your 1RM for Squat, Bench Press, and Deadlift
- 📊 **Auto Calculation**: Automatically generates 3-week training schedules with proper percentages
- 🎯 **Smart Rounding**: All weights are rounded to the nearest 2.5kg for practical plate loading
- 📄 **PDF Export**: Download your schedule as a professional PDF to take to the gym
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, bold design with powerlifting vibes

---

## 🛠️ Tech Stack

- **Framework**: [React 19.1.1](https://react.dev/) - Modern UI library
- **Build Tool**: [Vite 6.0.0](https://vitejs.dev/) - Lightning-fast development environment
- **Styling**: [Tailwind CSS 4.0.0](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) + [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)

---

## 🎯 Usage

### Step 1: Enter Your 1RM
Input your one-rep max (1RM) in kilograms for:
- Squat
- Bench Press
- Deadlift

### Step 2: Generate Schedule
Click the **"Generate Schedule"** button to create your personalized 3-week training program.

### Step 3: Review Your Program
The app will display a detailed breakdown of:
- **Week 1**: Volume phase (5 reps)
- **Week 2**: Intensity phase (3 reps)
- **Week 3**: Peak phase (1 rep)

Each week includes main working sets and accessory work.

### Step 4: Export to PDF
Click **"Download PDF"** to save your schedule and bring it to the gym!

---

## 📚 Training Methodology

**POWA!** uses the 5/3/1 method, a proven strength training program:

### Week 1 - Volume
- 65% × 5 reps
- 75% × 5 reps
- 85% × 5+ reps (AMRAP)
- 65% × 10 reps × 5 sets (accessory)

### Week 2 - Intensity
- 70% × 3 reps
- 80% × 3 reps
- 90% × 3+ reps (AMRAP)
- 70% × 8 reps × 3 sets (accessory)

### Week 3 - Peak
- 75% × 5 reps
- 85% × 3 reps
- 95% × 1+ rep (AMRAP)
- 67.5% × 5 reps × 4 sets (accessory)

**Note**: The "+" notation means AMRAP (As Many Reps As Possible) - push for as many quality reps as you can!

---

<div align="center">
  <p>Made with 💪 and ❤️ for the powerlifting community</p>
  <p><strong>POWA! - Stronger Every Week</strong></p>
</div>