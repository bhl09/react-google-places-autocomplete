
# React Google Places Text Search

A Fork from [tintef/react-google-places-autocomplete](https://github.com/tintef/react-google-places-autocomplete), enhanced to filter by types with an extra feature, ```GooglePlacesGetDetails```.

## Getting started

Install the latest version:

```sh
npm install --save @bhl09/react-google-places-text-search
  or
yarn add @bhl09/react-google-places-text-search
```

## Autocomplete with type filtering

```js
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Component = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="****"
      types={['gas_station','supermarket','home_goods_store']}
      enableResultLog={true} // Enabling this will log the results to console
    />
  </div>
);

export default Component;
```

## Get details

```js
import React from 'react';
import { GooglePlacesGetDetails } from 'react-google-places-autocomplete';

const Component = () => {
  const getDetails = async () => {
    await GooglePlacesGetDetails(apiKey, placeId, (result) => {
      console.log(result);
    });
  }
};

export default Component;
```

## Original

```js
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Component = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="****"
    />
  </div>
);

export default Component;
```

**Coming from v2? Check the [migration guide](https://tintef.github.io/react-google-places-autocomplete/docs/v2-to-v3)**

## Documentation

[**Read The Docs**](https://tintef.github.io/react-google-places-autocomplete)

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes

    For this, I like to use [yalc](https://github.com/whitecolor/yalc), as it allows to emulate the process of using npm/yarn.

    1. Install [yalc](https://github.com/whitecolor/yalc)
    2. Build project with `yarn build` or `npm run build`
    3. Publish the package with yalc: `yalc publish`
    4. Add the package to your test project `yalc add react-google-places-automocomplete`
    5. If needed, to update the package on your test project: `yalc update react-google-places-autocomplete`


5. Submit a PR!


<br />
<br />
<p align="center">
  Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</p>