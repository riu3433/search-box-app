class LocaleManager {
  constructor(props) {
    this.langCode = props.langCode || "en";
    this.lookupList = props.data;
    /*
    if(props.hasOwnProperty('lookupList')) {
      fetch(props.lookupList)
        .then(response => response.json())
        .then(data => this.lookupList = data);
    }
    */
  }

  async initialize(langCode, lookupList) {
    const response = await fetch(lookupList);
    const { data } = await response.json();

    return new LocaleManager({ langCode, data })
  }

  toLocaleString(key) {
    console.log(this.langCode);
    console.log(this.lookupList);
    return this.lookupList[this.langCode]; //[key] || this.lookupList["en"][key];
  }
}

export default LocaleManager;