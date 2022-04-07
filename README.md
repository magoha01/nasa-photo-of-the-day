# Module Project: Component Side Effects- NASA APOD

This is a single page application that consumes the NASA API to fetch the "Astronomy Photo Of The Day," or APOD.


### Task 1: Project Set Up

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`

**Fetching the Data**

- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [ ] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day


#### Pro Tips

- You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

```js
// Display a loading message while the data is fetching
if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  {/* your normal JSX here */}
);
```


### Task 3: Stretch

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- [ ] Notice the optional query param `date`? You can pass a different date in your url like this `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14` to get the APOD from a different date. Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out
- [ ] Make another app that consumes another one of NASA's other APIs listed on the same website

