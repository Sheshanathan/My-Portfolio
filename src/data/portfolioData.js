export const personalInfo = {
  name: 'Sheshanathan S', shortName: 'Sheshanathan', brand: 'SS',
  location: 'Chennai, Tamil Nadu, India', email: 'sheshumaya@gmail.com',
  titles: ['Full-Stack Developer', 'MERN Stack Developer', 'AI & ML Graduate'],
  heroStatement: 'I build responsive, secure and scalable web applications using React, Node.js, Express and MongoDB.',
  summary: 'Computer Science Engineering graduate specialising in AI & ML with hands-on experience building responsive, database-driven applications using the MERN stack.',
  social: { github: '', linkedin: '' }, resumePath: '',
}

export const navigation = [
  { label: 'Home', id: 'home' }, { label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' },
  { label: 'Journey', id: 'journey' }, { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' }, { label: 'Contact', id: 'contact' },
]

export const highlights = [
  { number: '01', title: 'Full-Stack Development', text: 'End-to-end web applications from responsive interfaces to backend services.' },
  { number: '02', title: 'MERN Stack', text: 'React, Node.js, Express and MongoDB working as one connected system.' },
  { number: '03', title: 'REST API Development', text: 'Structured endpoints, validation, authentication and access control.' },
  { number: '04', title: 'Data Analytics', text: 'Python, SQL and Power BI for analysis, KPIs and clear business insight.' },
]

export const skills = [
  { category: 'Languages', index: '01', items: ['JavaScript', 'Python', 'SQL', 'HTML', 'CSS'] },
  { category: 'Frontend', index: '02', items: ['React.js', 'Vite', 'React Router', 'Tailwind CSS', 'Responsive Web Design'] },
  { category: 'Backend', index: '03', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Role-Based Access Control'] },
  { category: 'Databases', index: '04', items: ['MongoDB', 'Mongoose', 'MySQL', 'Firebase Firestore'] },
  { category: 'Data Analytics', index: '05', items: ['Pandas', 'Power BI', 'Matplotlib', 'EDA', 'KPI Analysis', 'Excel'] },
  { category: 'Developer Tools', index: '06', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook'] },
]

export const workflow = [
  { label: 'React UI', detail: 'Responsive interfaces' }, { label: 'API request', detail: 'Validated payloads' },
  { label: 'Express routes', detail: 'Clear endpoints' }, { label: 'Controllers', detail: 'Request handling' },
  { label: 'Business logic', detail: 'Auth & workflows' }, { label: 'MongoDB', detail: 'Persistent data' },
  { label: 'API response', detail: 'Predictable results' },
]

export const workflowSkills = ['Frontend Development', 'REST API Development', 'Authentication', 'RBAC', 'Database Integration', 'API Testing', 'Git Version Control', 'Debugging']

export const projects = [
  {
    slug: 'wcase', order: '01', name: 'WCase', subtitle: 'Creator Portfolio Platform', category: 'Full Stack', featured: true,
    technology: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'A full-stack creator platform for uploading and managing image or video work, building personal portfolios and publishing shareable public pages.',
    features: ['User authentication', 'JWT authentication', 'Email OTP & password recovery', 'Image and video uploads', 'Portfolio publishing', 'Public portfolio pages', 'Enquiries', 'Likes and sharing', 'Server-side media validation', 'Access control', 'Rate limiting', 'Responsive creator and public interfaces'],
    problem: 'Creators need one focused place to manage visual work and share a public-facing portfolio without separating content management from presentation.',
    solution: 'WCase connects a responsive creator workspace with public portfolio pages and the supporting authentication, media and enquiry workflows.',
    architecture: ['React client', 'REST API', 'Express / Node.js', 'MongoDB'], visual: 'media', github: '', demo: '', image: '',
  },
  {
    slug: 'elog', order: '02', name: 'elog', subtitle: 'Employee Management System', category: 'Full Stack', featured: true,
    technology: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description: 'A full-stack employee management application for employee and administrative workflows with secure role-based access.',
    features: ['JWT authentication', 'Protected routes', 'Admin / Employee RBAC', 'Employee and user management', 'Department and designation management', 'Attendance and leave management', 'CRUD operations', 'Search and validation', 'Attendance check-in / check-out', 'Working-hours calculation', 'CSV employee import / export', 'Password reset workflows', 'REST APIs'],
    problem: 'Employee operations involve connected records, repeated administrative tasks and role-specific actions that require secure, predictable access.',
    solution: 'elog brings the core employee and admin workflows into one MERN application with protected routes, RBAC and structured REST APIs.',
    architecture: ['React dashboards', 'Protected routes', 'Express / Node.js', 'MongoDB'], visual: 'people', github: '', demo: '', image: '',
  },
  {
    slug: 'customer-churn', order: '03', name: 'Customer Churn Analysis', subtitle: 'Telecom Retention Insights', category: 'Data Analytics', featured: false,
    technology: ['Python', 'Pandas', 'Power BI'],
    description: 'Analysis of 7,032 telecom customer records to identify churn behaviour, major contributing factors and retention patterns.',
    features: ['Data cleaning', 'Exploratory data analysis', 'Churn analysis', 'Customer behaviour analysis', 'Major churn factor identification', 'Contract type analysis', 'Tenure analysis', 'Payment method analysis', 'Interactive Power BI dashboard', 'KPI cards and filters', 'Data visualisations'],
    problem: 'Customer records contain useful retention signals, but they need to be cleaned, explored and presented before churn patterns become actionable.',
    solution: 'The project uses Python and Pandas for preparation and analysis, then presents the findings through an interactive Power BI dashboard.',
    architecture: ['Customer dataset', 'Python / Pandas', 'Exploratory analysis', 'Power BI'], visual: 'chart', metric: '7,032 records', github: '', demo: '', image: '',
  },
  {
    slug: 'ecommerce-sales', order: '04', name: 'E-Commerce Sales Analysis', subtitle: 'Performance & Profitability', category: 'Data Analytics', featured: false,
    technology: ['Python', 'SQL', 'Power BI'],
    description: 'Analysis of 9,994 e-commerce records covering sales, profit, customer, regional and product-category performance.',
    features: ['Data cleaning', 'Exploratory Data Analysis', 'SQL aggregation', 'KPI analysis', 'Sales analysis', 'Profit analysis', 'Customer analysis', 'Regional analysis', 'Category analysis', 'Interactive Power BI dashboard'],
    problem: 'Sales records must be connected across products, customers and regions to give a useful view of performance and profitability.',
    solution: 'The analysis combines Python, SQL aggregation and Power BI to organise performance indicators into an interactive decision-ready dashboard.',
    architecture: ['Sales dataset', 'Python cleaning', 'SQL aggregation', 'Power BI'], visual: 'sales', metric: '9,994 records', github: '', demo: '', image: '',
  },
]

export const education = [
  { degree: 'B.E. Computer Science and Engineering', focus: 'Artificial Intelligence & Machine Learning', school: 'Easwari Engineering College', location: 'Chennai', period: 'November 2022 – April 2026' },
  { degree: 'Higher Secondary Education', focus: '', school: 'St. Joseph’s Matriculation Higher Secondary School', location: 'Perambalur', period: 'June 2021 – May 2022' },
]

export const personal = { leadership: 'Digital Head – CSE (AI & ML)', interests: ['Short Film Editing', 'Tennis'] }
