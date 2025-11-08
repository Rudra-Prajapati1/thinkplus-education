import {
  BookOpen,
  Brain,
  Scale,
  GraduationCap,
  Users,
  Clock,
  Award,
  School,
  Globe,
  Target,
  Lightbulb,
} from "lucide-react";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const courses = [
  {
    title: "CAT",
    subtitle: "Gateway to management careers",
    desc: "The CAT program prepares students for management entrance exams with expert guidance and study plans.",
    icon: BookOpen,
    color: "#EC4899",
  },
  {
    title: "IPMAT",
    subtitle: "Headstart to management careers",
    desc: "A unique program designed to help students crack IPMAT exams with mentorship from IIM alumni and subject experts.",
    icon: GraduationCap,
    color: "#8B5CF6",
  },
  {
    title: "CLAT",
    subtitle: "Law-oriented programs",
    desc: "Specialized preparation course for CLAT aspirants focusing on conceptual clarity, test strategy, and mock sessions.",
    icon: Scale,
    color: "#3B82F6",
  },
  {
    title: "IQ+",
    subtitle: "Build your IQ",
    desc: "Fun, skill-based learning for young students to boost critical thinking, logic, and problem-solving abilities.",
    icon: Brain,
    color: "#10B981",
  },
  {
    title: "NMAT",
    subtitle: "Smart management prep",
    desc: "Prepare for NMAT with structured study modules, practice tests, and concept-based mentoring.",
    icon: Target,
    color: "#F59E0B",
  },
  {
    title: "CUET",
    subtitle: "Central University Entrance Test",
    desc: "Comprehensive training program with mock tests, live sessions, and personalized support for CUET aspirants.",
    icon: Globe,
    color: "#06B6D4",
  },
  {
    title: "GRE",
    subtitle: "Graduate-level preparation",
    desc: "Guided by expert mentors, our GRE prep course focuses on reasoning, vocabulary, and problem-solving mastery.",
    icon: Lightbulb,
    color: "#A855F7",
  },
];

export const stats = [
  {
    icon: Users,
    value: 400,
    suffix: "+",
    label: "Happy Students",
    color: "#EC4899",
    aos: "fade-up",
  },
  {
    icon: Clock,
    value: 600,
    suffix: " Hrs",
    label: "Dedicated Lectures",
    color: "#8B5CF6",
    aos: "fade-down",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+ Yrs",
    label: "Experienced Faculty",
    color: "#3B82F6",
    aos: "fade-up",
  },
  {
    icon: School,
    value: 47,
    suffix: "",
    label: "IIM Admissions",
    color: "#10B981",
    aos: "fade-down",
  },
];

export const testimonials = [
  {
    name: "ABC",
    course: "IPM, IIM Rohtak",
    feedback:
      "The faculty members are not only incredibly knowledgeable but also exceptionally supportive and encouraging, making the learning process truly enjoyable.",
  },
  {
    name: "DEF",
    course: "IPM, IIM Bodh Gaya",
    feedback:
      "The guidance by all the teachers, the support and one-on-one mentoring sessions helped me in analysing my strengths and weaknesses, and develop time management skills.",
  },
  {
    name: "GHI",
    course: "MBA, IIM Udaipur",
    feedback:
      "Exceptional mentors not only taught fundamentals but also instilled problem-solving approaches, fostering critical reasoning and analytical thinking throughout the preparation.",
  },
  {
    name: "JKL",
    course: "CAT, IIM Indore",
    feedback:
      "ThinkPlus made my CAT journey structured and motivating. The mock sessions and expert feedback transformed my confidence entirely.",
  },
];

export const timelineData = [
  {
    year: "2022",
    title: "The Beginning of ThinkPlus",
    description:
      "Founded by a group of IIM graduates, ThinkPlus started with a simple goal — to redefine exam preparation through mentorship and structured guidance.",
  },
  {
    year: "2023",
    title: "Building a Learning Community",
    description:
      "We introduced personalized learning models and expanded to hundreds of students across India, focusing on building confidence and clarity in learning.",
  },
  {
    year: "2024",
    title: "Expanding Our Impact",
    description:
      "ThinkPlus launched specialized programs for CAT, IPMAT, and CLAT, growing into a trusted EdTech platform with proven results and expert mentors.",
  },
  {
    year: "2025",
    title: "The Journey Ahead",
    description:
      "Our vision now is to scale learning beyond classrooms — bringing personalized mentorship and real-world knowledge to every student, everywhere.",
  },
];

export const values = [
  {
    icon: Users,
    title: "Personalized Mentorship",
    desc: "Every learner is unique — we provide tailored guidance to ensure each student achieves their best potential through mentorship and one-on-one support.",
    color: "#EC4899",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    desc: "We encourage analytical and creative problem-solving, nurturing a mindset that focuses on logic, clarity, and intellectual growth.",
    color: "#8B5CF6",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Learning",
    desc: "Learning should evolve — we constantly innovate our teaching techniques to make education engaging, modern, and effective.",
    color: "#3B82F6",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Our programs are crafted by top educators and IIM graduates, ensuring world-class quality, structure, and results.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Community & Collaboration",
    desc: "We believe in shared learning — building a community where ideas, growth, and success are celebrated together.",
    color: "#F59E0B",
  },
  {
    icon: Target,
    title: "Goal-Oriented Growth",
    desc: "We combine passion with purpose — empowering students to aim high, stay disciplined, and achieve lasting success.",
    color: "#EC4899",
  },
];

export const mentors = [
  {
    name: "Dr. PQR",
    degree: "PhD, IIM Ahmedabad",
    expert: "Quantitative Aptitude & Data Interpretation",
  },
  {
    name: "UVW",
    degree: "MBA, IIM Indore",
    expert: "Verbal Ability & Reading Comprehension",
  },
  {
    name: "MNO",
    degree: "B.A. (Hons.), Delhi University",
    expert: "Logical Reasoning & Critical Thinking",
  },
  {
    name: "ABC",
    degree: "M.Sc. Psychology, IIT Bombay",
    expert: "Personality Development & Interview Prep",
  },
  {
    name: "DEF",
    degree: "MBA, IIM Calcutta",
    expert: "Strategy & Career Guidance",
  },
  {
    name: "Dr. XYZ",
    degree: "PhD, IIM Bangalore",
    expert: "Quantitative Analysis & Mock Evaluation",
  },
];
