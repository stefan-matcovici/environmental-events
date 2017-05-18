import { Event } from "app/models/events/event";

export class Earthquake extends Event {
    richterDegree: number;
    mercalliDeree: number;
    depth: number;
}