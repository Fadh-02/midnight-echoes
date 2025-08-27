// senarai ayat + lagu
const messages = [
  { text: "The moon knows every secret you whispered into the night.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Every shadow is just a memory refusing to die.", song: "jar-of-hearts.mp3" },
  { text: "You only fear the silence because it speaks louder than you do.", song: "jar-of-hearts.mp3" },
  { text: "Behind every smile is a storm waiting to break.", song: "jar-of-hearts.mp3" },
  { text: "Your reflection lies to keep you sane.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Not every silence is empty; some are heavy with answers.", song: "run-away.mp3" },
  { text: "The night hides nothing; it only slows your eyes.", song: "control.mp3" },
  { text: "Time doesn’t heal wounds; it just teaches you to bleed quietly.", song: "jar-of-hearts.mp3" },
  { text: "The stars you see tonight are already dead.", song: "young-and-beautiful.mp3" },
  { text: "Shadows don’t follow you—they chain themselves to your steps.", song: "middle-of-the-night.mp3" },
  { text: "Dreams rot if you lock them away too long.", song: "fairytale.mp3" },
  { text: "The loudest storms rage in silence within your chest.", song: "jar-of-hearts.mp3" },
  { text: "Ghosts aren’t dead people, they’re forgotten moments.", song: "fairytale.mp3" },
  { text: "Loneliness is louder than thunder when the world sleeps.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Every goodbye is a rehearsal for the final one.", song: "carol-of-the-bells.mp3" },
  { text: "Not all cages have bars; some are built from promises.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "The graveyard is only full of people who thought they had time.", song: "carol-of-the-bells.mp3" },
  { text: "Your shadow grows longer when you run from yourself.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Even silence has a pulse if you dare to listen.", song: "middle-of-the-night.mp3" },
  { text: "Broken glass reflects sharper truths than clear mirrors.", song: "jar-of-hearts.mp3" },
  { text: "Every lie leaves fingerprints on your soul.", song: "control.mp3" },
  { text: "Your heartbeat is a countdown you cannot pause.", song: "control.mp3" },
  { text: "The dark doesn’t chase; it waits patiently.", song: "run-away.mp3" },
  { text: "Every scar is a story that survived the fire.", song: "dynasty.mp3" },
  { text: "Hope is fragile; despair is indestructible.", song: "control.mp3" },
  { text: "Some fires burn colder than ice.", song: "jar-of-hearts.mp3" },
  { text: "Not every locked door wants to keep you out.", song: "love-story.mp3" },
  { text: "The silence of a friend cuts deeper than an enemy’s shout.", song: "love-story.mp3" },
  { text: "You are both the cage and the key you’ve been searching for.", song: "love-story.mp3" },
  { text: "Every ending is just a disguised beginning.", song: "jar-of-hearts.mp3" },
  { text: "The stars don’t shine; they bleed light into the void.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "The ground remembers every step you’ve taken.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Some monsters wear your face when you’re too tired to fight.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Shadows never sleep; they only wait.", song: "summertime-sadness.mp3" },
  { text: "Death isn’t scary—it’s the silence that terrifies.", song: "young-and-beautiful.mp3" },
  { text: "Even ashes remember the fire that birthed them.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Your fears are seeds; water them and they’ll grow into prisons.", song: "dynasty.mp3" },
  { text: "Some doors only open once; miss them and they’re gone forever.", song: "fairytale.mp3" },
  { text: "Loneliness tastes different when you choose it yourself.", song: "middle-of-the-night.mp3" },
  { text: "Not every ending comes with closure.", song: "summertime-sadness.mp3" },
  { text: "The moon listens but it never answers.", song: "jar-of-hearts.mp3" },
  { text: "Truth is a blade that cuts even the one who wields it.", song: "jar-of-hearts.mp3" },
  { text: "Even angels can drown in light if it blinds them too long.", song: "royalty.mp3" },
  { text: "Your name will outlive you in whispers.", song: "young-and-beautiful.mp3" },
  { text: "Some mirrors show the truths you deny.", song: "jar-of-hearts.mp3" },
  { text: "Every choice kills the futures you didn’t pick.", song: "control.mp3" },
  { text: "The night holds stories your eyes aren’t brave enough to read.", song: "summertime-sadness.mp3" },
  { text: "The scariest word is always the one left unsaid.", song: "love-story.mp3" },
  { text: "You carry graves of people still alive in your memory.", song: "summertime-sadness.mp3" },
  { text: "Pain is a teacher that never asks permission to stay.", song: "dynasty.mp3" },
  { text: "The rain doesn’t cleanse—it only reminds.", song: "summertime-sadness.mp3" },
  { text: "Every silence writes a story louder than words.", song: "summertime-sadness.mp3" },
  { text: "Not all storms rage outside; some drown you inside.", song: "summertime-sadness.mp3" },
  { text: "Even broken clocks tell the truth twice a day.", song: "summertime-sadness.mp3" },
  { text: "Some secrets are prisons you built for yourself.", song: "summertime-sadness.mp3" },
  { text: "The stars are grave markers for forgotten suns.", song: "summertime-sadness.mp3" },
  { text: "Darkness doesn’t blind—it teaches patience.", song: "jar-of-hearts.mp3" },
  { text: "Every memory is a ghost dressed in your mind.", song: "control.mp3" },
  { text: "You are haunted not by what you lost, but by what you kept.", song: "middle-of-the-night.mp3" },
  { text: "The clock doesn’t tick—it mocks your running feet.", song: "control.mp3" },
  { text: "Even silence can scream if you stand close enough.", song: "summertime-sadness.mp3" },
  { text: "Fire doesn’t destroy—it only reminds you what you can’t control.", song: "control.mp3" },
  { text: "Your reflection waits for the day you stop looking.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Every light casts a shadow darker than itself.", song: "summertime-sadness.mp3" },
  { text: "You’ll never meet yourself until you’re fully alone.", song: "run-away.mp3" },
  { text: "Every lie costs you pieces you’ll never get back.", song: "dynasty.mp3" },
  { text: "Not all chains are metal; some are words you believed.", song: "dynasty.mp3" },
  { text: "The silence between words speaks the loudest truths.", song: "summertime-sadness.mp3" },
  { text: "Some fires burn forever, even in the rain.", song: "summertime-sadness.mp3" },
  { text: "Your shadow is proof you cannot outrun yourself.", song: "run-away.mp3" },
  { text: "Hope can be heavier than despair if you carry it too long.", song: "young-and-beautiful.mp3" },
  { text: "The dark listens better than the light.", song: "summertime-sadness.mp3" },
  { text: "Shadows multiply when the light shines brightest.", song: "jar-of-hearts.mp3" },
  { text: "Your fears whisper when the world is quiet enough.", song: "jar-of-hearts.mp3" },
  { text: "Not every silence is peace; some are wars unspoken.", song: "summertime-sadness.mp3" },
  { text: "Every ending leaves fingerprints on the next beginning.", song: "summertime-sadness.mp3" },
  { text: "The stars bleed stories your eyes can’t read.", song: "control.mp3" },
  { text: "Even shadows abandon you in total darkness.", song: "summertime-sadness.mp3" },
  { text: "Your silence is the loudest language you’ll ever speak.", song: "summertime-sadness.mp3" },
  { text: "Some wounds never bleed; they whisper instead.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "Death is not the end—it’s the final unanswered question.", song: "young-and-beautiful.mp3" },
  { text: "The night doesn’t fall; it swallows.", song: "summertime-sadness.mp3" },
  { text: "Not all monsters hide under beds; some live inside your chest.", song: "jar-of-hearts.mp3" },
  { text: "You are both the storm and the ship lost inside it.", song: "royalty.mp3" },
  { text: "The scariest screams are the ones only you can hear.", song: "middle-of-the-night.mp3" },
  { text: "Darkness is not empty; it’s crowded with what you can’t see.", song: "jar-of-hearts.mp3" },
  { text: "Even silence can burn louder than fire.", song: "jar-of-hearts.mp3" },
  { text: "Every truth has teeth sharp enough to bite.", song: "royalty.mp3" },
  { text: "Your heartbeat is a drum played by time.", song: "royalty.mp3" },
  { text: "The night sky is just a graveyard of forgotten suns.", song: "carol-of-the-bells.mp3" },
  { text: "Ghosts are not dead—they are everything you tried to forget.", song: "remnants.mp3" },
  { text: "The silence you run from is where your answers live.", song: "run-away.mp3" },
  { text: "You can’t bury shadows; they grow where fear is planted.", song: "run-away.mp3" },
  { text: "The moon drips silver on those brave enough to look up.", song: "fairytale.mp3" },
  { text: "Your scars are constellation no one else can read.", song: "fairytale.mp3" },
  { text: "Some prayers are just echoes lost in the wind.", song: "love-story.mp3" },
  { text: "Loneliness hums the song you refuse to sing.", song: "summertime-sadness.mp3" },
  { text: "Every silence sharpens the blade of truth.", song: "everybody-wants-to-rule-the-world.mp3" },
  { text: "The fire inside you can burn or consume.", song: "summertime-sadness.mp3" },
  { text: "You are both the wound and the healer, bleeding in circles.", song: "royalty.mp3" }
];

// senarai background
const backgrounds = [
  "images/nebula.png",
  "images/bg.png",
  "images/pic.png",
  "images/galaxy.png"
];

const messageElement = document.getElementById("message");
const button = document.getElementById("generate");
const audio = document.getElementById("bg-music");

button.addEventListener("click", () => {
  // random ayat + lagu
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageElement.innerText = randomMessage.text;
  audio.src = "whispers/" + randomMessage.song; // letak lagu dalam folder whispers/
  audio.play();

  // random background
  let randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url('${randomBg}')`;
});
