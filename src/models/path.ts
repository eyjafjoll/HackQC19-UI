import {Intersection} from './intersection';

export class Path {

    idPath: number;
    colorCode: string;
    intersections: Array<Intersection>;

    // rating: number;

    constructor(idPath: number, colorCode: string, intersections: Intersection[]) {
        this.idPath = idPath;
        this.colorCode = colorCode;
        this.intersections = intersections;
    }

}
