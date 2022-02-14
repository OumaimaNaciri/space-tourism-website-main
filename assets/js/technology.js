const technology_data = [
  {
    id: 1,
    name: "Launch vehicle",
    images: {
      portrait: "../images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "../images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    name: "Spaceport",
    images: {
      portrait: "../images/technology/image-spaceport-portrait.jpg",
      landscape: "../images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    name: "Space capsule",
    images: {
      portrait: "../images/technology/image-space-capsule-portrait.jpg",
      landscape: "../images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

// get  element
const buttons = document.querySelectorAll(".technology-number");
const Title = document.getElementById("title");
const imagePortrait = document.getElementById("portrait");
const imageLandscape = document.getElementById("landscape");
const description = document.getElementById("desc");

technology_data.forEach((data) => {
  console.log(data.name);
  buttons.forEach((btn) => {
    let text = btn.textContent;
    let Regtext = /^\s+|\s+$/g;
    let title = text.replace(Regtext, "");
    console.log(title);
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("technology-effect__active");
      });
      btn.classList.add("technology-effect__active");
      if (data.id == title) {
        Title.innerHTML = `<span>the terminolodgy...</span> ${data.name}`;
        imagePortrait.src = data.images.portrait;
        imageLandscape.src = data.images.landscape;
        description.textContent = data.description;
      }
    });
  });
});
