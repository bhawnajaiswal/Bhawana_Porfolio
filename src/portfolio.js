const settings = {
    isSplash: true, 
  };
  
  const seo = {
    title: "Bhawana's Portfolio",
    description:
      "An enthusiastic and results-driven professional passionate about designing and delivering end-to-end solutions that are innovative, scalable, and impactful. With a strong technical foundation and a commitment to excellence, I thrive on creating value through transformative products that solve real-world problems and drive measurable success.",
    og: {
      title: "Bhawana Jaiswal Portfolio",
      type: "website",
      url: "https://bhawanajaiswal.vercel.app/",
    },
  };
  
  //Home Page
  const greeting = {
    title: "Bhawana Jaiswal",
    logo_name: "BhawanaJaiswal",
    nickname: "Software Developer",
    subTitle:
      "An enthusiastic and results-driven professional passionate about designing and delivering end-to-end solutions that are innovative, scalable, and impactful. With a strong technical foundation and a commitment to excellence, I thrive on creating value through transformative products that solve real-world problems and drive measurable success.",
    resumeLink:
      "https://drive.google.com/file/d/1VZq-1mlaXMqR_Pl5ic88qQII79qzQviB/view?usp=sharing",
    portfolio_repository: "https://github.com/bhawnajaiswal/Bhawana_Porfolio",
    githubProfile: "https://github.com/bhawnajaiswal",
  };
  
  const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/bhawnajaiswal",
      fontAwesomeIcon: "fa-brands fa-github", // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/bhawana-jaiswal-4a3335197/",
      fontAwesomeIcon: "fa-brands fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
      backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    // {
    //   name: "YouTube",
    //   link: "",
    //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    // },
    {
      name: "Gmail",
      link: "mailto:bhawnajaiswal02@gmail.com",
      fontAwesomeIcon: "fa-brands fa-google", // Reference https://fontawesome.com/icons/google?style=brands
      backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
  ];
  
  const skills = {
    data: [
      {
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Building responsive website front end using React-Redux",
          "⚡ Developing mobile applications using Flutter, React Native",
          "⚡ Creating application backend in Node, Express",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#000000",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          }
        ],
      },
      {
        title: "Linux Administration",
        fileName: "DesignImg",
        skills: [
          "⚡ Developing Automation Scripts using Shell Scripting",
          "⚡ Maintaining and monitoring Linux Servers (Root)",
          "⚡ Creating the flow of application functionalities to optimize User Experience",
        ],
        softwareSkills: [
          {
            skillName: "Terminal",
            fontAwesomeClassname: "ant-design:code-filled",
            style: {
              color: "#000000",
            },
          },
          {
            skillName: "Linux",
            fontAwesomeClassname: "logos:linux-tux",
            style: {
              color: "",
            },
          },
          {
            skillName: "Ubuntu",
            fontAwesomeClassname: "logos:ubuntu",
            style: {
              color: "#222",
            },
          },
          {
            skillName: "RedHat",
            fontAwesomeClassname: "logos:redhat-icon",
            style: {
              color: "#00FF00",
            },
          },
          {
            skillName: "Debian",
            fontAwesomeClassname: "logos:debian",
            style: {
              color: "#00FF00",
            },
          },
          {
            skillName: "BASH Shell",
            fontAwesomeClassname: "codicon:terminal-bash",
            style: {
              color: "#000000",
            },
          },
        ],
      },
    ],
  };
  
  // Education Page
  const competitiveSites = {
    competitiveSites: [
      {
        siteName: "LeetCode",
        iconifyClassname: "simple-icons:leetcode",
        style: {
          color: "#F79F1B",
        },
        profileLink: "",
      },
      {
        siteName: "HackerRank",
        iconifyClassname: "simple-icons:hackerrank",
        style: {
          color: "#2EC866",
        },
        profileLink: "",
      },
      {
        siteName: "Coding Ninjas",
        iconifyClassname: "simple-icons:codingninjas",
        style: {
          color: "orange",
        },
        profileLink: "",
      },
      // {
      //   siteName: "Hackerearth",
      //   iconifyClassname: "simple-icons:itch_io",
      //   style: {
      //     color: "#323754",
      //   },
      //   profileLink: "",
      // },
      {
        siteName: "Hackerearth",
        iconifyClassname: "simple-icons:hackerearth",
        style: {
          color: "#323754",
        },
        profileLink: "",
      },
    ],
  };
  
  const degrees = {
    degrees: [
      {
        title: "JSS Academy of Technical Education",
        subtitle: "B.Tech",
        logo_path: "JSSATE_Noida.png",  // Correct path format
        alt_name: "JSS Academy of Technical Education, Noida",
        duration: "2021 - 2024",
        descriptions: [
          "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
          "⚡ Apart from this, I have done courses on Python and Full Stack Development.",
        ],
        website_link: "https://jssaten.ac.in/",
      },
    ],
  };
  
  
  const certifications = {
    certifications: [
      {
        title: "The Complete 2022 Web Development Bootcamp - Udemy",
        subtitle: "Udemy",
        logo_path: "udemy_logo.jpg",
        certificate_link:
          "https://www.udemy.com/certificate/UC-96193c5b-0426-40b5-8577-2c4665b7c397/",
        alt_name: "Udemy",
        color_code: "#000000",
      },
      {
        title: "Programming for Everybody (Getting Started with Python)",
        subtitle: "Coursera",
        logo_path: "coursera_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/YKMWRL83HC3L?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
        alt_name: "Coursera",
        color_code: "#fff",
      },
      {
        title: "Create Your First Chatbot with Rasa and Python",
        subtitle: "Coursera",
        logo_path: "coursera_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/2H26N6T835JX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        alt_name: "Coursera",
        color_code: "#fff",
      },
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "Work Experience",
    description:
      "I have Hands-on experience in developing and maintaining Perl-based web applications for system monitoring, performance optimization, and alert management. Proficient in deploying and configuring web applications on Linux servers, executing SQL queries for data analysis and reporting, and managing databases with a focus on query optimization. Adept in backend web development using Node.js, Express.js, and MongoDB, as well as front-end technologies like HTML, CSS, JavaScript, and React. Skilled in streamlining IT operations with automation scripts and resolving production issues, collaborating with cross-functional teams to deliver effective solutions.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work",
        work: true,
        experiences: [
          {
            title: "Graduate Engineer Trainee",
            company: "Vodafone Intelligent Solutions",
            company_url: "https://www.vodafone.com/careers/professional-career-areas/shared-services",
            logo_path: "vodafone.png",
            duration: "August 2022 - Present",
            location: "Pune, India",
            description:
              "Supported database management by developing SQL queries for data analysis and reporting. Administered Linux servers and created automation scripts to streamline IT operations and improve efficiency.",
            color: "#000000",
          },
          {
            title: "Senior Executive",
            company: "Vodafone Intelligent Solutions",
            company_url: "https://www.vodafone.com/careers/professional-career-areas/shared-services",
            logo_path: "vodafone.png",
            duration: "August 2022 - Present",
            location: "Pune, India",
            description:
              "I developed and maintained web applications, optimized server performance, managed databases, and automated IT operations to ensure smooth and efficient system performance.",
            color: "#000000",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects leverage a diverse array of cutting-edge technologies, with a primary focus on game development. I excel at creating immersive gaming experiences using Unity, Unreal Engine, and Blender, while implementing robust gameplay mechanics through C# and C++. Additionally, I deploy these projects on cloud infrastructure, ensuring seamless access and scalability for players worldwide.",
    avatar_image_path: "projects_image.svg",
  };
  
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      // profile_image_path: "",
      description:
        "I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to connect, feel free to reach out. Let’s create something amazing together! Drop me a message below, and I’ll get back to you as soon as possible.",
    },
    // blogSection: {
    //   title: "Blogs",
    //   subtitle:
    //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    //   link: "",
    //   avatar_image_path: "",
    // },
    // addressSection: {
    //   title: "Address",
    //   subtitle: "",
    //   locality: "",
    //   country: "",
    //   region: "",
    //   postalCode: "",
    //   streetAddress: "",
    //   avatar_image_path: "",
    //   location_map_link: "",
    // },
    // phoneSection: {
    //   title: "Phone Number",
    //   subtitle: "",
    // },
  };
  
  export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
  };
  