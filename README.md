# The Question of Palestine - Dynamic Transitions

The Question of Palestine is an educational platform designed to inform users about the history of the Palestine-Israel conflict. By presenting key events with credible, linked sources, the site encourages independent research and critical thinking, empowering users to form their own educated opinions.

## Features
- **Interactive Timeline**: A horizontally scrolling timeline that displays historical events.
- **Typewriter Effect**: Event dates appear with a typewriter effect as they scroll into view.
- **Scroll Indicator**: A draggable ball on a blue rectangle spans the bottom of the viewport, reflecting the scroll position.
- **Smooth Navigation**: The ball allows users to navigate the timeline by dragging it or by just scrolling normally.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Y-Juice/timeline-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd timeline-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

---

## File Structure

```plaintext
src/
├── components/
│   ├── Timeline.js     # Main timeline component with scroll and animations
│   ├── Event.js        # Component to render individual events
├── data/
│   └── data.json       # Historical event data
├── index.css           # Styling for the app
├── App.js              # Main app component
├── index.js            # Entry point
```

---

## Dependencies

- **React**: Core framework for building the UI.
- **GSAP**: Animation library for scroll-triggered animations and typewriter effects.
  - Plugins used:
    - `ScrollTrigger`
    - `TextPlugin`

Install GSAP:
```bash
npm install gsap
```

---

## Sources Used

1. **Typewriter Effect with GSAP**:
   - GSAP `TextPlugin` for animating text in a typewriter effect.
   - Source: [GSAP TextPlugin Documentation](https://greensock.com/docs/v3/Plugins/TextPlugin).

2. **Scroll Animation with ScrollTrigger**:
   - GSAP `ScrollTrigger` for creating animations based on scroll position.
   - Source: [GSAP ScrollTrigger: Full Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

3. **Draggable Elements**:
   - Custom implementation of a draggable scrollbar.
   - Based on event handling with `mousedown`, `mousemove`, and `mouseup`.
   - Source: [MDN Web Docs: Mouse Events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).

4. **Dynamic Element Positioning**:
   - Using `getBoundingClientRect()` to get element bounds.
   - Source: [MDN Web Docs: Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

5. **Programmatic Scrolling**:
   - Controlling the scroll position of the page with `window.scrollTo`.
   - Source: [MDN Web Docs: Window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

6. **Linear Gradient Background for Scroll Indicator**:
   - Blue-greenish gradient using CSS linear gradients.
   - Source: [CSS Tricks: CSS Gradient Backgrounds](https://css-tricks.com/examples/CSS3Gradient/).

---

## How to Use

1. Download all node modules:
` npm install`
2. Run the website using:
`npm start`
3. open [localhost:3000](http://localhost:3000/) to view the website
4. Scroll to view the next events in the history or drag the bal on the bottom.

---

## Future Improvements

- Add more interactivity to the events (e.g., expand on click).
- Support for touch gestures for mobile devices.
- Dynamic resizing for responsive layouts.

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).