import React, { useEffect, useState } from "react";
import './SearchBox.css';

export interface SearchBoxProps {
  keyword: string;
  placeholderText: string;
  titleText: string;
  onSubmit: (keyword: string) => void;
}

export function SearchBox(props: SearchBoxProps) {
  let [keyword, setKeyword] = useState<string>(props.keyword);
  useEffect(() => { setKeyword(props.keyword) }, [props.keyword]);

  return (
    <div className="search-box">
      <div className="input-group">
        <input type="search" className="input-group-input" placeholder={props.placeholderText}
          value={keyword} onChange={(event) => { event.preventDefault(); setKeyword(event.target.value) }}
          onKeyDown={(event) => { if (event.code === 'Enter') { props.onSubmit(keyword) } }} />
        <span className="input-group-button">
          <button className="icon-ui-search icon-ui-flush" type="submit" onClick={() => props.onSubmit(keyword)} title={props.titleText}></button>
        </span>
      </div>
    </div>
  );
}