export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  valueProposition: string;
  challenge: string;
  approach: string;
  capabilities: string[];
  useCases: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation',
    shortDescription: 'Custom AI workflows to scale operations and eliminate manual processes.',
    valueProposition: 'We build intelligent systems that work for you 24/7, reducing operational costs and freeing your team to focus on strategic work.',
    challenge: 'Businesses are overwhelmed by repetitive, manual tasks that drain resources, introduce human error, and prevent scaling. Traditional software solutions often lack the contextual understanding required for complex workflows.',
    approach: 'VETTA engineers bespoke AI agents and autonomous workflows that integrate seamlessly into your existing ecosystem. We leverage cutting-edge LLMs and robust automation frameworks to create systems that understand, decide, and execute.',
    capabilities: [
      'LLM Integration & Fine-tuning',
      'Autonomous AI Agents',
      'Workflow Automation (Zapier, Make, Custom)',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Chatbots & Conversational Interfaces'
    ],
    useCases: [
      {
        title: 'Customer Support Automation',
        description: 'AI agents capable of resolving 70%+ of Tier 1 support tickets instantly using your internal knowledge base.'
      },
      {
        title: 'Document Processing Pipeline',
        description: 'Automated extraction, classification, and routing of unstructured data from PDFs and emails.'
      },
      {
        title: 'Sales Intelligence',
        description: 'Automated lead enrichment, personalized outreach drafting, and CRM data entry.'
      }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'We analyze your workflows to identify high-ROI automation opportunities.' },
      { step: '02', title: 'Architecture', description: 'We design a scalable, secure architecture utilizing the right AI models.' },
      { step: '03', title: 'Implementation', description: 'Rapid development and iterative deployment of the automation system.' },
      { step: '04', title: 'Monitoring', description: 'Ongoing performance tracking and model refinement to ensure accuracy.' }
    ],
    benefits: [
      'Reduce operational costs by up to 40%',
      'Eliminate manual data entry errors',
      'Scale operations without linear headcount growth',
      '24/7 process execution'
    ],
    faqs: [
      {
        question: 'Will AI replace my team?',
        answer: 'No. Our AI solutions are designed to augment your team, automating tedious tasks so your employees can focus on high-value, strategic work that requires human ingenuity.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Absolutely. We implement enterprise-grade security, utilizing private models and ensuring your data is never used to train public LLMs without explicit consent.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Most initial AI automation projects take between 4 to 8 weeks from discovery to deployment, depending on complexity and required integrations.'
      }
    ],
    relatedServices: ['data-analytics', 'software-development']
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Transform raw data into actionable intelligence and visual insights.',
    valueProposition: 'We engineer robust data pipelines and executive dashboards that provide clarity, uncover hidden opportunities, and drive evidence-based decision making.',
    challenge: 'Organizations collect massive amounts of data but struggle to extract actionable insights. Data is often siloed, inconsistent, and inaccessible to the decision-makers who need it most.',
    approach: 'VETTA builds unified data architectures that centralize your information. We apply advanced analytics and create intuitive, real-time dashboards that turn complex datasets into clear, strategic narratives.',
    capabilities: [
      'Data Warehouse Architecture',
      'ETL/ELT Pipeline Development',
      'Business Intelligence (BI) Dashboards',
      'Predictive Analytics',
      'Data Cleaning & Normalization',
      'Real-time Data Streaming'
    ],
    useCases: [
      {
        title: 'Executive KPI Dashboard',
        description: 'A unified view of company performance across sales, marketing, and operations in real-time.'
      },
      {
        title: 'Customer Churn Prediction',
        description: 'Machine learning models that identify at-risk accounts before they cancel.'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Analytics models to forecast demand and optimize inventory levels across locations.'
      }
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Comprehensive review of your existing data sources, quality, and infrastructure.' },
      { step: '02', title: 'Pipeline Design', description: 'Engineering secure, automated data pipelines to centralize information.' },
      { step: '03', title: 'Modeling', description: 'Structuring the data for efficient querying and advanced analytical modeling.' },
      { step: '04', title: 'Visualization', description: 'Designing intuitive dashboards tailored to specific stakeholder needs.' }
    ],
    benefits: [
      'Single source of truth for organizational data',
      'Faster, evidence-based decision making',
      'Identification of new revenue opportunities',
      'Proactive rather than reactive strategy'
    ],
    faqs: [
      {
        question: 'What BI tools do you work with?',
        answer: 'We are platform-agnostic and work with leading tools including Tableau, Power BI, Looker, and custom-built React dashboards.'
      },
      {
        question: 'Can you handle messy or unstructured data?',
        answer: 'Yes. A core part of our service involves data cleaning, normalization, and transforming unstructured data (text, logs) into structured formats.'
      }
    ],
    relatedServices: ['ai-automation', 'technology-consulting']
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    shortDescription: 'Scalable, custom software solutions built for enterprise performance.',
    valueProposition: 'We architect and build bespoke software applications that solve unique business challenges off-the-shelf software cannot address.',
    challenge: 'Off-the-shelf software forces businesses to adapt their processes to the tool. As companies grow, these rigid systems create bottlenecks, integration nightmares, and limit competitive advantage.',
    approach: 'VETTA delivers end-to-end custom software development. We focus on scalable cloud architectures, clean code, and user-centric design to build systems that perfectly align with your operational needs.',
    capabilities: [
      'Full-Stack Application Development',
      'Cloud Architecture (AWS, GCP, Azure)',
      'API Design & Integration',
      'Legacy System Modernization',
      'SaaS Product Development',
      'Microservices Architecture'
    ],
    useCases: [
      {
        title: 'Custom ERP/CRM Systems',
        description: 'Tailored enterprise platforms designed specifically for your unique operational workflows.'
      },
      {
        title: 'Customer Portals',
        description: 'Secure, high-performance web applications for client onboarding and account management.'
      },
      {
        title: 'Internal Tooling',
        description: 'Bespoke dashboards and admin panels to manage complex business logic.'
      }
    ],
    process: [
      { step: '01', title: 'Requirements', description: 'Deep dive into business logic, user needs, and technical constraints.' },
      { step: '02', title: 'System Design', description: 'Architecting the database, API, and cloud infrastructure for scalability.' },
      { step: '03', title: 'Agile Development', description: 'Iterative, sprint-based development with regular client check-ins.' },
      { step: '04', title: 'Testing & Launch', description: 'Rigorous QA, security auditing, and smooth deployment to production.' }
    ],
    benefits: [
      'Software that adapts to your business, not vice versa',
      'Total ownership of intellectual property',
      'Seamless integration with existing tools',
      'Enterprise-grade security and scalability'
    ],
    faqs: [
      {
        question: 'What technology stack do you use?',
        answer: 'We primarily build on modern, robust stacks including Next.js/React for the frontend, and Node.js, Python, or Go for the backend, typically deployed on AWS or Vercel.'
      },
      {
        question: 'Do you maintain the software after launch?',
        answer: 'Yes. We offer ongoing maintenance, support, and continuous feature development agreements to ensure your software evolves with your business.'
      }
    ],
    relatedServices: ['web-development', 'data-analytics']
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'High-performance, conversion-optimized marketing websites.',
    valueProposition: 'We design and engineer lightning-fast, accessible websites that serve as the digital foundation for your brand and drive measurable business growth.',
    challenge: 'A slow, outdated, or confusing website damages brand credibility and costs businesses leads. Standard templates fail to communicate unique value or perform adequately in search rankings.',
    approach: 'VETTA builds premium digital experiences. We combine intelligent UX design with modern web frameworks (like Next.js) to create sites that are exceptionally fast, technically flawless, and visually striking.',
    capabilities: [
      'Marketing Website Development',
      'Headless CMS Integration',
      'Technical SEO Optimization',
      'Web Animation & Motion Design',
      'E-commerce Solutions',
      'Web Accessibility (WCAG) Compliance'
    ],
    useCases: [
      {
        title: 'Corporate Websites',
        description: 'Professional, high-trust digital presences for B2B enterprises.'
      },
      {
        title: 'Product Landing Pages',
        description: 'Conversion-optimized pages designed to drive specific user actions.'
      },
      {
        title: 'Content Hubs',
        description: 'Scalable editorial platforms integrated with headless CMS (Sanity, Contentful).'
      }
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Defining the site architecture, user journeys, and technical requirements.' },
      { step: '02', title: 'Design', description: 'Creating high-fidelity wireframes and the visual design system.' },
      { step: '03', title: 'Development', description: 'Building the frontend components and integrating content management systems.' },
      { step: '04', title: 'Optimization', description: 'Rigorous performance auditing, SEO checks, and cross-browser testing.' }
    ],
    benefits: [
      'Sub-second page load times',
      'Higher conversion rates through strategic UX',
      'Improved organic search rankings',
      'Easy content management for marketing teams'
    ],
    faqs: [
      {
        question: 'Do you build on WordPress?',
        answer: 'We specialize in modern, headless architectures (like Next.js) which offer vastly superior performance and security compared to traditional monolithic WordPress builds. However, we can use WordPress as a headless CMS if required.'
      },
      {
        question: 'Are your websites mobile-friendly?',
        answer: 'Every site we build is strictly mobile-first, ensuring a flawless experience across all devices and screen sizes.'
      }
    ],
    relatedServices: ['software-development', 'research-intelligence']
  },
  {
    id: 'research-intelligence',
    slug: 'research-intelligence',
    title: 'Research & Intelligence',
    shortDescription: 'Deep technical research and feasibility studies for emerging tech.',
    valueProposition: 'We provide the technical due diligence and rigorous research required to make confident strategic decisions regarding new technologies and market opportunities.',
    challenge: 'The technology landscape evolves at breakneck speed. Leaders struggle to separate hype from reality, risking massive capital on unproven technologies or missing out on disruptive innovations.',
    approach: 'VETTA conducts thorough, unbiased technical investigations. Our engineers prototype, benchmark, and analyze emerging technologies to provide actionable, evidence-based intelligence reports.',
    capabilities: [
      'Technology Feasibility Studies',
      'Technical Due Diligence (M&A)',
      'Proof of Concept (PoC) Development',
      'Competitive Technical Analysis',
      'Architecture Audits',
      'AI & ML Capability Assessment'
    ],
    useCases: [
      {
        title: 'AI Feasibility Study',
        description: 'Evaluating whether current LLM technology is mature enough for a specific, high-risk business application.'
      },
      {
        title: 'M&A Technical Due Diligence',
        description: 'Auditing the codebase, infrastructure, and technical debt of an acquisition target.'
      },
      {
        title: 'Competitor Infrastructure Analysis',
        description: 'Investigating the technology stacks and scale capabilities of industry competitors.'
      }
    ],
    process: [
      { step: '01', title: 'Scoping', description: 'Defining the specific research questions, constraints, and success criteria.' },
      { step: '02', title: 'Investigation', description: 'Deep technical analysis, literature review, and architecture teardowns.' },
      { step: '03', title: 'Prototyping', description: 'Building rapid PoCs to test assumptions in real-world scenarios.' },
      { step: '04', title: 'Reporting', description: 'Delivering comprehensive reports with clear, executive-level recommendations.' }
    ],
    benefits: [
      'Mitigate risk on major technology investments',
      'Identify high-impact emerging technologies early',
      'Uncover critical flaws before M&A execution',
      'Base strategic decisions on empirical data, not hype'
    ],
    faqs: [
      {
        question: 'What do deliverables look like?',
        answer: 'Deliverables typically include a comprehensive intelligence report, an executive summary presentation, and (when applicable) access to the functional Proof of Concept code.'
      },
      {
        question: 'How long does a feasibility study take?',
        answer: 'Depending on depth, studies range from a rapid 2-week technical sprint to a 6-week comprehensive investigation.'
      }
    ],
    relatedServices: ['technology-consulting', 'ai-automation']
  },
  {
    id: 'technology-consulting',
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    shortDescription: 'Strategic guidance to align your IT infrastructure with business goals.',
    valueProposition: 'We partner with executive teams to define technology roadmaps, optimize engineering organizations, and navigate complex digital transformations.',
    challenge: 'Companies often lack the internal senior technical leadership required to make architectural decisions that will support the next decade of business growth.',
    approach: 'VETTA provides fractional CTO-level guidance. We assess your current state, align technology with your business objectives, and create practical, phased roadmaps for execution.',
    capabilities: [
      'Digital Transformation Strategy',
      'Fractional CTO Services',
      'Engineering Team Topography & Scaling',
      'Cloud Migration Strategy',
      'Security & Compliance Posture',
      'Vendor Selection & RFP Management'
    ],
    useCases: [
      {
        title: 'Cloud Migration Roadmap',
        description: 'A phased, risk-mitigated strategy for moving on-premise infrastructure to AWS.'
      },
      {
        title: 'Engineering Org Restructuring',
        description: 'Consulting on team topologies and agile methodologies to increase deployment frequency.'
      },
      {
        title: 'Build vs. Buy Analysis',
        description: 'Strategic analysis to determine whether to develop custom software or license an enterprise product.'
      }
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Evaluating current systems, team structures, and business objectives.' },
      { step: '02', title: 'Alignment', description: 'Workshops with key stakeholders to define the target state and constraints.' },
      { step: '03', title: 'Strategy', description: 'Developing the technical roadmap, resource requirements, and budget estimates.' },
      { step: '04', title: 'Governance', description: 'Ongoing oversight and guidance as internal teams or vendors execute the plan.' }
    ],
    benefits: [
      'Clear, actionable technology roadmap',
      'Alignment of engineering output with business goals',
      'Avoidance of costly architectural mistakes',
      'Objective, third-party technical perspective'
    ],
    faqs: [
      {
        question: 'Do you execute the strategy or just advise?',
        answer: 'Both. We can provide high-level guidance for your internal teams to execute, or seamlessly transition the roadmap to our Software Development and AI teams for implementation.'
      },
      {
        question: 'Can you help us hire technical talent?',
        answer: 'Yes. As part of our consulting services, we often assist in interviewing and vetting senior engineering candidates for our clients.'
      }
    ],
    relatedServices: ['software-development', 'research-intelligence']
  }
];
