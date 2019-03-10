import {Path} from './path';

export class Itinerary {

    idItinerary: number;
    paths: Array<Path>;
    time: number;
    rating: number;


    constructor(idItinerary: number, paths: Path[], time: number) {
        this.idItinerary = idItinerary;
        this.paths = paths;
        // this.time = time;
        this.time = Math.round(Math.random() * 60);
        this.rating = this.getRating();
    }

    getRating(): number {
        return Math.round(Math.random() * 100);
    }

    getDirections(): any {
        return {
            'request': {
                'destination': {
                    'query': '14628 Boul de Pierrefonds, Pierrefonds, QC H9H 4Y6, Canada'
                },
                'origin': {
                    'location': '14770 Boul de Pierrefonds, Pierrefonds, QC H9H 4Y6, Canada'
                },
                'travelMode': 'DRIVING'
            },
            'routes': [{
                'bounds': {
                    'ga': {
                        'j': 45.4866813,
                        'l': -73.8569792
                    },
                    'ma': {
                        'j': 45.48487919999999,
                        'l': -73.8583241
                    }
                },
                'copyrights': 'Map data ©2019 Google',
                'legs': [{
                    'distance': {
                        'text': '0.3 km',
                        'value': 258
                    },
                    'duration': {
                        'text': '1 min',
                        'value': 58
                    },
                    'end_address': '14628 Boul de Pierrefonds, Pierrefonds, QC H9H 4Y6, Canada',
                    'end_location': {
                        'lat': 45.4866813,
                        'lng': -73.8569792
                    },
                    'start_address': '14770 Boul de Pierrefonds, Pierrefonds, QC H9H 4Y6, Canada',
                    'start_location': {
                        'lat': 45.4850524,
                        'lng': -73.85796499999999
                    },
                    'steps': [{
                        'distance': {
                            'text': '30 m',
                            'value': 30
                        },
                        'duration': {
                            'text': '1 min',
                            'value': 22
                        },
                        'end_location': {
                            'lat': 45.4852709,
                            'lng': -73.8577474
                        },
                        'html_instructions': 'Head <b>northeast</b> toward <b>Boul de Pierrefonds</b>',
                        'polyline': {
                            'points': 'qxrtGfkxaMk@i@'
                        },
                        'start_location': {
                            'lat': 45.4850524,
                            'lng': -73.857965
                        },
                        'travel_mode': 'WALKING',
                        'ratings': null
                    },
                        {
                            'distance': {
                                'text': '19 m',
                                'value': 19
                            },
                            'duration': {
                                'text': '1 min',
                                'value': 14
                            },
                            'end_location': {
                                'lat': 45.48533219999999,
                                'lng': -73.8579044
                            },
                            'html_instructions': 'Turn <b>left</b> toward <b>Boul de Pierrefonds</b>',
                            'maneuver': 'turn-left',
                            'polyline': {
                                'points': '}yrtG|ixaMEJEP'
                            },
                            'start_location': {
                                'lat': 45.4852709,
                                'lng': -73.8577474
                            },
                            'travel_mode': 'WALKING',
                            'ratings': null
                        },
                        {
                            'distance': {
                                'text': '0.2 km',
                                'value': 167
                            },
                            'duration': {
                                'text': '2 mins',
                                'value': 122
                            },
                            'end_location': {
                                'lat': 45.4866641,
                                'lng': -73.8569199
                            },
                            'html_instructions': 'Turn <b>right</b> onto <b>Boul de Pierrefonds</b><div style="font-size:0.9em">Destination will be on the right</div>',
                            'maneuver': 'turn-right',
                            'polyline': {
                                'points': 'izrtGzjxaMmA_A_BgA{A{@'
                            },
                            'start_location': {
                                'lat': 45.48533219999999,
                                'lng': -73.8579044
                            },
                            'travel_mode': 'WALKING',
                            'ratings': {
                                'collision': {
                                    'postions': [{
                                        'LOC_LAT': 45.48577075,
                                        'LOC_LONG': -73.85758307
                                    },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.48577075,
                                            'LOC_LONG': -73.85758307
                                        },
                                        {
                                            'LOC_LAT': 45.48577075,
                                            'LOC_LONG': -73.85758307
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48577075,
                                            'LOC_LONG': -73.85758307
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48577075,
                                            'LOC_LONG': -73.85758307
                                        },
                                        {
                                            'LOC_LAT': 45.48577075,
                                            'LOC_LONG': -73.85758307
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.8576079
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.4860995,
                                            'LOC_LONG': -73.85733343
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.85760843
                                        },
                                        {
                                            'LOC_LAT': 45.48573468,
                                            'LOC_LONG': -73.8576079
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        },
                                        {
                                            'LOC_LAT': 45.48613557,
                                            'LOC_LONG': -73.85730808
                                        }
                                    ],
                                    'rating': 35.857612358039134
                                }
                            }
                        }
                    ],
                    'traffic_speed_entry': [],
                    'via_waypoint': []
                }],
                'overview_polyline': {
                    'points': 'qxrtGfkxaM`@b@Ub@m@o@gByA_BgA{Ay@'
                },
                'summary': 'Boul de Pierrefonds',
                'warnings': [],
                'waypoint_order': []
            }],
            'status': 'OK'
        };
    }

}
