import React, { useEffect, useState } from 'react';
import './styles.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ISearchProps {
};

const Search: React.FC<ISearchProps> = (props) => {


  return <div className="search-wrapper mr-4">
    <input
      className="form-control"
      type="search"
      placeholder="Bạn cần tìm gì ?"
      aria-label="Search"
    />
    <div className="search-icon-wrapper">
      <FontAwesomeIcon icon={faSearch} fontWeight={100}></FontAwesomeIcon>
    </div>
  </div>
}

export default Search;