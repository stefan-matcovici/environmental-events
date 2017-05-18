import { Event } from "app/models/events/event";

export class MeteoEvent extends Event {
    temperature: number;
    humidity: number;
    precipitationLevel: number;
}