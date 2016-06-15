export class Group {
  constructor (
    public id: number,
    public name: string) { }
}

export class Comedian {
  constructor (
    public firstName: string,
    public lastName: string,
    public groupId: number,
    public url: string,
    public id: number) { }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  group: Group;
}
