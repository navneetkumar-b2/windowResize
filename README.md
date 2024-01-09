ans 1
In the `useWindowWidth` custom hook example, the `useEffect` runs only once when the component is mounted because of the empty dependency array (`[]`) passed as the second argument to `useEffect`. This ensures that the effect runs once after the initial render.

This behavior happens because the event listener for the `resize` event is set up in the initial `useEffect`, but the callback function (`handleResize`) inside the event listener remains active. So, whenever the window is resized, the `handleResize` function updates the `windowWidth` state via `setWindowWidth(window.innerWidth)`, causing a re-render and displaying the updated width.

Even though the `useEffect` itself runs only once, the functionality within it (like the event listener callback) can continue to interact and respond to ongoing events (like window resize) as long as the component is mounted.
<br>
ans2 (try by page navigation also)
When you refresh the page, the entire React application restarts. This includes the unmounting of all components before the page reloads.

The cleanup function specified in a `useEffect` hook is invoked when the component unmounts. When you refresh the page, all components are unmounted before the page reloads, and this includes the component with the `useEffect` hook containing the `window.removeEventListener` cleanup.

Therefore, when the page refreshes:

1. All components in the React app unmount.
2. The `useEffect` cleanup functions in those components are triggered as part of the unmounting process.
3. The cleanup function you've specified runs for each component with that effect when it unmounts.
4. Hence, the `alert("clean up fn called")` within the cleanup function triggers and shows the alert message as each component with that effect is unmounted.

This behavior is expected when the page is refreshed or navigated away from, causing React components to unmount as part of the page reload process.
