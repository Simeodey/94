import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const element = document.getElementById("emojis");
      emojis.forEach(el => {
        const par = document.createElement("p");
        par.textContent= el;
        element.appendChild(par);
      });

        }

  addBananas() {
    const element = document.getElementById("emojis");
    const newEmojis = this.emojis.map(el=>el+this.banana).forEach(el=>{
      const para = document.createElement("p");
      para.textContent= el;
      element.appendChild(para);
    });
     
  }
}