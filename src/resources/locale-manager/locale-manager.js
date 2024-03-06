class LocaleManager {
  constructor(props) {
      this.langCode = props.langCode || "en";
      this.lookupList = props.lookupList; 
  }

  toLocaleString(key) {
      return this.lookupList[this.langCode][key] || this.lookupList["en"][key];
  }
}

export default LocaleManager;