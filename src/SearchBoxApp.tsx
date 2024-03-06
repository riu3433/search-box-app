import React, { Component } from 'react';
import { getLookupLists } from './utils/search-service';
import { SearchBox } from './components/search-box/SearchBox';

import LanguageManager from './resources/language-manager/language-manager';
import LocaleManager from './resources/locale-manager/locale-manager';
import './SearchBoxApp.css';

export interface SearchBoxAppProps {
  appConfig: any;
}

export interface SearchBoxAppState {
  isLoading: boolean;
}

export class SearchBoxApp extends Component<SearchBoxAppProps, SearchBoxAppState> {
  state: SearchBoxAppState = { isLoading: true };
  language: string = "en"; // should read this from Cookie
  languageManager: any;
  localeManager: any;
  urlSearchParams: any;

  onSearchSubmit = (keyword: string) => {
    this.urlSearchParams = new URLSearchParams(window.location.search);

    this.urlSearchParams.set("language", this.language);
    this.urlSearchParams.set("q", keyword);
    this.urlSearchParams.set("p", 0);
    this.urlSearchParams.set("collection", "any");
    this.urlSearchParams.set("product", "any");
    this.urlSearchParams.set("version", "any");

    window.location.href = "//localhost:3000/?" + this.urlSearchParams.toString();
  }

  async componentDidMount() {
    const { dataLanguage, dataLocale } = await getLookupLists([this.props.appConfig.languageLookupList, this.props.appConfig.localeLookupList]);

    this.languageManager = new LanguageManager({ lookupList: dataLanguage });
    this.localeManager = new LocaleManager({ langCode: this.language, lookupList: dataLocale });

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="center trailer-1" >
        <SearchBox keyword="" onSubmit={this.onSearchSubmit}
          placeholderText={this.localeManager?.toLocaleString(this.props.appConfig.searchBox.placeholderText)}
          titleText={this.localeManager?.toLocaleString(this.props.appConfig.searchBox.titleText)} />
      </div>
    );
  }
}