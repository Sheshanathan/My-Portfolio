import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'
import ResumeAction from '../components/ResumeAction.jsx'
import SocialAction from '../components/SocialAction.jsx'
import useTypewriter from '../hooks/useTypewriter.js'

export default function Hero() {
  const reduce = useReducedMotion()
  const { activeItem, text } = useTypewriter(personalInfo.titles, { reducedMotion: reduce })
  const longestTitle = personalInfo.titles.reduce((longest, title) => title.length > longest.length ? title : longest, '')
  const entrance = reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .72, ease: [0.22, 1, 0.36, 1] } }
  return (
    <section id="home" className="hero section-anchor" aria-labelledby="hero-title">
      <motion.div className="hero-copy" {...entrance}>
        <p className="eyebrow"><span /> Chennai, India · Open to opportunities</p><p className="hello">Hello, I&apos;m</p><h1 id="hero-title">Sheshanathan <em>S</em></h1>
        <div className="animated-role"><span className="prompt" aria-hidden="true">~/role</span><span className="role-text"><span className="role-measure" aria-hidden="true">{longestTitle}</span><strong className="role-output" aria-hidden="true">{text}<span className="typewriter-cursor" /></strong><span className="sr-only" aria-live="polite">{activeItem}</span></span></div>
        <p className="intro">{personalInfo.heroStatement}</p><p className="capabilities">REST APIs <b>•</b> Authentication <b>•</b> Databases <b>•</b> Modern UI</p>
        <div className="hero-actions"><a href="#projects" className="button primary">View my work <ArrowDown size={17} /></a><ResumeAction className="button secondary" /><a href="#contact" className="button ghost">Contact me <ArrowRight size={17} /></a></div>
        <div className="socials" aria-label="Social links"><SocialAction url={personalInfo.social.github} label="GitHub"><Github size={19} /></SocialAction><SocialAction url={personalInfo.social.linkedin} label="LinkedIn"><Linkedin size={19} /></SocialAction><a href={`mailto:${personalInfo.email}`} aria-label="Email Sheshanathan"><Mail size={19} /></a></div>
      </motion.div>
      <motion.div className="terminal-wrap" initial={reduce ? false : { opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15, ease: [0.22, 1, 0.36, 1] }}>
        <div className="terminal-top"><div><i /><i /><i /></div><span>developer.js</span><span>01</span></div>
        <pre aria-label="Developer profile code"><code><span className="dim">01</span>  <span className="pink">const</span> <span className="blue">developer</span> = {'{'}{`\n`}<span className="dim">02</span>    name: <span className="green">&quot;Sheshanathan&quot;</span>,{`\n`}<span className="dim">03</span>    role: <span className="green">&quot;Full-Stack Developer&quot;</span>,{`\n`}<span className="dim">04</span>    stack: [<span className="green">&quot;React&quot;</span>, <span className="green">&quot;Node.js&quot;</span>,{`\n`}<span className="dim">05</span>            <span className="green">&quot;MongoDB&quot;</span>],{`\n`}<span className="dim">06</span>    focus: <span className="green">&quot;complete products&quot;</span>{`\n`}<span className="dim">07</span>  {'}'};</code></pre>
        <div className="terminal-status"><span><i /> SYSTEM READY</span><span>UTF-8</span><span>JavaScript</span></div><div className="orbit-label label-one">React UI</div><div className="orbit-label label-two">REST API</div><div className="orbit-label label-three">MongoDB</div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><i><ArrowDown size={14} /></i></a>
    </section>
  )
}
