import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENCIES } from '../GraphQL/Queries';
import { Button, Row, Col, Divider, Checkbox, Tooltip, Card } from 'antd';
import Icon from '@ant-design/icons';
import '../App.css';

// import btc from '../icons/btc.svg';
// import uah from '../icons/uah.svg';
// import eur from '../icons/eur.svg';
// import gbp from '../icons/gbp.svg';
import usd from '../icons/usd.svg';
import info from '../icons/info.svg';
import arrowRight from '../icons/arrowRight.svg';

export const Finance = (props) => {
  const [state, setState] = useState([]);
  const { error, loading, data } = useQuery(GET_CURRENCIES);

  useEffect(() => {
    if (data) {
      setState(data.currencies);
    }
  }, [data]);

    return (
        <Row justify="end">
            <Col>
            <Card className={props.card}>
              <Row justify="space-between" align="bottom">
                <Col>
                  <Button type='link' style={{paddingLeft: 0}}>
                  <span style={{fontSize: 16, color: '#005BE4'}}>{'Мої фінанси'}</span>
                  <Icon component={() => (<img src={arrowRight} alt="avatar" style={{transform: 'translateY(-3px)'}} />)}/>
                  </Button>
                </Col>
                <Col>
                  <span style={{fontSize: 18, color: '#005BE4'}}>$ </span>
                  <span style={{fontSize: 18}}>854.1</span>
                </Col>
                <Divider className={props.divider ? props.divider : ''} style={{margin: '15px 0px 10px 0px'}} />
              </Row>
              <Row justify="space-between" align="bottom" className='rows'>
                <Col>
                  <span style={{fontSize: 16}}>Основна валюта</span>                  
                  <Tooltip title={'Основна валюта'} trigger="hover">
                    <Button type='link'>
                      <Icon component={() => (<img src={info} alt="info" className='iconApp' />)}/>
                    </Button>
                </Tooltip>
                </Col>
              </Row>
              {
                state.map((cur) => {
                  return(
                    <Row className='rows'>
                      <Col>
                        <Checkbox className={props.checkbox} >
                          <Icon component={() => (<img src={usd} alt="info" className='iconFinancesChekbox' />)}/>
                          <span>{cur.code} {cur.value}</span>
                        </Checkbox>
                      </Col>
                    </Row>
                  )
                })
              }              
            </Card>
            </Col>
          </Row>
    )
}