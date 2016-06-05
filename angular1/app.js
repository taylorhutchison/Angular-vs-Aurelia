(function() {
  "use strict";

  angular
    .module('comedians', [])
    .controller('mainController', mainController)
    .service('dataService', dataService);

  /*
   * TODO: Fill in the code for the mainController to get
   *       data from the dataService and to provide
   *       any data and/or operations needed in the index.html view
   */
  function mainController(dataService) {
    var groupsById = dataService
      .getGroups()
      .reduce(function (acc, group) {
        acc[group.id] = group.name;
        return acc;
      }, {});


    this.comedians = dataService
      .getComedians()
      .map(function (c) {
        c.name = c.firstName + ' ' + c.lastName;
        c.group = groupsById[c.groupId];
        return c;
      });
  }


  /*
   * Use the methods in this service to fetch data for the
   *  mainController. Do not change this service.
   */
  function dataService() {
    this.getGroups = function () {
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
    };

    this.getComedians = function() {
      return [{
        firstName: 'Groucho',
        lastName: 'Marx',
        groupId: 1,
        url: 'https://en.wikipedia.org/wiki/Groucho_Marx'
      }, {
        firstName: 'Harpo',
        lastName: 'Marx',
        groupId: 1,
        url: 'https://en.wikipedia.org/wiki/Harpo_Marx'
      }, {
        firstName: 'Chico',
        lastName: 'Marx',
        groupId: 1,
        url: 'https://en.wikipedia.org/wiki/Chico_Marx'
      }, {
        firstName: 'Zeppo',
        lastName: 'Marx',
        groupId: 1,
        url: 'https://en.wikipedia.org/wiki/Zeppo_Marx'
      }, {
        firstName: 'Stan',
        lastName: 'Laurel',
        groupId: 2,
        url: 'https://en.wikipedia.org/wiki/Stan_Laurel'
      }, {
        firstName: 'Oliver',
        lastName: 'Hardy',
        groupId: 2,
        url: 'https://en.wikipedia.org/wiki/Oliver_Hardy'
      }, {
        firstName: 'George',
        lastName: 'Burns',
        groupId: 3,
        url: 'https://en.wikipedia.org/wiki/George_Burns'
      }, {
        firstName: 'Gracie',
        lastName: 'Allen',
        groupId: 3,
        url: 'https://en.wikipedia.org/wiki/Gracie_Allen'
      }, {
        firstName: 'Moe',
        lastName: 'Howard',
        groupId: 4,
        url: 'https://en.wikipedia.org/wiki/Moe_Howard'
      }, {
        firstName: 'Curly',
        lastName: 'Howard',
        groupId: 4,
        url: 'https://en.wikipedia.org/wiki/Curly_Howard'
      }, {
        firstName: 'Larry',
        lastName: 'Fine',
        groupId: 4,
        url: 'https://en.wikipedia.org/wiki/Larry_Fine'
      }];
    };
  }
})();
