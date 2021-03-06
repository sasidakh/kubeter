import Konva from "konva";
import { Resource } from "./Resource";
import { SymImage } from "../SymImage";

export class Pod extends Resource {

    constructor(rectConfig: Konva.RectConfig, image: SymImage) {
        super(rectConfig, image);
    }

}