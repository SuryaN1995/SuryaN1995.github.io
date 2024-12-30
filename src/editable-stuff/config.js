// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Surya",
  middleName: "",
  lastName: "N",
  message: " Enthusiastic about exploring new technologies and adapting to them. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/surya-n-b0103a103/",
    },
    {
      image: "fa-github",
      url: "https://github.com/SuryaN1995",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@surya.n1447",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/SURYA.N1447/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/surya_n_/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "My name is Surya N., and I am a software developer with a strong interest in machine learning. I graduated in 2017 from the Vidya Vikas Institute of Engineering and Technology, Mysuru, with a degree in Computer Engineering. I have experience working as an Android developer and have also contributed to data science projects, further strengthening my technical expertise. I am passionate about giving back to the community and strive to pursue this passion through my work in software engineering and data science. In my free time, I enjoy exploring new technologies and learning innovative techniques.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SuryaN1995", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const education = {
  show: true,
  heading: "Education",
  schools: [
    {
      course: "Computer Science Engineering",
      school:"Vidya Vikas Institute of Engineering and Technology",
      icon: require("../assets/img/vidya_logo.png"),
      date: "Aug 2013 - June 2017",
      description:"Specialization in Computer Science. Project on the “Intelligent Cart System” developed using Python and machine learning algorithms to provide personalized recommendations based on customers' past purchase data."
    }
  ]
}

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Android", value: 90 },
    { name: "Python", value: 75 },
    { name: "Kotlin", value: 95 },
    { name: "Java", value: 80 },
    { name: "Data science", value: 60 },
    { name: "Machine Learning", value: 50 },
    { name: "SQL", value: 70 },
    { name: "JavaScript", value: 50 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "surya.n1447@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Lead Engineer',// Here Add Company Name
      company:"Airtel Digital",
      companylogo: require('../assets/img/airtel.png'),
      workDesc:"Implemented cost-effective solutions, achieving a 20% reduction in project expenses. Streamlined project workflows, enhancing overall efficiency by 25%. Led a team in delivering a complex engineering project, completing it on time and within budget constraints, resulting in a 15% increase in client satisfaction scores.,Acquired knowledge in TV app development and created a TV app for the project using Jetpack Compose, resulting in a 40% increase in user engagement metrics.,Mentored junior developers and peers, enhancing technical skills and increasing team productivity by 30%.",
      date: 'April 2020 – Present',
    },
    {
      role: 'Software Developer',
      company:"Datamatics (Techjini)",
      companylogo: require('../assets/img/datamatics_long.png'),
      workDesc:"Projects worked on include IDFC banking integration of cKYC, the music player Jayavelu, MTS ticketing with tracking, and the Spireon project, manages fleet information consisting of four apps that I maintain. I acquired end-to-end development knowledge in Android and NodeJS backend. I developed automated scripts to simplify common tasks and reduce manual effort. I developed REST APIs and implemented authentication protocols. I learned about Android architecture, Firebase, databases, Java, and Kotlin. I optimized logic and code using threads and a work pool. I collaborated with cross-functional teams, enhancing project success rates by 10%.",
      date: 'March 2018 – April 2020',
    },
    {
      role: 'Internship',
      company:"Datamatics (Techjini)",
      companylogo: require('../assets/img/datamatics_long.png'),
      workDesc:"During my internship, I embarked on an exciting journey into Android development, where I gained hands-on experience designing, building, and testing mobile applications. I delved deep into the software development lifecycle (SDLC), learning how to transform ideas into robust, user-friendly solutions.",
      date: 'Dec 2017 – March 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, education };
