import React, { useState } from 'react';
import './styles.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem } from '../../../models/Menu';

interface IMenuProps {
  menuItems: MenuItem[],
};

const Menu: React.FC<IMenuProps> = (props) => {

  const { menuItems } = props;

  return <div className="menu-wrapper">
    {menuItems && menuItems.map((item, index) =>
      <a className="menu-item" href={item.link} key={index}>
        <div className="menu-item-content" >
          <i className={item.icon}></i>
          <p>{item.name}</p>
        </div>
        {item.children && <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>}

        <div className={item.children ? "sub-menu1 active" : "sub-menu1"}>
          {item.children && item.children.map((subItem, index) =>
            <a className="menu-item" href={subItem.link} key={index}>
              <div className="menu-item-content" >
                <p>{subItem.name}</p>
              </div>
              {subItem.children && <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>}
              <div className={subItem.children ? "sub-menu2 active" : "sub-menu2"}>
                {subItem.children && subItem.children.map((sub2, index) =>
                  <a className="menu-item" href={sub2.link} key={index}>
                    <div className="menu-item-content" >
                      <p>{sub2.name}</p>
                    </div>
                  </a>
                )}
              </div>
            </a>
          )}
        </div>

      </a>
    )}
  </div >;
}

export default Menu;