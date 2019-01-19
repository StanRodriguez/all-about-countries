# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                          | Status   |
| ----- | ---------------------------------------------------- | -------- |
| Day 1 | Project Description                                  | Complete |
| Day 1 | Wireframes / Priority Matrix / Functional Components | Complete |
| Day 2 | Core Application Structure (HTML, CSS, etc.)         | Complete |
| Day 3 | Pseudocode / actual code                             | Complete |
| Day 3 | Initial Clickable Model                              | Complete |
| Day 4 | MVP                                                  | Complete |
| Day 5 | Present                                              | Complete |

## Project Description

This app allows you to search for a country, gives you information about it and also renders a map with a marker showing you where the country is.

## [Wireframes](https://photos.app.goo.gl/kP7KJwarsJeUawpt8)

[Link to Wireframes](https://photos.app.goo.gl/kP7KJwarsJeUawpt8)

## [Priority Matrix](https://photos.app.goo.gl/5rHnQhydcwRL68Yz6)

[Link to Priority Matrix](https://photos.app.goo.gl/5rHnQhydcwRL68Yz6)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- The user can pick the country in a select box. &#10003;
- Render country information on the page. &#10003;
- Render a map on the screen showing the country location. &#10003;
- Render a location pin insinde the map. &#10003;

#### PostMVP

- Landing page.
- Use a search bar to filter through the countries on the select element. &#10003;
- Checkboxes making the user decide what information they want to see.

## [React Architectural Design](https://photos.app.goo.gl/qjdD6iHLRSxhJQeg8)

[Link to React Architectural Design](https://photos.app.goo.gl/qjdD6iHLRSxhJQeg8)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component       |                               Description                                |
| --------------- | :----------------------------------------------------------------------: |
| App             |                        Serves as a main container                        |
| Search          |            Searches for API information with user interaction            |
| Map             |              Renders the map pointing the country selected               |
| MapStyleButton  | Renders buttons to change map style (i.e. satellite, streets, dark, etc) |
| Information     |              Renders information about the selected country              |
| InformationList |          Renders varios items in the same piece of information           |
| Header          |                      Defines the header information                      |
| Footer          |                      Defines the footer information                      |

## Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component                            | Priority | Estimated Time | Actual Time |
| ------------------------------------ | :------: | :------------: | :---------: |
| Adding select box                    |    H     |      3hrs      |   1.5hrs    |
| Get the API country information      |    H     |      4hrs      |    1hrs     |
| Render the API country information   |    H     |      4hrs      |    2hrs     |
| Render API map                       |    H     |      4hrs      |    1hrs     |
| Show the country location on the map |    M     |      4hrs      |    2hrs     |
| Styling                              |    M     |      5hrs      |    3hrs     |
| PostMVPs                             |    L     |      5hrs      |    4hrs     |
| Total                                |          |     29hrs      |   14.5hrs   |

## API's Links

- [Mapbox](https://www.mapbox.com/)
- [Rest Countries](https://restcountries.eu/)

## Helper Functions

Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function |                                  Description                                  |
| -------- | :---------------------------------------------------------------------------: |
| map      | takes an array, takes a function as a parameter and return the modified array |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

| Library            |                      What it Does                       |
| ------------------ | :-----------------------------------------------------: |
| Bootstrap          |  Used to help style and make my application responsive  |
| REST Countries API |            Used to get countries information            |
| React-Select       | Used to give extra functionality in the select elements |
| MapBoxGL           |            Used to render a map in the app.             |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// this function add commas as a separator in numbers.
// source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export default numberWithCommas;

```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

| Original Plan                  |                                      Outcome                                       |
| ------------------------------ | :--------------------------------------------------------------------------------: |
| Have one Information component | I added another component to render several items in the same information category |

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

**ERROR**: Map returning to default when zooming in or out.
**RESOLUTION**: adding the previous state to the onViewPortChange event.
