## Game Library/Shop Project

### Project Description
- Create a gaming-related webshop/library, inspired by platforms like Steam or Epic Games.
- Utilize React Router for navigation.
- Organize the project with `app.js` and at least three additional components: a shop view, an ID view, and a library view.

### Tasks

1. **Build Shop View**
   - Render a shop view displaying a minimum of three games available for purchase/claiming.
   - Each game should have an id, title, genre, description, image and price.
   - Show description on the :id route only.
   - **You can provide the game data in a `data.json` file.**

2. **Implement Navigation**
   - Clicking on a game in the shop view should navigate to a `/:id` route.

3. **Buy Button Functionality**
   - Add a buy button to each game in both the main shop view and the `/:id` view.
   - Clicking the buy button should change its state to "please wait" for 2-3 seconds.
   - After the wait, change the state to "in library."

4. **Library View**
   - List owned games in the library component.
   - If the library is empty, display a message and a button saying, "No games, go shopping."

5. **Remove Game from Library**
   - In the library component, provide an option to remove a game from the user's account.
   - Removing a game should make it "claimable" again.

### Extras (Potential Additional Features)
- Implement a more sophisticated user authentication system.
- Enhance the UI/UX design for a more polished look.
- Add additional game details or features such as ratings, release dates, etc.
- Fetch game data from an external API.
- Implement responsive design for a better mobile experience.