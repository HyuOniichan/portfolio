import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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
        content: "I am a dedicated Full-Stack Web Developer with 2+ years of experience building fast, deliverable, and scalable websites for startups, agencies, and growing businesses. \nMy core focus is Full-stack website development, working with JavaScript frameworks (React, Express, Node.js). I help clients design, build, improve, and scale their web applications."
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
        title: 'CarbonWise',
        description: 'A voluntary carbon credit exchange platform with integrated RAG chatbot',
        img: '/project_carbonwise.png',
        className: 'lg:col-span-4 lg:row-span-4 md:col-span-6 md:row-span-6',
        titleClassName: '',
    },
    {
        id: 2,
        title: 'Studiverse',
        description: 'An E-learning app built with MERN stack',
        img: '/project_studiverse.png',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3',
        titleClassName: '',
    },
    {
        id: 3,
        title: 'WorkDi',
        description: 'Team management and knowledge sharing website',
        img: '/project_workdi.png',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3',
        titleClassName: '',
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Description for project 4',
        img: '',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3',
        titleClassName: '',
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Description for project 5',
        img: '',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3',
        titleClassName: '',
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Description for project 6',
        img: '',
        className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3',
        titleClassName: '',
    },
]

export const feedbacks = [
    {
        quote: "Huy did an amazing job on our website redesign. His attention to detail and creativity really brought our vision to life. Highly recommend!",
        name: "John Doe",
        title: "CEO, TechCorp"
    },
    {
        quote: "Huy did an amazing job on our website redesign. His attention to detail and creativity really brought our vision to life. Highly recommend!",
        name: "John Doe 2",
        title: "CEO, TechCorp"
    },
    {
        quote: "Huy did an amazing job on our website redesign. His attention to detail and creativity really brought our vision to life. Highly recommend!",
        name: "John Doe 3",
        title: "CEO, TechCorp"
    },
]

export const experiences = [
    {
        description: "2024 - 2028",
        title: "Hanoi University of Science and Technology - Computer Science",
        src: "/background_hust.jpeg",
        ctaText: "Peek",
        ctaLink: "https://qldt.hust.edu.vn/",
        content: `
            Being a HUST - SOICT student, I have gained a solid foundation in computer science principles and practices.
            Throughout my studies, I have engaged in various projects that have enhanced my technical abilities and teamwork skills.
            I am proud to be part of a prestigious institution that fosters innovation and excellence in the field of computer science.
        `,
    },
    {
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        ctaText: "Peek",
        ctaLink: "https://ui.aceternity.com/templates",
        content: `
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
            her haunting voice and introspective lyrics. <br /> <br /> Her songs
            often explore themes of tragic romance, glamour, and melancholia,
            drawing inspiration from both contemporary and vintage pop culture.
            With a career that has seen numerous critically acclaimed albums, Lana
            Del Rey has established herself as a unique and influential figure in
            the music industry, earning a dedicated fan base and numerous
            accolades.
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
]

