import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import githubicon from "../../assets/icons/github.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import ctracker from "../../assets/img/ctracker.webp";
import todos from "../../assets/img/todos.webp";
import cinema from "../../assets/img/cinema.webp";
import landmarks from "../../assets/img/landmarks.webp";
import weather from "../../assets/img/weatherapp.webp";
import apt from "../../assets/img/appointment.webp";
import jwt from "../../assets/icons/jwticon.svg";
import profilepicture from "../img/me2.webp";
import swift from "../../assets/icons/swift.svg";
import xcode from "../../assets/icons/xcode.svg";
import caricon from "../../assets/icons/car-icon.svg";
import giticon from "../../assets/icons/git-icon.svg";
import boostrap from "../../assets/icons/bootstrap.svg";
import capybara from "../../assets/icons/capybara.svg";
import gems from "../../assets/icons/gems.svg";
import jest from "../../assets/icons/jest.svg";
import postgres from "../../assets/icons/postgres.svg";
import ruby from "../../assets/icons/ruby.svg";
import rspec from "../../assets/icons/rspec.svg";
import ror from "../../assets/icons/ror.svg";
import webpack from "../../assets/icons/webpack.svg";
import redux from "../../assets/icons/redux.svg";
import rubocop from "../../assets/icons/rubocop.svg";
import eslint from "../../assets/icons/eslint.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Mucha",
    en: "Hi, I'm Mucha",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Hallo, ich bin Mucha Naibei, ein IT-Spezialist/Berater mit über sechs Jahren Erfahrung. Es liegt mir am Herzen, die IT-Sicherheit zu verbessern, modernste Technologien zu implementieren und erstklassige Lösungen bereitzustellen. Über die IT hinaus bin ich ein erfahrener Softwareentwickler, der sich dem kontinuierlichen Lernen widmet und über Branchentrends auf dem Laufenden bleibt. Ich gedeihe in schnelllebigen Umgebungen, löse Herausforderungen und übertreffe die Erwartungen meiner Kunden. Ich bringe Problemlösungskompetenz, effektives Zeitmanagement und Teamarbeit in jedes Projekt ein.",
    en: "Hello, I am Mucha Naibei, an IT Specialist/Consultant with over six years of experience. I am passionate about enhancing IT security, implementing cutting-edge technologies, and delivering top-notch solutions. Beyond IT, I am a skilled software developer dedicated to continuous learning and staying updated with industry trends. I thrive in fast-paced environments, solving challenges, and exceeding customer expectations. I bring problem-solving prowess, effective time management, and teamwork to every project.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Cryptocurrency App",
    description:
      "Die auf React und Redux basierende Cryptocurrency Tracker-App ruft Live-Daten mithilfe asynchroner Thunk-Middleware von einer Kryptowährungs-API ab und hält Benutzer über Echtzeitmetriken für verschiedene Münzen auf dem Laufenden. Redux verwaltet die nahtlose Datensynchronisierung und ermöglicht die gleichzeitige Verfolgung mehrerer Kryptowährungen über eine intuitive Benutzeroberfläche, wodurch eine einfache Navigation und umfassende Münzdetails gewährleistet werden.",
    description_EN:
      "The React and Redux-powered Cryptocurrency Tracker app fetches live data using async thunk middleware from a cryptocurrency API, keeping users updated on real-time metrics for various coins. Redux manages seamless data synchronization, allowing simultaneous tracking of multiple cryptocurrencies through an intuitive interface.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Axios", icon: axiosicon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      // { name: "Render", icon: rendericon },
    ],
    image: ctracker,
    deploymenturl: "https://cryptotracker-1qgb.onrender.com",
    githuburl: "https://github.com/mnaibei/react-capstone",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Todo List App",
    description:
      "Die elegante Todo List Web App, unterstützt von React, bietet eine nahtlose Aufgabenverwaltung mit Funktionen zum Hinzufügen, Bearbeiten und Entfernen von Aufgaben und erleichtert so die Organisation täglicher To-Do-Listen. Mithilfe des lokalen Speichers bleibt die Datenpersistenz bei Seitenaktualisierungen und Browserschließungen erhalten und die Benutzerproduktivität wird durch das benutzerfreundliche Design und die wesentlichen Funktionen gesteigert.",
    description_EN:
      "The sleek Todo List Web App, powered by React, offers seamless task management with features to add, edit, and remove tasks, facilitating organized daily to-do lists. Utilizing local storage, it maintains data persistence across page refreshes and browser closures, enhancing user productivity through its user-friendly design and essential functionalities.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Render", icon: rendericon },
    ],
    image: todos,
    deploymenturl: "https://todo-list-app-457c.onrender.com",
    githuburl: "https://github.com/mnaibei/todo-list-react",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "CinemaHub App",
    description:
      "Ich habe eine fesselnde Single-Page-Website entwickelt. Es verwendet HTML, CSS und JavaScript, um Filmdaten von der OMDB-API abzurufen und sie dynamisch zu rendern. Ziel war es, ein nahtloses Benutzererlebnis mit einem optisch ansprechenden, responsiven Design zu schaffen. JavaScript ermöglicht den dynamischen Datenabruf und interaktive Funktionen und sorgt so für ein reibungsloses Surferlebnis ohne Neuladen der Seite.",
    description_EN:
      "I developed a captivating single-page website. It uses HTML, CSS, and JavaScript to fetch movie data from the OMDB API and dynamically renders it. The goal was to create a seamless user experience with a visually appealing, responsive design. JavaScript enables dynamic data fetching and interactive features, providing a smooth browsing experience without page reloads.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Axios", icon: axiosicon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: cinema,
    deploymenturl: "https://mnaibei.github.io/cinemaHub/dist/#home",
    githuburl: "https://github.com/mnaibei/cinemaHub",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Landmarks App",
    description:
      "Die Landmarks-App präsentiert verschiedene Wahrzeichen in Kenia. Es verfügt über eine Seite „Empfohlen“, eine Liste von Sehenswürdigkeiten und eine Detailseite mit zusätzlichen Informationen zu den einzelnen Sehenswürdigkeiten. Die App verfügt außerdem über eine Favoritenfunktion, mit der Benutzer ihre bevorzugten Sehenswürdigkeiten markieren und entsprechende Filter anwenden können.",
    description_EN:
      "The Landmarks App showcases various landmarks in Kenya. It features a Featured page, a list of landmarks, and a Details page providing additional information about each landmark. The app also includes a Favorites function that allows users to mark their preferred landmarks and apply filters accordingly.",
    technologies: [
      { name: "Swift", icon: swift },
      { name: "Xcode", icon: xcode },
    ],
    image: landmarks,
    deploymenturl: "",
    githuburl: "https://github.com/mnaibei/Landmarks",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Weather App",
    description:
      "Die Wetter-App ist ein umfassendes Tool, das mithilfe der Swift- und OpenWeather-API entwickelt wurde, um die Wetterbedingungen an jedem Ort in Echtzeit zu überprüfen. Mit einer benutzerfreundlichen Oberfläche liefert es genaue und aktuelle Wetterdaten, einschließlich Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit und mehr. Die App sorgt für Wetteraktualisierungen für die aktuelle Uhrzeit und bis zu sieben Tage im Voraus",
    description_EN:
      "The Weather App is a comprehensive tool built using Swift and OpenWeather API for checking real-time weather conditions of any location. With a user-friendly interface, it provides accurate and up-to-date weather data including temperature, humidity, wind speed, and more. The app ensures weather updates for the current time and up to seven days in advance.",
    technologies: [
      { name: "Swift", icon: swift },
      { name: "Xcode", icon: xcode },
    ],
    image: weather,
    deploymenturl: "",
    githuburl: "https://github.com/mnaibei/WeatherApp",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Car Rental Full-Stack App",
    description:
      "Durch die Zusammenarbeit unseres Teams entstand eine robuste Autovermietungsanwendung, die React und Redux im Frontend und Ruby on Rails im Backend integriert. Diese App verfügt über vollständige Benutzerauthentifizierungsfunktionen und bietet Benutzern ein nahtloses Erlebnis, indem sie mühelos Autos zum Bestand hinzufügen oder ein Fahrzeug mieten.",
    description_EN:
      "The collaborative effort of our team birthed a robust car rental application integrating React and Redux on the frontend and Ruby on Rails on the backend. Boasting full user authentication capabilities, this app offers a seamless experience for users to effortlessly add cars to the inventory or rent a vehicle. ",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "REST Api", icon: apiicon },
      { name: "Axios", icon: axiosicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Ruby", icon: ruby },
      { name: "Rails", icon: ror },
      { name: "JWT", icon: jwt },
      { name: "Postgres", icon: postgres },
    ],
    image: apt,
    deploymenturl: "",
    githuburl: "https://github.com/mnaibei/appointment-app-backend",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: redux,
        color: "#BB5699",
      },
      {
        title: "Ruby",
        hash: "#Ruby",
        icon: [ruby],
        color: ["#808080"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: boostrap,
        color: "#CC6609",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Postgres",
        hash: "#Postgres",
        icon: postgres,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Rails",
        hash: "#Rails",
        icon: ror,
        color: "#CC6699",
      },
      {
        title: "Gems",
        hash: "#Gems",
        icon: gems,
        color: "#AC5699",
      },
    ],
  },
] as const;

export const skillsDataTools = [
  {
    skillsTitle: "Tools",
    skills: [
      { title: "Git", hash: "#Git", icon: giticon, color: "#F24E1E" },
      {
        title: "Github",
        hash: "#Github",
        icon: [githubicon],
        color: ["#FF61F6"],
      },
      { title: "Render", hash: "#Render", icon: rendericon, color: "#00C4CC" },
      { title: "Webpack", hash: "#Webpack", icon: webpack, color: "#01C4CC" },
      { title: "Rubocop", hash: "#Rubocop", icon: rubocop, color: "#D1C4CC" },
      { title: "Eslint", hash: "#Eslint", icon: eslint, color: "#F1C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Testing",
    skills: [
      {
        title: "Jest",
        hash: "#Jest",
        icon: jest,
        color: "#21759B",
      },
      {
        title: "Rspec",
        hash: "#Rspec",
        icon: rspec,
        color: "#7AB55C",
      },
      {
        title: "Capybara",
        hash: "#Capybara",
        icon: capybara,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:muchajulius@gmail.com",
  text: "muchajulius@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mucha-julius/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/mnaibei",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:muchajulius@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Der einzige Weg, großartige Arbeit zu leisten, besteht darin, zu lieben, was man tut."',
    en: `"The only way to do great work is to love what you do."`,
    author: "Steve Jobs",
  },
  {
    de: '"Code ist wie Humor. Wenn man es erklären muss, ist es schlecht."',
    en: `"Code is like humor. When you have to explain it, it's bad."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht gerade in die digitale Welt eintauche, tauche ich in die faszinierende Welt des Spielens und der Spaziergänge im Freien ein. Für mich sind Spiele immersive Erlebnisse und jeder Spaziergang fühlt sich wie ein erfrischendes Abenteuer an..",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Abgesehen vom Programmieren lebe ich von Hochgeschwindigkeitserlebnissen – im wahrsten Sinne des Wortes. Autos beflügeln meine Leidenschaft und es gibt nichts Schöneres, als unbekannte Straßen am Steuer eines Fahrzeugs zu erkunden",
      icon: caricon,
    },
    {
      title: "Sprachgrenzen erkunden",
      description:
        "Mein Weg als Webentwickler ist nur ein Teil meiner Reise. Ich lebe von der Überzeugung, dass echte Entdeckungen dann beginnen, wenn wir das Reich unbekannter Sprachen betreten. Derzeit beschäftige ich mich mit den Feinheiten der Sprachen, beginnend mit Deutsch.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not immersed in the digital realm, I delve into the captivating world of gaming and outdoor strolls. To me, games are immersive experiences, and each walk feels like a refreshing adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Apart from coding, I thrive on high-speed experiences – quite literally. Cars fuel my passion, and there's nothing like exploring uncharted roads behind the wheel of a vehicle",
      icon: caricon,
    },
    {
      title: "Exploring Language Frontiers",
      description:
        "My path as a web developer is just a slice of my journey. I thrive on the belief that genuine discovery begins when we step into the realm of unfamiliar tongues. Currently, I'm diving into the intricacies of languages, starting with German.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
