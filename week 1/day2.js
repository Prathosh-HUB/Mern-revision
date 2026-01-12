console.log("fetching workouts");

async function getWorkouts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const name = users.map(user => user.name);
        console.log(name);
    }
    catch (error) {
        console.log("error occurred");
    }
}
getWorkouts();
console.log("error message")