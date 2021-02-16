<img src="https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp" width=100/>

# Project Overview

## Project Links

- [Github Repo Link](https://github.com/kndshein/ProjectTwo)
- [Deployment Link](https://amseeyou.netlify.app)

## Project Description

A website that lists the chronological order of the Marvel Cinematic Universe.

## API

<details>
<summary>Sample API element</summary>

```
{
"adult": false,
"backdrop_path": "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
"belongs_to_collection": null,
"budget": 63000000,
"genres": [
{
"id": 18,
"name": "Drama"
}
],
"homepage": "http://www.foxmovies.com/movies/fight-club",
"id": 550,
"imdb_id": "tt0137523",
"original_language": "en",
"original_title": "Fight Club",
"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
"popularity": 46.209,
"poster_path": "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
"production_companies": [
{
"id": 508,
"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
"name": "Regency Enterprises",
"origin_country": "US"
},
{
"id": 711,
"logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
"name": "Fox 2000 Pictures",
"origin_country": "US"
},
{
"id": 20555,
"logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
"name": "Taurus Film",
"origin_country": "DE"
},
{
"id": 54051,
"logo_path": null,
"name": "Atman Entertainment",
"origin_country": ""
},
{
"id": 54052,
"logo_path": null,
"name": "Knickerbocker Films",
"origin_country": "US"
},
{
"id": 25,
"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
"name": "20th Century Fox",
"origin_country": "US"
},
{
"id": 4700,
"logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
"name": "The Linson Company",
"origin_country": ""
}
],
"production_countries": [
{
"iso_3166_1": "DE",
"name": "Germany"
},
{
"iso_3166_1": "US",
"name": "United States of America"
}
],
"release_date": "1999-10-15",
"revenue": 100853753,
"runtime": 139,
"spoken_languages": [
{
"english_name": "English",
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "Mischief. Mayhem. Soap.",
"title": "Fight Club",
"video": false,
"vote_average": 8.4,
"vote_count": 20851
}
```

</details>

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe](https://www.figma.com/file/lKAuxw68qqgsy6NxgvIAEa/Am-See-You)
- [React Achitecture](https://docs.google.com/drawings/d/1uBYvkX6U5aEzU8OGx2h4QJoasdffDffz4WDwXbvyJf0/edit)

### MVP/PostMVP

#### MVP

- Use a movie database api
- Render data on page
- Allow user to interact with the page
- List all MCU films in chronological order
- Watched list

#### PostMVP

- Include TV shows in the list
- Change splash image on hover

## Time Frame

#### MVP

| Component                         | Priority | Estimated Time | Actual Time |
| --------------------------------- | :------: | :------------: | :---------: |
| React: Setup Components           |    H     |      1 hr      |    5 hrs    |
| React: API + Mapping              |    H     |     3 hrs      |    3 hrs    |
| React: HandleClick + Watched List |    H     |     5 hrs      |    2 hrs    |
| Deploy on Netlify                 |    H     |     0.5 hr     |    1 hrs    |
| Prep for Styling                  |    M     |     2 hrs      |    5 hrs    |
| CSS for Movie list                |    M     |     1 hrs      |   15 hrs    |
| CSS for Watched List              |    M     |     1 hrs      |   1.5 hrs   |
| CSS for Pages                     |    L     |     4 hrs      |   N/A hrs   |
| Total                             |    H     |    17.5 hrs    |  32.5 hrs   |

#### Post-MVP

| Component                              | Priority | Estimated Time | Actual Time |
| -------------------------------------- | :------: | :------------: | :---------: |
| React: Click to show description       |    H     |     2 hrs      |    4 hrs    |
| CSS for splash screen                  |    L     |     4 hrs      |   N/A hrs   |
| CSS tabs for Movie List & Watched List |    L     |     3 hrs      |   N/A hrs   |
| Total                                  |    H     |     9 hrs      |    4 hrs    |

## Additional Libraries

- React-router-dom

https://www.npmjs.com/package/react-scroll-horizontal