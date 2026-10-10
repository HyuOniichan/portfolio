import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Feedbacks", link: "#feedbacks" },
    { name: "Contact", link: "#contact" },
];

export const aboutText = [
    {
        title: "Who Am I?",
        content: "I am an aspiring Edge AI Engineer and Computer Science student at Hanoi University of Science and Technology (HUST) with a strong focus on deploying optimized Computer Vision models on resource-constrained edge devices. \nMy core expertise lies in bridging on-device AI with robotics, embedded systems, and full-stack web platforms to solve real-world challenges."
    },
    {
        title: "Name",
        content: "Dang Nguyen Duc Huy"
    },
    {
        title: "Email",
        content: "dangnguyenduchuy@gmail.com"
    },
    {
        title: "From",
        content: "Ha Noi, Viet Nam"
    },
    {
        title: "Phone",
        content: "(+84) 911986289"
    },
]

export const projects = [
    {
        id: 1,
        title: 'Robot Arm CV',
        description: 'Real-time Computer Vision pipeline on ESP32-CAM edge devices for vision-based robotic arm control via serial communication', img: '/project_robotarmcv.png',
        link: 'https://www.youtube.com/watch?v=XOkkgYuG6wo',
        className: 'lg:col-span-4 lg:row-span-4 md:col-span-6 md:row-span-6',
    },
    {
        id: 2,
        title: 'CarbonWise',
        description: 'Voluntary carbon credit exchange platform with an integrated RAG chatbot via Gemini API & LangChain.js',
        img: '/project_carbonwise.png',
        link: 'https://greenmind-ohck.onrender.com/',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-4',
    },
    {
        id: 3,
        title: 'Studiverse',
        description: 'An E-learning web application built with the MERN stack to support modern online education',
        img: '/project_studiverse.png',
        link: 'https://huy-studiverse.vercel.app/',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-4',
    },
];

export const feedbacks = [
    {
        quote: "Huy did an outstanding job integrating the RAG chatbot into our platform. His strong technical background in both AI and web development made the implementation seamless.",
        name: "Ms. Tho",
        title: "Project Lead, CarbonWise Initiative"
    },
{
        quote: "An engaging, practical, and highly polished student project. The introductory video was clear, well-structured, and demonstrated a strong level of completeness.",
        name: "SOICT - HUST Jury Board",
        title: "Innovation Day 2026 Evaluation"
    },
    {
        quote: "Huy is a quick learner and a dedicated engineer. His ability to integrate advanced AI models into a software application is truly impressive. Nice to work with him btw.",
        name: "Mr. Hoang Anh",
        title: "Senior Software Engineer"
    },
];

export const experiences = [
    {
        description: "09/2024 - Present",
        title: "Hanoi University of Science and Technology - Computer Science (IT1)",
        src: "/background_hust.jpeg",
        ctaText: "Details",
        ctaLink: "https://qldt.hust.edu.vn/",
        content: `
            Being a HUST - SOICT third-year student with a CPA of 3.56/4.0, I have gained a solid foundation in computer science principles, algorithms, and practical AI research.
            Throughout my studies, I have focused heavily on artificial intelligence, machine learning architectures, and edge computing systems.
        `,
    },
    {
        description: "10/2025 - 03/2026",
        title: "Edge AI Engineer - Robot Arm CV Project (Top 1 Innovation Day 2026, SOICT - HUST)",
        src: "/project_robotarmcv.png",
        ctaText: "Details",
        ctaLink: "https://www.facebook.com/share/p/1BMJxE7ge7/",
        content: `
            Developed a real-time Computer Vision pipeline to detect arm and hand keypoints from an edge-device camera stream (ESP32-CAM), transmitting control commands to the robotic arm via serial communication.
            (1) Achieved Top 1 at the Innovation Day 2026 student technology project showcase event organized by SOICT - HUST.
            (2) Fine-tuned a YOLO-based pose model (yolo26n-pose) via transfer learning in PyTorch; evaluated accuracy-latency trade-offs across MediaPipe and Ultralytics YOLO. 
            (3) Constructed a custom dataset of 400+ annotated hand images, augmented with a 26k-sample public dataset for robust edge deployment.
        `,
    },
];

export const socials = [
    {
        id: 1,
        icon: FaGithub,
        link: 'https://github.com/DangNguyenDucHuy'
    },
    {
        id: 2,
        icon: FaFacebook,
        link: 'https://www.facebook.com/uchuy.789289/'
    },
    {
        id: 3,
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-nguy%E1%BB%85n-%C4%91%E1%BB%A9c-huy-96b7b430b/'
    },
    {
        id: 4,
        icon: FaEnvelope,
        link: 'mailto:dangnguyenduchuy@gmail.com'
    },
]

