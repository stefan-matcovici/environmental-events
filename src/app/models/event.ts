export class Event {
  id: number;
  name: string;
  startingTime: Date;
  location: {latitude:number,longitude:number};
  hints: string;
  description: string;
  severity: string;
}
