export default class Api{
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  static doFetch(content=null){
    let endpoint = '{city name}&appid={your api key}';
    let url = '/api.openweathermap.org/data/2.5/weather?q=';
    let options = {
      headers : new Headers(),
      body: JSON.stringify(content),
      method : content ? 'GET' : 'POST'
    };

    return fetch(url + endpoint, options).then(res=>res.ok ? res.json() :new Error(res.json()));
  }
}