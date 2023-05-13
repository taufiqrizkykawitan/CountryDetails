class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://restcountries.com/v3.1/name/${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.countries) {
          return Promise.resolve(responseJson.countries);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
