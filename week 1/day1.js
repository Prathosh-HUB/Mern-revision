// Variables
let name = "Prathosh";
const age = 22;

// Function
const greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet(name));

// Array
const workouts = ["Pushups", "Squats", "Plank"];

// map
const upperWorkouts = workouts.map(workout => workout.toUpperCase());
console.log(upperWorkouts);

// filter
const shortWorkouts = workouts.filter(w => w.length < 7);
console.log(shortWorkouts);

// Object
const user = {
  name: "Prathosh",
  role: "MERN Developer",
  active: true
};

console.log(user.name);


