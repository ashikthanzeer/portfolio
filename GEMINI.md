# Project Working Agreement

Treat this repository as an existing human-maintained codebase. Make the smallest correct, reviewable change that satisfies the request. Do not produce generic AI-shaped code, design, prose, or status reports.

## Non-negotiable rules

- Read the relevant code, configuration, tests, and nearby examples before editing. Follow their conventions over generic "best practices."
- Stay within the requested scope. Do not refactor, reformat, rename, upgrade dependencies, alter configuration, or touch unrelated files unless the user explicitly asks.
- Prefer a direct local solution. Add an abstraction, helper, component, framework, dependency, feature flag, or new layer only when it is clearly needed by the current requirement and fits the repository's established pattern.
- Preserve working behavior, public APIs, data, accessibility, and responsive behavior unless the request deliberately changes them.
- Never invent requirements, completed work, test results, user feedback, citations, metrics, security claims, compatibility claims, or implementation details. State uncertainty plainly.
- Do not remove, overwrite, or regenerate user-authored content wholesale to make a small edit. Do not alter lockfiles or generated files unless necessary and understood.
- If requirements conflict, are ambiguous, or a change has material product/security/data consequences, inspect first and ask a focused question before choosing a direction.

## Code: make it look maintained, not generated

- Match the language, naming, file structure, error handling, formatting, and dependency choices already in use.
- Prefer clear, boring code with a single responsibility. Avoid speculative generalization: no `Base*` hierarchies, factories, generic wrappers, placeholder extension points, or configuration knobs for hypothetical future needs.
- Reuse existing utilities and components where appropriate; do not duplicate logic or introduce a competing pattern.
- Write comments only for non-obvious rationale, constraints, or trade-offs. Never narrate obvious code, pad files with section banners, or leave tutorial-style essays in source.
- Do not add mocked/stubbed behavior and present it as production-ready. Keep test fixtures and production paths clearly separate.
- Keep diffs minimal. Do not reformat unchanged lines or make drive-by "cleanup" edits.

## UI: respect the product

- Inspect the existing UI before designing. Extend its visual system rather than introducing a trendy default look.
- Do not add gradients, glass effects, excessive rounded cards, decorative icons, animations, shadows, badges, or marketing copy unless requested or already established by the design system.
- Preserve layout, typography, spacing, states, keyboard behavior, and responsive patterns. Implement loading, empty, error, and disabled states only where the feature actually needs them.
- Use meaningful labels and realistic content. No lorem ipsum, fabricated testimonials, fake counters, placeholder metrics, or invented product claims.

## Documentation and writing: be specific and human

- Write for the actual audience and task. Lead with the result; use plain, concrete language.
- Remove filler such as "seamlessly," "robust," "cutting-edge," "comprehensive," "leverage," "delve," "in today's fast-paced world," and unearned superlatives.
- Do not use repetitive headings, canned introductions/conclusions, fake quotations, excessive em dashes, or list-heavy prose when a short paragraph is clearer.
- Describe only verified behavior. Give exact commands, paths, limitations, and assumptions when useful; do not fabricate sources or citations.
- Keep existing documentation structure and tone. Update docs only when the requested change makes them inaccurate or the user asks for documentation.

## Verification and reporting

Before declaring a task complete:

- [ ] Re-read the request and confirm every requested outcome is addressed.
- [ ] Review the diff for unrelated changes, accidental formatting churn, duplicated code, and invented behavior.
- [ ] Run the smallest relevant existing check (test, type check, lint, build, or manual flow) when available and safe.
- [ ] If you could not verify something, say exactly what was not run and why; never imply success.
- [ ] Report briefly: what changed, the files changed, verification performed and result, plus any limitation or follow-up genuinely needed.

## Stop conditions

Pause and ask before broad refactors, architecture changes, new dependencies, changes to CI/CD or deployment, authentication/authorization changes, schema/data migrations, destructive actions, external service calls, or edits that might expose secrets or alter user data.

