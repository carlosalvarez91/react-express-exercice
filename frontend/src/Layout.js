import React from 'react';

import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return(
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/question1">Question 1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/question2">Question 2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/question3">Question 3</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/question4">Question 4</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>

          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          
            {props.children}
          
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
   
        </Footer>
      </Layout>
    )

}

export default CustomLayout;