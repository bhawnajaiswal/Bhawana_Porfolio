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
        profileLink: "https://leetcode.com/u/mahendra4919/",
      },
      {
        siteName: "HackerRank",
        iconifyClassname: "simple-icons:hackerrank",
        style: {
          color: "#2EC866",
        },
        profileLink: "https://www.hackerrank.com/profile/21pa5a0504",
      },
      {
        siteName: "Coding Ninjas",
        iconifyClassname: "simple-icons:codingninjas",
        style: {
          color: "orange",
        },
        profileLink: "https://www.codingninjas.com/codestudio/profile/ac32f5ff-6e1b-4e45-9709-d7c0e0fe4e82",
      },
      // {
      //   siteName: "Hackerearth",
      //   iconifyClassname: "simple-icons:itch_io",
      //   style: {
      //     color: "#323754",
      //   },
      //   profileLink: "https://www.hackerearth.com/@mahendra_4919",
      // },
      {
        siteName: "Hackerearth",
        iconifyClassname: "simple-icons:hackerearth",
        style: {
          color: "#323754",
        },
        profileLink: "https://www.hackerearth.com/@mahendra_4919",
      },
    ],
  };
  
  const degrees = {
    degrees: [
      {
        title: "Vishnu Institute of Technology",
        subtitle: "B.Tech. in Computer Engineering",
        logo_path: "iiitk_logo.png",
        alt_name: "Vishnu Institute of Technology, Vishnupur, Bhimavaram",
        duration: "2021 - 2024",
        descriptions: [
          "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
          "⚡ Apart from this, I have done courses on Linux Administration, Full Stack Development, Game Development.",
          "⚡ Technical Code Setter and Android Lead at GDSC, driving coding excellence and leading Android development initiatives.",
          "⚡ Organized a game development hackathon in collaboration with IGDC at Vishnu Institute of Technology, fostering innovation and teamwork among aspiring developers.",
        ],
        website_link: "https://vishnu.edu.in/",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      {
        title: "Certification Program in Gaming and ESports",
        subtitle: "- Hero Vired",
        logo_path: "vired.jpg",
        certificate_link:
          "https://drive.google.com/file/d/1z8cNds1jHv2Akbb-lNO8FZuTM7DAKi7Z/view?usp=sharing",
        alt_name: "Hero Vired",
        color_code: "#000000",
      },
      {
        title: "Linux Administration",
        subtitle: "- Harika Infotech",
        logo_path: "harika_infotech.jpeg",
        certificate_link:
          "https://drive.google.com/file/d/19x5fsqj_rH2Fpe4BLnNqY5OaUUzzheks/view?usp=sharing",
        alt_name: "Harika Infotech",
        color_code: "#fff",
      },
      {
        title: "IT Essentials",
        subtitle: "- Cisco Networking Academy",
        logo_path: "cisco.png",
        certificate_link:
          "https://drive.google.com/file/d/19gTHlgnEzVd32gwRv7PxT4ZzKL3j7Fpo/view?usp=sharing",
        alt_name: "Cisco Networking Academy",
        color_code: "#fff",
      },
      // {
      //   title: "Data Science",
      //   subtitle: "- Alex Aklson",
      //   logo_path: "ibm_logo.png",
      //   certificate_link:
      //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      //   alt_name: "IBM",
      //   color_code: "#1F70C199",
      // },
      // {
      //   title: "Big Data",
      //   subtitle: "- Kim Akers",
      //   logo_path: "microsoft_logo.png",
      //   certificate_link:
      //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      //   alt_name: "Microsoft",
      //   color_code: "#D83B0199",
      // },
      // {
      //   title: "Advanced Data Science",
      //   subtitle: "- Romeo Kienzler",
      //   logo_path: "ibm_logo.png",
      //   certificate_link:
      //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      //   alt_name: "IBM",
      //   color_code: "#1F70C199",
      // },
      // {
      //   title: "Advanced ML on GCP",
      //   subtitle: "- GCP Training",
      //   logo_path: "google_logo.png",
      //   certificate_link:
      //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      //   alt_name: "Google",
      //   color_code: "#0C9D5899",
      // },
      // {
      //   title: "DL on Tensorflow",
      //   subtitle: "- Laurence Moroney",
      //   logo_path: "deeplearning_ai_logo.png",
      //   certificate_link:
      //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      //   alt_name: "deeplearning.ai",
      //   color_code: "#00000099",
      // },
      // {
      //   title: "Fullstack Development",
      //   subtitle: "- Jogesh Muppala",
      //   logo_path: "coursera_logo.png",
      //   certificate_link:
      //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      //   alt_name: "Coursera",
      //   color_code: "#2A73CC",
      // },
      // {
      //   title: "Kuberenetes on GCP",
      //   subtitle: "- Qwiklabs",
      //   logo_path: "gcp_logo.png",
      //   certificate_link:
      //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      //   alt_name: "GCP",
      //   color_code: "#4285F499",
      // },
      // {
      //   title: "Cryptography",
      //   subtitle: "- Saurabh Mukhopadhyay",
      //   logo_path: "nptel_logo.png",
      //   certificate_link:
      //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      //   alt_name: "NPTEL",
      //   color_code: "#FFBB0099",
      // },
      // {
      //   title: "Cloud Architecture",
      //   subtitle: "- Qwiklabs",
      //   logo_path: "gcp_logo.png",
      //   certificate_link:
      //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      //   alt_name: "GCP",
      //   color_code: "#4285F499",
      // },
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
      // {
      //   title: "Internships",
      //   experiences: [
      //     {
      //       title: "Machine Learning Intern",
      //       company: "TikTok Inc.",
      //       company_url: "https://www.tiktok.com/en/",
      //       logo_path: "tiktok_logo.png",
      //       duration: "May 2022 - Aug 2022",
      //       location: "San Francisco, USA",
      //       description:
      //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
      //       color: "#000000",
      //     },
      //     {
      //       title: "Data Science Research Intern",
      //       company: "Delhivery Pvt. Ltd.",
      //       company_url: "https://www.delhivery.com/",
      //       logo_path: "delhivery_logo.png",
      //       duration: "May 2019 - Sept 2019",
      //       location: "Gurgaon, Haryana",
      //       description:
      //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
      //       color: "#ee3c26",
      //     },
      //     {
      //       title: "Data Science Intern",
      //       company: "Intel Indexer LLC",
      //       company_url:
      //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
      //       logo_path: "intel_logo.jpg",
      //       duration: "Nov 2018 - Dec 2018",
      //       location: "Work From Home",
      //       description:
      //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
      //       color: "#0071C5",
      //     },
      //   ],
      // },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "Android Lead",
            company: "Google Developer Student Clubs",
            company_url: "https://vishnu.edu.in/",
            logo_path: "google_logo.png",
            duration: "August 2023 - May 2024",
            location: "Vishnu Institute of Technology, Andhra Pradesh",
            description:
              "Organized a flagship 72-hour game development hackathon in collaboration with IGDC. As an Android Lead, spearheaded numerous workshops and hackathons, fostering hands-on learning and innovation within the college community.",
            color: "#4285F4",
          },
          {
            title: "Code Setter & Organizer",
            company: "Vishnu Institute of Technology",
            company_url: "https://vishnu.edu.in/",
            logo_path: "iiitk_logo.png",
            duration: "December 2022 - April 2024",
            location: "Bhimavaram, Andhra Pradesh",
            description:
              "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
            color: "#4285F4",
          },
          {
            title: "Developer Program Member",
            company: "Github",
            company_url: "https://github.com/",
            logo_path: "github_logo.png",
            duration: "June 2020 - PRESENT",
            location: "Work From Home",
            description:
              "Contributing to open-source projects, collaborating with global developers, and building impactful software solutions while continuously expanding programming expertise, with a track record of qualifying for Hacktoberfest each year since 2021.",
            color: "#181717",
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
  