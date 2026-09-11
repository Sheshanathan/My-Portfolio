import About from '../sections/About.jsx'
import Contact from '../sections/Contact.jsx'
import Education from '../sections/Education.jsx'
import Hero from '../sections/Hero.jsx'
import Journey from '../sections/Journey.jsx'
import Projects from '../sections/Projects.jsx'
import Skills from '../sections/Skills.jsx'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
export default function HomePage() {
  useDocumentMeta('Sheshanathan S | Full-Stack Developer', 'Full-stack developer portfolio of Sheshanathan S, showcasing MERN stack projects, React, Node.js, Express, MongoDB, REST APIs and data analytics projects.')
  return <main id="main-content"><Hero /><About /><Skills /><Journey /><Projects /><Education /><Contact /></main>
}
