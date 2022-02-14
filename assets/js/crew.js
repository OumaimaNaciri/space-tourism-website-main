const crew_data = [
  {
    name: "Douglas Hurley",
    images: {
      png: "../images/crew/image-douglas-hurley.png",
      webp: "../images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "../images/crew/image-mark-shuttleworth.png",
      webp: "../images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "../images/crew/image-victor-glover.png",
      webp: "../images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "../images/crew/image-anousheh-ansari.png",
      webp: "../images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

// get  element
const buttons = document.querySelectorAll(".crew-bullet");
const Title = document.getElementById("title");
const role = document.getElementById("role");
const image = document.getElementById("img");
const description = document.getElementById("desc");

// effect
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("crew-effect__active");
    });
    btn.classList.add("crew-effect__active");
  });
});

// content

for (let i = 0; i < crew_data.length; i++) {
  const data = crew_data[i];
  const bullet = buttons[i];
  bullet.addEventListener("click", () => {
    // console.log(bullet);

    Title.innerHTML = `<span> ${data.role}</span> ${data.name}`;
    image.src = data.images.webp;
    description.textContent = data.bio;
  });
}
