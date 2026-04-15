# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.x     | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

To report a vulnerability, please use one of the following channels:

1. **GitHub Private Vulnerability Reporting** (preferred):
   Navigate to the repository's **Security** tab and click **"Report a vulnerability"**.
   This uses GitHub's coordinated disclosure workflow and keeps the report confidential
   until a fix is ready.

2. **Email**: Send details to the maintainer with the subject line:
   `[SECURITY] Beluga Icon Vulnerability Report`

### What to include

- A description of the vulnerability and its potential impact
- Steps to reproduce or proof-of-concept code
- The affected package(s): `@beluga-icon/core` and/or `@beluga-icon/react`
- The affected version range (check: `npm info @beluga-icon/react versions`)

### Response timeline

| Phase                          | Target                            |
| ------------------------------ | --------------------------------- |
| Acknowledgement                | Within 48 hours                   |
| Initial assessment             | Within 7 days                     |
| Fix and coordinated disclosure | Within 90 days of acknowledgement |

We follow [coordinated vulnerability disclosure](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure).
A CVE will be requested if the vulnerability warrants one.

## Scope

This policy covers the published npm packages:

- `@beluga-icon/core`
- `@beluga-icon/react`

**Out of scope:**

- Vulnerabilities in the demo application (`apps/demo`) — it is never published
- Issues in third-party dependencies — please report those to the upstream maintainers
- Vulnerabilities that require physical access to the end user's machine

## Security Characteristics of This Library

This library ships only SVG path data and React components. It does **not**:

- Make network requests
- Access the filesystem
- Execute dynamic code (`eval`, `new Function`, etc.)
- Use `dangerouslySetInnerHTML`
- Store or transmit user data
- Inject inline `<style>` tags with untrusted content

The primary supply chain security concern is **dependency integrity**. We address this
through npm provenance attestation — published builds are cryptographically linked to
this repository and the specific CI run that produced them.

### Verifying package provenance

You can verify that a published package was built from this repository using:

```bash
npm audit signatures @beluga-icon/react
npm audit signatures @beluga-icon/core
```

This checks the package's cryptographic signature against npm's public key registry.

### Checking for known vulnerabilities

```bash
npm audit
```

## Dependency Management

We use [Dependabot](https://docs.github.com/en/code-security/dependabot) to automatically
open pull requests for outdated or vulnerable dependencies. Security-related updates are
prioritized and merged promptly.
