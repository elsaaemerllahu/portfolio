import coverImage from "../assets/cover.png";
import elearning from "../assets/elearning.png";
import smushs from "../assets/coverSMUSHS.png";
import figma from "../assets/coverFigma.png";
import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import posters from "../assets/poster2.png";
import menu from "../assets/menu.png";
import interior from "../assets/interior.png";
import smushs2 from "../assets/smushs2.png";
import smushs3 from "../assets/smushs3.png";
import taskspark from "../assets/project5.png";
import tasksparkDashboard from "../assets/tasksparkDashboard.png";
import tasksparkReporting from "../assets/tasksparkReporting.png";
import tasksparkGoals from "../assets/tasksparkGoals.png";
import tasksparkProfile from "../assets/tasksparkProfile.png";
import tasksparkTasks from "../assets/tasksparkTasks.png";
import responsiveImg from "../assets/responsive.png";
import dashboardMac from "../assets/dashboardmac.png";

const projects = [
{
  id: "1",
  title: "TaskSpark",
  custom: true,
    github: "https://github.com/elsaaemerllahu/taskspark.git",

  image: taskspark,
  image1: taskspark,
  imageDashboard: tasksparkDashboard,
  imageGoals: tasksparkGoals,
  imageTasks: tasksparkTasks,
  imageReporting: tasksparkReporting,
  imageProfile: tasksparkProfile,
  responsiveImg: responsiveImg,
  dashboardMac: dashboardMac,
    sectionTitles: {
    mission: "The Vision",
    problems: "Designing the Feeling",
    solution: "How I Brought It to Life",
    outcome: "Reflection"
  },
  subtitle: "Turning chaos into clarity through productivity and structure",
  overview: `TaskSpark is a responsive full-stack application that helps users plan, manage, and reflect on their daily productivity. It started as a landing page, designed to feel simple and welcoming, with a smooth transition into a personalized dashboard after login.`,

  features: [
    "Once inside, users land on a dashboard that feels like a command center—clean, organized, and modular. Each widget supports your day: reminders, activity, and to-do list all live here.",
    "The goals section highlights the key objectives and provides a brief description to show their relevance, giving users an understanding of what they should focus on and why it matters to their progress.",
    "Task management happens in a flexible Kanban layout. It's visual, interactive, and reflects real progress with drag-and-drop states.",
    "Tracked hours are automatically integrated into a reporting system,  with pie and bar charts that show overall task completion, alongside the number of tasks assigned to each user.",
    "Lastly, the profile page brings everything together, allowing users to save changes to goals, tasks, and personal information, all within a secure and private space."
  ],
  techStack: {
    frontend: ["React", "React Router", "SCSS"],
    backend: ["PHP", "MySQL"]
  },

  devNotes: `What I loved most about building TaskSpark was watching it evolve from a simple concept into a fully functional platform. It pushed me to handle both frontend and backend challenges in the same project and gave me the confidence to build independently.`
},
 {
  id: "2",
  title: "CloudNine Coffee",
  image: coverImage,
  image1: posters,
  image2: menu,
  image3: interior,
    sectionTitles: {
    mission: "Overview",
    problems: "Bringing the Brand to Life",
    solution: "Design Approach",
    outcome: "Outcome"
  },
  description: "A cozy brand identity for a fictional café",
  dribbble: "https://dribbble.com/shots/25985873-Cloud-Nine-Brand-Identity?utm_source=Clipboard_Shot&utm_campaign=elsaaee&utm_content=Cloud%20Nine%20-%20Brand%20Identity&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=elsaaee&utm_content=Cloud%20Nine%20-%20Brand%20Identity&utm_medium=Social_Share",
  subtitle: "A Fictional Café Brand for Warm Moments and Creative Energy",
  
    mission: `CloudNine is a fictional coffee brand designed to feel like home. A calming, familiar space where students and creatives can study, work, or simply unwind with friends. The goal was to design an identity that brings warmth, inspiration, and a touch of escape.`,
    problems: [
      "This wasn’t just about colors and fonts. It was about crafting a vibe. I wanted CloudNine to feel like morning light through a window: calm and a little dreamy. The design balances focus with imagination, inviting people in with softness but keeping it fresh and playful."
    ],
    solution: [
      "I played with a palette inspired by slow mornings, gentle neutrals with cloudy whites and warm browns. The typefaces are friendly and relaxed, and the visuals feature soft, flowing shapes that feel like daydreams. From posters to menus, everything is built to feel both light and thoughtful.",
    ],
    outcome: `As my first full branding project, CloudNine allowed me to stretch creatively and build something from scratch. It became a personal exercise in turning ideas into visual emotion and designing for a place that doesn’t yet exist, but feels like it could.`,
  
},
  {
    id: "3",
title: "Figma Travel App",
subtitle: "Helping You Explore New Destinations with Ease",
image: figma,
image1: project,
image2: project2,
image3: project1,
  sectionTitles: {
    mission: "Overview",
    problems: "Designing the Experience",
    solution: "Visual Direction",
    outcome: "Outcome"
  },
figma: "https://www.figma.com/design/2T5VmQPZ1DbGp17rxrQ0OD/Roamly?node-id=0-1&t=6rKadpuX7p6kOdSF-1",
mission:
  "Roamly was born out of my love for exploring and my frustration with apps that make it harder than it should be. I wanted to create something that felt light and intuitive: a travel planning app that doesn’t overwhelm you with options, but gently guides you toward your next adventure.",
problems: [
  "I focused on clarity. That meant clean layouts, minimalist navigation, and enough white space to let destinations shine. The app features smart search, instant previews of places, and planning tools that are easy to use even when you're jetlagged."
],

solution: [
  "Everything from the icons to the typography was chosen to feel friendly and lightweight like a digital passport that’s never heavy in your pocket. The design emphasizes exploration without noise, giving users the confidence to plan without second-guessing."
],
outcome:
  "Roamly was a UI/UX design project I created entirely in Figma. It’s clean, focused, and reflects the kind of product I’d want to use myself. It’s not just about travel. It’s about designing ease, clarity, and inspiration.",

  },
  {
  "id": "4",
  "title": "SMUSHS",
  "site": "http://smushs1.infinityfreeapp.com/",
  "subtitle": "Helping Students Eat Smart, Even When Time Is Tight",
  "image": smushs,
  "image4": smushs2,
  "image3": smushs3,
  "sectionTitles": {
    "mission": "Overview",
    "problems": "The Idea",
    "solution": "How We Built It",
    "outcome": "Outcome"
  },
  "mission": "SMUSHS is a university-focused platform that simplifies healthy eating for students through personalized meal plans, dormitory meal tracking, supplement suggestions, and health progress monitoring. It’s tailored to student life, combining convenience, nutritional value, and daily structure all in one place.",
  "problems": [
    "University students often struggle to maintain a healthy diet due to limited time, lack of knowledge, or poor access to nutritious options. Managing meals, choosing the right supplements, and staying consistent with a health goal can feel overwhelming without the right tools or guidance."
  ],
  "solution": [
    "SMUSHS was developed as a full-featured system with multiple modules, including: a meal plan (with daily recipes organized by goals and dietary needs), a dorm menu (where students can choose upcoming meals based on their preferences), supplements (to recommend supplements based on student goals like energy or weight management), and a statistics dashboard (that tracks weight, caloric intake, and generates insights to improve dietary habits).",
    "The system includes roles for Administrators, Nutritionists, and Students. Administrators maintain the platform, nutritionists create content and offer guidance, and students actively use the platform to track, select, and improve their nutrition."
  ],
  "outcome": "SMUSHS was demoed as part of a university health initiative and got great feedback for its clarity, simplicity, and ability to meet students where they are stressed, hungry, and in a hurry.",
},
{
  id: "5",
  title: "E-learning App",
  image: elearning,
  sectionTitles: {
    mission: "Overview",
    problems: "Challenges in Online Learning",
    solution: "Solutions",
    outcome: "Outcome"
  },
  description: "Helping Students and Teachers Stay Connected and Organized",
  mission:
    "This E-learning App was born from a simple idea: make online education easier and more human. We wanted to create a space where students and teachers could connect, stay organized, and access everything they need, without stress or confusion.",
  problems:[
    "Online learning can feel scattered. Students often struggle to find materials or keep track of deadlines, while teachers face barriers in keeping communication streamlined. Many tools feel clunky or overwhelming, and interactive content is often hidden behind awkward menus or complex flows."
  ],
  solution:
  [
    "We designed a clean, intuitive platform where everything feels accessible. Course materials are available, messaging is built right in, and a smart calendar makes it easy to stay on top of assignments and exams. The design leans into simplicity, balancing functionality with a soft, welcoming tone that works for both students and teachers."
  ],
  outcome:
    "The E-learning App brought clarity and calm to the educational experience. It helped simplify the way students and teachers interact, making learning feel smoother, more connected, and more enjoyable."
}


];

export default projects;
