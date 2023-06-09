import hh from "./hhh.png";
import sphere from "./Sphere.png";

export const projects = [
  {
    name: "Happy Hour Helper",
    description:
      "Liquor ecommerce web app, with many products built using forms that dispatch functions onto the backend and that connect with the database, with an integrated admin dashboard that allows the information from the website to be manipulated without any code knowledge.",
    images: [hh],
    technologies: ["React", "Node.js", "Sequelize", "Redux", "MaterialUI"],
    code: "https://github.com/RetriveAgustin/Happy-Hour-Helper",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7031695345189273600?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7031695345189273600%29"
  },
  {
    name: "Sphere",
    description: "Social media web app, with users and chats in real time. Using Socket.io and WebRTC to call and chat functions. Also has posts with images, videos, and audio. Same with comments and replies. Work in progress.",
    images: [sphere],
    technologies: ["React", "Node.js", "Sequelize", "Redux Toolkit", "Tailwind CSS", "Socket.io", "WebRTC"],
    code: "https://github.com/Loloming/Sphere",
    demo: null
  }
];
