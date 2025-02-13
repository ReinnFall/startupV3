# startupV3 - Pokemon Catch
## Specification Deliverable

### Elevator Pitch 

Pokemon, a game that has captured the minds and attention of people for decades, still continues to remain fresh and exciting. For big time collectors and horders, this game is a dream. My startup project will bring this magic and excitement right to your browser. My app will allow users to collect all of the original 151 Pokemon with only a few clicks. Encounter, catch and show off your Pokemon to all your friends and relive the undying magic of Pokemon.

### Key Features
- Ability to encounter and catch Pokemon
- Personal collection page
- Pokedex page that shows what you have caught and what you are missing
- Ability to share catches with others
- Free encounter/catch every 3 hours

###
### Technologies

I am going to use the required technologies in the following ways:

- **HTML** - My startup will span four different pages (Login, Catch, Collection and Pokedex). Hyperlinks between pages except initial login page.
- **CSS** - I will include an animation of a Poke ball shaking and catching a Pokemon. Decorated tables of Pokemon caught and missing.
- **React** - Clicking the Encounter button will interact with the page and show a hidden Pokemon. Pressing catch will add that Pokemon to a database tied to the player
- **Services** - App will connect with graphql-pokeapi to retrieve specific information about each Pokemon including type and pokedex entries.
- **DB/Authentication** - Each player will log in and have a record of each Pokemon that they have caught and who they are missing
- **WebSocket** - A message will appear on the catch page when other users succesfully caught a Pokemon (forgot to add this to my design jpg but it will be there)

## HTML deliverable

For this deliverable I did the following:

- [x] **HTML pages** - Four different pages. One for each view. `index.html` (Login), `catch.html`, `collection.html`, and `pokedex.html`.
- [x] **Proper HTML element usage** - I used header,footer, main, nav, img, a, and  button tags throughout my HTML files.
- [x] **Links** - Links between views.
- [x] **Text** - Catch page has text showing who has caught a Pokemon.
- [x] **3rd party API placeholder** - My pokedex and collection pages are hard programmed right now. These will act as placeholders for the Pokemon API I will be using.
- [x] **Images** - The question mark image on the pokedex page will be used to show if the user has not caught that Pokemon yet. I have placeholder images on collection page.
- [x] **Login placeholder** - My home page (index.html) has a placeholder for login. I will change it during the CSS phase as right now it is the exact same as Simon's.
- [x] **DB data placeholder** - My collection and pokedex page both have very large hardcoded tables that act as placeholders for the data that will be stored in them. I will change the collection tables to allocate dynamically with javascript.
- [x] **WebSocket placeholder** - The Player Catches section on the catch page is a placeholder for future WebSocket implementation.

## CSS deliverable

For this deliverable, I did the following:

- [x] **Header, footer, and main content body** - Each HTML file has its own css file. Headers and footers are identical.
- [x] **Navigation elements** - All Navigation elements are on the top right of the page. They remain consistent between pages.
- [x] **Responsive to window resizing** - I used flex as well as sizing things with vh and vw.
- [x] **Application elements** - I centered most of my content in the middle of the page. Flex helped with this. I also used bootstrap on my login buttons.
- [x] **Application text content** - Changed all my text to this font-family: Arial, Helvetica, sans-serif. Not too crazy but I think it looks nice.
- [x] **Application images** - I adjusted tables and images within pokedex and collection pages to take up the full space in my main. 

## React P1 
For this deliverable, I did the following:

- [x] **Vite** - Application is bundled with vite.
- [x] **React Components** - I now have react components that contain my css and html.
- [x] **React Router** - I use BrowserRouter and Routes to make my website one page.
- [x] **CSS fixes** - I had to fix some issues with css interacting with other pages. 

### Design

![loginBrainstorm](/images/loginBrainstorm.jpg)
![catchBrainstorm](/images/catchBrainstorm.jpg)
![collectionBrainstorm](/images/collectionBrainstorm.jpg)
![pokedexBrainstorm](/images/pokedexBrainstorm.jpg)




