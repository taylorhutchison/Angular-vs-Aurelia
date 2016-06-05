import { Injectable } from '@angular/core';
import { Comedian, Group } from './models';

@Injectable()
export class DataService {
  getGroups() : Group[] {
    return [{
      id: 1,
      name: 'The Marx Brothers'
    }, {
      id: 2,
      name: 'Laurel and Hardy'
    }, {
      id: 3,
      name: 'Burns and Allen'
    }, {
      id: 4,
      name: 'The Three Stooges'
    }];
  }

  getComeidans() : Comedian[] {
    let commedians = [
      new Comedian (
        'Groucho', 'Marx', 1,
        'https://en.wikipedia.org/wiki/Groucho_Marx'
      ), new Comedian (
        'Harpo', 'Marx', 1,
        'https://en.wikipedia.org/wiki/Harpo_Marx'
      ), new Comedian (
         'Chico', 'Marx', 1,
         'https://en.wikipedia.org/wiki/Chico_Marx'
      ), new Comedian (
         'Zeppo', 'Marx', 1,
         'https://en.wikipedia.org/wiki/Zeppo_Marx'
      ), new Comedian (
         'Stan', 'Laurel', 2,
         'https://en.wikipedia.org/wiki/Stan_Laurel'
      ), new Comedian (
         'Oliver', 'Hardy', 2,
         'https://en.wikipedia.org/wiki/Oliver_Hardy'
      ), new Comedian (
         'George', 'Burns', 3,
         'https://en.wikipedia.org/wiki/George_Burns'
      ), new Comedian (
         'Gracie', 'Allen', 3,
         'https://en.wikipedia.org/wiki/Gracie_Allen'
      ), new Comedian (
         'Moe', 'Howard', 4,
         'https://en.wikipedia.org/wiki/Moe_Howard'
      ), new Comedian (
         'Curly', 'Howard', 4,
         'https://en.wikipedia.org/wiki/Curly_Howard'
      ), new Comedian (
         'Larry', 'Fine', 4,
         'https://en.wikipedia.org/wiki/Larry_Fine'
      )];
    for (let c of commedians) {
      c.group = this.getGroupById(c.groupId);
    }
    return commedians;
  }

  private getGroupById(id: number) {
    return this.getGroups().find(g => g.id == id);
  }
}
