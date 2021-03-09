/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Layout, Button, Avatar, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import '../App.css';

import arrow from '../icons/arrow.svg';
import arrowProfile from '../icons/arrowProfile.svg';
import avatar from '../icons/avatar.svg';
import dollar from '../icons/dollar.svg';
import burger from '../icons/burger.svg';
import brelok from '../brelok.png';
import rakket from '../raket.png';
import vine from '../vine.png';
import reitingGood from '../icons/reitingGood.svg';
import reitingCool from '../icons/reitingCool.svg';
import reitingBad from '../icons/reitingBad.svg';


import { Finance } from './Finance';
import { Goods } from './Goods';

const { Header, Content } = Layout;

const data = [
  {
    title: 'Брелок игорные кости', 
    img: brelok,
    price: 55.1,
    rent: 98.2, 
    reit: reitingGood, 
    number: 36,
    partner: true,
  },
  {
    title: 'Брелок игорные кости', 
    img: vine,
    price: 75.1,
    rent: 48.2, 
    reit: reitingCool, 
    number: 136,
    partner: true,
  },
  {
    title: 'Брелок игорные кости', 
    img: rakket,
    price: 35.1,
    rent: 98.2, 
    reit: reitingBad, 
    number: 56,
    partner: false,
  },
  {
    title: 'Брелок игорные кости', 
    img: vine,
    price: 59.1,
    rent: 12.2, 
    reit: reitingBad, 
    number: 44,
    partner: false,
  },
  {
    title: 'Брелок игорные кости', 
    img: brelok,
    price: 96.9,
    rent: 45.2, 
    reit: reitingGood, 
    number: 99,
    partner: false,
  },
  {
    title: 'Брелок игорные кости', 
    img: rakket,
    price: 60.8,
    rent: 99.2, 
    reit: reitingCool, 
    number: 18,
    partner: false,
  },
]

export const MainContent = (props) => {
  const [finance, setFinance] = useState(false);
  return (
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, paddingLeft: 19}}>
          {!props.lg ? 
            <Button type="link" onClick={() => props.toggle()}>
            <Icon component={() => (<img src={burger} alt="Back" style={{transform: 'translateY(-3px)'}} />)}/> 
            </Button>
            :
            <Row justify="space-between" align="bottom">
              <Col >        
                <Button type="link">
                  <Icon component={() => (<img src={arrow} alt="Back" style={{transform: 'translateY(-3px)'}} />)}/>
                  <span className="header">Назад</span>
                </Button>
              </Col>
              <Col >
                <Button onClick={() => setFinance((prev) => !prev)} type="text" style={{ backgroundColor: 'white', borderRadius: '5px 5px 0 0', height: 48, paddingBottom: 20}}>
                  <span className="balance">1 256 $</span>
                  <Icon component={() => (<img src={dollar} alt="dollar" style={{transform: 'translateY(-3px)'}} />)}/>
                </Button>
                <Button type="link">
                  <Avatar size={38} src={avatar} style={{}} />
                  <Icon component={() => (<img src={arrowProfile} alt="avatar" style={{transform: 'translateY(-3px)'}} />)}/>
                </Button>
              </Col>
            </Row>
          }

          { finance &&
            <Finance card='myFinance' checkbox='checkboxDisable' />
          }
          
      </Header>
      {props.lg ? 
      <Content >
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {data.map((goods) => {
                    return(
                      <Col className="gutter-row" span={8}>
                        <Goods 
                        title={goods.title} 
                        img={goods.img} 
                        price={goods.price}
                        rent={goods.rent} 
                        reit={goods.reit}
                        number={goods.number}
                        partner={goods.partner}                         
                        background='white'
                        />
                      </Col>
                    )
                })}
              </Row>
        </div>
      </Content>
      : 
      <Content >
        <Row style={{marginLeft: '15%', marginTop: 15}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {data.map((goods) => {
            return(
              <Col className="gutter-row" span={13}>
                <Goods 
                title={goods.title} 
                img={goods.img} 
                price={goods.price}
                rent={goods.rent} 
                reit={goods.reit}
                number={goods.number}
                partner={goods.partner}
                background='#F2F6FF'
                 />
              </Col>
            )
          })}
        </Row>
      </Content>
      }
    </Layout>
  )
}
  