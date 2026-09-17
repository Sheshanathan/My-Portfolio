export const personalInfo = {
  name: 'Sheshanathan S',
  location: 'Chennai, Tamil Nadu, India', email: 'sheshumaya@gmail.com',
  titles: ['Full-Stack Developer', 'MERN Stack Developer', 'AI & ML Graduate'],
  heroStatement: 'I build responsive, secure and scalable web applications using React, Node.js, Express and MongoDB.',
  social: {
    github: 'https://github.com/Sheshanathan',
    linkedin: 'https://www.linkedin.com/in/sheshanathan/',
  },
  resumePath: '/resume/Sheshanathan_S_Resume.pdf',
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
    slug: 'wcase', order: '01', name: 'WCase', subtitle: 'Creator Portfolio & Publishing Platform', category: 'Full Stack', featured: true,
    technology: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MongoDB', 'Cloudinary'],
    description: 'A creator publishing product that turns uploaded image and video work into a shareable public portfolio, with one private workspace for content and engagement.',
    overview: 'WCase serves two connected experiences. Creators register through email OTP, build a profile, upload image or video projects, organise their work and publish a portfolio at a unique public slug. Visitors can browse published work without an account, open media, like and share projects, and send an enquiry. Views, likes and enquiries return to the creator dashboard.',
    headings: {
      overview: 'A private creator workspace with a public portfolio.',
      problem: 'Publishing work should not require several disconnected tools.',
      solution: 'One product, with separate authoring and public access paths.',
      final: 'Media security is enforced beyond the interface.',
    },
    features: ['Email OTP registration and password recovery', 'Creator profile, cover image and social-link management', 'Image and video uploads with optional thumbnails', 'Categories, tags, year, project or client details and custom ordering', 'Draft visibility and portfolio publishing controls', 'Public portfolio and individual work pages', 'Likes, views, sharing, enquiries and abuse reporting', 'Account deletion with OTP confirmation'],
    problem: 'Creators often manage files, portfolio pages and enquiries in separate places. WCase brings those jobs into a single workflow while keeping drafts, account-owned media and management actions private until the creator chooses to publish.',
    solution: 'The React application separates the authenticated creator dashboard from the public /p/:slug experience. Express routes distinguish protected, optional-auth and public operations; Mongoose models persist portfolios, works and engagement; and production media is stored in Cloudinary with signed delivery rather than exposed storage credentials.',
    engineering: 'The API is the source of truth for ownership and publication state. Upload middleware validates media type and size, media routes check who may view each asset, sensitive operations receive dedicated rate limits, and exact-origin CORS and response security headers narrow the production trust boundary.',
    architecture: ['React 19, Vite 8 and React Router 7 client', 'Express 5 REST API', 'JWT, bcrypt, OTP and Brevo email services', 'Mongoose domain models in MongoDB', 'Cloudinary storage with signed production delivery'],
    implementation: ['Protected creator routes alongside intentionally public portfolio routes', 'Server-side checks for media type, size, ownership and publication status', 'Dedicated limits for authentication, uploads, enquiries, reports and view events', 'Backend tests for HTTP safety, validation, media access and engagement analytics'],
    github: 'https://github.com/Sheshanathan/wcase-portfolio-platform', demo: 'https://wcase-portfolio-platform.vercel.app/', image: '', thumbnail: '/project-images/wcase-thumbnail.png', poster: '/project-images/wcase-video-poster.jpg', video: '/project-videos/wcase-showcase.mp4',
  },
  {
    slug: 'elog', order: '02', name: 'elog', subtitle: 'Workforce Operations System', category: 'Full Stack', featured: true,
    technology: ['React', 'Vite', 'React Router', 'Express', 'MongoDB', 'JWT'],
    description: 'A single-organisation workforce system with distinct admin and employee experiences for records, attendance, leave and account access.',
    overview: 'elog gives administrators an operational view of their organisation and employees a focused self-service area. Admins manage employee records, departments, designations and user accounts; import or export employees; maintain attendance; review correction requests; and process leave. Employees manage their profile, check in and out, submit the working day, review attendance, request corrections and track leave balances and decisions.',
    headings: {
      overview: 'Two role-specific products on one shared data model.',
      problem: 'Workforce actions are connected, but access cannot be shared equally.',
      solution: 'Permissions and business rules are enforced in the API.',
      final: 'The deployment mirrors the application boundaries.',
    },
    features: ['Admin dashboard with workforce, department and payroll summaries', 'Employee, department, designation and user-account management', 'Admin and Employee role-based access', 'Employee check-in, check-out and working-day submission', 'Attendance history, time editing and correction review', 'Leave balances, requests, approval, rejection and cancellation', 'CSV employee import and export', 'In-app notifications and email password recovery'],
    problem: 'Employee records, user accounts, organisational structure, attendance and leave all reference one another. The system must keep those records consistent while ensuring that employee self-service actions never expose administrative capabilities.',
    solution: 'The backend separates authentication, employees, departments, designations, attendance, corrections, leave, notifications and users into dedicated routes, controllers and Mongoose models. JWT middleware identifies each request and admin middleware protects privileged operations; frontend guards provide the matching navigation experience.',
    engineering: 'elog intentionally has no public registration route: administrators create and link employee accounts, and the first administrator is created through a controlled setup. The frontend is deployed on Vercel, the API runs on Render, MongoDB Atlas stores application data, and password-reset email uses the Brevo HTTPS API because the hosting environment blocks outbound SMTP.',
    architecture: ['React 19, Vite 8 and React Router 7 client', 'Authentication context and role-aware route guards', 'Express 5 domain routes, controllers and middleware', 'Mongoose models in MongoDB Atlas', 'Render API and Brevo transactional email'],
    implementation: ['Backend auth and admin middleware enforce permissions independently of the UI', 'Reusable attendance helpers calculate check-in, check-out and working hours', 'CSV workflows, linked department and designation records, and audit logging', 'Swagger documentation in development plus notification and correction workflows'],
    demoNote: 'elog uses controlled account creation and does not expose public registration. The walkthrough below shows both role-specific experiences.',
    github: 'https://github.com/Sheshanathan/elog-employee-management-system', demo: 'https://elog-employee-management-system.vercel.app/', image: '', thumbnail: '/project-images/elog-thumbnail.png', poster: '/project-images/elog-video-poster.jpg', video: '/project-videos/elog-showcase.mp4',
  },
  {
    slug: 'customer-churn', order: '03', name: 'Customer Churn Analysis', subtitle: 'Telecom Retention Insights', category: 'Data Analytics', featured: false,
    technology: ['Python', 'Pandas', 'SQL', 'Power BI'],
    description: 'An end-to-end analysis of 7,032 telecom customers focused on churn behaviour and retention signals.',
    overview: 'The project takes the raw Telco Customer Churn dataset through cleaning, exploratory analysis, SQL summaries and a Power BI dashboard. The final view combines headline KPIs with contract, payment-method and internet-service comparisons.',
    features: ['7,032 cleaned customer records', 'Missing-value and duplicate checks', 'TotalCharges numeric conversion', 'Churn counts and percentage distribution', 'Contract, payment method and internet service comparisons', 'Monthly-charge analysis by churn status', 'SQL aggregation queries', 'Power BI KPI cards, charts and filters'],
    problem: 'Raw customer records do not immediately explain why customers leave. Data types, missing values and categorical segments must be prepared consistently before contract and service patterns can be compared.',
    solution: 'Pandas converts and cleans the dataset, crosstabs and grouped measures expose churn differences, SQL provides repeatable summaries, and Power BI turns the prepared results into an interactive retention dashboard.',
    learning: 'The analysis demonstrated how a small cleaning decision can change every later KPI. Converting TotalCharges safely and removing incomplete rows before segmentation produced a dependable base for comparing churn across contracts, payment methods and services.',
    architecture: ['Raw telecom customer CSV', 'Pandas cleaning and preparation', 'EDA and SQL aggregation', 'Cleaned analysis dataset', 'Interactive Power BI dashboard'],
    implementation: ['Converted TotalCharges with invalid values handled as missing', 'Compared churn using value counts, averages and categorical crosstabs', 'Saved a cleaned dataset for repeatable downstream analysis', 'Built dashboard KPIs for total customers, churned customers and monthly charges'],
github: 'https://github.com/Sheshanathan/customer-churn-analysis', demo: '', image: '/project-images/customer-churn-dashboard.png', imageFit: 'cover', video: '',
  },
  {
    slug: 'ecommerce-sales', order: '04', name: 'E-Commerce Sales Analysis', subtitle: 'Performance & Profitability', category: 'Data Analytics', featured: false,
    technology: ['Python', 'Pandas', 'SQL', 'Power BI'],
    description: 'An analysis of 9,994 e-commerce records across sales, profit, customers, regions and product performance.',
    overview: 'This project follows a complete analytics workflow from Superstore data cleaning to Python exploration, SQL business queries and a Power BI dashboard. It connects revenue, profit and order volume with monthly, regional, category and customer views.',
    features: ['9,994 e-commerce records', 'Duplicate removal and date parsing', 'Monthly sales trend analysis', 'Regional sales and profit comparison', 'Category and product performance', 'Top-customer contribution analysis', 'Loss-making product identification', 'Power BI KPI cards, breakdowns and filters'],
    problem: 'Sales alone can hide weak profitability. The data needs to be analysed across time, region, category, customer and product so high revenue can be separated from sustainable performance.',
    solution: 'Python standardises fields and explores the main trends, SQL aggregates repeatable business questions, and Power BI presents sales, profit and orders together with filters for deeper comparison.',
    learning: 'This project reinforced the importance of analysing revenue and profit together. Normalising dates and column names first made it easier to reuse the same dimensions across Pandas, SQL and Power BI while identifying strong categories and loss-making products.',
    architecture: ['Raw Superstore CSV', 'Pandas cleaning and date handling', 'EDA and SQL business queries', 'Prepared analysis dataset', 'Interactive Power BI dashboard'],
    implementation: ['Removed duplicates, parsed order dates and normalised column names', 'Aggregated monthly sales plus regional and category performance', 'Ranked top customers and products with negative total profit', 'Built dashboard KPIs for total sales, total profit and order count'],
github: 'https://github.com/Sheshanathan/ecommerce-analysis', demo: '', image: '/project-images/ecommerce-sales-dashboard.png', video: '',
  },
]

export const education = [
  { degree: 'B.E. Computer Science and Engineering', focus: 'Artificial Intelligence & Machine Learning', school: 'Easwari Engineering College', location: 'Chennai', period: 'November 2022 – April 2026' },
  { degree: 'Higher Secondary Education', focus: '', school: 'St. Joseph’s Matriculation Higher Secondary School', location: 'Perambalur', period: 'June 2021 – May 2022' },
]

export const personal = { leadership: 'Digital Head – CSE (AI & ML)', interests: ['Short Film Editing', 'Tennis'] }
