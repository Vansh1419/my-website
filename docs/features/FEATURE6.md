# Feature 6: Contact

## What it does
- Contact form: name, email, message, send button
- Posts to Formspree; shows a clear success message or error message
- Links to GitHub, LinkedIn and Email

## Rules
- Formspree form ID comes from env var `NEXT_PUBLIC_FORMSPREE_ID`
- Validate: all fields required, email format checked
- Disable the button while sending (no double submit)
- Hidden honeypot field to cut spam
- Every input has a label; errors are readable by screen readers
- Social link URLs come from `src/data/links.ts` (placeholders for now)
- Free Formspree tier = 50 submissions/month

## Done when
- [ ] A valid submit reaches my inbox
- [ ] Invalid input shows an error and does not send
- [ ] Success and failure states are visible
- [ ] The three links open correctly
