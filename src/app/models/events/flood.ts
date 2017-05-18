import { Event } from "app/models/events/event";

export class Flood extends Event {
    precipitationLevel: number;
}