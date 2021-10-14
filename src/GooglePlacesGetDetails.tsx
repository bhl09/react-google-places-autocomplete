import { GetDetailsRequest } from './GooglePlacesAutocomplete.types';
import GetDetailsRequestBuilder from './helpers/getDetailsRequestBuilder';
import { Loader } from '@googlemaps/js-api-loader';

export async function GooglePlacesGetDetails(apiKey: string, placeId: string, callback: (a: google.maps.places.PlaceResult | null) => void, fields?: string[]): Promise<void> {
    try {
        if (!window.google || !window.google.maps || !window.google.maps.places) {
            await new Loader({ apiKey, ...{ libraries: ['places'] } }).load();
        }

        if (!window.google) throw new Error('[react-google-places-get-details]: Google script not loaded');
        if (!window.google.maps) throw new Error('[react-google-places-get-details]: Google maps script not loaded');
        if (!window.google.maps.places) throw new Error('[react-google-places-get-details]: Google maps places script not loaded');

        const getDetailsRequest: GetDetailsRequest = { placeId: placeId };
        if (fields) getDetailsRequest.fields = fields;

        const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
        placesService.getDetails(GetDetailsRequestBuilder(getDetailsRequest), callback);
    } catch (error) {
        console.log(error);
    }
 }