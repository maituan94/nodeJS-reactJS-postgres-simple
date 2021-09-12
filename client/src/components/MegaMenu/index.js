import React, { useState, useEffect } from 'react';
import MegaMenuStyle from './MegaMenuStyle';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faScroll, faChartLine, faSearchLocation, faBuilding, faWindowRestore, faUsers, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'


const MegaMenu = (props) => {
  const history = useHistory()
  const [activeLink, setActiveLink] = useState(null)

  const sideMenu = [
    {
      title: 'Dashboard',
      subItems: [
        {
          logo: <FontAwesomeIcon icon={faList} />,
          label: 'Store List',
          link: '/'
        },
        {
          logo: <FontAwesomeIcon icon={faScroll} />,
          label: 'Orders',
          link: '/orders'
        },
        {
          logo: <FontAwesomeIcon icon={faPeopleArrows} />,
          label: 'Suppliers',
          link: '/suppliers'
        },
        {
          logo: <FontAwesomeIcon icon={faChartLine} />,
          label: 'Statistic',
          link: '/statistic'
        }
      ]
    },
    {
      title: 'Market Place',
      subItems: [
        {
          logo: <FontAwesomeIcon icon={faSearchLocation} />,
          label: 'Market',
          link: '/market'
        }
      ]
    },
    {
      title: 'General Settings',
      subItems: [
        {
          logo: <FontAwesomeIcon icon={faBuilding} />,
          label: 'Company Info',
          link: '/company-info'
        },
        {
          logo: <FontAwesomeIcon icon={faWindowRestore} />,
          label: 'Store Info',
          link: '/store-info'
        },
        {
          logo: <FontAwesomeIcon icon={faUsers} />,
          label: 'User Management',
          link: '/user-management'
        }
      ]
    }
  ];

  useEffect(() => {
    setActiveLink(history.location?.pathname)
  }, [])

  const isItemActive = (pathName) => activeLink === pathName;

  const onItemClick = (link) => {
    history.push(link) 
    setActiveLink(link)
  }

  return (
    <MegaMenuStyle>
      <div className='menu'>
        <ul className='list'>
          {sideMenu.map((item, index) => (
            <li key={index} className='item'>
              <div className='title'>{item.title}</div>
              <ul className='sub-list'>
                {item.subItems.map((sub, idx) => (
                  <li key={idx} className={`sub-item ${isItemActive(sub.link) ? 'active' : ''}`}>
                    <div onClick={() => onItemClick(sub.link)}>
                      {sub.logo}
                      <span>{sub.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </MegaMenuStyle>
  )
};

export default MegaMenu;
