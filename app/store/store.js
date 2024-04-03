import {atom} from 'recoil'




        export const pageViewerState = atom({
            key: 'pageViewerState', // unique ID (with respect to other atoms/selectors)
            default: 1, // default value (aka initial value)
        });
    
