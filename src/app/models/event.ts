export class Event {
  id: number;
  name: string;
  startingDate: Date;
  location: {latitude:number,longitude:number};
  hints: string;
  description: string;
}
