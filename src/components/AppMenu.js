import React from 'react';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import '../App.css';
import catalog from '../icons/catalog.svg';
import orders from '../icons/orders.svg';
import finance from '../icons/finance.svg';
import users from '../icons/users.svg';
import userOrders from '../icons/userOrders.svg';
import postavchiki from '../icons/postavchiki.svg';

export const AppMenu = () => {
    return (
        <Menu mode="inline" className="sider">
        <Menu.Item 
        key="1" 
        icon={<Icon component={() => (
        <img src={catalog} alt="Catalog" 
        style={{transform: 'translateY(-3px)'}} />)} 
        />} >
          Каталог
        </Menu.Item>
        <Menu.Item key="2" icon={<Icon component={() => (
        <img src={orders} alt="Orders" 
        style={{transform: 'translateY(-3px)'}} />)} 
        />} >
          Заказы
        </Menu.Item>
        <Menu.Item key="3" style={{height: 'auto', lineHeight: '150%'}}>
          <div>
            <Icon component={() => (<img src={userOrders} alt="User Orders" style={{transform: 'translateY(-3px)'}} />)}/>
            <span style={{marginRight: 30}}>Заказы</span> 
            <span style={{marginLeft: 25, display: 'grid'}}>пользователей</span>      
          </div>    
        </Menu.Item>
        <Menu.Item key="4" icon={<Icon component={() => (
        <img src={users} alt="Users" 
        style={{transform: 'translateY(-3px)'}} />)} 
        />} >
          Пользователи
        </Menu.Item>
        <Menu.Item key="5" icon={<Icon component={() => (
        <img src={postavchiki} alt="Postav" 
        style={{transform: 'translateY(-3px)'}} />)} 
        />} >
          Поставщики
        </Menu.Item>
        <Menu.Item key="6" icon={<Icon component={() => (
        <img src={finance} alt="Finance" 
        style={{transform: 'translateY(-3px)'}} />)} 
        />} >
          Финансы
        </Menu.Item>
      </Menu>
    )
}