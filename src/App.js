/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { Layout, Button, Avatar, Row, Col, Grid } from 'antd';
import Icon from '@ant-design/icons';
import './App.css';

import logo from './icons/logo.svg';
import mobileAvatar from './icons/mobileAvatar.svg';
import dollarGrey from './icons/dollarGrey.svg';
import close from './icons/close.svg';

import { MainContent } from './components/MainContent';
import { Finance } from './components/Finance';
import { AppMenu } from './components/AppMenu';

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://dev.flimcor.com/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const LayoutApp = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);  
  const [finances, setFinances] = useState(false);
  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ApolloProvider client={client}>
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={() => {
        toggle();
      }}
      trigger={null}
      collapsed={collapsed}
      width={screens.lg ? '180px' : '100%'}
      style={{background: '#212121'}}
    >
      <Row justify="space-between" align="bottom" style={!screens.lg ? {background: '#23232B', height: '55px'} : {background: '#212121', height: '55px'}}>
        <Col>
          <div className="logo">
            <img src={logo} alt="logo" style={{marginRight: 10}} />
            Flimcor
          </div>
        </Col>
        <Col>
          {!screens.lg &&
            <div className='menu'>
              Меню
              <Button type='text' style={{padding: '4px 4px 4px 15px'}} onClick={() => toggle()}>
              <Icon component={() => (<img src={close} alt="close" style={{transform: 'translateY(-3px)'}} />)}/> 
              </Button>
            </div>
          }          
        </Col>
      </Row>
      {!screens.lg &&
      <Row justify="space-between" align="bottom" style={{background: '#23232B', height: '55px'}}>
        <Col className="menu" style={{height: 'auto', lineHeight: '40%'}}>
          <Avatar size={32} src={mobileAvatar} style={{}} />
          <span style={{position: 'absolute', top: 7, left: 40}}>Ольга</span> 
          <span style={{position: 'absolute', top: 22, left: 40}}>Пліщук</span> 
        </Col>
        <Col style={{paddingBottom: 7}}>
          <div onClick={() => setFinances((prev) => !prev)} type='link' className={finances ? 'mobButtonActive' : 'mobButtonDisable'}>
            <Row>
              <Col>
                <div className='balanceMobile'>
                  1 256 $
                </div>
              </Col>
              <Col>
                <Icon component={() => (<img src={dollarGrey} alt="dollarGrey" style={{transform: 'translateY(-3px)'}} />)}/>
              </Col>
            </Row>            
          </div>     
        </Col>        
      </Row>
      }
      {finances ?
        <Finance card='myFinanceMob' divider='dividerMob' checkbox='checkboxDisableMob' />
      :
        <AppMenu />
      }
    </Sider>
    {
      screens.lg ? 
        <MainContent toggle={toggle} lg={screens.lg} />
      : 
      collapsed &&
        <MainContent toggle={toggle} lg={screens.lg} />  
    }
  </Layout>
  </ApolloProvider>
  )
}