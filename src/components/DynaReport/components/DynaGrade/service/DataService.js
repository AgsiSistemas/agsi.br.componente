export class DataService {
  getData() {
    return fetch("mocks/conveniados.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
