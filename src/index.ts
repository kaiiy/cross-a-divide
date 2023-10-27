import { createInterface } from "readline/promises";

const ROOMS = [
    "room1",
    "room2",
] as const;

type Rooms = typeof ROOMS[number];

let current_room: Rooms = "room1";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await rl.question("Enter room name: ")

console.log(answer);


// rl.question("Enter room name: ", (answer) => {
//     if (ROOMS.includes(answer as Rooms)) {
//         current_room = answer as Rooms;
//         console.log(`You are now in ${current_room}`);
//     } else {
//         console.log(`Invalid room name: ${answer}`);
//     }
//     rl.close();
// });
