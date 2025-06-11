class Student {
  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000); // random ID
  }

  showCard() {
    return `<div>Name: ${this.name} | ID: ${this.id}</div>`;
  }
}
