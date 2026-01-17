# React + Vite

# Vendor Risk Management (VRM) UI Project

This project is a **Vendor Risk Management (VRM) UI** built as part of an assessment/internship task.  
It demonstrates core VRM workflows such as assessments, reviews, remediation, renewals, reports, and a vendor portal.

# Tech Stack
- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM

# Project Features

## 1. Assessments
- Assessment list view
- Assign assessment screen
- Status-wise assessment tracking (Assigned, In Progress, Submitted, etc.)

## 2. Templates & Questionnaires
- Template list
- Create template (basic builder v1)
- Questionnaires with:
  - Section navigation
  - Save draft functionality
  - Progress percentage indicator

## 3. Review Queue
- Review queue list
- Review detail screen
- Scoring breakdown placeholder

## 4. Remediation
- Remediation list
- Remediation detail view
- Vendor remediation response screen

## 5. Renewals
- Upcoming renewals
- Overdue renewals

## 6. Reports
- Basic reports table
- Export buttons (UI level)

## 7. Vendor Portal
- Vendor login view
- My Assessments page
- Status-wise assessment visibility for vendors


##  UI Quality Enhancements
- Loading states for all lists
- Empty state messages
- Error state placeholders
- Consistent status badges across screens
- Global search (vendors / assessments)

##  Routing Overview
The project uses **React Router** for navigation between:
- Assessment pages
- Templates
- Reviews
- Remediation
- Renewals
- Reports
- Vendor portal

---

##  How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/shiwanijunne/vrm-ui.git


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
