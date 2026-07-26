export interface DeepDiveContent {
  slug: string
  title: string
  subtitle: string
  aiAgent?: boolean
  sections: {
    heading?: string
    content: string
    type?: 'text' | 'list' | 'comparison'
    items?: string[]
    comparison?: {
      left: { title: string; items: string[] }
      right: { title: string; items: string[] }
    }
  }[]
  closing: string
}

export const deepDives: DeepDiveContent[] = [
  {
    slug: 'build-vs-buy',
    title: 'Build vs. Buy',
    subtitle: 'Everyone thinks they can build authorization. Here is what happens next.',
    sections: [
      {
        heading: 'The typical trajectory',
        content: 'Most engineering teams start by building authorization themselves. It is a reasonable decision at first.',
        type: 'text',
      },
      {
        heading: 'Year 1',
        content: 'It works. Simple roles, simple rules, one app. You feel good about the decision. The code is clean, you understand it completely, and it does exactly what you need.',
        type: 'text',
      },
      {
        heading: 'Year 2',
        content: 'Second app needs access control. You copy-paste, then customize. Drift begins. The two implementations start to diverge. Someone asks why this works differently and nobody has a good answer.',
        type: 'text',
      },
      {
        heading: 'Year 3',
        content: 'Audit asks for a report you cannot generate. You build a logging layer. It takes longer than expected. The auditor comes back with follow-up questions you cannot easily answer.',
        type: 'text',
      },
      {
        heading: 'Year 4',
        content: 'Customer needs row-level access. That is a 4-month project. Meanwhile, two more apps have been built with their own authorization approaches. The spreadsheet tracking who owns what is getting unwieldy.',
        type: 'text',
      },
      {
        heading: 'Year 5',
        content: 'You are maintaining a policy engine, an admin UI, an audit system, and integrations across 12 apps. That was not the plan. The team that built the original system has moved on. New developers are afraid to touch it.',
        type: 'text',
      },
      {
        heading: 'The hidden costs',
        content: 'The engine is the easy part. The hard parts are everything around it:',
        type: 'list',
        items: [
          'Developer time that is not going to product',
          'Maintenance burden that grows non-linearly',
          'Opportunity cost of features you did not build',
          'Risk of inconsistency, gaps, and audit findings',
          'Knowledge concentration in a few people',
          'Technical debt that compounds quarterly',
        ],
      },
      {
        heading: 'When build makes sense',
        content: 'Building authorization internally is a legitimate choice in some circumstances:',
        type: 'list',
        items: [
          'Very early stage, single app, simple needs',
          'Highly unique requirements no platform addresses',
          'Strong internal team with authorization expertise and capacity',
          'Clear commitment to treating this as a product, not a side project',
        ],
      },
      {
        heading: 'When buy makes sense',
        content: 'A platform approach typically makes more sense when:',
        type: 'list',
        items: [
          'You have multiple apps or services needing access control',
          'Compliance or audit requirements are significant',
          'Business users need to participate in policy management',
          'Speed to value matters more than total customization',
          'You want to focus engineering on your core product',
        ],
      },
    ],
    closing: 'Building authorization is a legitimate choice. Just make it with eyes open about the long-term trajectory. The question is not whether you can build it. It is whether you should keep building it.',
  },
  {
    slug: 'opa-vs-platform',
    title: 'OPA and Open Source',
    subtitle: 'OPA is powerful. But it is an engine, not a platform.',
    sections: [
      {
        heading: 'What OPA does well',
        content: 'Open Policy Agent has earned its reputation in the cloud-native ecosystem:',
        type: 'list',
        items: [
          'Flexible, general-purpose policy engine',
          'Developer-loved for its power and expressiveness',
          'Rego is a capable policy language',
          'Strong Kubernetes and cloud-native integration',
          'Active community and ecosystem',
          'Open source with no licensing costs',
        ],
      },
      {
        heading: 'What you will build yourself',
        content: 'OPA gives you the decision engine. Everything else is your responsibility:',
        type: 'list',
        items: [
          'Policy management UI for authoring and reviewing',
          'Audit logging and decision history',
          'Integration connectors for your applications',
          'Testing and simulation tools',
          'Policy versioning and rollback',
          'Monitoring and alerting',
          'Documentation and training materials',
        ],
      },
      {
        heading: 'The Rego factor',
        content: 'Rego is powerful but specialized. It is a logic programming language, not a configuration format. Consider:',
        type: 'list',
        items: [
          'Can your team write and maintain Rego policies?',
          'Can business stakeholders read and understand them?',
          'What happens when the Rego expert leaves?',
          'How do you test and validate complex policies?',
          'How do you handle policy reviews and approvals?',
        ],
      },
      {
        heading: 'When OPA fits',
        content: 'OPA is a strong choice for certain environments:',
        type: 'list',
        items: [
          'Engineering-centric organization comfortable with code-as-policy',
          'Developers own policy authoring end-to-end',
          'You want maximum flexibility and can invest in surrounding infrastructure',
          'Kubernetes-native environments with existing OPA expertise',
          'Simple use cases that do not need business user involvement',
        ],
      },
      {
        heading: 'When a platform fits better',
        content: 'A dedicated authorization platform often makes more sense when:',
        type: 'list',
        items: [
          'Business users need to participate in policy management',
          'You need audit-ready decision logging out of the box',
          'You want faster integration across diverse systems',
          'You do not want to build and maintain the policy layer infrastructure',
          'Policy complexity exceeds what developers can manage alone',
        ],
      },
    ],
    closing: 'OPA is not the wrong choice for everyone. But the idea that it is open source and free undersells the total investment. The engine is free. The platform around it is not. Know what you are signing up for.',
  },
  {
    slug: 'what-to-look-for',
    title: 'What to Look For in a Platform',
    subtitle: 'Questions to ask any authorization vendor. Including us.',
    sections: [
      {
        content: 'If you are evaluating authorization solutions, here are the questions that actually matter. We have designed these to surface real differences, not just checkbox features.',
        type: 'text',
      },
      {
        heading: 'On policy management',
        content: 'How policies are created and maintained determines who can participate and how quickly you can adapt:',
        type: 'list',
        items: [
          'Who can author and modify policies? Only developers, or business users too?',
          'How do you handle policy versioning and change history?',
          'Can we test policies against real scenarios before deploying?',
          'How readable are policies to non-technical stakeholders?',
          'What does the policy review and approval workflow look like?',
        ],
      },
      {
        heading: 'On integration',
        content: 'Integration complexity is often where projects succeed or fail:',
        type: 'list',
        items: [
          'How do you integrate with our identity provider or providers?',
          'What is the latency impact on access decisions at scale?',
          'How do applications call the policy decision point? What patterns are supported?',
          'Can we integrate gradually, app by app, or is it all-or-nothing?',
          'What does a typical integration timeline look like?',
        ],
      },
      {
        heading: 'On audit and compliance',
        content: 'If you cannot prove access decisions, you cannot pass audits:',
        type: 'list',
        items: [
          'Can you show me a decision log that explains why access was granted or denied?',
          'How do we generate compliance reports?',
          'What is the data retention and export model?',
          'How do you support access reviews and certifications?',
          'Can we demonstrate least privilege to auditors?',
        ],
      },
      {
        heading: 'On operations',
        content: 'Authorization is critical infrastructure. It needs to be reliable:',
        type: 'list',
        items: [
          'What happens if the policy engine is unavailable? What is the failure mode?',
          'How do you handle policy updates without downtime?',
          'What does the ongoing maintenance burden look like?',
          'How do you handle scaling as our needs grow?',
          'What support and SLAs do you offer?',
        ],
      },
      {
        heading: 'On fit',
        content: 'Every vendor has strengths and weaknesses. Honest ones will tell you theirs:',
        type: 'list',
        items: [
          'What kinds of organizations are not a good fit for your solution?',
          'Where do customers typically struggle in implementation?',
          'Can I talk to a customer with a similar use case?',
          'What does your roadmap look like?',
          'How do you handle feature requests?',
        ],
      },
    ],
    closing: 'These questions are not designed to lead you to any particular answer. They are designed to reveal whether a vendor has really solved the problem, or just built a demo.',
  },
  {
    slug: 'vendor-questions',
    title: 'Questions to Ask Vendors',
    subtitle: 'Including us. Honest vendors welcome hard questions.',
    sections: [
      {
        content: 'When evaluating any authorization platform, these are the questions that separate marketing from reality. We encourage you to ask us these same questions.',
        type: 'text',
      },
      {
        heading: 'The fundamentals',
        content: 'Start with the basics that reveal architectural decisions:',
        type: 'list',
        items: [
          'Show me how a policy gets from concept to production. Walk me through the workflow.',
          'What happens when a policy change breaks something? How do we roll back?',
          'How do you handle conflicting policies? Who wins?',
          'What is the actual latency of a policy decision under load?',
          'How do you scale horizontally? What are the limits?',
        ],
      },
      {
        heading: 'The integration reality',
        content: 'Integration is where most projects hit friction:',
        type: 'list',
        items: [
          'Show me a real integration with our stack. Not a demo, actual code.',
          'What is the SDK footprint? What dependencies are we taking on?',
          'How do we handle authorization during your platform outages?',
          'Can we run this on-premises, or is it cloud-only?',
          'What data leaves our environment and what stays local?',
        ],
      },
      {
        heading: 'The hard questions',
        content: 'These reveal whether the vendor has battle-tested their solution:',
        type: 'list',
        items: [
          'What is your biggest implementation failure? What went wrong?',
          'Show me a customer who left. Why did they leave?',
          'What can your platform not do that competitors can?',
          'Where are you weakest right now?',
          'What would make us a bad fit for your platform?',
        ],
      },
      {
        heading: 'The business questions',
        content: 'Understanding the vendor as a business matters for long-term decisions:',
        type: 'list',
        items: [
          'What happens to our data and policies if you go out of business?',
          'How does pricing scale as we grow?',
          'What is included in the base price vs. what costs extra?',
          'Who owns the intellectual property in our policies?',
          'What is your customer retention rate?',
        ],
      },
    ],
    closing: 'Good vendors welcome hard questions because they have thought through the answers. If a vendor gets defensive or evasive, that tells you something important.',
  },
  {
    slug: 'agents-nhi-vs-obo',
    title: 'NHI vs OBO: When Each Pattern Fits',
    subtitle: 'Two ways for agents to have identity. Both have a place.',
    aiAgent: true,
    sections: [
      {
        content: 'Every agent in your environment is doing one of two things: acting as itself, or acting as a user. Most teams pick one and force-fit everything into it. The right answer is usually both, applied deliberately.',
        type: 'text',
      },
      {
        heading: 'Pattern 1: Non-Human Identity (NHI)',
        content: 'The agent has its own identity. Its own credentials. Its own permissions, audited and managed like any other identity in your IAM system.',
        type: 'text',
      },
      {
        heading: 'When NHI is the right call',
        content: '',
        type: 'list',
        items: [
          'The agent is doing system-level work that no specific user requested',
          'Background jobs, scheduled tasks, infrastructure operations',
          'Multi-tenant orchestration where no single user owns the action',
          'You need a clean audit trail that says this agent did this, on its own',
        ],
      },
      {
        heading: 'Pattern 2: On-Behalf-Of (OBO)',
        content: 'The agent acts in the context of a specific user. The user identity, permissions, and constraints flow through the agent. Whatever the user could see or do, the agent can see or do, on the user behalf, with the user accountability.',
        type: 'text',
      },
      {
        heading: 'When OBO is the right call',
        content: '',
        type: 'list',
        items: [
          'The agent is responding to a user request in real time',
          'Customer-facing copilots, assistants, and chatbots',
          'Anywhere a human triggered the action and would be accountable for it',
          'When data filtering must respect the user row-level access',
        ],
      },
      {
        heading: 'The mistake most teams make',
        content: 'Picking one pattern and applying it everywhere. NHI-only means agents see more than the requesting user should, a confidentiality breach waiting to happen. OBO-only means background and system actions get attributed to whatever user happened to trigger them last, an audit nightmare.',
        type: 'text',
      },
      {
        heading: 'How they coexist',
        content: 'A well-designed agent uses both, deliberately:',
        type: 'list',
        items: [
          'The agent has an NHI for its lifecycle, ownership, and base capabilities',
          'When acting on a user request, it switches to OBO mode and inherits user context',
          'Authorization decisions consider both the agent identity and the user context',
          'Audit logs capture both: agent X acted on behalf of user Y',
        ],
      },
    ],
    closing: 'NHI vs OBO is not a one-time architectural choice. It is a per-action decision. Agents that get this right are auditable. Agents that do not are liabilities.',
  },
  {
    slug: 'agents-three-gates',
    title: 'The Three-Gate Model',
    subtitle: 'Authorization at the agent, the tool, and the data. All three.',
    aiAgent: true,
    sections: [
      {
        content: 'Most teams put one authorization gate around their AI system, usually at the API or app boundary. That is a good start. It is also nowhere near enough.',
        type: 'text',
      },
      {
        heading: 'Gate 1: The agent boundary',
        content: 'Who can talk to this agent? With what kind of prompt? In what context? This is the outer perimeter, the equivalent of can this user log in to this app.',
        type: 'list',
        items: [
          'Authentication of the requesting user or system',
          'Authorization to invoke this specific agent',
          'Prompt-level guardrails for sensitive content or out-of-scope requests',
          'Tenant isolation in multi-tenant scenarios',
        ],
      },
      {
        heading: 'Gate 2: The tool boundary',
        content: 'Once the agent decides to call a tool, MCP server, or external API, who decides if it is allowed? The agent itself? The tool? Or a policy layer between them?',
        type: 'list',
        items: [
          'Which tools is this agent permitted to invoke at all?',
          'Under what conditions: user context, time, risk score?',
          'With what parameter constraints: dollar limits, scope filters, region restrictions?',
          'Should this specific invocation be allowed, given everything happening in this session?',
        ],
      },
      {
        heading: 'Gate 3: The data boundary',
        content: 'When the agent retrieves data from a vector store, a database, an API, who decides what comes back? The data store? Or a policy layer that enforces row-level, column-level, or document-level access based on the user context?',
        type: 'list',
        items: [
          'Which records can this user, and therefore this agent acting on their behalf, see?',
          'Which fields are masked, redacted, or filtered?',
          'Does the agent get a filtered result, or does it get everything and trust itself?',
          'What appears in the audit log when the answer is denied?',
        ],
      },
      {
        heading: 'Why one gate is not enough',
        content: 'Each gate solves a different problem. Authorization at only the agent boundary means the agent can do anything inside, including pulling data the user should not see. Authorization at only the data boundary means the agent can attempt anything and you just hope the data layer says no. Authorization at only the tool boundary means agents access raw data freely.',
        type: 'text',
      },
      {
        heading: 'Where the gates live',
        content: 'In practice, all three gates call the same policy layer, but enforce in different runtimes:',
        type: 'list',
        items: [
          'Gate 1: at the API gateway, agent framework, or chat interface',
          'Gate 2: at the agent framework hook, MCP gateway, or tool wrapper',
          'Gate 3: at the data access layer, RAG pipeline, or query engine',
        ],
      },
    ],
    closing: 'One policy decision point, three enforcement points. That is the architecture. Anything less leaves a door open.',
  },
  {
    slug: 'agents-why-existing-fails',
    title: 'Why Existing AuthZ Does Not Extend to Agents',
    subtitle: 'Same problem, different blast radius.',
    aiAgent: true,
    sections: [
      {
        content: 'A reasonable assumption: if your authorization works for human users, it should work for the agents they spawn. After all, the agent is just acting on behalf of the user, right? In practice, four things break.',
        type: 'text',
      },
      {
        heading: 'Speed',
        content: 'A human takes seconds between actions. An agent takes milliseconds. An authorization system that is fast enough for human-paced clicks may not survive the volume of an agent making thousands of policy queries per session. Caching becomes dangerous. Stale decisions become costly.',
        type: 'text',
      },
      {
        heading: 'Volume',
        content: 'One human does dozens of things in an hour. One agent might do thousands. The policy layer designed for human throughput hits limits you did not plan for. The audit log designed for human actions becomes unreadable noise.',
        type: 'text',
      },
      {
        heading: 'Chaining',
        content: 'A human chain looks like: user to app to data. An agent chain looks like: user to agent to tool to another agent to data to another tool to response. By the time an action happens, the original user context may be three or four hops upstream. Whose authorization context applies? When is identity preserved, and when is it lost?',
        type: 'text',
      },
      {
        heading: 'Standing privileges become catastrophic',
        content: 'A human with overprovisioned access is a risk. An agent with overprovisioned access is the same risk, multiplied by speed and volume. If an agent credentials get compromised, or if the agent is manipulated by a clever prompt, the blast radius is whatever standing access it had. Zero standing privileges stops being a nice-to-have.',
        type: 'text',
      },
      {
        heading: 'What this means in practice',
        content: 'You cannot bolt agents onto existing authorization. The principles transfer: externalized policy, fine-grained decisions, real-time enforcement. The implementation usually has to evolve:',
        type: 'list',
        items: [
          'Agents need their own identities, not shared ones',
          'Standing access needs to give way to ephemeral, just-in-time credentials',
          'Authorization needs to happen at every hop in the chain, not just the entry point',
          'Audit needs to capture intent, not just action',
          'Real-time revocation has to actually be real-time',
        ],
      },
      {
        heading: 'The practical first step',
        content: 'Inventory your agents. Find out what credentials they are using. Find out what they could access if they were compromised right now. Most teams who do this exercise are surprised, and not in a good way.',
        type: 'text',
      },
    ],
    closing: 'Agents do not need a different authorization philosophy than humans. They need the same one, applied with more rigor and enforced in real time. The good news: if you build for agents, your human authorization gets better too.',
  },
]

export function getDeepDiveBySlug(slug: string): DeepDiveContent | undefined {
  return deepDives.find(d => d.slug === slug)
}

export function getAllDeepDiveSlugs(): string[] {
  return deepDives.map(d => d.slug)
}

export function getAiAgentDeepDives(): DeepDiveContent[] {
  return deepDives.filter(d => d.aiAgent === true)
}

export function getNonAiDeepDives(): DeepDiveContent[] {
  return deepDives.filter(d => !d.aiAgent)
}
