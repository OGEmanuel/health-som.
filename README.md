# HealthSom – Patient Medical Records App

## Overview

**HealthSom** is a patient-facing medical records application inspired by the concept of "wholesome" healthcare—bringing together all aspects of a patient's medical journey into one accessible, unified platform. The name "HealthSom" reflects our mission to make health management as complete and seamless as possible.

This project began as a solution to a common hospital frustration: redundant queuing and fragmented access to test results. Patients often wait in line only to discover their results have already been sent elsewhere, requiring further navigation through hospital bureaucracy. HealthSom aims to eliminate these inefficiencies by giving patients direct access to their medical records, streamlining communication, and improving the overall healthcare experience.

The current version is a proof of concept, validated with a partner hospital. Based on feedback and research, our team plans to build a more robust, scalable system in future iterations, including support for multiple healthcare providers and a dedicated mobile app.

---

## Quick Access

- **Accepted Test ID:** `20194040`
- **Password:** Any 8-character password works

Use these credentials to log in and explore the proof-of-concept features.

---

## Why React, TypeScript, and Tailwind CSS?

### React

- **Component-Based Architecture:** Enables modular, maintainable, and scalable UI development.
- **Rich Ecosystem:** Facilitates rapid feature integration and community support.
- **Performance:** Virtual DOM ensures responsive, efficient updates—critical for healthcare apps.

### TypeScript

- **Type Safety:** Reduces runtime errors and improves reliability, especially important for sensitive medical data.
- **Developer Experience:** Enhances code quality and onboarding as the team grows.
- **Scalability:** Maintains code integrity as features and contributors expand.

### Tailwind CSS

- **Utility-First Design:** Accelerates UI development with consistent, customizable styles.
- **Responsive Utilities:** Simplifies support for desktop and mobile interfaces.
- **Optimized Output:** Generates minimal CSS for fast load times and smooth user experience.

---

## State Management

### TanStack Query

- **Asynchronous State:** Efficiently fetches, caches, and updates server data (e.g., medical records).
- **Automatic Caching:** Keeps data fresh and reduces network overhead.
- **Devtools:** Simplifies debugging and monitoring of data-fetching logic.

### Zustand

- **Synchronous App State:** Manages global state (e.g., selected hospital, user session) with minimal boilerplate.
- **Simplicity & Performance:** Lightweight and fast, avoiding the complexity of Redux or Context API.
- **Scalability:** Flexible store structure for future growth.
- **Why Zustand?** Unlike Redux, Zustand requires no verbose actions or reducers, and unlike Context, it avoids unnecessary re-renders—making it ideal for interactive, real-time healthcare applications.

---

## Project Structure

- **src/**: Main source code, organized by feature (auth, home, components, lib, store).
- **components/ui/**: Reusable UI primitives (input, dialog, tabs, etc.).
- **assets/**: SVG icons and images.
- **store/**: Zustand state management.
- **lib/**: Utilities and providers (e.g., TanStack Query).

---

## Team

We are currently a team of three:

- **Frontend:** [Emmanuel Ogunmola](mailto:emmanuelogunmola416@gmail.com)
- **Designer:** [Abolaji Olunuga](mailto:abolaji.olunugaa@gmail.com)
- **Backend:** [Adeola Adenekan](mailto:adexsquare4192@gmail.com)

---

## Future Plans

- **Team Expansion:** Codebase designed for easy onboarding and collaboration.
- **Mobile Version:** Planned React Native app for seamless cross-platform experience.
- **Multi-Hospital Support:** Scalable architecture for onboarding more healthcare providers.
- **Advanced Features:** Secure messaging, appointment scheduling, analytics, and more.
- **Patient Empowerment:** Enable patients to manage appointments, view prescriptions, and communicate directly with healthcare providers.
- **Integration:** Connect with external labs, pharmacies, and insurance providers for a truly wholesome health experience.

---

## License

This project is **not open source yet**. The team will decide if and when it will be
