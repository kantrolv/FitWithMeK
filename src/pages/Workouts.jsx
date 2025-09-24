// /src/pages/Workouts.jsx
import React, { useState } from 'react';
import '../styles/Workouts.css';

const exercisesByGroup = {
  'Chest': [
    {
      title: 'Upper Chest (Clavicular Head)',
      exercises: [
        'Incline Barbell Bench Press',
        'Incline Dumbbell Bench Press',
        'Incline Machine Press',
        'Incline Cable Fly',
        'Incline Dumbbell Fly',
        'Incline Smith Machine Press',
        'Reverse-Grip Bench Press',
        'Landmine Chest Press (high angle)'
      ]
    },
    {
      title: 'Middle Chest (Sternal Head)',
      exercises: [
        'Flat Barbell Bench Press',
        'Flat Dumbbell Bench Press',
        'Flat Dumbbell Fly',
        'Cable Crossover (mid-pulley)',
        'Chest Press Machine (horizontal)',
        'Push-Ups (standard)',
        'Smith Machine Bench Press',
        'Resistance Band Chest Press'
      ]
    },
    {
      title: 'Lower Chest (Costal Head)',
      exercises: [
        'Decline Barbell Bench Press',
        'Decline Dumbbell Press',
        'Decline Dumbbell Fly',
        'Cable Crossover (high to low)',
        'Chest Dips (leaning forward)',
        'Incline Push-Ups (feet elevated)',
        'Decline Machine Press'
      ]
    },
    {
      title: 'Inner Chest',
      exercises: [
        "Pec Deck Machine (with squeeze at top)",
        'Cable Crossover (hands cross over)',
        'Plate Squeeze Press',
        'Close-Grip Push-Ups',
        'Inner Dumbbell Press (dumbbells touching throughout)'
      ]
    },
    {
      title: 'Outer Chest',
      exercises: [
        'Wide-Grip Bench Press',
        'Dumbbell Fly (with deep stretch)',
        'Cable Fly (full ROM)',
        'Chest Dips (wide grip)'
      ]
    },
    {
      title: 'Full Chest / Compound Movements',
      exercises: [
        'Barbell Bench Press (flat/incline/decline)',
        'Dumbbell Bench Press (all angles)',
        'Push-Ups (and variations)',
        'Dips',
        'Machine Chest Press',
        'Cable Crossovers (varied angles)'
      ]
    },
    {
      title: 'Bodyweight Chest Exercises',
      exercises: [
        'Standard Push-Ups',
        'Incline Push-Ups',
        'Decline Push-Ups',
        'Wide Push-Ups',
        'Archer Push-Ups',
        'Diamond Push-Ups',
        'Pseudo Planche Push-Ups',
        'Chest Dips'
      ]
    },
    {
      title: 'Unique & Isolation Chest Exercises',
      exercises: [
        'Svend Press (plate press)',
        'Standing Cable Chest Press',
        'Isometric Chest Squeeze',
        'Resistance Band Fly',
        'One-Arm Cable Crossover'
      ]
    }
  ],
  'Back': [
    {
      title: 'Upper Back (Traps, Rhomboids, Rear Delts)',
      exercises: [
        'Face Pulls',
        'Bent-over Rear Delt Fly',
        'Reverse Pec Deck Machine',
        'High Cable Row',
        'Band Pull-Aparts',
        'Barbell Shrugs',
        'Dumbbell Shrugs',
        'Snatch-Grip High Pull',
        'Scapular Pull-Ups',
        'T-Bar Row (upper grip focus)'
      ]
    },
    {
      title: 'Lats (Latissimus Dorsi)',
      exercises: [
        'Pull-Ups (wide grip)',
        'Chin-Ups (close grip)',
        'Lat Pulldown (wide grip)',
        'Dumbbell Rows',
        'Barbell Rows',
        'T-Bar Rows',
        'Cable Rows (seated)',
        'Straight-Arm Pulldown',
        'Meadows Row',
        'Kroc Row'
      ]
    },
    {
      title: 'Lower Back (Erector Spinae)',
      exercises: [
        'Deadlifts (conventional)',
        'Romanian Deadlifts',
        'Good Mornings',
        'Back Extensions (hyperextensions)',
        'Superman Hold',
        'Barbell Good Mornings',
        'Trap Bar Deadlift',
        'Reverse Hyperextensions',
        'Bird-Dog',
        'Cable Pull-Through'
      ]
    },
    {
      title: 'Full Back / Compound Movements',
      exercises: [
        'Deadlifts',
        'Rack Pulls',
        'Pendlay Row',
        'Yates Row',
        'One-Arm Dumbbell Row',
        'Chest-Supported Row',
        'Landmine Row',
        'Inverted Rows (bodyweight)',
        'Renegade Row',
      ]
    },
    {
      title: 'Bodyweight Back Exercises',
      exercises: [
        'Pull-Ups',
        'Inverted Rows',
        'Superman',
        'Bridge (for spinal support)',
        'Bird-Dog',
        'Wall Angels',
        'Isometric Towel Rows',
        'Scapular Push-ups',
        'Resistance Band Rows',
        'Doorway Rows'
      ]
    }
  ],
  'Legs': [
    {
      title: 'QUADRICEPS (Front Thigh)',
      exercises: [
        'Barbell Back Squat',
        'Front Squat',
        'Dumbbell Goblet Squat',
        'Leg Press',
        'Walking Lunges',
        'Bulgarian Split Squat',
        'Step-Ups',
        'Sissy Squat',
        'Hack Squat (machine or barbell)',
        'Split Squat (static lunge)',
        'Smith Machine Squat',
        'Resistance Band Squats'
      ]
    },
    {
      title: 'HAMSTRINGS (Back Thigh)',
      exercises: [
        'Romanian Deadlifts (RDLs)',
        'Stiff-Leg Deadlifts',
        'Good Mornings',
        'Lying Leg Curl (machine)',
        'Seated Leg Curl',
        'Nordic Hamstring Curl',
        'Kettlebell Swings',
        'Glute-Ham Raise',
        'Cable Hamstring Curl (standing or lying)',
        'Bridge Hamstring Curl (sliders or stability ball)'
      ]
    },
    {
      title: 'GLUTES (Butt)',
      exercises: [
        'Barbell Hip Thrust',
        'Glute Bridge',
        'Kettlebell Swings',
        'Bulgarian Split Squat (deep)',
        'Cable Kickbacks',
        'Reverse Lunge',
        'Sumo Deadlift',
        'Step-Ups',
        'Frog Pumps',
        'Donkey Kicks',
        'Resistance Band Lateral Walks',
        'Single-Leg Glute Bridge'
      ]
    },
    {
      title: 'CALVES',
      exercises: [
        'Standing Calf Raise (bodyweight, barbell, or dumbbells)',
        'Seated Calf Raise',
        'Leg Press Calf Raise',
        'Donkey Calf Raise',
        'Smith Machine Calf Raise',
        'Single-Leg Calf Raise',
        'Jump Rope',
        'Tip-Toe Farmer\'s Walk',
        'Resistance Band Calf Flexion',
        'Stair Calf Raises'
      ]
    },
    {
      title: 'ADDUCTORS & ABDUCTORS (Inner/Outer Thighs & Hips)',
      exercises: [
        'Side-Lying Leg Raises',
        'Sumo Squats',
        'Cable Hip Abduction/Adduction',
        'Seated Abduction Machine',
        'Standing Resistance Band Abductions',
        'Lateral Lunges (Side Lunges)',
        'Cossack Squat',
        'Banded Side Steps',
        'Monster Walks (banded)'
      ]
    },
    {
      title: 'BODYWEIGHT LEG EXERCISES (No Equipment)',
      exercises: [
        'Air Squats',
        'Wall Sit',
        'Lunges (forward, backward, side)',
        'Jump Squats',
        'Step-Ups (on bench or stair)',
        'Pistol Squats (advanced)',
        'Glute Bridges',
        'Single-Leg Glute Bridge',
        'Calf Raises',
        'Wall Lunge Hold'
      ]
    },
    {
      title: 'COMPOUND LEG MOVEMENTS',
      exercises: [
        'Barbell Squat (back/front)',
        'Deadlifts (conventional, sumo)',
        'Leg Press',
        'Lunges (all forms)',
        'Bulgarian Split Squat',
        'Hip Thrusts'
      ]
    }
  ],
  'Shoulders': [
    {
      title: 'FRONT DELTS (Anterior Deltoid)',
      exercises: [
        'Front Dumbbell Raise',
        'Barbell Front Raise',
        'Arnold Press',
        'Overhead Press (Barbell or Dumbbell)',
        'Military Press',
        'Landmine Press',
        'Cable Front Raise',
        'Plate Raise',
        'Incline Front Raise',
        'Z-Press (Seated Barbell Press on Floor)'
      ]
    },
    {
      title: 'SIDE DELTS (Lateral Deltoid)',
      exercises: [
        'Lateral Raise (Dumbbell)',
        'Cable Lateral Raise',
        'Machine Lateral Raise',
        'Lean-Away Lateral Raise',
        'Kettlebell Lateral Raise',
        'Resistance Band Lateral Raise',
        'Standing or Seated DB Lateral Raise',
        'Behind-the-Back Cable Raise',
        'Single-Arm Cable Raise (cross-body)'
      ]
    },
    {
      title: 'REAR DELTS (Posterior Deltoid)',
      exercises: [
        'Reverse Fly (Dumbbell or Machine)',
        'Bent-Over Dumbbell Lateral Raise',
        'Face Pulls (Cable with rope)',
        'Rear Delt Cable Fly',
        'Reverse Pec Deck Machine',
        'Rear Delt Row',
        'Incline Reverse Fly',
        'Band Pull-Aparts',
        'T Raises',
        'Prone Y Raises'
      ]
    },
    {
      title: 'COMPOUND SHOULDER MOVEMENTS (Multiple Heads)',
      exercises: [
        'Overhead Press (Barbell or Dumbbell)',
        'Push Press',
        'Arnold Press',
        'Seated Military Press',
        'Landmine Press',
        'Dumbbell Clean & Press',
        'Single-Arm Dumbbell Press',
        'Handstand Push-Ups (Advanced)'
      ]
    },
    {
      title: 'BODYWEIGHT SHOULDER EXERCISES',
      exercises: [
        'Pike Push-Ups',
        'Handstand Push-Ups',
        'Wall Walks',
        'Divebomber Push-Ups',
        'Shoulder Taps (Plank position)',
        'Bodyweight Lateral Raises (on floor or bands)',
        'Wall Slides'
      ]
    },
    {
      title: 'MACHINE & CABLE SHOULDER EXERCISES',
      exercises: [
        'Machine Shoulder Press',
        'Cable Lateral Raise',
        'Cable Front Raise',
        'Cable Rear Delt Fly',
        'Pec Deck Reverse Fly (Rear Delt)',
        'Face Pull (Cable with rope)'
      ]
    },
    {
      title: 'STABILIZATION & ISOLATION EXERCISES',
      exercises: [
        'Overhead Carries (Farmer\'s Walk)',
        'Turkish Get-Up',
        'Bottoms-Up Kettlebell Press',
        'Band Shoulder External Rotations',
        'Band Shoulder Internal Rotations',
        'YTW Raises (Bodyweight or Dumbbell)'
      ]
    }
  ],
  'Arms': [
    {
      title: 'BICEPS (Front of Upper Arm)',
      exercises: [
        // Dumbbell / Barbell
        'Barbell Curl',
        'Dumbbell Bicep Curl',
        'Hammer Curl',
        'Concentration Curl',
        'Incline Dumbbell Curl',
        'Zottman Curl',
        'Preacher Curl (Barbell/Dumbbell)',
        'EZ-Bar Curl',
        'Drag Curl',
        // Cable / Machine / Band
        'Cable Curl',
        'Rope Hammer Curl (cable)',
        'Overhead Cable Curl',
        'Reverse Curl (EZ-Bar/Cable)',
        'Machine Bicep Curl',
        'Resistance Band Curl',
        'Bayesian Curl (cable, from behind)',
        // Bodyweight / Unique
        'Chin-Ups (Underhand grip)',
        'TRX Biceps Curl',
        'Isometric Hold Curl (at 90°)'
      ]
    },
    {
      title: 'TRICEPS (Back of Upper Arm)',
      exercises: [
        // Dumbbell / Barbell
        'Skull Crushers (Lying Triceps Extension)',
        'Overhead Triceps Extension (Dumbbell/Barbell)',
        'Close-Grip Bench Press',
        'Kickbacks (Dumbbell or Cable)',
        'Tate Press',
        'JM Press',
        'EZ-Bar Overhead Extension',
        // Cable / Machine / Band
        'Cable Triceps Pushdown (Rope or Bar)',
        'Overhead Cable Extension',
        'Single-Arm Cable Kickback',
        'Triceps Press Machine',
        'Resistance Band Pushdown',
        // Bodyweight / Unique
        'Dips (Bench or Parallel Bars)',
        'Diamond Push-Ups',
        'Close-Grip Push-Ups',
        'Bodyweight Triceps Extensions (bar or TRX)'
      ]
    },
    {
      title: 'FOREARMS',
      exercises: [
        // Dumbbell / Barbell
        'Wrist Curl (Seated or Standing)',
        'Reverse Wrist Curl',
        'Hammer Curl (for brachioradialis)',
        'Zottman Curl',
        'Barbell Reverse Curl',
        'Behind-the-Back Wrist Curl',
        'Farmer\'s Walk (Grip and forearm)',
        // Cable / Band / Others
        'Wrist Roller',
        'Plate Pinches',
        'Towel Grip Pull-Ups',
        'Dead Hangs',
        'Rice Bucket Forearm Twists'
      ]
    },
    {
      title: 'COMPOUND ARM MOVEMENTS (Work Biceps & Triceps Together)',
      exercises: [
        'Chin-Ups',
        'Dips',
        'Close-Grip Bench Press',
        'Push-Ups (various forms)',
        'Body Rows (Inverted Rows)',
        'TRX Arm Workouts',
        'Barbell Complexes (Curls → Press → Extensions)'
      ]
    }
  ],
  'Core': [
    {
      title: 'UPPER ABS',
      exercises: [
        'Crunches',
        'Sit-Ups',
        'Cable Crunch (Rope)',
        'Reverse Crunch',
        'Machine Crunch',
        'Frog Crunch',
        'Weighted Sit-Ups',
        'V-Ups',
        'Toe Touches',
        'Ab Rollout (wheel or barbell)'
      ]
    },
    {
      title: 'LOWER ABS',
      exercises: [
        'Leg Raises (lying or hanging)',
        'Reverse Crunch',
        'Flutter Kicks',
        'Scissor Kicks',
        'Mountain Climbers',
        'V-Ups',
        'Jackknife Sit-Ups',
        'Dragon Flags (advanced)',
        'Lying Windshield Wipers',
        'Toe Taps'
      ]
    },
    {
      title: 'OBLIQUES (Side Abs)',
      exercises: [
        'Russian Twists',
        'Side Plank',
        'Side Crunch',
        'Cable Woodchopper (high to low or low to high)',
        'Dumbbell Side Bend',
        'Twisting Sit-Ups',
        'Hanging Oblique Raise (knees to sides)',
        'Landmine Rotation',
        'Windshield Wipers',
        'Bicycle Crunches'
      ]
    },
    {
      title: 'TRANSVERSE ABDOMINIS / DEEP CORE',
      exercises: [
        'Plank (Standard)',
        'Dead Bug',
        'Bird Dog',
        'Stomach Vacuum (isometric)',
        'Hollow Body Hold',
        'Pallof Press (anti-rotation)',
        'Body Saws',
        'Stir the Pot (on stability ball)'
      ]
    },
    {
      title: 'LOWER BACK (for balanced core strength)',
      exercises: [
        'Superman Hold',
        'Back Extensions',
        'Bird Dog',
        'Glute Bridge',
        'Deadlifts (light to moderate for stability)',
        'Reverse Hyperextensions'
      ]
    },
    {
      title: 'FULL CORE / COMPOUND MOVEMENTS',
      exercises: [
        'Plank to Push-Up',
        'Bear Crawl',
        'Turkish Get-Up',
        'Hanging Leg Raise',
        'Farmer\'s Carry (with core engagement)',
        'Renegade Row',
        'Kettlebell Windmill',
        'Medicine Ball Slams'
      ]
    },
    {
      title: 'BODYWEIGHT CORE EXERCISES',
      exercises: [
        'Planks (standard, side, reverse)',
        'Leg Raises',
        'Mountain Climbers',
        'V-Ups',
        'Flutter Kicks',
        'Sit-Ups',
        'Hollow Hold',
        'Dead Bug',
        'Superman',
        'Bird Dog'
      ]
    },
    {
      title: 'EQUIPMENT-BASED CORE WORK (Optional)',
      exercises: [
        'Stability Ball: Stir the Pot, Ball Pass',
        'Ab Wheel: Rollouts',
        'Cable Machine: Crunches, Woodchoppers, Pallof Press',
        'Kettlebells/Medicine Balls: Russian Twists, Slams, Windmills',
        'Resistance Bands: Pallof Press, Band Twists'
      ]
    }
  ],
  'Full Body': [
    {
      title: 'FULL-BODY COMPOUND EXERCISES (Top Tier)',
      exercises: [
        'Deadlift (Back, legs, core, arms)',
        'Squat - Barbell or Dumbbell (Quads, glutes, hamstrings, core)',
        'Overhead Press (Shoulders, triceps, core)',
        'Bench Press (Chest, shoulders, triceps)',
        'Pull-Ups / Chin-Ups (Back, biceps, core)',
        'Push-Ups (Chest, triceps, shoulders, core)',
        'Bent-Over Row (Back, biceps, shoulders)',
        'Clean and Press (Full body - explosive)',
        'Kettlebell Swing (Glutes, hamstrings, shoulders, core)',
        'Turkish Get-Up (Core, shoulders, glutes)'
      ]
    },
    {
      title: 'BODYWEIGHT FULL-BODY MOVES',
      exercises: [
        'Burpees',
        'Push-Ups to Squat Jumps',
        'Mountain Climbers',
        'Jumping Lunges',
        'Bear Crawl',
        'Inchworm to Push-Up',
        'Plank to Push-Up',
        'Bodyweight Circuits (squats → push-ups → lunges → planks)'
      ]
    },
    {
      title: 'DUMBBELL/KETTLEBELL FULL-BODY EXERCISES',
      exercises: [
        'Thrusters (Squat + Press)',
        'Renegade Rows',
        'Man Makers',
        'Dumbbell Snatch',
        'Goblet Squat to Press',
        'Suitcase Deadlifts',
        'Kettlebell Swings',
        'Single-Leg Deadlift to Row'
      ]
    },
    {
      title: 'MACHINE-BASED FULL-BODY CIRCUITS (GYM)',
      exercises: [
        'Leg Press',
        'Lat Pulldown',
        'Chest Press',
        'Seated Row',
        'Cable Crunch',
        'Lateral Raise',
        'Back Extension',
        'Leg Curl + Calf Raise',
        'Note: Do 1 set of each in a loop (30–45 secs each), repeat 2–4 times'
      ]
    },
    {
      title: 'CORE INCLUDED IN FULL-BODY TRAINING',
      exercises: [
        'Plank Rows (Renegade Rows)',
        'Ab Rollouts',
        'Russian Twists',
        'Hanging Leg Raises',
        'Farmer\'s Carries'
      ]
    }
  ]
};

const Workouts = () => {
  const [openGroup, setOpenGroup] = useState(null);

  const handleToggle = (group) => {
    setOpenGroup(openGroup === group ? null : group);
  };

  return (
    <div className="workouts-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      width: '100%',
      marginTop: '80px'  // Add space from navbar
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        color: '#ffffff',
        marginBottom: '1rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>Workout Library</h2>
      <p style={{
        maxWidth: '700px',
        margin: '1.5rem auto',
        fontSize: '1.2em',
        color: '#b0c4de',
        textAlign: 'center',
        fontWeight: 500,
        lineHeight: '1.6'
      }}>
        Unlock your best self with our diverse workout routines! Whether you're a beginner or a seasoned athlete, our library is designed to help you build strength, burn fat, and boost your confidence. Consistency is the key—every rep brings you closer to your goals. Let's sweat, smile, and succeed together!
      </p>
      <blockquote style={{
        fontStyle: 'italic',
        color: '#4a90e2',
        textAlign: 'center',
        margin: '2rem auto',
        maxWidth: '600px',
        borderLeft: '4px solid #4a90e2',
        paddingLeft: '1.5em',
        fontSize: '1.3em',
        fontWeight: '500'
      }}>
        "The only bad workout is the one you didn't do."
      </blockquote>
      <div className="workouts-accordion-list">
        {Object.entries(exercisesByGroup).map(([group, exercises]) => (
          <div className="workouts-accordion-item" key={group}>
            <button
              className={`workouts-accordion-header${openGroup === group ? ' open' : ''}`}
              onClick={() => handleToggle(group)}
              aria-expanded={openGroup === group}
            >
              {group}
              <span className="accordion-arrow">{openGroup === group ? '▲' : '▼'}</span>
            </button>
            {openGroup === group && (
              <div className="workouts-accordion-panel">
                {Array.isArray(exercises) && typeof exercises[0] === 'object' && exercises[0].title ? (
                  exercises.map((sub, idx) => (
                    <div key={sub.title} style={{marginBottom: '2rem'}}>
                      <h4 style={{color: '#4a90e2', marginBottom: '0.7rem', fontWeight: 700}}>{sub.title}</h4>
                      <ul className="workouts-exercise-list">
                        {sub.exercises.map(ex => (
                          <li key={ex}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="workouts-exercise-list">
                    {exercises.map(ex => (
                      <li key={ex}>{ex}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Workouts;
