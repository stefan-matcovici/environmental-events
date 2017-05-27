import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = [
      {id: 11, name: 'Fire',startingDate: new Date('May 20, 2017 12:26:00'),endingDate: new Date('May 23, 2017 12:26:00'),severity: 'GREEN',description:'Very dangerous',hints:'Stay in your house please!',latitude:39.904211,longitude:116.407395,radius:2},
      {id: 12, name: 'Flood',startingDate: new Date('June 13, 2016 11:24:13'),endingDate: new Date('June 13, 2016 11:24:13'),severity: 'YELLOW',description:'Very dangerous',hints:'Stay in your house please!',latitude:48.856614,longitude:2.352222,radius:5},
      {id: 13, name: 'Earthquake',startingDate: new Date('May 21, 2017 20:08:00'),endingDate: new Date('May 23, 2017 20:08:00'),severity: 'ORANGE',description:'Very dangerous',hints:'Stay in your house please!',latitude:51.507351,longitude:-0.127758,radius:10},
      {id: 14, name: 'Tsunami',startingDate: new Date('December 22, 2016 12:19:00'),endingDate: new Date('January 22, 2017 12:19:00'),severity: 'RED',description:'Very dangerous',hints:'Stay in your house please!',latitude:47.158455,longitude:27.601442,radius:1},
      {id: 15, name: 'Tornado',startingDate: new Date('July 8, 2017 21:13:00'),endingDate: new Date('July 10, 2017 21:13:00'),severity: 'ORANGE',description:'Very dangerous',hints:'Stay in your house please!',latitude:53.547346,longitude:10.014038,radius:4},
      {id: 16, name: 'TerroristAttack',startingDate: new Date('June 12, 2015 05:24:00'),endingDate: new Date('June 12, 2015 05:24:00'),severity: 'RED',description:'Very dangerous',hints:'Stay in your house please!',latitude:44.426767,longitude:26.102538,radius:8},
      {id: 17, name: 'Flood',startingDate: new Date('December 17, 2017 06:04:02'),endingDate: new Date('December 20, 2017 06:04:02'),severity: 'YELLOW',description:'Very dangerous',hints:'Stay in your house please!',latitude:46.771210,longitude:23.623635,radius:20},
      {id: 18, name: 'Fire',startingDate: new Date('June 20, 2011 14:18:28'),endingDate: new Date('June 29, 2011 14:18:28'),severity: 'YELLOW',description:'Very dangerous',hints:'Stay in your house please!',latitude:40.712784,longitude:-74.005941,radius:0.3},
      {id: 19, name: 'Flood',startingDate: new Date('January 29, 2014 13:24:00'),endingDate: new Date('January 31, 2014 13:24:00'),severity: 'GREEN',description:'Very dangerous',hints:'Stay in your house please!',latitude:-33.868820,longitude:151.209296,radius:8.3},
      {id: 20, name: 'Tornado',startingDate: new Date('June 21, 2017 19:21:20'),endingDate: new Date('June 22, 2017 19:21:20'),severity: 'GREEN',description:'Very dangerous',hints:'Stay in your house please!',latitude:21.027764,longitude:105.834160,radius:10},
    ];
    return {events};
  }
}
