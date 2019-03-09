import {Path} from './path';

export class Itinerary {

    idItinerary: number;
    paths: Array<Path>;


    constructor(idItinerary: number, paths: Path[]) {
        this.idItinerary = idItinerary;
        this.paths = paths;
    }

    getDirections(): any {
        return {
            'geocoded_waypoints': [
                {
                    'geocoder_status': 'OK',
                    'place_id': 'ChIJuyiLu-o7yUwRKPZgVCac70s',
                    'types': [
                        'street_address'
                    ]
                },
                {
                    'geocoder_status': 'OK',
                    'place_id': 'ChIJKwcO4-o7yUwROr_Oekhy0qQ',
                    'types': [
                        'premise'
                    ]
                }
            ],
            'routes': [
                {
                    'bounds': {
                        'northeast': {
                            'lat': 45.462065,
                            'lng': -73.86720749999999
                        },
                        'southwest': {
                            'lat': 45.4609333,
                            'lng': -73.8685704
                        }
                    },
                    'copyrights': 'Map data ©2019 Google',
                    'legs': [
                        {
                            'distance': {
                                'text': '0.2 km',
                                'value': 188
                            },
                            'duration': {
                                'text': '1 min',
                                'value': 57
                            },
                            'end_address': '3882 Boulevard Saint-Charles, Pierrefonds, QC H9H 3C6, Canada',
                            'end_location': {
                                'lat': 45.4609333,
                                'lng': -73.8676229
                            },
                            'start_address': '3988 Boulevard Saint-Charles, Pierrefonds, QC H9H 3C6, Canada',
                            'start_location': {
                                'lat': 45.462065,
                                'lng': -73.8685704
                            },
                            'steps': [
                                {
                                    'distance': {
                                        'text': '0.1 km',
                                        'value': 129
                                    },
                                    'duration': {
                                        'text': '1 min',
                                        'value': 19
                                    },
                                    'end_location': {
                                        'lat': 45.4613019,
                                        'lng': -73.86732379999999
                                    },
                                    'html_instructions': 'Head <b>southeast</b> on <b>Boulevard Saint-Charles S</b>',
                                    'polyline': {
                                        'points': '{hntGpmzaMBMTg@Rc@Te@FKl@eAFIT]'
                                    },
                                    'start_location': {
                                        'lat': 45.462065,
                                        'lng': -73.8685704
                                    },
                                    'travel_mode': 'DRIVING'
                                },
                                {
                                    'distance': {
                                        'text': '59 m',
                                        'value': 59
                                    },
                                    'duration': {
                                        'text': '1 min',
                                        'value': 38
                                    },
                                    'end_location': {
                                        'lat': 45.4609333,
                                        'lng': -73.8676229
                                    },
                                    'html_instructions': 'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>',
                                    'maneuver': 'turn-right',
                                    'polyline': {
                                        'points': 'cdntGvezaMBCLQRZNPRb@'
                                    },
                                    'start_location': {
                                        'lat': 45.4613019,
                                        'lng': -73.86732379999999
                                    },
                                    'travel_mode': 'DRIVING'
                                }
                            ],
                            'traffic_speed_entry': [],
                            'via_waypoint': []
                        }
                    ],
                    'overview_polyline': {
                        'points': '{hntGpmzaMbA_CrAyBPUb@l@Rb@'
                    },
                    'summary': 'Boulevard Saint-Charles S',
                    'warnings': [],
                    'waypoint_order': []
                }
            ],
            'status': 'OK'
        };
    }

}
