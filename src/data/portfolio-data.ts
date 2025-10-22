import { Project, Experience, SkillCategory, ContactInfo, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: 'crm',
    title: 'CRM - Real-time Collaboration Platform',
    description: 'Production-oriented Android app combining real-time messaging with project/task management, cloud file storage, and team collaboration.',
    image: '/projects/crm.png',
    technologies: ['Kotlin', 'Java', 'MVVM', 'Room', 'WebSocket', 'Retrofit', 'FCM'],
    platform: 'Android',
    category: 'Enterprise',
    downloads: '10K+',
    role: 'Led the migration of the messaging module to MVVM, introducing ViewModels, LiveData, and a clean separation of concerns.',
    features: [
      'Real-time messaging with private and group rooms',
      'Voice messages with waveform visualization',
      'Image/file attachments and cloud storage',
      'Project and task management with checklists',
      'FCM push notifications',
      'Offline-first with Room database',
    ],
    impact: [
      'Migrated messaging stack to MVVM, improving testability',
      'Achieved responsive chat UX with offline caching',
      'Increased reliability with WebSocket reconnection',
      'Delivered cohesive collaboration suite',
    ],
    challenges: [
      'Real-time consistency: balanced optimistic UI with eventual consistency',
      'Media pipeline: fixed camera EXIF rotation, large file uploads',
      'Reconnection robustness: avoided duplicate insertions',
      'Legacy-to-modern: progressive migration from MVC to MVVM',
    ],
  },
  {
    id: 'aydymcom',
    title: 'AYDYMCOM - Music & Video Streaming',
    description: 'Full-featured media streaming app delivering music, long-form video, episodic series, and chat-powered community experience with 1M+ downloads.',
    image: '/projects/aydymcom.png',
    technologies: ['Kotlin', 'MVVM', 'ExoPlayer', 'Media3', 'Realm', 'Hilt', 'Retrofit'],
    platform: 'Android',
    category: 'Media & Entertainment',
    downloads: '1M+',
    role: 'End-to-end development of media streaming experience with modern Android architecture.',
    features: [
      'Audio/video playback with playlists and recommendations',
      'Offline-first downloads with background manager',
      'MediaSession service with background playback',
      'Picture-in-picture mode for videos',
      'Ads and monetization with frequency capping',
      'Deep linking and FCM notifications',
    ],
    impact: [
      'Achieved 1M+ downloads',
      'Production-grade media stack with Media3',
      'Seamless resume across app launches',
      'Smart offline with selective downloads',
    ],
    challenges: [
      'Robust domain layer separating UI from data',
      'Real offline strategy using Realm with safe transaction management',
      'Thoughtful growth infrastructure: deep links, notifications, reviews',
    ],
  },
  {
    id: 'tolkun-tv',
    title: 'Tolkun TV - Live Streaming Super App',
    description: 'Super-app combining live TV streaming (HLS), movies, classifieds marketplace, and real-time chat with bilingual UX.',
    image: '/projects/tolkun-tv.png',
    technologies: ['Java', 'MVVM', 'ExoPlayer', 'WebSocket', 'Room', 'Retrofit'],
    platform: 'Android',
    category: 'Media & Entertainment',
    role: 'Built core streaming, messaging, and commerce features with scalable MVVM architecture.',
    features: [
      'Live TV streaming with ExoPlayer',
      'Custom full-screen player with gestures',
      'Real-time messaging with WebSocket',
      'Marketplace with multi-image uploads',
      'Dynamic home screen with carousels',
      'Bilingual support (Turkmen/Russian)',
    ],
    impact: [
      'Stable live streams with tuned buffering',
      'Offline-first UX using Room',
      'Background work for contact sync',
      'Polished multi-lingual UI',
    ],
  },
  {
    id: 'ussa',
    title: 'USSA - Home Services Platform',
    description: 'Native Android app for browsing home repair/maintenance services, creating orders, and managing subscriptions with secure payment integration.',
    image: '/projects/ussa.png',
    technologies: ['Kotlin', 'Clean Architecture', 'MVVM', 'Room', 'Retrofit', 'Navigation Component'],
    platform: 'Android',
    category: 'Services',
    role: 'Defined and implemented Clean Architecture boundaries and MVVM state strategy.',
    features: [
      'Phone-based authentication with OTP',
      'Service discovery and booking',
      'Order tracking with status updates',
      'Subscription management',
      'Payment card storage with Room',
      'Media uploads with compression',
    ],
    impact: [
      'Reduced media upload failures via compression',
      'Faster perceived performance with lazy loading',
      'Full bilingual localization (RU/TK)',
      'Scalable codebase for new services',
    ],
  },
  {
    id: 'tmserwis',
    title: 'TMSerwis - Freelance Exchange',
    description: 'Freelance exchange platform connecting customers with skilled workers, featuring dual-role system and task management.',
    image: '/projects/tmserwis.png',
    technologies: ['Java', 'MVC', 'Firebase', 'Retrofit', 'Glide'],
    platform: 'Android',
    category: 'Marketplace',
    role: 'Designed, developed, and published independently.',
    features: [
      'Dual-role system (offer services or post tasks)',
      'Direct communication via phone calls',
      'Task progress tracking',
      'Rating system for workers',
      'Firebase real-time data',
      'Lightweight and efficient',
    ],
    impact: [
      'Clean MVC architecture',
      'Focus on user experience and reliability',
      'Successfully published independently',
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'gerekli-hyzmat',
    position: 'Android Developer Specialist',
    company: 'Gerekli Hyzmat (TmCars)',
    location: 'Ashgabat, Turkmenistan',
    period: 'January 2024 – Present',
    startDate: '2024-01',
    endDate: 'Present',
    description: 'Led Android application development as primary responsible developer for a comprehensive music platform.',
    responsibilities: [
      'Led Android application development as primary responsible developer for a comprehensive music platform',
      'Architected and implemented robust local database systems with seamless online content integration',
      'Delivered high-impact results: Developed music application (Aydymcom) achieving 1M+ downloads',
      'Engineered efficient media solutions: Implemented video playback and storage mechanisms using ExoPlayer',
      'Built real-time audio streaming services with advanced background playback capabilities',
      'Collaborated effectively within large, cross-functional teams using Agile methodologies',
      'Maintained code integrity through version control systems (GitHub, GitLab)',
      'Optimized app performance by implementing strategic caching mechanisms to reduce data usage',
      'Ensured code quality through rigorous unit testing and continuous integration practices',
    ],
    technologies: ['Kotlin', 'MVVM', 'ExoPlayer', 'Media3', 'Room', 'Realm', 'Hilt', 'Retrofit', 'WebSocket'],
    achievements: [
      '1M+ downloads on music application',
      'Implemented efficient caching reducing data usage by 40%',
      'Led migration to modern architecture patterns',
    ],
  },
  {
    id: 'payhas-merkezi',
    position: 'Android Developer',
    company: 'Payhas Merkezi (KIP Engineering)',
    location: 'Ashgabat, Turkmenistan',
    period: 'February 2022 – December 2023',
    startDate: '2022-02',
    endDate: '2023-12',
    description: 'Launched professional career as Junior Android Developer, successfully delivering 2 complete applications.',
    responsibilities: [
      'Developed technical expertise primarily in Java while mastering essential Android libraries',
      'Built sophisticated chat application using WebSocket technology with integrated local properties',
      'Gained database proficiency across multiple technologies: Room, SQL, and Realm',
      'Mastered Modern Architecture patterns: Specialized in MVVM while gaining familiarity with MVC and MVP',
      'Focused on code quality: Applied clean code principles and debugging techniques',
    ],
    technologies: ['Java', 'Kotlin', 'MVVM', 'MVC', 'MVP', 'Room', 'Realm', 'WebSocket', 'Retrofit'],
    achievements: [
      'Successfully delivered 2 complete applications',
      'Mastered modern architecture patterns',
      'Built production-ready chat application',
    ],
  },
  {
    id: 'android-mentor',
    position: 'Android Mentor',
    company: 'Freelance',
    location: 'Remote',
    period: 'March 2023 – November 2023',
    startDate: '2023-03',
    endDate: '2023-11',
    description: 'Created comprehensive video lessons for Junior Android developers.',
    responsibilities: [
      'Produced comprehensive video lessons for Junior Android developers, covering both theoretical concepts and practical applications',
      'Created and edited educational content, incorporating video effects to enhance learning experience',
      'Developed two distinct types of video tutorials: in-depth exploration of Android documentation with hands-on examples',
      'Created step-by-step guides for building 2-3 complete Android projects',
      'Utilized video editing skills to deliver polished, professional-quality educational content',
    ],
    technologies: ['Android', 'Kotlin', 'Java', 'Video Editing'],
    achievements: [
      'Created 50+ educational videos',
      'Helped 100+ junior developers',
      'Built 3 complete project tutorials',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Native Android',
    skills: [
      { name: 'Kotlin', category: 'Native Android', proficiency: 95 },
      { name: 'Java', category: 'Native Android', proficiency: 90 },
      { name: 'Android SDK', category: 'Native Android', proficiency: 95 },
      { name: 'Jetpack Compose', category: 'Native Android', proficiency: 80 },
    ],
    color: '#3DDC84',
  },
  {
    name: 'Architecture & Patterns',
    skills: [
      { name: 'Clean Architecture', category: 'Architecture & Patterns', proficiency: 90 },
      { name: 'MVVM', category: 'Architecture & Patterns', proficiency: 95 },
      { name: 'MVC', category: 'Architecture & Patterns', proficiency: 85 },
      { name: 'MVP', category: 'Architecture & Patterns', proficiency: 80 },
      { name: 'Repository Pattern', category: 'Architecture & Patterns', proficiency: 90 },
    ],
    color: '#8b5cf6',
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Room', category: 'Backend & Database', proficiency: 95 },
      { name: 'Realm', category: 'Backend & Database', proficiency: 85 },
      { name: 'Firebase', category: 'Backend & Database', proficiency: 90 },
      { name: 'SQLite', category: 'Backend & Database', proficiency: 85 },
    ],
    color: '#f59e0b',
  },
  {
    name: 'API & Integration',
    skills: [
      { name: 'RESTful APIs', category: 'API & Integration', proficiency: 95 },
      { name: 'Retrofit', category: 'API & Integration', proficiency: 95 },
      { name: 'WebSockets', category: 'API & Integration', proficiency: 90 },
      { name: 'SocketIO', category: 'API & Integration', proficiency: 85 },
      { name: 'GraphQL', category: 'API & Integration', proficiency: 75 },
    ],
    color: '#3b82f6',
  },
  {
    name: 'Media & Streaming',
    skills: [
      { name: 'ExoPlayer', category: 'Media & Streaming', proficiency: 90 },
      { name: 'Media3', category: 'Media & Streaming', proficiency: 90 },
      { name: 'MediaSession', category: 'Media & Streaming', proficiency: 85 },
      { name: 'HLS Streaming', category: 'Media & Streaming', proficiency: 85 },
    ],
    color: '#ec4899',
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git', category: 'Tools & DevOps', proficiency: 95 },
      { name: 'GitHub', category: 'Tools & DevOps', proficiency: 90 },
      { name: 'GitLab', category: 'Tools & DevOps', proficiency: 90 },
      { name: 'Gradle', category: 'Tools & DevOps', proficiency: 85 },
      { name: 'Android Studio', category: 'Tools & DevOps', proficiency: 95 },
    ],
    color: '#10b981',
  },
  {
    name: 'UI/UX & Design',
    skills: [
      { name: 'Material Design', category: 'UI/UX & Design', proficiency: 95 },
      { name: 'XML Layouts', category: 'UI/UX & Design', proficiency: 95 },
      { name: 'Custom Views', category: 'UI/UX & Design', proficiency: 85 },
      { name: 'Animations', category: 'UI/UX & Design', proficiency: 90 },
    ],
    color: '#06b6d4',
  },
  {
    name: 'Modern Android',
    skills: [
      { name: 'Coroutines', category: 'Modern Android', proficiency: 90 },
      { name: 'Flow', category: 'Modern Android', proficiency: 90 },
      { name: 'Hilt/Dagger', category: 'Modern Android', proficiency: 85 },
      { name: 'Navigation Component', category: 'Modern Android', proficiency: 90 },
      { name: 'WorkManager', category: 'Modern Android', proficiency: 85 },
    ],
    color: '#f43f5e',
  },
];

export const contactInfo: ContactInfo = {
  email: 'twodiesdeveloper@gmail.com',
  phone: '+993 65804101',
  location: 'Parahat 2., Ashgabat City, Turkmenistan',
  linkedin: 'https://tm.linkedin.com/in/iamtwodies',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://tm.linkedin.com/in/iamtwodies',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/iamtwodies',
    icon: 'instagram',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/iamtwodies',
    icon: 'telegram',
  },
  {
    name: 'Email',
    url: 'mailto:twodiesdeveloper@gmail.com',
    icon: 'mail',
  },
  {
    name: 'Phone',
    url: 'tel:+99365804101',
    icon: 'phone',
  },
];

export const personalInfo = {
  name: 'Shahnur Daniyarov',
  title: 'Mobile Application Developer',
  tagline: '3+ years of expertise in Android development, specializing in native apps with Clean Architecture',
  bio: `Experienced Mobile Application Developer with 3+ years of expertise in native Android development.
        Specialized in building scalable, high-performance applications using modern architecture patterns like
        MVVM and Clean Architecture. Proven track record of delivering production-ready apps with millions of
        downloads, including real-time messaging platforms, media streaming services, and enterprise solutions.`,
  education: {
    degree: 'Master of Science',
    institution: 'Magtymguly Turkmen State University',
    period: '2021 - 2026',
    field: 'Chemistry',
  },
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Total Downloads', value: '1M+' },
    { label: 'Client Satisfaction', value: '100%' },
  ],
};
