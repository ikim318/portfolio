# Portfolio

A modern, high-performance single-page portfolio website built with **React** and **TypeScript**. This project features a seamless smooth-scrolling architecture and a dynamic navigation system that tracks section visibility in real-time.

## Key Features

- **Single Page Scroll**: Smooth navigation between sections (Home, Education, Career, Projects) using optimized scroll logic.
- **Scroll Spy SideNav**: A dynamic sidebar that automatically appears/disappears and highlights the current section using the **Intersection Observer API**.
- **Type Safety**: Fully implemented in TypeScript to ensure robust data handling and DOM reference management.
- **Professional UI**: A dark-themed, responsive design built for readability and modern aesthetics.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Hooks & APIs**:
    - `useRef` & `forwardRef` (for precise scroll targeting)
    - `Intersection Observer API` (for scroll spy logic)
    - Custom scroll hooks

## Project Highlights

- **`SideNav.tsx`**: Manages conditional rendering and active state highlighting based on the user's scroll position.
- **`forwardRef` Implementation**: Used across section components (Education, Career, etc.) to allow the parent container to trigger precise scrolling.
- **Semantic HTML**: Built with `<article>` and `<section>` tags to improve SEO and web accessibility.
- **Vercel Optimized**: Optimized for seamless deployment and fast loading through Vercel's edge network.

## Website Domain

https://portfolio-drab-one-27.vercel.app/

## Contact

- Email: claire.inkyeong@gmail.com
- LinkedIn: www.linkedin.com/in/inkyeongkim
- GitHub: https://github.com/claire0321

© 2026 Claire Kim. Built with React & TypeScript. Deployed on Vercel.
