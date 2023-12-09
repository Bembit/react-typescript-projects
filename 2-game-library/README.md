## Game Library/Shop Project

### Keywords
React Router, 404, SetStateAction, UseState, Dispatch, Props, Handlers

### Project Description
- Create a gaming-related webshop/library, inspired by platforms like Steam or Epic Games.
- Utilize React Router for navigation.
- Organize the project with `app.js` and at least four additional components: a shop view, an ID view, and a library view (and a nav).

### Tasks

1. **Build Shop View**
   - Render a shop view displaying a minimum of three games available for purchase/claiming.
   - Each game has an id, title, genre, description, image and price.
   - Show description on the :id route only.
   - **Game data in a `data.js` file.**

2. **Implement Navigation**
   - Clicking on a game in the shop view should navigate to a `/:id` route.

3. **Claim Button Functionality**
   - Add a claim button to each game in both the main shop view and the `/:id` view.
   - Clicking the claim button should change its state to "In library".

4. **Library View**
   - List owned games in the library component.
   - If the library is empty, display a message and a button saying, "No games, go shopping."

5. **Remove Game from Library**
   - In the library component, provide an option to remove a game from the user's account.
   - Removing a game should make it "claimable" again on the main screen.

6. **Handle routing and navigation**
   - Have a navigation component, users should use the url bar.
   - Handle 404 not found pages in case they actually do.