export interface GlossaryTerm {
  term: string
  definition: string
  related?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'ABAC',
    definition: 'Attribute-Based Access Control. Access decisions based on attributes of the user, the resource, the environment, rather than just roles. More flexible than RBAC, but more complex to manage without the right tooling.',
    related: ['RBAC', 'PBAC', 'Authorization'],
  },
  {
    term: 'Access Control',
    definition: 'The process of determining and enforcing what actions users can perform on resources. Encompasses both authentication (who are you) and authorization (what can you do).',
    related: ['Authorization', 'Authentication'],
  },
  {
    term: 'Access Review',
    definition: 'A periodic audit process where managers or resource owners verify that users still need the access they have. Often required for compliance but frequently becomes a checkbox exercise without proper authorization infrastructure.',
    related: ['Least Privilege', 'Compliance'],
  },
  {
    term: 'Agentic AI',
    definition: 'AI systems designed to operate with autonomy, planning, deciding, and acting across multiple steps rather than responding to a single prompt. Agentic systems raise authorization questions traditional access control was not built for: speed, volume, delegation chains, and real-time revocation.',
    related: ['AI Agent', 'NHI', 'OBO', 'Continuous Authorization'],
  },
  {
    term: 'AI Agent',
    definition: 'An AI system that takes actions on behalf of a user or on its own initiative. Unlike a chatbot that only responds, an agent can call tools, retrieve data, and chain multiple actions together to accomplish a goal. Each action is an access decision.',
    related: ['Agentic AI', 'NHI', 'OBO', 'Tool Use', 'MCP'],
  },
  {
    term: 'Authentication',
    definition: 'The process of verifying identity, proving you are who you claim to be. Typically handled by identity providers through SSO, MFA, passwords, or other credentials. Distinct from authorization.',
    related: ['Authorization', 'SSO', 'IdP'],
  },
  {
    term: 'Authorization',
    definition: 'Deciding what a user can do: what resources they can access, what actions they can take, under what conditions. The gap in most organizations security architecture.',
    related: ['Authentication', 'Access Control', 'PBAC'],
  },
  {
    term: 'Authorization Debt',
    definition: 'The accumulated cost of ad-hoc authorization decisions: hardcoded permissions, role sprawl, inconsistent policies across apps. Like technical debt, it compounds over time and becomes increasingly expensive to address.',
    related: ['Role Explosion', 'Policy Sprawl'],
  },
  {
    term: 'Coarse-Grained Authorization',
    definition: 'Access control at a high level, typically whether a user can access an application or feature at all. Contrast with fine-grained authorization, which controls access to specific resources or data.',
    related: ['Fine-Grained Authorization', 'RBAC'],
  },
  {
    term: 'Compliance',
    definition: 'Adherence to regulatory requirements (HIPAA, SOX, GDPR, etc.) that often mandate specific access control capabilities like least privilege, audit trails, and access reviews.',
    related: ['Audit Trail', 'Least Privilege', 'Access Review'],
  },
  {
    term: 'Context-Aware Authorization',
    definition: 'Access decisions that factor in real-time context: device type, location, time of day, risk score. A key capability for zero-trust architectures.',
    related: ['Zero Trust', 'ABAC', 'Real-Time Authorization'],
  },
  {
    term: 'Continuous Authorization',
    definition: 'Authorization as an ongoing process, not a one-time check at login. Policies are re-evaluated as context changes (risk signals, behavior, time, location) and access can be revoked mid-session. The destination most organizations are still moving toward, and critical for governing AI agents.',
    related: ['Real-Time Authorization', 'Context-Aware Authorization', 'Zero Trust', 'AI Agent'],
  },
  {
    term: 'Decision Log',
    definition: 'A record of authorization decisions: who requested access, to what, when, and why the decision was granted or denied. Essential for compliance and incident investigation.',
    related: ['Audit Trail', 'Compliance', 'PDP'],
  },
  {
    term: 'Entitlement',
    definition: 'A permission or access right granted to a user. Managing entitlements at scale is one of the core challenges of enterprise authorization.',
    related: ['Permission', 'Role', 'Access Control'],
  },
  {
    term: 'Ephemeral Credentials',
    definition: 'Short-lived credentials issued just-in-time for a specific action and automatically revoked after use. The antidote to standing access, especially important for agents, where a compromised long-lived credential could be used at machine speed.',
    related: ['Just-In-Time Access', 'Zero Standing Privileges', 'AI Agent', 'NHI'],
  },
  {
    term: 'Externalized Authorization',
    definition: 'Moving access control logic out of application code and into a dedicated policy layer. The application asks can this user do this and gets an answer, rather than calculating it internally.',
    related: ['PDP', 'PEP', 'Policy-Based Access Control'],
  },
  {
    term: 'Fine-Grained Authorization',
    definition: 'Access control at a granular level: specific records, fields, or operations. Can this user see this specific customer data, rather than can this user access the CRM.',
    related: ['Coarse-Grained Authorization', 'Row-Level Security', 'ABAC'],
  },
  {
    term: 'Guardrails',
    definition: 'Policy constraints applied to AI inputs and outputs: blocking sensitive prompts, filtering responses, preventing disallowed actions. A necessary complement to authorization: authorization decides what the agent can do; guardrails shape how it does it.',
    related: ['AI Agent', 'Agentic AI', 'Policy'],
  },
  {
    term: 'IdP',
    definition: 'Identity Provider. A service that manages user identities and handles authentication. Examples include Okta, Azure AD, and Auth0. IdPs handle who you are; authorization handles what you can do.',
    related: ['Authentication', 'SSO', 'SAML'],
  },
  {
    term: 'Just-In-Time Access',
    definition: 'Granting access only when needed and automatically revoking it after a set period. Reduces standing privileges and supports least privilege principles.',
    related: ['Least Privilege', 'Zero Standing Privileges', 'Ephemeral Credentials'],
  },
  {
    term: 'Least Privilege',
    definition: 'The principle that users should have only the access they need, nothing more. Easy to say, hard to prove without fine-grained authorization and proper audit capabilities.',
    related: ['Compliance', 'Zero Trust', 'Access Review'],
  },
  {
    term: 'MCP',
    definition: 'Model Context Protocol. An open protocol for connecting AI models to external tools, data sources, and services. MCP standardizes how agents discover and invoke capabilities, and creates a natural enforcement point for authorization between the agent and the tools it calls.',
    related: ['AI Agent', 'Tool Use', 'Agentic AI'],
  },
  {
    term: 'NHI',
    definition: 'Non-Human Identity. A distinct identity assigned to a service, workload, or AI agent, not a human user. NHIs let you govern what an automated actor can do the same way you govern users: with owned credentials, defined permissions, and audit trails.',
    related: ['AI Agent', 'OBO', 'Ephemeral Credentials'],
  },
  {
    term: 'OBO',
    definition: 'On-Behalf-Of. An authorization pattern where an agent or service acts in the context of a specific user, inheriting that user identity and permissions. The user is accountable for what the agent does while in OBO mode. Complements NHI rather than replacing it.',
    related: ['NHI', 'AI Agent', 'Authorization'],
  },
  {
    term: 'OPA',
    definition: 'Open Policy Agent. An open-source, general-purpose policy engine that uses Rego as its policy language. Powerful but requires significant investment to build a complete authorization platform around it.',
    related: ['Rego', 'Policy Engine', 'Externalized Authorization'],
  },
  {
    term: 'PBAC',
    definition: 'Policy-Based Access Control. Access decisions driven by policies that can incorporate roles, attributes, context, and business rules. More expressive than RBAC or ABAC alone.',
    related: ['RBAC', 'ABAC', 'Policy'],
  },
  {
    term: 'PDP',
    definition: 'Policy Decision Point. The component that evaluates policies and returns access decisions. The brain of an authorization system. Can be centralized or distributed.',
    related: ['PEP', 'Policy Engine', 'Externalized Authorization'],
  },
  {
    term: 'PEP',
    definition: 'Policy Enforcement Point. The component that enforces access decisions, typically in the application, API gateway, or data layer. The gatekeeper that acts on PDP decisions.',
    related: ['PDP', 'Externalized Authorization'],
  },
  {
    term: 'Permission',
    definition: 'A specific action that can be performed on a resource. Read customer record or approve transaction are permissions. Permissions are typically grouped into roles or policies.',
    related: ['Entitlement', 'Role', 'Policy'],
  },
  {
    term: 'Policy',
    definition: 'A rule or set of rules that determines access. Can be simple (admins can access everything) or complex (users can access customer records in their region during business hours).',
    related: ['PBAC', 'PDP', 'Externalized Authorization'],
  },
  {
    term: 'Policy Engine',
    definition: 'Software that evaluates policies against requests and returns decisions. The core of any authorization platform. Examples include OPA, Cedar, and various commercial engines.',
    related: ['PDP', 'OPA', 'Policy'],
  },
  {
    term: 'Policy Sprawl',
    definition: 'The proliferation of inconsistent access policies across different applications and systems. A symptom of decentralized authorization that makes governance and compliance difficult.',
    related: ['Authorization Debt', 'Externalized Authorization'],
  },
  {
    term: 'RAG',
    definition: 'Retrieval-Augmented Generation. An architecture where an AI model retrieves relevant information from external sources (databases, vector stores, documents) before generating a response. RAG pipelines are a critical authorization surface: what the agent retrieves should respect what the requesting user is allowed to see.',
    related: ['AI Agent', 'Row-Level Security', 'Fine-Grained Authorization'],
  },
  {
    term: 'RBAC',
    definition: 'Role-Based Access Control. Access decisions based on roles assigned to users. Simple and widely used, but limited when you need finer-grained or context-aware decisions.',
    related: ['ABAC', 'PBAC', 'Role'],
  },
  {
    term: 'Real-Time Authorization',
    definition: 'Making access decisions at the moment of access, with current context, rather than relying on pre-computed permissions. Essential for dynamic, context-aware security.',
    related: ['Context-Aware Authorization', 'PDP', 'Zero Trust', 'Continuous Authorization'],
  },
  {
    term: 'Rego',
    definition: 'The policy language used by OPA (Open Policy Agent). A declarative language for expressing policies. Powerful and flexible, but requires developer expertise to author and maintain.',
    related: ['OPA', 'Policy', 'Policy Engine'],
  },
  {
    term: 'Role',
    definition: 'A named collection of permissions assigned to users. Admin, Editor, Viewer are common roles. Role explosion occurs when organizations create too many roles to manage.',
    related: ['RBAC', 'Permission', 'Role Explosion'],
  },
  {
    term: 'Role Explosion',
    definition: 'The uncontrolled growth of roles in an RBAC system, often to the point where roles become meaningless or unmanageable. A common symptom of trying to use roles for fine-grained access control.',
    related: ['RBAC', 'Role', 'Authorization Debt'],
  },
  {
    term: 'Row-Level Security',
    definition: 'Restricting access to specific rows in a database based on user context. Users can only see customers in their region is a row-level security policy.',
    related: ['Fine-Grained Authorization', 'Data Access Control'],
  },
  {
    term: 'SAML',
    definition: 'Security Assertion Markup Language. An XML-based standard for exchanging authentication and authorization data between identity providers and service providers. Common in enterprise SSO.',
    related: ['SSO', 'IdP', 'Authentication'],
  },
  {
    term: 'Separation of Duties',
    definition: 'A control principle requiring multiple people to complete sensitive tasks. Authorization systems must enforce SoD policies, for example preventing the same person from creating and approving a transaction.',
    related: ['Compliance', 'Policy', 'Access Control'],
  },
  {
    term: 'SSO',
    definition: 'Single Sign-On. Authentication mechanism allowing users to log in once and access multiple applications. SSO solves identity, not authorization: knowing who someone is does not tell you what they can do.',
    related: ['Authentication', 'IdP', 'SAML'],
  },
  {
    term: 'Tool Use',
    definition: 'The pattern where AI agents invoke external functions, APIs, or services to accomplish tasks. Each tool invocation is an access decision, one that most environments do not authorize at a fine-grained level today. Also called tool calling or function calling.',
    related: ['AI Agent', 'MCP', 'Agentic AI'],
  },
  {
    term: 'Zero Standing Privileges',
    definition: 'An approach where users have no persistent access rights. All access is granted just-in-time based on need and automatically expires. The logical end-state of least privilege.',
    related: ['Just-In-Time Access', 'Least Privilege', 'Zero Trust', 'Ephemeral Credentials'],
  },
  {
    term: 'Zero Trust',
    definition: 'A security model that requires verification for every access request, regardless of location or network. Never trust, always verify. Authorization is a critical component: you cannot verify without knowing what is allowed.',
    related: ['Context-Aware Authorization', 'Least Privilege', 'Real-Time Authorization'],
  },
]

export function getGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term))
}
