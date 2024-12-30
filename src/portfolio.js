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
        title: "Game Development",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Developing highly scalable production ready games in both 3D and 2D",
          "⚡ Experience of working with Story Based Games and Third Person Shooting",
          "⚡ Complex quantitative design for High Graphical Games",
        ],
        softwareSkills: [
          {
            skillName: "Unity",
            fontAwesomeClassname: "simple-icons:unity",
            style: {
              // backgroundColor: "#fff",
              color: "#000000",
            },
          },
          {
            skillName: "C Sharp",
            fontAwesomeClassname: "simple-icons:csharp",
            style: {
              backgroundColor: "transparent",
              color: "#270065",
            },
          },
          {
            skillName: "Unreal",
            fontAwesomeClassname: "simple-icons:unrealengine",
            style: {
              backgroundColor: "transparent",
              color: "#000000",
            },
          },
          {
            skillName: "C++",
            fontAwesomeClassname: "simple-icons:cplusplus",
            style: {
              backgroundColor: "transparent",
              color: "#0080cd",
            },
          },
          {
            skillName: "Blender",
            fontAwesomeClassname: "simple-icons:blender",
            style: {
              backgroundColor: "transparent",
              color: "#eb7700",
            },
          },
        ],
      },
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
        logo_path: "src\assets\images\JSSATE_Noida.png",
        alt_name: "JSS Academy of Technical Education, Noida",
        duration: "2021 - 2024",
        descriptions: [
          "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
          "⚡ Apart from this, I have done courses on Linux Administration, Full Stack Development.",
        ],
        website_link: "https://jssaten.ac.in/",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      {
        title: "PThe Complete 2022 Web Development Bootcamp - Udemy",
        subtitle: "Udemy",
        logo_path: "src/assets/images/udemy_logo.jpg",
        certificate_link:
          "https://www.udemy.com/certificate/UC-96193c5b-0426-40b5-8577-2c4665b7c397/",
        alt_name: "Udemy",
        color_code: "#000000",
      },
      {
        title: "Programming for Everybody (Getting Started with Python)",
        subtitle: "Coursera",
        logo_path: "src\assets\images\coursera_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/YKMWRL83HC3L?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
        alt_name: "Coursera",
        color_code: "#fff",
      },
      {
        title: "Create Your First Chatbot with Rasa and Python",
        subtitle: "Coursera",
        logo_path: "src\assets\images\coursera_logo.png",
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
    subtitle: "Work, Internship and Volunteership",
    description:
      "I have collaborated with several emerging studios and indie developers as a game developer, contributing across Unity, Unreal, Blender, C#, and C++. Additionally, I have partnered with established companies, focusing primarily on game mechanics, AI integration, and software architecture. I am passionate about organizing events, which has led to my active involvement with various open-source communities as a representative.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work",
        work: true,
        experiences: [
          {
            title: "Associate Software Engineer",
            company: "Accenture India Pvt. Ltd.",
            company_url: "https://www.accenture.com/in-en",
            logo_path: "tiktok_logo.png",
            duration: "August 2024 - Present",
            location: "Nagpur, India",
            description:
              "Collaborated in agile teams to deliver innovative software solutions, optimized processes through automation, and contributed to full-stack development, ensuring seamless client delivery and enhanced business performance.",
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
      profile_image_path: "animated_ashutosh.png",
      description:
        "I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to connect, feel free to reach out. Let’s create something amazing together! Drop me a message below, and I’ll get back to you as soon as possible.",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
      link: "https://blogs.ashutoshhathidara.com/",
      avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
      title: "Address",
      subtitle: "Narsapur, West Godavari Dist, Andhra Pradesh - 534275",
      locality: "Ramalayam Street",
      country: "India",
      region: "Andhra Pradesh",
      postalCode: "534275",
      streetAddress: "Saratoga Avenue",
      avatar_image_path: "address_image.svg",
      location_map_link: "https://maps.app.goo.gl/4nq83jX3XA2P6nyZ6",
    },
    phoneSection: {
      title: "Phone Number",
      subtitle: "+91 6305152568",
    },
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
  