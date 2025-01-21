/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Surya N",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Surya N Portfolio",
    type: "website",
    url: "https://suryan1995.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Surya N",
  logo_name: "Surya N",
  nickname: "surya_n",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Nk8ta0RtZxNVcVZyJEtLuPVK4fUlMyFQ/view?usp=sharing",
  githubProfile: "https://github.com/SuryaN1995",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/SuryaN1995",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/surya-n-b0103a103/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:surya.n1447@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/N1447Surya",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/SURYA.N1447/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/surya_n_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive app development using android studio and Xcode",
        "⚡ Developing mobile applications using swift, android apps using Kotlin, Jetpack components, Compose and Java",
        "⚡ Creating application backend in Room, Retrofit, Okhttp",
        "⚡ Developing apps using the modern UI kit Compose and Swift UI",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3ddc84",
          },
        },
        {
          skillName: "Jetpack Compose",
          fontAwesomeClassname: "simple-icons:jetpackcompose",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#4285f4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#f28b65",
          },
        },
        {
          skillName: "swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#0072fd",
          },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            color: "#0072fd",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-java",
          style: {},
        },
        {
          skillName: "Json",
          fontAwesomeClassname: "devicon-json",
          style: {},
        },
        {
          skillName: "Xml",
          fontAwesomeClassname: "simple-icons:xml",
          style: {},
        },
      ],
    },
    {
      title: "Web Stack Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building responsive website front end using React, HTML5, CSS",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Deployment using the aws, heroku, GCP with setup using docker",
        "⚡ Worked on the SQL and NoSQL databases of MySql, SqLite, MongoDB",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
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
      profileLink: "https://leetcode.com/u/user8335Fr/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/surya_n1447",
    },
    /*     {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    }, */
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@surya.n1447",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/suryan1995",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vidya Vikas Institute of Engineering and Technology",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "vidya_logo.png",
      alt_name: "VVIET Mysuru",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, and hackathons.",
      ],
      website_link: "http://vidyavikasengineering.com/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Sequences, Time Series and Prediction",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PY48DP84FTTM",
      alt_name: "deeplearning.ai",
      color_code: "#f65c67",
    },
    {
      title: "Natural Langu age Processing in TensorFlow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NQEU88PFTT7T",
      alt_name: "deeplearning.ai",
      color_code: "#f65c67",
    },
    {
      title: "AI, ML and DL",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VMR4GB7WSPXT",
      alt_name: "deeplearning.ai",
      color_code: "#f65c67",
    },
    {
      title: "AI TensorFlow Developer",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "deeplearning.ai",
      color_code: "#f65c67",
    },
    {
      title: "IBM Data Science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/5RHRP6SK3HX4",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Aije Egwaikhide",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GGHV5CD2ZDX5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "- IBM",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.credly.com/badges/2b533dab-747d-40d1-95cd-4b3e6866b2b6",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- Saeed Aghabozorgi",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BFFQQRTWUZDA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Data Science Orientation",
      subtitle: "- IBM",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.credly.com/badges/e09872dc-df7a-4437-8357-09ff61b23c07",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "ML and DL with Python",
      subtitle: "- Teach Premium",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-001d3107-aa55-4611-9ecd-46c46cab46b4/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "NodeJs Developer Course",
      subtitle: "- Andrew Mead",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-9A1I86D2/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "Python bootcamp",
      subtitle: "- Shivgani Joshi",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ab06219e-c8c7-42c0-a6a4-af02715ae4a4/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "Angular5 Course",
      subtitle: "- Gary Simon",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-QO0ZK31F/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "Angular4 Course",
      subtitle: "- Gary Simon",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-YS7OBTG2/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "AWS Architect Course",
      subtitle: "- Vijay Patel",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-UHT1HEA8/",
      alt_name: "Udemy",
      color_code: "#5022c3",
    },
    {
      title: "Data Everywhere",
      subtitle: "- Amanda Brophy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/2GQYEMVH64Q4",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "React FrontEnd Development",
      subtitle: "- Coursera",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6P8ZUNZV0JM4",
      alt_name: "Meta",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some well established companies mostly as DataScience, AI, ML and DL Developer and App Developer. I love attending organisation events and that is why I am also involved with many communities, hackathons and meetups.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Airtel Digital",
          company_url: "https://www.airtel.in/",
          logo_path: "airtel_logo.svg",
          duration: "June 2024 - Present",
          location: "Bengaluru, India",
          description:
            "I worked on enhancing the model to efficiently handle customer-raised signal issues by aligning them with their corresponding band-based issue tagging. This improvement ensured more accurate categorization and resolution of customer concerns, ultimately streamlining the issue management process. Additionally, I contributed to digitalizing vendor invoices by leveraging the model to validate costs effectively. This automation not only reduced manual effort but also identified discrepancies, leading to significant cost savings for the company. The combined impact of these efforts resulted in improved operational efficiency, optimized resource allocation, and a measurable positive effect on the company’s overall performance.",
          color: "#000000",
        },
        {
          title: "Lead App Developer",
          company: "Airtel Digital",
          company_url: "https://www.airtel.in/",
          logo_path: "airtel_logo.svg",
          duration: "April 2020 - June 2024",
          location: "Bengaluru, Karnataka",
          description:
            "Led a team in delivering a complex engineering project, completing it on time and within budget constraints, resulting in a 15% increase in client satisfaction scores.,Acquired knowledge in TV app development and created a TV app for the project using Jetpack Compose, resulting in a 40% increase in user engagement metrics.,Mentored junior developers and peers, enhancing technical skills and increasing team productivity by 30%.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Datamatics Digital Limited (DDL) (Techjini)",
          company_url: "https://www.datamatics.com/",
          logo_path: "datamatics_logo.svg",
          duration: "March 2018 - April 2020",
          location: "Bengaluru, Karnataka",
          description:
            "Projects worked on include IDFC banking integration of cKYC, the music player Jayavelu, MTS ticketing with tracking, and the Spireon project, manages fleet information consisting of four apps that I maintain. I acquired end-to-end development knowledge in Android and NodeJS backend. I developed automated scripts to simplify common tasks and reduce manual effort. I developed REST APIs and implemented authentication protocols. I learned about Android architecture, Firebase, databases, Java, and Kotlin. I optimized logic and code using threads and a work pool. I collaborated with cross-functional teams, enhancing project success rates by 10%.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Datamatics Digital Limited (DDL) (Techjini)",
          company_url: "https://www.datamatics.com/",
          logo_path: "datamatics_logo.svg",
          duration: "December 2017 - March 2018",
          location: "Bengaluru, Karnataka",
          description:
            "During my internship, I gained comprehensive insights into the software development lifecycle (SDLC) with a focus on app development. This involved hands-on experience with key programming languages such as Kotlin and Java, as well as integrating and working with RESTful APIs. I had the opportunity to explore various stages of the development process, including requirement analysis, design, development, testing, and deployment. Through this, I not only enhanced my coding skills but also learned how to build scalable and efficient applications. Additionally, I gained practical knowledge of collaborating within a development team, adhering to coding standards, and implementing best practices for backend and frontend integration.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects, app development using Android and iOS and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ai-ds-blog",
      name: "Artificial Intelligence and Data Science: From Beginner to Pro",
      createdAt: "2025-01-15T00:00:00Z",
      description:
        "Paper published on how we can approach data science and AI in 2025",
      url:
        "https://medium.com/@surya.n1447/artificial-intelligence-and-data-science-from-beginner-to-pro-f6aba7169128",
    },
    {
      id: "google-vision-ml-kit",
      name: "Google Vision ML Kit",
      createdAt: "2020-09-17T00:00:00Z",
      description: "Paper published for Google Vision",
      url:
        "https://medium.com/@surya.n1447/google-vision-ml-kit-with-camerax-64bbbfd4c6fd",
    },
    {
      id: "uitest",
      name: "Android UT and UI Test",
      createdAt: "2018-08-01T00:00:00Z",
      description: "Blog published for Android testing suite",
      url:
        "https://medium.com/@surya.n1447/android-ut-and-ui-testing-basics-part-1-1bda50135c2f",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "surya_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@surya.n1447",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "I am resident of a silicon valley, IT capital of India. Bengaluru, Karnataka, India.",
    locality: "Domaluru",
    country: "India",
    region: "Bengaluru",
    // postalCode: "",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Py7neCH9Cd5Dy9Cr6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  publicationsHeader,
  publications,
  contactPageData,
};
