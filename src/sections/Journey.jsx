import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { workflow, workflowSkills } from '../data/portfolioData.js'
export default function Journey() {
  const reduce = useReducedMotion()
  return <section id="journey" className="content-section section-anchor journey-section"><SectionHeading index="03" eyebrow="Development journey" title="How an application comes together." description="The workflow I use to think beyond the interface and connect every layer." /><div className="workflow-shell"><div className="workflow-top"><span>REQUEST_LIFECYCLE</span><span>7 CONNECTED STAGES</span></div><div className="workflow-flow">{workflow.map((step, index) => <div className="workflow-node-wrap" key={step.label}><motion.div className="workflow-node" initial={reduce ? false : { opacity: .35 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step.label}</strong><small>{step.detail}</small></motion.div>{index < workflow.length - 1 && <ArrowRight className="flow-arrow" size={18} />}</div>)}</div><div className="response-line"><span>USER INTERACTION</span><i /><span>RELIABLE RESPONSE</span></div></div><Reveal className="practice-grid">{workflowSkills.map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}</Reveal></section>
}
