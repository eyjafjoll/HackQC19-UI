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

        this.message = '';
        this.request = request;

        this.duration = request.duration.text;
        this.distance = request.distance.text;
    }

    getRating() {
        const number = this.rating.collision + this.rating.feupieton + this.rating.feuxsonores + this.rating.vehiculepietion;

        return number / 4;
    }

}
