class LanguageManager {
  constructor(props) {
    this.lookupList = props.lookupList;
    /*
    if(props.hasOwnProperty('lookupList')) {
      fetch(props.lookupList)
      .then(response => response.json())
      .then(data => this.lookupList = data);
    }
    */
  }

  getLanguageEntry (langCode) {
    const exactMatch = this.lookupList.find((langChoice) => langChoice.langCode.toLowerCase() === langCode.toLowerCase());

    if (exactMatch) {
      return exactMatch;
    }

    const currentLangEntry = this.lookupList
      .find((langChoice) => this.compareLanguageCodes(langChoice.langCode, langCode));

    return currentLangEntry;
  }

  compareLanguageCodes (langCodeA, langCodeB) {
    const codeA = (langCodeA || '').toLowerCase();
    const codeB = (langCodeB || '').toLowerCase();
    if (codeA === codeB) {
      return true;
    }

    const codeAParts = codeA.split('-');
    const codeBParts = codeB.split('-');

    if (codeAParts[0] === codeBParts[0]) {
      return true;
    }

    return false;
  }
}

export default LanguageManager;