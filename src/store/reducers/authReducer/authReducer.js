import { GetRegion, GetLocation, GetCountry, GetAuth} from './../../../utils/auth';
import {SET_CROSS_DOMAIN_DATA, GUEST_USER} from './../../constants/constants';

const INITIAL_STATE = {
    myAuth: GetAuth(),
    myRegion: GetRegion(),
    myCountry: GetCountry(),
    myLocation: GetLocation(),
    isGuest: true,
};

export default (states = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case SET_CROSS_DOMAIN_DATA:
            return {
                ...states,
                myAuth: GetAuth(),
                myRegion: GetRegion(),
                myCounty: GetCountry(),
                myLocation: GetLocation(),
            };
         case GUEST_USER:
            return {
                ...states,
                 isGuest: action.payload,
            };
        default:
            return states;
    }
};
