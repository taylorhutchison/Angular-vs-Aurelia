export class DataService {
  getGroups() {
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

  getComedian(id) {
    let comedians = this.getComedians();
    var comediansFiltered = comedians.filter( f => f.id==id );
    if(comediansFiltered.length > 0){
      return comediansFiltered[0];
    }
    else {
      return {};
    }
  }

  getComedians() {
    let comedians = [{
      firstName: 'Groucho',
      lastName: 'Marx',
      id: 1,
      groupId: 1,
      url: 'https://en.wikipedia.org/wiki/Groucho_Marx'
    }, {
      firstName: 'Harpo',
      lastName: 'Marx',
      id: 2,
      groupId: 1,
      url: 'https://en.wikipedia.org/wiki/Harpo_Marx'
    }, {
      firstName: 'Chico',
      lastName: 'Marx',
      id: 3,
      groupId: 1,
      url: 'https://en.wikipedia.org/wiki/Chico_Marx'
    }, {
      firstName: 'Zeppo',
      lastName: 'Marx',
      id: 4,
      groupId: 1,
      url: 'https://en.wikipedia.org/wiki/Zeppo_Marx'
    }, {
      firstName: 'Stan',
      lastName: 'Laurel',
      id: 5,
      groupId: 2,
      url: 'https://en.wikipedia.org/wiki/Stan_Laurel'
    }, {
      firstName: 'Oliver',
      lastName: 'Hardy',
      id: 6,
      groupId: 2,
      url: 'https://en.wikipedia.org/wiki/Oliver_Hardy'
    }, {
      firstName: 'George',
      lastName: 'Burns',
      id: 7, 
      groupId: 3,
      url: 'https://en.wikipedia.org/wiki/George_Burns'
    }, {
      firstName: 'Gracie',
      lastName: 'Allen',
      id: 8,
      groupId: 3,
      url: 'https://en.wikipedia.org/wiki/Gracie_Allen'
    }, {
      firstName: 'Moe',
      lastName: 'Howard',
      id: 9,
      groupId: 4,
      url: 'https://en.wikipedia.org/wiki/Moe_Howard'
    }, {
      firstName: 'Curly',
      lastName: 'Howard',
      id: 10,
      groupId: 4,
      url: 'https://en.wikipedia.org/wiki/Curly_Howard'
    }, {
      firstName: 'Larry',
      lastName: 'Fine',
      id: 11,
      groupId: 4,
      url: 'https://en.wikipedia.org/wiki/Larry_Fine'
    }];

    for (let comedian of comedians) {
      comedian.fullName = `${comedian.firstName} ${comedian.lastName}`;
      comedian.group = this._getGroupById(comedian.groupId);
    }

    return comedians;
  }

  _getGroupById(id) {
    return this.getGroups().find(g => g.id === id);
  }
}
