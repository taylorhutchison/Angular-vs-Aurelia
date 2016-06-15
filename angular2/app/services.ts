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

  private comedians: Comedian[] = [
      new Comedian (
        'Groucho', 'Marx', 1,
        'https://en.wikipedia.org/wiki/Groucho_Marx',
        1
      ), new Comedian (
        'Harpo', 'Marx', 1,
        'https://en.wikipedia.org/wiki/Harpo_Marx',
        2
      ), new Comedian (
         'Chico', 'Marx', 1,
         'https://en.wikipedia.org/wiki/Chico_Marx',
         3
      ), new Comedian (
         'Zeppo', 'Marx', 1,
         'https://en.wikipedia.org/wiki/Zeppo_Marx',
         4
      ), new Comedian (
         'Stan', 'Laurel', 2,
         'https://en.wikipedia.org/wiki/Stan_Laurel',
         5
      ), new Comedian (
         'Oliver', 'Hardy', 2,
         'https://en.wikipedia.org/wiki/Oliver_Hardy',
         6
      ), new Comedian (
         'George', 'Burns', 3,
         'https://en.wikipedia.org/wiki/George_Burns',
         7
      ), new Comedian (
         'Gracie', 'Allen', 3,
         'https://en.wikipedia.org/wiki/Gracie_Allen',
         8
      ), new Comedian (
         'Moe', 'Howard', 4,
         'https://en.wikipedia.org/wiki/Moe_Howard',
         9
      ), new Comedian (
         'Curly', 'Howard', 4,
         'https://en.wikipedia.org/wiki/Curly_Howard',
         10
      ), new Comedian (
         'Larry', 'Fine', 4,
         'https://en.wikipedia.org/wiki/Larry_Fine',
         11
      )];

  getComeidans() : Promise<Comedian[]> {
    let commedians = this.comedians;
    for (let c of commedians) {
      c.group = this.getGroupById(c.groupId);
    }

    return new Promise((res, rej) => {
      setTimeout(() => res(commedians), 2000)
    });
  }

  getComedianById(id: number) : Promise<Comedian> {
    let comedian = this.comedians.find(c => c.id == id);
    comedian.group = this.getGroupById(comedian.groupId);
    return new Promise((res, rej) => {
      setTimeout(() => res(comedian), 2000);
    })
  }

  private getGroupById(id: number) {
    return this.getGroups().find(g => g.id == id);
  }
}
