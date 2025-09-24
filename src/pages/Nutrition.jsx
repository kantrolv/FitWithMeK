// /src/pages/Nutrition.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nutrition.css';

const proteinSources = {
  vegetarian: [
    {
      name: "Legumes & Pulses",
      items: [
        { food: "Soybeans", protein: "28g per cup", benefits: ["Complete protein", "High in fiber", "Rich in iron"] },
        { food: "Lentils", protein: "18g per cup", benefits: ["High in fiber", "Rich in iron", "Low fat"] },
        { food: "Chickpeas", protein: "15g per cup", benefits: ["High in fiber", "Rich in minerals", "Heart healthy"] },
        { food: "Black Beans", protein: "15g per cup", benefits: ["High in antioxidants", "Good for digestion", "Heart healthy"] }
      ]
    },
    {
      name: "Dairy & Alternatives",
      items: [
        { food: "Greek Yogurt", protein: "23g per cup", benefits: ["Probiotics", "Calcium rich", "Low in lactose"] },
        { food: "Cottage Cheese", protein: "28g per cup", benefits: ["Low fat option", "High in calcium", "Quick absorbing"] },
        { food: "Whey Protein", protein: "24g per scoop", benefits: ["Fast absorbing", "All essential amino acids", "Great post-workout"] }
      ]
    },
    {
      name: "Nuts & Seeds",
      items: [
        { food: "Almonds", protein: "6g per oz", benefits: ["Healthy fats", "Vitamin E", "Good for heart"] },
        { food: "Quinoa", protein: "8g per cup", benefits: ["Complete protein", "High in fiber", "Rich in minerals"] },
        { food: "Chia Seeds", protein: "4g per oz", benefits: ["Omega-3 fatty acids", "High in fiber", "Antioxidants"] }
      ]
    }
  ],
  nonVegetarian: [
    {
      name: "Lean Meats",
      items: [
        { food: "Chicken Breast", protein: "26g per 3oz", benefits: ["Low in fat", "Versatile", "Essential amino acids"] },
        { food: "Turkey Breast", protein: "25g per 3oz", benefits: ["Lean protein", "Low calorie", "Rich in B vitamins"] },
        { food: "Lean Beef", protein: "22g per 3oz", benefits: ["Iron rich", "Vitamin B12", "Zinc"] }
      ]
    },
    {
      name: "Fish & Seafood",
      items: [
        { food: "Salmon", protein: "22g per 3oz", benefits: ["Omega-3 fatty acids", "Vitamin D", "Heart healthy"] },
        { food: "Tuna", protein: "25g per 3oz", benefits: ["Low in fat", "High in omega-3s", "B vitamins"] },
        { food: "Shrimp", protein: "20g per 3oz", benefits: ["Low calorie", "Low fat", "Rich in minerals"] }
      ]
    },
    {
      name: "Eggs & Derivatives",
      items: [
        { food: "Whole Eggs", protein: "6g per egg", benefits: ["Complete protein", "Vitamin D", "Omega-3 fatty acids"] },
        { food: "Egg Whites", protein: "3.6g per white", benefits: ["Fat free", "Low calorie", "Pure protein"] }
      ]
    }
  ]
};

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'moderate'
  });
  const [result, setResult] = useState(null);

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  const calculateCalories = (e) => {
    e.preventDefault();
    const { age, gender, weight, height, activityLevel } = formData;
    
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const dailyCalories = Math.round(bmr * activityMultipliers[activityLevel]);
    
    setResult({
      maintenance: dailyCalories,
      weightLoss: dailyCalories - 500,
      weightGain: dailyCalories + 500
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="calorie-calculator">
      <div className="calculator-content">
        <h2>Daily Calorie Calculator</h2>
        <p>Calculate your daily calorie needs based on your goals</p>
        
        <form onSubmit={calculateCalories} className="calculator-form">
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Years"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="kg"
              required
            />
          </div>

          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="cm"
              required
            />
          </div>

          <div className="form-group">
            <label>Activity Level</label>
            <select name="activityLevel" value={formData.activityLevel} onChange={handleInputChange}>
              <option value="sedentary">Sedentary (office job)</option>
              <option value="light">Light Exercise (1-2 days/week)</option>
              <option value="moderate">Moderate Exercise (3-5 days/week)</option>
              <option value="active">Heavy Exercise (6-7 days/week)</option>
              <option value="veryActive">Athlete (2x per day)</option>
            </select>
          </div>

          <button type="submit" className="btn btn--primary">Calculate</button>
        </form>

        {result && (
          <div className="calculator-result">
            <div className="result-card">
              <h3>Maintenance</h3>
              <p className="calories">{result.maintenance}</p>
              <p className="description">Calories/day to maintain weight</p>
            </div>
            <div className="result-card">
              <h3>Weight Loss</h3>
              <p className="calories">{result.weightLoss}</p>
              <p className="description">Calories/day to lose 0.5kg/week</p>
            </div>
            <div className="result-card">
              <h3>Weight Gain</h3>
              <p className="calories">{result.weightGain}</p>
              <p className="description">Calories/day to gain 0.5kg/week</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('vegetarian');

  return (
    <div className="nutrition-container">
      <div className="nutrition-header">
        <h1 className="nutrition-title">Protein-Rich Nutrition Guide</h1>
        <p className="nutrition-subtitle">
          Discover the best protein sources for your fitness journey, whether you're vegetarian or non-vegetarian.
          Our comprehensive guide helps you make informed choices for optimal muscle growth and recovery.
        </p>
      </div>

      <CalorieCalculator />

      <div className="nutrition-tabs">
        <button 
          className={`tab-btn ${activeTab === 'vegetarian' ? 'active' : ''}`}
          onClick={() => setActiveTab('vegetarian')}
        >
          Vegetarian Sources
        </button>
        <button 
          className={`tab-btn ${activeTab === 'nonVegetarian' ? 'active' : ''}`}
          onClick={() => setActiveTab('nonVegetarian')}
        >
          Non-Vegetarian Sources
        </button>
      </div>

      <div className="nutrition-content">
        <div className="protein-categories">
          {proteinSources[activeTab].map((category, index) => (
            <div key={index} className="protein-category">
              <h2 className="category-title">{category.name}</h2>
              <div className="food-items-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="food-card">
                    <h3 className="food-name">{item.food}</h3>
                    <div className="protein-content">
                      <span className="protein-label">Protein:</span>
                      <span className="protein-value">{item.protein}</span>
                    </div>
                    <ul className="benefits-list">
                      {item.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="nutrition-tips">
        <h2>Pro Tips for Protein Intake</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">⚡</span>
            <h3>Timing Matters</h3>
            <p>Consume protein within 30 minutes post-workout for optimal muscle recovery</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">📊</span>
            <h3>Daily Intake</h3>
            <p>Aim for 1.6-2.2g of protein per kg of body weight for muscle growth</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🔄</span>
            <h3>Spread It Out</h3>
            <p>Distribute protein intake evenly throughout the day for better absorption</p>
          </div>
        </div>
      </div>

      <div className="nutrition-cta">
        <h2>Need a Personalized Nutrition Plan?</h2>
        <p>Get expert guidance on protein intake and meal planning tailored to your goals</p>
        <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
      </div>
    </div>
  );
};

export default Nutrition;
