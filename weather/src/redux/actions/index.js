export const FETCH_DATA_WITH_ID = "FETCH_DATA_WITH_ID";
export const GET_ALL_DETAILS = "GET_ALL_DETAILS";
export const SET_USERNAME = "SET_USERNAME";
const API_KEY = "2931f4580a615ccf3bfa2e9a5f289e81";

export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name,
});
const SET_SEARCH = "SET_SEARCH";

export const fetchSearch = (string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${string}"&appid="${API_KEY}`
      );
      if (response.ok) {
        const result = await response.json();
        const city = result.city;
        dispatch({
          type: SET_SEARCH,
          payload: city,
        });
      } else {
        console.log("ERROR: problem with fetch");
      }
    } catch (err) {
      console.log("ERROR: could not fetch search", err);
    }
  };
};
export const setDefaultHome = (cityName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cityName}"&appid="${API_KEY}`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let result = await response.json();
        let weatherInfo = result.list;
        dispatch({
          type: GET_ALL_SONGS,
          payload: weatherInfo,
        });
        /*  dispatch({
        type: FETCH_DATA_WITH_ID,
        payload: data,
      }); */
      } else {
        console.log("we got an error :(");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
