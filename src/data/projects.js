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
    "Lastly, the profile page serves as a personal dashboard where users can manage their account details and view a history of activity related to goals and tasks, keeping everything organized and trackable in one place.",
  ],
  techStack: {
    frontend: ["React", "CSS"],
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
  behance: "https://www.behance.net/gallery/229940803/Cloud-Nine/modules/1317728989",
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
  subtitle: "A Travel UI Concept Designed for Exploration and Clarity",
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
    "Roamly is a travel planning app UI I designed in Figma with the goal of helping users explore destinations effortlessly. It was inspired by my desire to simplify trip discovery and reduce friction in the planning process through a clean, intuitive interface.",
  problems: [
    "The design needed to balance exploration and structure. I implemented a tab-based navigation system, bold destination cards, and clean UI elements that guide users without overwhelming them. Clear call-to-actions and quick access to trip info were key priorities."
  ],
  solution: [
    "The visual direction features a deep navy base with high-contrast yellow buttons, friendly icons, and crisp imagery. Typography is readable and inviting. The experience encourages browsing and booking through familiar patterns, making it easy to use even for first-time travelers."
  ],
  outcome:
    "Roamly was built entirely in Figma as a mobile-first concept focused on simplicity, clarity, and confidence. It’s more than a design — it reflects my approach to solving UX problems by combining visual balance with functional clarity."
},

 {
  "id": "4",
  "title": "SMUSHS",
  "site": "http://smushs1.infinityfreeapp.com/",
  "subtitle": "Smart Nutrition Management for Students in Stressful Environments",
  "image": smushs,
  "image4": smushs2,
  "image3": smushs3,
  "sectionTitles": {
    "mission": "Overview",
    "problems": "The Challenge",
    "solution": "Our Approach",
    "outcome": "Results"
  },
  "mission": "SMUSHS is a comprehensive web-based platform designed to help university students, especially those in dormitories—maintain a balanced and personalized diet despite the time pressures and stress of academic life. It empowers students with tools to track their nutrition, select meal plans, review dormitory menus, monitor their weight and caloric intake, and receive supplement suggestions all in one place.",
  "problems": [
    "University students often neglect healthy eating due to stress, lack of time, or limited access to tailored nutrition options—especially those living in dormitories.",
    "Students may struggle with choosing meals that suit their dietary preferences, tracking their health progress, or staying consistent with nutritional goals without structured tools or guidance."
  ],
  "solution": [
    "SMUSHS features distinct modules for Administrators, Nutritionists, and Students. Administrators manage content (like meals, recipes, menus, and supplements), monitor usage, and maintain the FAQ. Nutritionists provide expert-curated content. Students can log in to build personal meal plans, access dormitory menus, choose supplements based on goals, and monitor weight and calorie data.",
    "The platform supports full meal plan customization (for breakfast, lunch, dinner), filtering by dietary types (e.g., vegan, gluten-free, low-calorie), a wishlist system, a visual dashboard of health progress, and reminder emails for daily plans. Students also benefit from an FAQ system and profile personalization."
  ],
  "outcome": "SMUSHS was demoed as part of a university health initiative and got great feedback for its clarity, simplicity, and ability to meet students where they are stressed, hungry, and in a hurry."
},
{
  id: "5",
  title: "E-learning App",
  image: elearning,
  subtitle: "Helping Students and Teachers Stay Connected and Organized",
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
