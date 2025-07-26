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
import eighthsenseCover from "../assets/cover ES.jpg";
import eighthsensePoster from "../assets/OUTSIDE POSTER.png";
import eighthsenseProfile from "../assets/IG PROFILE.png";
import eighthsenseWristband from "../assets/WRISTBANDS.png";
import eighthsenseShirt from "../assets/SHIRT.jpg";
import eighthsenseTickets from "../assets/TICKETS.png";
import eighthsenseBillboard from "../assets/BILLBOARD.png";
import thumbnail2 from "../assets/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail3.jpg";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.jpg";
import thumbnail6 from "../assets/thumbnail6.jpg";
import thumbnail8 from "../assets/thumbnail8.jpg";
import youtube from "../assets/youtube (1).png";
import thumbnail from "../assets/coverTh.png";
import form1 from "../assets/form1.png";
import form2 from "../assets/form2.png";    
import form3 from "../assets/form 3.png";
import formCover from "../assets/formCover.png";
import ekosova from "../assets/ekosova.jpg";
import redesignHome from "../assets/redesignHome.png";
import redesignProfile from "../assets/redesignProfile.png";

const projects = [
  {
  id: "1",
  title: "Eighth SeNSe",
  custom: true,
  behance: "https://www.behance.net/gallery/230125537/Eighth-Sense-Brand-Identity",

  image: eighthsenseCover,
  image1: eighthsensePoster,
  imageDashboard:  eighthsensePoster,
  imageGoals: eighthsenseShirt,
  imageTasks: eighthsenseProfile,
  imageReporting: eighthsenseWristband,
  imageProfile: eighthsenseBillboard,
  responsiveImg: eighthsenseTickets,
    dashboardMac: eighthsenseBillboard,

  sectionTitles: {
    mission: "The Concept",
    problems: "Shaping a Sensory World",
    outcome: "Memories in Fragments"
  },

  subtitle: "A fictional festival where perception becomes the headliner",

  overview: `Eighth Sense is an imagined festival that lives at the edge of perception. The event unfolds over three surreal days, somewhere hazy, somewhere real. It’s designed to feel like a glitch in your regular sensory programming. If the five senses define our physical world, and the sixth is intuition, what comes next? This festival explores the layer that exists just beneath conscious thought. The warmth you feel when something simply makes sense.`,

  features: [
    "A dreamy gradient and soft grain texture form the visual core, creating familiarity with a touch of dissonance. The goal was to promote a high-energy summer festival, so I used bright gradients and bold display type to reflect the music's intensity.",
    "The badge card was designed to reflect role-specific access, while surreal sticker icons like broken 8 balls, swirls, and eyeballs hinted at perception beyond the surface.",
    "Mockups for social media include countdown graphics, promotional images like “Get your ticket now” and “VIP tickets out,” quote cards, and photos from previous festivals that blur boundaries between sight, sound, and memory.",
        "Merchandise and wristbands follow the same surreal but clean aesthetic, reinforcing that the experience extends beyond the visual moment.",     
    "The festival tickets use layered textures and soft fades to create a tactile, delicate look that feels light and temporary. The design emphasizes a subtle, sensory experience that connects with the overall brand.",

  ],


  devNotes: `Eighth Sense allowed me to go beyond literal visuals and design something that’s felt, not just seen. It challenged me to craft atmosphere and memory fragments instead of simply presenting information. This project pushed me to think about how design can evoke emotion and sensation through texture, layering, and subtle visual cues, creating an experience that resonates on a deeper, almost intangible level.`
},
{
  id: "2",
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
    mission: "Overview",
    problems: "Key Features",
    solution: "Responsive Design",
    outcome: "Development Notes"
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

  responsiveHeader: "Responsive Design",
  responsive: "The app is fully responsive, adapting cleanly across devices from desktop to mobile",
    devNotes: `What I loved most about building TaskSpark was watching it evolve from a simple concept into a fully functional platform. It pushed me to handle both frontend and backend challenges in the same project and gave me the confidence to build independently.`
},
 {
  id: "3",
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
  id: "4",
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
  id: "5",
  title: "eKosova Redesign",
  subtitle: "Reimagining eKosova’s Public Service Interface: A UX/UI Case Study",
  image: ekosova,
  image1: redesignHome,
  image2: redesignProfile,
  sectionTitles: {
    mission: "Overview",
    problems: "Problems",
    solution: "Solutions",
    outcome: "Outcome"
  },
  figma: "https://www.figma.com/design/F9i5IUv8fZVk03utmhCvGA/eKosova?node-id=1-2&t=Uc6S8JcR9cDLz8sN-1",
  mission:
    "This redesign project reimagines the eKosova app, a digital platform for accessing government services in Kosovo, with a focus on clarity, accessibility, and reduced friction. The goal was to make public services feel approachable, especially for everyday users navigating documents, applications, and official processes.",
  problems: [
    "To better understand everyday pain points, I spoke with friends and family members who use the app regularly. They shared that the interface felt outdated, confusing, and hard to navigate, especially on screens like the profile or notifications.",
    "The original interface suffered from visual clutter and inefficient use of spacing. Icons and labels were often ambiguous, leading to user confusion.",
    "Notifications lacked hierarchy and consistency, limiting their usefulness."
  ],
  solution: [
    "The new design introduces clear sections, breathing room through consistent spacing, and a simplified navigation model based on user priorities. A single icon was used for all notifications.",
    "I redesigned the profile section to feel more personal and easier to navigate. The old version was cluttered and static, so I added clear sections, consistent spacing, and a profile picture option to improve structure and give users a sense of identity."
  ],
  outcome:
    "The redesigned eKosova UI presents a cleaner, more user-friendly experience rooted in structure, clarity, and purpose. It simplifies interactions for users of all ages and levels of tech familiarity, proving that public sector design can be both functional and beautiful."
},
 {
  "id": "6",
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
  id: "7",
  title: "FORM",
  behance: "https://www.behance.net/gallery/230707673/Brand-Identity-Digital-Kit",

  image: formCover,
  image1: form3,
  image2: form2,
  image3: form1,

  sectionTitles: {
    mission: "Overview",
    problems: "Design Priorities",
  },

  subtitle: "A brand identity built around structure, balance, and the beauty of well-made chairs.",

  mission: `FORM is a fictional chair brand that focuses on clean lines, thoughtful materials, and quiet strength. This project brings the brand to life through a full identity system and social content kit — from logo and typography to Instagram posts, stories, and highlight covers. Each asset is designed to feel intentional, minimal, and emotionally grounded in form and function.`,

  solution: [
    "The custom wordmark is built to mirror the structure of a chair — the F and R come together to subtly form its shape. This makes the logo more than visual, it becomes conceptual and product-aware.",
    "A calming, neutral palette combined with crisp typography reflects the brand's elegance, while still leaving space for personality.",
    "Instagram post designs feature chairs in various compositions, paired with quotes, details, and styled product shots to create a scrollable visual rhythm.",
    "Story highlight icons and branded carousels follow the same aesthetic rules: light, balanced, and uncluttered — giving the brand a cohesive voice across platforms.",
    "This kit was designed with real-world application in mind, from launch visuals to long-term content strategies, always aiming for clarity, feeling, and function."
  ],
},
{
  id: "8",
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
},
// {
//   id: "9",
//   title: "Thumbnail Designs",
//   custom: true,
//   behance: "https://www.behance.net/gallery/230423959/Thumbnail-Designs",

//   image: thumbnail,
//   image1: thumbnail2,
//   imageDashboard: thumbnail4,
//   imageGoals: thumbnail3,
//   imageTasks: thumbnail5,
//   imageReporting: thumbnail6,
//   responsiveImg: thumbnail8,
//   dashboardMac: youtube,

//   sectionTitles: {
//     mission: "Overview",
//     problems: "Design Priorities",
//     outcome: "Tools & Application"
//   },

//   subtitle: "A curated selection of thumbnails for educational, lifestyle, and creative content",

//   overview: `This is a collection of thumbnails I designed for digital content, ranging from educational videos and design tutorials to travel diaries and lifestyle series. Each one is tailored to the tone and audience of the content it represents — whether it's an inspiring story about Ada Lovelace, a cozy food diary, or an in-depth design resource breakdown.`,

//   features: [
//     "Focused on clear hierarchy using bold typography and visual contrast to grab attention instantly.",
//     "Each thumbnail reflects the emotional tone of the content. From playful and cozy to professional and insightful.",
//     "Used consistent color palettes, grids, and brand-aligned visuals to reinforce content identity across platforms.",
//     "Some thumbnails lean editorial and cinematic, while others follow a more structured YouTube-style layout with clear text + image pairing.",
//     "Designed to communicate the subject at a glance without overwhelming the viewer, using strong focal points and minimal clutter."
//   ],

//   devNotes: `I approach thumbnail design as a mix of editorial layout and marketing. It’s not just about visual appeal, but about clarity, emotion, and purpose. These thumbnails are created with tools like Photoshop, Illustrator, and Canva, depending on the needs of the project. Whether it’s for a video essay, travel montage, or design tutorial, the goal is always to make someone click and feel curious before they even hit play.`
// },

];

export default projects;
