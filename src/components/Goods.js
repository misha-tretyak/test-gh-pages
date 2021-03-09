import React from 'react';
import '../App.css';
import { Card, Row, Col, Button, Tooltip } from 'antd';

import Icon from '@ant-design/icons';
import star from '../icons/star.svg';
import info from '../icons/info.svg';
import bucket from '../icons/bucket.svg';

export const Goods = (props) => {

    return (
        <Card
            style={{ width: 300, marginBottom: 20, backgroundColor: props.background, padding: 5 }}
            cover={
            <img
                alt="goods"
                src={props.img}
                className={props.partner ? 'imgCardBlur' : 'imgCard'}
            />
            }
        >
        <Row justify="space-between" align="bottom" style={{marginBottom: 15}}>
            <Col className='goodsTitle'>
                <span>{props.title}</span>
                <Button type="link" style={{padding: 5}}>                  
                  <Icon component={() => (<img src={star} alt="star" style={{transform: 'translateY(-3px)'}} />)}/>
                </Button>
            </Col>
            <Col>
            {props.partner &&
                <Button type='text' className='buttonPartner'>
                    PARTNER
                </Button>
            }
            </Col>
        </Row>        
        <Row justify="start" align="middle" className='goodsText'>
            <Col style={{marginRight: 20}}>
                <span>Цена за 1 шт</span>
            </Col>
            <Col style={{marginRight: 20}}>
                <span>Рентабельность</span> 
                <Tooltip title={'Рентабельность товару'} trigger="hover">
                    <Button type='link' style={{padding: 2}}>
                      <Icon component={() => (<img src={info} alt="info" className='iconApp' />)}/>
                    </Button>
                </Tooltip>               
            </Col>
            <Col >
                <span>Мин</span> 
                <Tooltip title={'Мінімальна кількість'} trigger="hover">
                    <Button type='link' style={{padding: 2}}>
                      <Icon component={() => (<img src={info} alt="info" className='iconApp' />)}/>
                    </Button>
                </Tooltip>               
            </Col>
        </Row>
        <Row justify="start" align="middle">
            <Col style={{marginRight: 50}}>
                <span className='goodsPrice'>{props.price} $</span>
            </Col>
            <Col style={{marginRight: 40}}>
                <Icon component={() => (<img src={props.reit} alt="rait" style={{transform: 'translateY(-3px)', marginRight: 10}} />)}/>
                <span className='goodsRent'>{props.rent}%</span>                
            </Col>
            <Col>
                <Button type='text' className='buyButton'>
                    x {props.number}
                    <Icon component={() => (<img src={bucket} alt="info" className='iconApp' />)}/>
                </Button>
            </Col>
        </Row>
        </Card>
    )
}