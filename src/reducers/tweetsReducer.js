// export default function reducer(state={
//   tweets: [],
//   fetching: false,
//   fetched: false,
//   error: null
// }, action) {

//   switch (action.type) {
//     case "FETCH_TWEETS": {
//       return {...state, fetching: true}
//     }
//     case "FETCH_TWEETS_REJECTED": {
//       return {...state, fetching: true, error: action.payload}
//     }
//     case "FETCH_TWEETS_FULFILLED": {
//       return {...state, fetching: true, fetched: false, tweets: action.payload}
//     }
//   }
// }