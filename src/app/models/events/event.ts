export class Event {
  id: number;
  name: string;
  startingTime: Date;
  endingTime: Date;
  severity: string;
  description: string;
  location: {latitude:number,longitude:number};
  hints: string;
  //latitude: number;
  //longitude: number;
  radius: number;
}
