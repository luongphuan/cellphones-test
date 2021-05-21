import React, { useEffect, useState } from 'react';
import './styles.scss';
import { faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IItem } from '../../../models/Select';


interface ISelectProps {
  options: IItem[],
  onSelected: () => void,
  setOverlay: () => void,
  isMobile?: boolean
};

const Select: React.FC<ISelectProps> = (props) => {
  const { options, onSelected, setOverlay, isMobile } = props;

  const [isOptionsVisible, setOptionsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<IItem>({ value: '', name: '' });
  const [defaultItem, setDefaultItem] = useState<IItem>({ value: '', name: '' });

  useEffect(() => {
    if (options.length != 0) {
      setDefaultItem(options[0]);
    }
  }, [options])

  useEffect(() => {
    setTimeout(() => {
      if (isOptionsVisible) {
        window.addEventListener('click', () => setOptionsVisible(false));
      }
      else {
        window.removeEventListener('click', () => setOptionsVisible(false));
      }
    }, 0);
  });

  const onSelectedItem = (opt: IItem) => {
    setSelected(opt);
  }

  const mobileSelect = <div
    onClick={(e) => {
      setOverlay();
      setOptionsVisible(!isOptionsVisible);
      e.stopPropagation();
    }}
    className="select-wrapper menu-border mobile-select-wrapper"
  >
    <FontAwesomeIcon icon={faMapMarkerAlt} />
    <div className="select-label">
      Xem giá, tồn kho tại:
    </div>
    <div className="select-value">
      {selected.name || defaultItem.name}
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
    <div className="options-wrapper menu-border">
      {isOptionsVisible && options && options.map(opt =>
        <div className="option-items" onClick={() => onSelectedItem(opt)}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {opt.name}
        </div>)
      }
    </div>
  </div>

  return <>{isMobile ? mobileSelect :
    <div
      onClick={(e) => {
        setOverlay();
        setOptionsVisible(!isOptionsVisible);
        e.stopPropagation();
      }}
      className="select-wrapper menu-border"
    >
      <div className="select-label">
        Xem giá, tồn kho tại:
    </div>
      <div className="select-value">
        {selected.name || defaultItem.name}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="options-wrapper menu-border">
        {isOptionsVisible && options && options.map(opt =>
          <div className="option-items" onClick={() => onSelectedItem(opt)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {opt.name}
          </div>)
        }
      </div>
    </div>
  }
  </>
}

export default Select;