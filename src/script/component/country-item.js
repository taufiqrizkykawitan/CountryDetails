class CountryItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-country {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .country-info {
          padding: 24px;
        }
        .country-info > h2 {
          font-weight: lighter;
        }
        .country-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <div class="country-info">
        <h2>${this._country.name.common}</h2>
        <p>Ibukota: ${this._country.capital[0]}</p>
        <p>Populasi: ${this._country.population}</p>
      </div>
    `;
  }
}

customElements.define('country-item', CountryItem);
