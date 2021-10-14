import { GetDetailsRequest } from '../GooglePlacesAutocomplete.types';

export default (
    getDetailsRequest: GetDetailsRequest,
): google.maps.places.PlaceDetailsRequest => {
  const { ...rest } = getDetailsRequest;

  const res: google.maps.places.PlaceDetailsRequest = {
    ...rest,
  };

  return res;
};
