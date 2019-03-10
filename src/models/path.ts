export class Path {
    colorCode: string;
    duration: string;
    distance: string;
    message: string;
    rating;

    // request needed to draw the steps
    request;


    constructor(colorCode: string, rating: any, request) {
        this.colorCode = colorCode;
        this.rating = {
            collision: rating.collision,
            feupieton: rating.feupieton,
            feuxsonores: rating.feuxsonores,
            vehiculepietion: rating.vehiculepietion,
        };

        this.populateMessage();

        this.request = request;

        this.duration = request.duration.text;
        this.distance = request.distance.text;
    }

    populateMessage() {
        let max = 'collision';
        this.message = 'Attention: collisions';

        if (this.rating.feupieton > this.rating[max]) {
            max = 'feupieton';
            this.message = 'Attention: peu de feux piétons';
        }
        if (this.rating.feuxsonores > this.rating[max]) {
            max = 'feuxsonores';
            this.message = 'Attention: peu de feux sonores';
        }
        if (this.rating.vehiculepietion > this.rating[max]) {
            max = 'vehiculepieton';
            this.message = 'Attention: circulation importante';
        }
    }

    getRating() {
        const number = this.rating.collision + this.rating.feupieton + this.rating.feuxsonores + this.rating.vehiculepietion;

        return number / 4;
    }

}
