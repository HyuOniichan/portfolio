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
        description: 'Vision-based robotic arm control system using real-time Computer Vision and ESP32-CAM stream',
        img: '/project_robotarmcv.png',
        className: 'lg:col-span-4 lg:row-span-4 md:col-span-6 md:row-span-6',
        titleClassName: '',
    },
    {
        id: 2,
        title: 'CarbonWise',
        description: 'Voluntary carbon credit exchange platform with an integrated RAG chatbot via Gemini API & LangChain.js',
        img: '/project_carbonwise.png',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-4',
        titleClassName: '',
    },
    {
        id: 3,
        title: 'Studiverse',
        description: 'An E-learning web application built with the MERN stack to support modern online education',
        img: '/project_studiverse.png',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-4',
        titleClassName: '',
    },
];

export const feedbacks = [
    {
        quote: "Huy did an outstanding job integrating the RAG chatbot into our platform. His strong technical background in both AI and web development made the implementation seamless.",
        name: "Minh Quan",
        title: "Project Lead, CarbonWise Initiative"
    },
    {
        quote: "Working with Huy on our computer vision pipeline was fantastic. His attention to model accuracy and latency optimization on edge devices exceeded our expectations.",
        name: "Dr. Hoang Nam",
        title: "AI Research Mentor"
    },
    {
        quote: "Huy is a quick learner and a dedicated engineer. His ability to bridge hardware control with advanced computer vision is truly impressive. Nice to work with btw.",
        name: "Thu Ha",
        title: "Senior Software Engineer"
    },
];

export const experiences = [
    {
        description: "09/2024 - Present",
        title: "Hanoi University of Science and Technology - Computer Science (IT1)",
        src: "/background_hust.jpeg",
        ctaText: "Peek",
        ctaLink: "https://qldt.hust.edu.vn/",
        content: `
            Being a HUST - SOICT student with a GPA of 3.56/4.0, I have gained a solid foundation in computer science principles, algorithms, and practical AI research.
            Throughout my studies, I have focused heavily on artificial intelligence, machine learning architectures, and edge computing systems.
        `,
    },
    {
        description: "10/2025 - 03/2026",
        title: "AI Engineer & Computer Vision Researcher - Robot Arm CV Project",
        src: "/project_robotarmcv.png",
        ctaText: "Peek",
        ctaLink: "https://github.com/DangNguyenDucHuy/robot-arm-cv",
        content: `
            Developed a real-time Computer Vision pipeline to detect arm and hand keypoints from an edge-device camera stream (ESP32-CAM), sending control commands via serial communication.
            (1) Fine-tuned a YOLO-based pose model using transfer learning in PyTorch.
            (2) Built a custom dataset by collecting/annotating 400+ hand images and augmenting training data from a public dataset (26k+ samples).
            (3) Evaluated multiple pose detection approaches including MediaPipe and Ultralytics YOLO for accuracy-latency trade-offs.
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

