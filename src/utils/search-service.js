const SEARCH_URL = 'https://esearchapi.esri.com/search';

export function getSearchResult(payload) {
  return fetch(SEARCH_URL, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(response => response.json());
}

export function getLookupLists(lists) {
  return Promise.all([fetch(lists[0]), fetch(lists[1])])
    .then(([responseLanguage, responseLocale]) => { 
      return Promise.all([responseLanguage.json(), responseLocale.json()]) 
    })
    .then(([dataLanguage, dataLocale]) => { 
      return { dataLanguage, dataLocale } 
    });
};