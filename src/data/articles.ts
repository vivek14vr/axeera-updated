export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featuredImage: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
}

export const authors: Author[] = [
  {
    name: "Sarah Chen",
    role: "Principal Engineer",
    bio: "Sarah leads our platform engineering practice. She's built systems at scale for fintech, healthcare, and e-commerce. Previously Staff Engineer at Stripe.",
    avatar: "/images/authors/sarah-chen.svg",
    twitter: "sarahchen_eng",
    linkedin: "sarahchen-engineer",
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Engineering",
    bio: "Marcus oversees engineering delivery and technical strategy. 15+ years building products at Google, Airbnb, and high-growth startups.",
    avatar: "/images/authors/marcus-rodriguez.svg",
    twitter: "marcusrodriguez",
    linkedin: "marcusrodriguez-vpe",
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    bio: "Priya leads our design practice. She's created design systems for Fortune 500 companies and unicorn startups. Advocate for accessible, inclusive design.",
    avatar: "/images/authors/priya-sharma.svg",
    twitter: "priyadesigns",
    linkedin: "priyasharma-design",
  },
  {
    name: "James Patterson",
    role: "Cloud Architect",
    bio: "James architects cloud platforms for regulated industries. AWS Hero, CNCF Ambassador, and author of 'Cloud Native Patterns'.",
    avatar: "/images/authors/james-patterson.svg",
    twitter: "jamespatterson_cloud",
    linkedin: "jamespatterson-architect",
  },
  {
    name: "Dr. Elena Volkov",
    role: "AI Research Lead",
    bio: "Elena leads our AI practice. PhD in ML from MIT, formerly at OpenAI and DeepMind. Focuses on production ML systems and AI safety.",
    avatar: "/images/authors/elena-volkov.svg",
    twitter: "elenavolkov_ai",
    linkedin: "elenavolkov-research",
  },
];

export const articles: Article[] = [
  {
    slug: "building-design-systems-that-scale",
    title: "Building Design Systems That Actually Scale",
    description: "Why most design systems fail at scale—and the architectural decisions that make ours work across 50+ products and 200+ engineers.",
    content: `
## The Design System Paradox

Every organization wants a design system. Few succeed in making one that scales.

The typical trajectory: enthusiastic start → component library grows → adoption plateaus → fragmentation returns → system abandoned.

We've built design systems for organizations ranging from 50 to 2,000 engineers. Here's what separates the systems that survive from the ones that don't.

## 1. Tokens Before Components

Most teams start with components. That's backwards.

Design tokens—colors, spacing, typography, shadows, motion—are the atomic units. They encode design decisions in a platform-agnostic format. Components are merely expressions of those tokens.

Our token architecture:

\`\`\`json
{
  "color": {
    "primary": { "500": "#0066CC", "600": "#0052A3" },
    "semantic": {
      "background": { "primary": "{color.neutral.50}", "inverse": "{color.neutral.900}" }
    }
  },
  "spacing": { "scale": [0, 4, 8, 12, 16, 24, 32, 48, 64] },
  "typography": { "fontFamily": { "sans": "Inter", "mono": "JetBrains Mono" } }
}
\`\`\`

Tokens export to CSS custom properties, Figma variables, iOS/Android native, and JSON for any platform.

## 2. Composition Over Configuration

A Button with 47 props is a code smell. It means you're building a framework, not a component.

Instead, compose:

\`\`\`tsx
// ❌ Configuration hell
<Button variant="primary" size="lg" loading={true} leftIcon={Spinner} rightIcon={ArrowRight} fullWidth onClick={handleClick} />

// ✅ Composition
<Button>
  <Button.Content>
    <Spinner aria-hidden="true" />
    <Button.Text>Submit</Button.Text>
    <ArrowRight aria-hidden="true" />
  </Button.Content>
</Button>
\`\`\`

Compound components give consumers control without exploding the API surface.

## 3. Accessibility Is Not Optional

Every component ships with:
- ARIA attributes baked in
- Keyboard navigation tested
- Focus management handled
- Screen reader verified
- Color contrast validated

We use automated testing (axe-core in CI) and manual testing with NVDA/VoiceOver. No exceptions.

## 4. Versioning Like a Product

Semantic versioning. Changelogs. Migration guides. Deprecation policy (2 major versions).

Breaking changes get:
- 6-month notice
- Automated codemods
- Parallel support during transition

## 5. Ownership Model

A design system is a product. It needs:
- Dedicated team (not "someone's 20% time")
- Roadmap driven by consumer feedback
- SLA for bug fixes and requests
- Usage analytics (which components, which versions)

## The Result

Our current system:
- 200+ components
- 50+ products
- 200+ engineers
- 94% adoption rate
- 40% faster feature delivery
- Zero critical accessibility issues

The investment pays for itself in 6 months.

---

*Want to discuss your design system challenges? [Let's talk](/contact).*
    `,
    category: "Design",
    tags: ["Design Systems", "Frontend Architecture", "Accessibility", "Component Libraries"],
    author: authors[2],
    publishedAt: "2024-11-15",
    readingTime: 8,
    featuredImage: "/images/articles/design-systems-scale.svg",
    featured: true,
    seoTitle: "Building Design Systems That Scale | Axeera Insights",
    seoDescription: "Learn the architectural decisions that make design systems work across 50+ products and 200+ engineers. Tokens, composition, accessibility, and ownership.",
  },
  {
    slug: "event-driven-architecture-lessons-learned",
    title: "Event-Driven Architecture: Lessons from Processing 10M Transactions Daily",
    description: "Real-world patterns for building reliable event-driven systems. What works, what doesn't, and how we handle exactly-once semantics at scale.",
    content: `
## Why Events?

Our client Nexus Capital needed real-time portfolio updates across 500+ strategies processing 10M+ transactions daily. The legacy batch system delivered T+1 data—unacceptable for modern risk management.

Event-driven architecture was the answer. But the path from "let's use Kafka" to "10M events/day with exactly-once semantics" taught us hard lessons.

## Lesson 1: Start with the Event Contract

Events are your API. Treat them like one.

\`\`\`json
{
  "eventId": "uuid-v7",
  "eventType": "portfolio.position.updated",
  "version": "2.1.0",
  "timestamp": "2024-11-15T10:30:00.000Z",
  "source": "portfolio-service",
  "data": {
    "portfolioId": "uuid",
    "positionId": "uuid",
    "quantity": "1000000",
    "marketValue": "125000000.00"
  },
  "metadata": {
    "correlationId": "uuid",
    "causationId": "uuid",
    "schemaVersion": "2.1.0"
  }
}
\`\`\`

Version in the event. Schema registry (we use Confluent). Backward compatibility enforced in CI.

## Lesson 2: Idempotency Over Exactly-Once

True exactly-once is expensive and often unnecessary. Idempotent consumers are simpler and more robust.

\`\`\`typescript
async function handlePositionUpdated(event: PositionUpdatedEvent) {
  const idempotencyKey = \`position-\${event.data.positionId}-\${event.eventId}\`;
  
  await redis.setnx(idempotencyKey, "processing", { EX: 86400 });
  
  try {
    await updateMaterializedView(event.data);
    await redis.set(idempotencyKey, "completed");
  } catch (error) {
    await redis.del(idempotencyKey);
    throw error;
  }
}
\`\`\`

Deduplication at the consumer level. Natural idempotency where possible (upserts).

## Lesson 3: Materialized Views for Read Patterns

Don't query event streams directly. Build projections.

We maintain 12 materialized views for different access patterns:
- Portfolio summary (real-time)
- Position details (real-time)
- Risk metrics (5-min incremental)
- Regulatory reports (hourly batch)
- Audit log (append-only)

Each view optimized for its query pattern. PostgreSQL for relational, TimescaleDB for time-series, Redis for hot data.

## Lesson 4: Observability Is Non-Negotiable

You cannot debug what you cannot see.

Every event flow has:
- Distributed tracing (OpenTelemetry → Jaeger)
- Metrics: lag, throughput, error rate, processing latency
- Alerts: consumer lag > 5min, error rate > 0.1%, processing latency > P99 threshold
- Dead letter queue with automated retry and manual replay

## Lesson 5: Schema Evolution Discipline

Breaking changes to event schemas require:
1. New event version (v2.2.0)
2. Dual-write old + new for 30 days
3. Consumer migration
4. Deprecate old version

Never delete fields. Mark deprecated. Add new fields as optional.

## The Architecture Today

\`\`\`
[Producers] → [Kafka Topics] → [Consumer Groups] → [Materialized Views] → [API Layer]
                ↓
           [Schema Registry]
                ↓
           [Dead Letter Queue] → [Replay Tooling]
\`\`\`

10M events/day. P99 latency < 200ms. 99.99% availability. Zero data loss in 18 months.

---

*Building event-driven systems? [We can help](/contact?service=software-consulting).*
    `,
    category: "Engineering",
    tags: ["Event-Driven Architecture", "Kafka", "Distributed Systems", "System Design"],
    author: authors[3],
    publishedAt: "2024-10-28",
    readingTime: 12,
    featuredImage: "/images/articles/event-driven-architecture.svg",
    featured: true,
    seoTitle: "Event-Driven Architecture Lessons | Axeera Insights",
    seoDescription: "Real-world patterns for building reliable event-driven systems processing 10M+ transactions daily. Exactly-once semantics, materialized views, and observability.",
  },
  {
    slug: "ai-in-production-beyond-the-demo",
    title: "AI in Production: Beyond the Demo",
    description: "What it actually takes to ship LLM applications that work reliably. Guardrails, evaluation, cost control, and the gap between prototype and production.",
    content: `
## The Prototype Trap

ChatGPT made it look easy. Feed a prompt, get magic. But the gap between "it works on my machine" and "it works for 100K users" is where AI projects die.

We've shipped 12 LLM applications to production. Here's what nobody tells you.

## 1. Evaluation Is Your Product

You cannot improve what you cannot measure. Before writing a single line of inference code, define:

\`\`\`typescript
interface EvaluationCriteria {
  accuracy: { threshold: 0.9; metric: "exact_match" | "f1" | "semantic_similarity" };
  latency: { p50: 2000; p99: 5000 }; // ms
  cost: { maxPerRequest: 0.05; maxDaily: 5000 }; // USD
  safety: { hallucinationRate: 0.01; piiLeakage: 0; promptInjection: 0 };
  ux: { helpfulness: 4.0; tone: "professional" };
}
\`\`\`

Automated evaluation pipeline runs on every commit. Human evaluation for subjective criteria weekly.

## 2. Guardrails Are Not Optional

Production LLMs need layers of protection:

\`\`\`typescript
const guardrails = [
  inputValidation({ maxTokens: 4000, blockedPatterns: [PII_REGEX, INJECTION_REGEX] }),
  promptTemplate({ version: "v2.3.0", variables: ["context", "question"] }),
  outputValidation({ 
    schema: ResponseSchema,
    hallucinationCheck: { threshold: 0.8, method: "self_consistency" },
    piiScrubber: true,
    toneCheck: { allowed: ["professional", "helpful"], blocked: ["opinionated", "speculative"] }
  }),
  rateLimit({ tier: "premium", requestsPerMinute: 60 }),
  circuitBreaker({ failureThreshold: 0.1, resetTimeout: 30000 }),
];
\`\`\`

Each request passes through the pipeline. Failures return graceful fallbacks, not errors.

## 3. RAG Is a System, Not a Library

Retrieval-Augmented Generation requires:

- **Chunking strategy**: Semantic, not fixed-size. We use recursive character splitting with overlap.
- **Embedding model**: Domain-specific beats general. Fine-tuned BGE for legal, financial, medical.
- **Vector DB**: Hybrid search (vector + keyword). We use Qdrant with BM25 + dense vectors.
- **Reranking**: Cross-encoder reranks top-20 to top-5. Critical for precision.
- **Citation tracking**: Every claim links to source. UI shows citations inline.

## 4. Cost Architecture

LLM costs scale non-linearly. Our cost model:

\`\`\`typescript
const costControls = {
  modelRouting: {
    simple: "gpt-4o-mini",      // $0.15/1M tokens
    complex: "gpt-4o",           // $5/1M tokens
    reasoning: "o1-preview",     // $15/1M tokens
  },
  caching: {
    semanticCache: { threshold: 0.95, ttl: 86400 },
    exactCache: { ttl: 3600 },
  },
  budget: {
    dailyLimit: 10000,
    alertThreshold: 0.8,
    autoDowngrade: true,
  },
};
\`\`\`

Semantic caching alone reduces costs 40-60% for repetitive queries.

## 5. Observability for AI

Traditional metrics don't capture AI quality. We track:

- **Token usage**: Input/output by model, user, feature
- **Latency distribution**: TTFT (time to first token), total latency
- **Quality signals**: User feedback (thumbs up/down), regeneration rate, copy rate
- **Safety metrics**: Guardrail triggers, false positive/negative rates
- **Drift detection**: Embedding drift of inputs, output distribution shifts

## 6. The Human Loop

AI fails. Design for it.

- Escalation to human for low-confidence predictions
- Feedback collection on every response
- Active learning pipeline: human corrections → fine-tuning data
- A/B testing: model versions, prompts, retrieval strategies

## The Reality

Production AI is 20% model, 80% engineering.

The companies winning with AI aren't the ones with the best prompts. They're the ones with the best evaluation, guardrails, cost control, and feedback loops.

---

*Exploring AI for your product? [Let's discuss](/contact?service=ai-solutions).*
    `,
    category: "AI & Machine Learning",
    tags: ["LLM", "RAG", "Production AI", "MLOps", "Guardrails"],
    author: authors[4],
    publishedAt: "2024-10-10",
    readingTime: 10,
    featuredImage: "/images/articles/ai-production.svg",
    featured: true,
    seoTitle: "AI in Production: Beyond the Demo | Axeera Insights",
    seoDescription: "What it takes to ship LLM applications reliably. Guardrails, evaluation pipelines, cost control, RAG systems, and the engineering behind production AI.",
  },
  {
    slug: "migrating-from-monolith-to-microservices",
    title: "Migrating from Monolith to Microservices: A Strangler Fig Case Study",
    description: "How we helped a fintech company decompose a 15-year-old monolith into 40+ services with zero downtime. Patterns, pitfalls, and the migration playbook.",
    content: `
## The Monster in the Basement

Apex Insurance's policy administration system: 2.3M lines of Java, 15 years old, 40 developers afraid to touch it. Deployments took 6 hours. One schema change broke 200 tests.

They didn't need microservices. They needed deployability.

## The Strangler Fig Pattern

Don't rewrite. Strangle.

\`\`\`
[Legacy Monolith] ←→ [Facade/Proxy] → [New Services]
                            ↓
                      [Traffic Router]
                            ↓
                    [Canary Releases]
\`\`\`

1. Identify a bounded context
2. Build new service alongside
3. Proxy traffic to new service
4. Validate, then cut over
5. Delete legacy code
6. Repeat

## Phase 1: The Facade

We built an API gateway (Kong) in front of the monolith. Every request passes through. This gave us:
- Request/response logging
- Rate limiting
- Authentication termination
- Traffic routing rules

## Phase 2: Domain Extraction Order

We mapped the domain using Domain-Driven Design. Extraction order:

1. **Notifications** (low risk, high value) - Email, SMS, push
2. **Document Generation** - PDF policies, quotes, letters
3. **Payment Processing** - Already partially externalized
4. **User Management** - Auth, profiles, permissions
5. **Quoting Engine** - Core business logic, high complexity
6. **Policy Administration** - The crown jewel, highest risk

Each extraction: 6-10 weeks. Parallel tracks after phase 1.

## Phase 3: Data Synchronization

The hardest part. Shared database = distributed monolith.

Strategies we used:

- **Dual Write**: Write to both old and new. Reconciliation job nightly.
- **Change Data Capture**: Debezium streams MySQL binlog → Kafka → new service DB.
- **API Facade**: New service owns data. Legacy calls new service API.
- **Materialized Views**: For reporting, build read models from events.

## Phase 4: Traffic Migration

Canary releases with feature flags:

\`\`\`yaml
# LaunchDarkly flag
newQuotingEngine:
  variations:
    - legacy: 90%
    - new: 10%
  targeting:
    - internal-users: 100% new
    - beta-customers: 50% new
    - all: gradual rollout over 4 weeks
\`\`\`

Metrics gates: error rate, latency, business metrics (quote accuracy, conversion).

## Phase 5: Decommission

Legacy code deletion is satisfying but dangerous.

Checklist before delete:
- [ ] Zero traffic for 30 days
- [ ] All tests pass without legacy stubs
- [ ] Documentation updated
- [ ] Team trained on new service
- [ ] Rollback plan tested (it's just a flag flip)

## Results After 18 Months

- 42 services extracted
- Deployment frequency: monthly → 50/day
- Lead time: 6 hours → 15 minutes
- Change failure rate: 15% → 0.5%
- MTTR: 4 hours → 12 minutes
- Developer satisfaction: 3.2/10 → 8.7/10

## The Playbook

1. **Start with observability** - You can't migrate what you can't measure
2. **Extract low-risk, high-value first** - Build confidence and tooling
3. **Invest in platform** - CI/CD, service mesh, observability, deploy tooling
4. **Data is the blocker** - Plan synchronization before extraction
5. **Culture eats architecture** - Teams must own services end-to-end

---

*Facing a monolith migration? [We've done this before](/contact?service=digital-transformation).*
    `,
    category: "Engineering",
    tags: ["Microservices", "Strangler Fig", "Migration", "Domain-Driven Design", "Legacy Modernization"],
    author: authors[1],
    publishedAt: "2024-09-22",
    readingTime: 14,
    featuredImage: "/images/articles/monolith-microservices.svg",
    featured: false,
    seoTitle: "Monolith to Microservices Migration | Axeera Insights",
    seoDescription: "Case study: decomposing a 15-year monolith into 40+ services with zero downtime. Strangler Fig pattern, data synchronization, and migration playbook.",
  },
  {
    slug: "performance-budgets-that-stick",
    title: "Performance Budgets That Actually Stick",
    description: "How we enforce performance budgets across 50+ projects without slowing down development. Tooling, culture, and the metrics that matter.",
    content: `
## The Performance Paradox

Everyone wants fast websites. Few measure them. Fewer enforce budgets.

The typical cycle: build fast → add features → performance degrades → panic optimize → repeat.

We broke the cycle with performance budgets as code.

## What Is a Performance Budget?

A budget defines the maximum acceptable values for key metrics:

\`\`\`json
{
  "budgets": [
    { "metric": "LCP", "threshold": 2500, "unit": "ms" },
    { "metric": "INP", "threshold": 200, "unit": "ms" },
    { "metric": "CLS", "threshold": 0.1, "unit": "score" },
    { "metric": "TTFB", "threshold": 800, "unit": "ms" },
    { "metric": "total-blocking-time", "threshold": 300, "unit": "ms" },
    { "metric": "js-bundle-size", "threshold": 170, "unit": "kb" },
    { "metric": "css-bundle-size", "threshold": 50, "unit": "kb" },
    { "metric": "image-weight", "threshold": 500, "unit": "kb" },
    { "metric": "third-party-count", "threshold": 10, "unit": "count" }
  ]
}
\`\`\`

These aren't aspirations. They're gates.

## Enforcement Pipeline

Every PR runs through our performance gate:

\`\`\`yaml
# .github/workflows/performance.yml
jobs:
  performance-budget:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: npm run build
      - name: Lighthouse CI
        run: npx lhci autorun --config=.lighthouserc.json
      - name: Bundle Analysis
        run: npx bundlesize
      - name: Regression Check
        run: npx perf-budget-check --baseline=main
\`\`\`

Fail the build if:
- Any Core Web Vital exceeds threshold
- Bundle size increases > 5% without approval
- New third-party added without security review

## Tooling Stack

- **Lighthouse CI**: Lab data in CI
- **WebPageTest**: Real device testing on PR
- **BundleSize**: JS/CSS size limits
- **Perf-Budget-Check**: Compares against baseline branch
- **SpeedCurve**: Production RUM monitoring
- **Custom Dashboard**: Team-level performance visibility

## Culture: Make It Easy to Do Right

Budgets fail when they're police. They succeed when they're guardrails.

What we provide:
- **Component library**: Pre-optimized, lazy-loaded, tree-shakeable
- **Image component**: Automatic WebP/AVIF, responsive sizes, blur placeholders
- **Font strategy**: Self-hosted, subset, preload, font-display: swap
- **Third-party registry**: Approved vendors with performance SLAs
- **Performance office hours**: Weekly drop-in for questions

## The Results

Across 50+ projects:
- 94% of PRs pass performance gate on first try
- Median LCP: 1.2s (budget: 2.5s)
- Median bundle: 140kb (budget: 170kb)
- Zero performance regressions in production for 18 months
- Performance review time: 2 hours → 15 minutes

## The Budget Evolution

Budgets aren't static. We review quarterly:

- **Tighten** when team consistently beats budget
- **Relax** (rarely) with documented justification
- **Add** new metrics as browser APIs evolve (INP replaced FID)
- **Segment** by page type (marketing vs app vs checkout)

## Start Small

Don't boil the ocean.

1. Measure current state (Lighthouse, WebPageTest, RUM)
2. Set budget at current P75 (not ideal, achievable)
3. Enforce in CI for one metric (LCP)
4. Add metrics monthly
5. Celebrate wins, investigate misses

---

*Want performance budgets that work? [Talk to us](/contact?service=web-development).*
    `,
    category: "Performance",
    tags: ["Web Performance", "Core Web Vitals", "CI/CD", "Performance Budgets", "Lighthouse"],
    author: authors[0],
    publishedAt: "2024-09-05",
    readingTime: 9,
    featuredImage: "/images/articles/performance-budgets.svg",
    featured: false,
    seoTitle: "Performance Budgets That Stick | Axeera Insights",
    seoDescription: "How to enforce performance budgets across 50+ projects. Tooling, culture, CI/CD integration, and the metrics that matter for Core Web Vitals.",
  },
  {
    slug: "accessibility-as-a-competitive-advantage",
    title: "Accessibility as a Competitive Advantage",
    description: "Why treating accessibility as a feature—not compliance—creates better products for everyone. ROI, process, and the business case.",
    content: `
## The Compliance Trap

Most companies approach accessibility as a checkbox. WCAG 2.1 AA. Audit. Remediate. Certificate. Done.

Then they ship inaccessible features three months later.

Accessibility isn't a certification. It's a quality attribute—like performance, security, or reliability.

## The Business Case

\`\`\`
Market Size:
- 1.3B people with disabilities globally
- $13T annual disposable income
- 71% leave inaccessible sites immediately

Legal Risk:
- 4,000+ ADA lawsuits filed in 2023 (US)
- Average settlement: $25K-$50K
- Reputational damage: incalculable

Quality Correlation:
- Accessible code = semantic HTML = better SEO
- Accessible components = robust components = fewer bugs
- Accessible design = clearer design = better UX for all
\`\`\`

## Our Accessibility Process

### 1. Design Phase

- Color contrast validated in Figma (Stark plugin)
- Focus order documented
- Touch targets minimum 44x44px
- Motion reduction preferences respected
- Content hierarchy reviewed

### 2. Development Phase

- Semantic HTML enforced by linting (eslint-plugin-jsx-a11y)
- ARIA only where native HTML fails
- Automated testing: axe-core in CI (zero violations gate)
- Unit tests: @testing-library/react (accessible queries)
- Component library: every component accessibility reviewed

### 3. Testing Phase

- Automated: axe-core, Lighthouse, Pa11y
- Manual: Keyboard-only navigation, NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
- Zoom: 200% and 400% testing
- Reduced motion: OS-level preference verified

### 4. Maintenance Phase

- Regression testing on every release
- Accessibility audit quarterly
- New team member onboarding includes a11y training
- Incident process includes accessibility impact assessment

## The Component Library Approach

Our design system bakes in accessibility:

\`\`\`tsx
// Every interactive component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // No aria-* props allowed - handled internally
}

// Implementation
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      // Focus management
      onKeyDown={handleKeyDown}
      // Touch target
      style={{ minHeight: 44, minWidth: 44 }}
      // Reduced motion
      style={{ transition: prefersReducedMotion ? "none" : "all 0.2s" }}
    >
      {children}
    </button>
  );
}
\`\`\`

Consumers get accessibility by default. They can't easily break it.

## ROI in Practice

Client results after accessibility-first redesign:

- **E-commerce**: +18% conversion (better mobile UX, clearer forms)
- **SaaS**: -32% support tickets (clearer error messages, better onboarding)
- **Government**: 100% compliance, zero lawsuits, faster procurement
- **All**: Improved SEO rankings (semantic HTML, faster loads)

## The Mindset Shift

Stop asking: "Is this accessible?"

Start asking: "Who might this exclude?"

Design for the margins. The center takes care of itself.

---

*Building accessible products? [We can help](/contact?service=ui-ux-design).*
    `,
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "Compliance", "Design Systems"],
    author: authors[2],
    publishedAt: "2024-08-18",
    readingTime: 8,
    featuredImage: "/images/articles/accessibility-advantage.svg",
    featured: false,
    seoTitle: "Accessibility as Competitive Advantage | Axeera Insights",
    seoDescription: "Why accessibility creates better products for everyone. Business case, process, ROI, and how to bake accessibility into your design system and development workflow.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((a) => a.featured).slice(0, limit);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticle(slug);
  if (!article) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, limit);
}

export const categories = [
  "Engineering",
  "Design",
  "AI & Machine Learning",
  "Performance",
  "Accessibility",
] as const;
