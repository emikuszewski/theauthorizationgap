export interface AssessmentAnswer {
  questionId: string
  answerId: string | string[]
}

export interface AssessmentResult {
  level: number
  levelName: string
  levelTagline: string
  levelDescription: string
  selfAssessedLevel: number | null
  gaps: string[]
  persona: string
  personaName: string
  initiatives: string[]
}

export const questions = [
  {
    id: 'role',
    question: 'What best describes your role?',
    answers: [
      { id: 'security-leader', text: 'Security or IT leadership (CISO, VP Security, etc.)', persona: 'security-leader' },
      { id: 'architect', text: 'Enterprise or solutions architect', persona: 'architect' },
      { id: 'engineering-lead', text: 'Engineering or platform team lead', persona: 'engineering-lead' },
      { id: 'compliance', text: 'Compliance, risk, or GRC', persona: 'compliance' },
      { id: 'product-manager', text: 'Product management', persona: 'product-manager' },
      { id: 'developer', text: 'Developer or individual contributor', persona: 'developer' },
      { id: 'other', text: 'Other', persona: 'security-leader' },
    ],
  },
  {
    id: 'confidence',
    question: 'When someone asks who has access to what in our systems, how confident is your answer?',
    answers: [
      { id: 'precise', text: 'We can answer precisely, with evidence, in minutes', maturityScore: 4 },
      { id: 'days', text: 'We can get there, but it takes days and multiple teams', maturityScore: 2 },
      { id: 'scramble', text: 'Honestly, it is a scramble every time', maturityScore: 1 },
      { id: 'unsure', text: 'I am not sure we could answer it at all', maturityScore: 0 },
    ],
  },
  {
    id: 'location',
    question: 'Where does most of your access control logic live today?',
    answers: [
      { id: 'embedded', text: 'Embedded in application code, handled per-app', maturityScore: 0 },
      { id: 'idp', text: 'In our identity provider (roles or groups in Okta, Azure AD, etc.)', maturityScore: 1 },
      { id: 'mix', text: 'A mix: some centralized, some app-specific', maturityScore: 2 },
      { id: 'dedicated', text: 'We have a dedicated policy engine or authorization service', maturityScore: 3 },
      { id: 'unsure', text: 'I am not sure', maturityScore: 1 },
    ],
  },
  {
    id: 'authoring',
    question: 'Who can create or modify access policies in your organization?',
    answers: [
      { id: 'developers-only', text: 'Developers only: it is in the code', maturityScore: 0 },
      { id: 'it-admins', text: 'IT or security admins, through our IdP or access management tools', maturityScore: 1 },
      { id: 'mix', text: 'A mix of technical and non-technical people, depending on the system', maturityScore: 2 },
      { id: 'both', text: 'Business and technical teams can both manage policies through a shared platform', maturityScore: 4 },
      { id: 'unclear', text: 'It varies wildly and there is no clear ownership', maturityScore: 0 },
    ],
  },
  {
    id: 'audit',
    question: 'If an auditor asked why did this user have access to this resource last Tuesday, could you answer?',
    answers: [
      { id: 'full-logs', text: 'Yes, we have full decision logs with context', maturityScore: 4 },
      { id: 'partial', text: 'Partially: we have some logs but gaps in coverage or detail', maturityScore: 2 },
      { id: 'reconstruct', text: 'We could reconstruct it, but it would take significant effort', maturityScore: 1 },
      { id: 'no', text: 'Probably not', maturityScore: 0 },
    ],
  },
  {
    id: 'requirements',
    question: 'A customer or regulator asks for fine-grained access control (e.g., row-level data restrictions, time-based access). What happens?',
    answers: [
      { id: 'configure', text: 'We can configure it through our existing policy layer', maturityScore: 4 },
      { id: 'custom', text: 'It is a custom development project: weeks to months', maturityScore: 1 },
      { id: 'evaluate', text: 'We would have to evaluate if it is even possible with our current setup', maturityScore: 0 },
      { id: 'pushback', text: 'We would probably say no or push back', maturityScore: 0 },
    ],
  },
  {
    id: 'developer-time',
    question: 'How much time do your developers spend writing and maintaining access control logic?',
    answers: [
      { id: 'minimal', text: 'Minimal: it is handled by a shared service or platform', maturityScore: 4 },
      { id: 'some', text: 'Some, but it is manageable', maturityScore: 2 },
      { id: 'a-lot', text: 'A lot: every app has its own approach', maturityScore: 0 },
      { id: 'unsure', text: 'I do not know, but I suspect it is more than we would like', maturityScore: 1 },
    ],
  },
  {
    id: 'scale',
    question: 'How many applications, services, or data platforms need access control in your environment?',
    answers: [
      { id: 'under-10', text: 'Fewer than 10' },
      { id: '10-50', text: '10-50' },
      { id: '50-200', text: '50-200' },
      { id: 'over-200', text: 'More than 200' },
      { id: 'unsure', text: 'I do not have a clear count' },
    ],
  },
  {
    id: 'initiatives',
    question: 'Are any of these on your roadmap or radar right now?',
    multiSelect: true,
    answers: [
      { id: 'zero-trust', text: 'Zero trust implementation' },
      { id: 'cloud', text: 'Cloud migration or modernization' },
      { id: 'compliance', text: 'Compliance remediation (SOX, HIPAA, GDPR, etc.)' },
      { id: 'customer', text: 'Customer-facing access control requirements' },
      { id: 'consolidation', text: 'Consolidating identity and access systems' },
      { id: 'developer-burden', text: 'Reducing developer burden on security' },
      { id: 'none', text: 'None of these specifically' },
    ],
  },
  {
    id: 'self-assessment',
    question: 'How would you describe your organization authorization maturity today?',
    answers: [
      { id: 'early', text: 'We are early: mostly ad-hoc and reactive', selfAssessedLevel: 0 },
      { id: 'foundations', text: 'We have foundations but significant gaps', selfAssessedLevel: 1 },
      { id: 'progress', text: 'We are making progress with pockets of maturity', selfAssessedLevel: 2 },
      { id: 'advanced', text: 'We are fairly advanced but looking to optimize', selfAssessedLevel: 3 },
      { id: 'unsure', text: 'We are not sure where we stand (that is why I am here)', selfAssessedLevel: null },
    ],
  },
]

export const maturityLevels = [
  {
    level: 0,
    name: 'Ad-hoc',
    tagline: 'Authorization by accident.',
    description: 'Access logic is embedded in application code. No consistency across systems. Decisions are invisible and unexplainable. Every app is its own island.',
  },
  {
    level: 1,
    name: 'Centralized Identity',
    tagline: 'SSO is in place, but authorization is still fragmented.',
    description: 'You have unified authentication. Roles exist in your IdP. But fine-grained access decisions still happen app by app. The who can do what question is still hard to answer.',
  },
  {
    level: 2,
    name: 'Emerging Standards',
    tagline: 'Pockets of consistency, but still siloed.',
    description: 'Some teams have externalized policies. Maybe you are using a policy engine somewhere. But there is no unified approach. Different languages, different patterns, different owners.',
  },
  {
    level: 3,
    name: 'Unified Authorization',
    tagline: 'One policy layer across applications.',
    description: 'Policies are externalized and centralized. Access decisions are consistent and auditable. Business logic is separated from application code. You can answer who has access to what in minutes, not weeks.',
  },
  {
    level: 4,
    name: 'Adaptive and Continuous',
    tagline: 'Real-time, context-aware, zero-trust aligned.',
    description: 'Decisions factor in real-time context: device, location, risk score, time. Policies adapt dynamically. Authorization is infrastructure, not an afterthought.',
  },
]

export const personaNames: Record<string, string> = {
  'security-leader': 'Security Leader',
  'architect': 'Enterprise Architect',
  'engineering-lead': 'Engineering Lead',
  'compliance': 'Compliance Lead',
  'product-manager': 'Product Manager',
  'developer': 'Developer',
}

export const gapDescriptions: Record<string, string> = {
  'confidence': 'Visibility into access decisions',
  'location': 'Centralized authorization logic',
  'authoring': 'Policy authoring accessibility',
  'audit': 'Audit and explainability',
  'requirements': 'Flexibility for new requirements',
  'developer-time': 'Developer productivity',
}

export function calculateResult(answers: AssessmentAnswer[]): AssessmentResult {
  const roleAnswer = answers.find(a => a.questionId === 'role')
  const roleQuestion = questions.find(q => q.id === 'role')
  const selectedRole = roleQuestion?.answers.find(a => a.id === roleAnswer?.answerId)
  const persona = (selectedRole as any)?.persona || 'security-leader'

  const selfAssessAnswer = answers.find(a => a.questionId === 'self-assessment')
  const selfAssessQuestion = questions.find(q => q.id === 'self-assessment')
  const selfAssessSelected = selfAssessQuestion?.answers.find(a => a.id === selfAssessAnswer?.answerId)
  const selfAssessedLevel = (selfAssessSelected as any)?.selfAssessedLevel ?? null

  const scoredQuestionIds = ['confidence', 'location', 'authoring', 'audit', 'requirements', 'developer-time']
  let totalScore = 0
  let scoredCount = 0
  const gaps: string[] = []

  for (const qId of scoredQuestionIds) {
    const answer = answers.find(a => a.questionId === qId)
    if (!answer) continue

    const question = questions.find(q => q.id === qId)
    const selectedAnswer = question?.answers.find(a => a.id === answer.answerId)
    const score = (selectedAnswer as any)?.maturityScore

    if (typeof score === 'number') {
      totalScore += score
      scoredCount++
      if (score <= 1) {
        gaps.push(gapDescriptions[qId] || qId)
      }
    }
  }

  const avgScore = scoredCount > 0 ? totalScore / scoredCount : 0
  const level = Math.min(4, Math.max(0, Math.round(avgScore)))
  const maturityLevel = maturityLevels[level]

  const initiativesAnswer = answers.find(a => a.questionId === 'initiatives')
  const initiatives = Array.isArray(initiativesAnswer?.answerId)
    ? initiativesAnswer.answerId
    : initiativesAnswer?.answerId ? [initiativesAnswer.answerId] : []

  return {
    level,
    levelName: maturityLevel.name,
    levelTagline: maturityLevel.tagline,
    levelDescription: maturityLevel.description,
    selfAssessedLevel,
    gaps: gaps.slice(0, 3),
    persona,
    personaName: personaNames[persona] || 'Security Leader',
    initiatives,
  }
}

export function encodeResultsToUrl(result: AssessmentResult): string {
  const params = new URLSearchParams({
    l: result.level.toString(),
    p: result.persona,
    g: result.gaps.join(','),
    s: result.selfAssessedLevel?.toString() || '',
    i: result.initiatives.join(','),
  })
  return params.toString()
}

export function decodeResultsFromUrl(searchParams: URLSearchParams): AssessmentResult | null {
  const levelStr = searchParams.get('l')
  const persona = searchParams.get('p')

  if (!levelStr || !persona) return null

  const level = parseInt(levelStr, 10)
  if (isNaN(level) || level < 0 || level > 4) return null

  const maturityLevel = maturityLevels[level]
  const gapsStr = searchParams.get('g') || ''
  const selfStr = searchParams.get('s')
  const initiativesStr = searchParams.get('i') || ''

  return {
    level,
    levelName: maturityLevel.name,
    levelTagline: maturityLevel.tagline,
    levelDescription: maturityLevel.description,
    selfAssessedLevel: selfStr ? parseInt(selfStr, 10) : null,
    gaps: gapsStr ? gapsStr.split(',').filter(Boolean) : [],
    persona,
    personaName: personaNames[persona] || 'Security Leader',
    initiatives: initiativesStr ? initiativesStr.split(',').filter(Boolean) : [],
  }
}

// AI AGENT AUTHORIZATION ASSESSMENT
// Maturity model adapted from the framework on agentic AI authorization at IBM.
// Levels 1-4: Ad hoc, Foundation, Enhanced, Adaptive.

export interface AiAssessmentResult {
  level: number
  levelName: string
  levelTagline: string
  levelDescription: string
  selfAssessedLevel: number | null
  gaps: string[]
  persona: string
  personaName: string
}

export const aiMaturityLevels = [
  {
    level: 1,
    name: 'Ad hoc',
    tagline: 'AI in production. Authorization in spirit only.',
    description: 'Agents share service accounts or use hardcoded credentials. There is no distinct identity for what is acting. Authorization is whatever the application enforces, or does not. When something goes wrong, the audit trail says the model did it.',
    characteristics: [
      'Shared API keys or service accounts across agents',
      'No clear ownership or lifecycle for agent identities',
      'Audit logs show actions, not authorization context',
      'Standing access to whatever the agent might need',
    ],
  },
  {
    level: 2,
    name: 'Foundation',
    tagline: 'Agents have identities. The basics are in place.',
    description: 'Each agent gets a non-human identity (NHI). Basic delegation patterns let agents act on behalf of users with that user context. Audit logs flow into your SIEM. You can answer which agent did what, but not always should they have.',
    characteristics: [
      'Agents assigned distinct NHIs',
      'Basic OBO (on-behalf-of) delegation patterns in use',
      'SIEM captures agent actions for audit and compliance',
      'Role-based access for agents, similar to humans',
    ],
  },
  {
    level: 3,
    name: 'Enhanced',
    tagline: 'Agents are first-class citizens of your access model.',
    description: 'Agents are governed like any other identity. Ephemeral credentials replace standing access. Fine-grained, contextual policies enforce what an agent can access at the data, tool, and prompt boundaries. Policy violations are detected in real time.',
    characteristics: [
      'Agents treated as first-class identities, not edge cases',
      'Ephemeral credentials replace long-lived secrets',
      'Fine-grained, contextual access at data, tool, and MCP boundaries',
      'Real-time detection of policy violations',
    ],
  },
  {
    level: 4,
    name: 'Adaptive',
    tagline: 'Authorization moves at the speed of the agent.',
    description: 'Continuous authorization, not point-in-time. Risk-based re-evaluation as context changes. Real-time revocation when an agent strays. Policies adapt based on behavior, time, location, and risk. The authorization layer is as dynamic as the agents it governs.',
    characteristics: [
      'Continuous authorization across the full agent flow',
      'Risk-based re-authentication and re-evaluation mid-session',
      'Real-time revocation when context or risk changes',
      'Policies adapt dynamically to behavior and signals',
    ],
  },
]

export const aiQuestions = [
  {
    id: 'role',
    question: 'What best describes your role?',
    answers: [
      { id: 'security-leader', text: 'Security or IT leadership (CISO, VP Security, etc.)', persona: 'security-leader' },
      { id: 'architect', text: 'Enterprise or solutions architect', persona: 'architect' },
      { id: 'engineering-lead', text: 'Engineering or platform team lead', persona: 'engineering-lead' },
      { id: 'compliance', text: 'Compliance, risk, or GRC', persona: 'compliance' },
      { id: 'product-manager', text: 'Product management', persona: 'product-manager' },
      { id: 'developer', text: 'Developer or individual contributor', persona: 'developer' },
      { id: 'other', text: 'Other', persona: 'security-leader' },
    ],
  },
  {
    id: 'ai-identity',
    question: 'How are AI agents identified in your environment today?',
    answers: [
      { id: 'shared-keys', text: 'Agents use shared service accounts, API keys, or the model account', maturityScore: 1 },
      { id: 'nhi-only', text: 'Each agent has its own non-human identity (NHI)', maturityScore: 3 },
      { id: 'obo-only', text: 'Agents act on behalf of users (OBO), inheriting user context', maturityScore: 3 },
      { id: 'both', text: 'Both: agents have NHIs and act on behalf of users when appropriate', maturityScore: 4 },
      { id: 'none', text: 'We do not have AI agents in production yet', maturityScore: 1 },
      { id: 'unsure', text: 'I am not sure', maturityScore: 1 },
    ],
  },
  {
    id: 'ai-scope',
    question: 'When an agent retrieves data on behalf of a user, what does it actually see?',
    answers: [
      { id: 'agent-account', text: 'Whatever the agent account has access to', maturityScore: 1 },
      { id: 'user-context', text: 'Only what the requesting user is permitted to see', maturityScore: 4 },
      { id: 'mixed', text: 'It varies by agent and integration', maturityScore: 2 },
      { id: 'unsure', text: 'I do not know', maturityScore: 1 },
    ],
  },
  {
    id: 'ai-tools',
    question: 'How is it controlled which tools, APIs, or data sources an agent can invoke?',
    answers: [
      { id: 'all-keys', text: 'Agents have credentials for everything they might need', maturityScore: 1 },
      { id: 'role-based', text: 'Role-based: agents are assigned roles that map to tool sets', maturityScore: 2 },
      { id: 'fine-grained', text: 'Fine-grained policies define exactly which tools each agent can call', maturityScore: 3 },
      { id: 'contextual', text: 'Context-aware policies considering user intent, time, risk, and data sensitivity', maturityScore: 4 },
    ],
  },
  {
    id: 'ai-audit',
    question: 'Could you reconstruct why an agent took a specific action last week?',
    answers: [
      { id: 'full', text: 'Yes: we have logs of the prompt, the policy decision, and the action', maturityScore: 4 },
      { id: 'partial', text: 'We have logs but they are incomplete or scattered across systems', maturityScore: 2 },
      { id: 'just-action', text: 'We can see the action but not the reasoning or authorization context', maturityScore: 1 },
      { id: 'no', text: 'Probably not', maturityScore: 1 },
    ],
  },
  {
    id: 'ai-realtime',
    question: 'If an agent starts behaving anomalously, can you revoke its access mid-task?',
    answers: [
      { id: 'instant', text: 'Yes: policy changes take effect on the next decision, in real time', maturityScore: 4 },
      { id: 'minutes', text: 'Within minutes, by updating credentials or roles', maturityScore: 3 },
      { id: 'hours', text: 'Hours: we would have to coordinate across teams', maturityScore: 1 },
      { id: 'no', text: 'We would have to take the agent offline entirely', maturityScore: 1 },
    ],
  },
  {
    id: 'ai-self',
    question: 'How would you describe your AI authorization maturity today?',
    answers: [
      { id: 'adhoc', text: 'Ad hoc: we are shipping AI faster than we are governing it', selfAssessedLevel: 1 },
      { id: 'foundation', text: 'Foundation: agents have identities and basic audit', selfAssessedLevel: 2 },
      { id: 'enhanced', text: 'Enhanced: fine-grained, contextual policies in place', selfAssessedLevel: 3 },
      { id: 'adaptive', text: 'Adaptive: continuous, real-time enforcement', selfAssessedLevel: 4 },
      { id: 'unsure', text: 'I do not know yet: that is why I am here', selfAssessedLevel: null },
    ],
  },
]

export const aiGapDescriptions: Record<string, string> = {
  'ai-identity': 'Distinct identity for AI agents',
  'ai-scope': 'User context preservation in agent calls',
  'ai-tools': 'Fine-grained tool and API control',
  'ai-audit': 'Agent action audit and explainability',
  'ai-realtime': 'Real-time revocation and enforcement',
}

export function calculateAiResult(answers: AssessmentAnswer[]): AiAssessmentResult {
  const roleAnswer = answers.find(a => a.questionId === 'role')
  const roleQuestion = aiQuestions.find(q => q.id === 'role')
  const selectedRole = roleQuestion?.answers.find(a => a.id === roleAnswer?.answerId)
  const persona = (selectedRole as any)?.persona || 'security-leader'

  const selfAssessAnswer = answers.find(a => a.questionId === 'ai-self')
  const selfAssessQuestion = aiQuestions.find(q => q.id === 'ai-self')
  const selfAssessSelected = selfAssessQuestion?.answers.find(a => a.id === selfAssessAnswer?.answerId)
  const selfAssessedLevel = (selfAssessSelected as any)?.selfAssessedLevel ?? null

  const scoredQuestionIds = ['ai-identity', 'ai-scope', 'ai-tools', 'ai-audit', 'ai-realtime']
  let totalScore = 0
  let scoredCount = 0
  const gaps: string[] = []

  for (const qId of scoredQuestionIds) {
    const answer = answers.find(a => a.questionId === qId)
    if (!answer) continue

    const question = aiQuestions.find(q => q.id === qId)
    const selectedAnswer = question?.answers.find(a => a.id === answer.answerId)
    const score = (selectedAnswer as any)?.maturityScore

    if (typeof score === 'number') {
      totalScore += score
      scoredCount++
      if (score <= 2) {
        gaps.push(aiGapDescriptions[qId] || qId)
      }
    }
  }

  const avgScore = scoredCount > 0 ? totalScore / scoredCount : 1
  const level = Math.min(4, Math.max(1, Math.round(avgScore)))
  const maturityLevel = aiMaturityLevels[level - 1]

  return {
    level,
    levelName: maturityLevel.name,
    levelTagline: maturityLevel.tagline,
    levelDescription: maturityLevel.description,
    selfAssessedLevel,
    gaps: gaps.slice(0, 3),
    persona,
    personaName: personaNames[persona] || 'Security Leader',
  }
}

export function encodeAiResultsToUrl(result: AiAssessmentResult): string {
  const params = new URLSearchParams({
    l: result.level.toString(),
    p: result.persona,
    g: result.gaps.join(','),
    s: result.selfAssessedLevel?.toString() || '',
  })
  return params.toString()
}

export function decodeAiResultsFromUrl(searchParams: URLSearchParams): AiAssessmentResult | null {
  const levelStr = searchParams.get('l')
  const persona = searchParams.get('p')

  if (!levelStr || !persona) return null

  const level = parseInt(levelStr, 10)
  if (isNaN(level) || level < 1 || level > 4) return null

  const maturityLevel = aiMaturityLevels[level - 1]
  const gapsStr = searchParams.get('g') || ''
  const selfStr = searchParams.get('s')

  return {
    level,
    levelName: maturityLevel.name,
    levelTagline: maturityLevel.tagline,
    levelDescription: maturityLevel.description,
    selfAssessedLevel: selfStr ? parseInt(selfStr, 10) : null,
    gaps: gapsStr ? gapsStr.split(',').filter(Boolean) : [],
    persona,
    personaName: personaNames[persona] || 'Security Leader',
  }
}
