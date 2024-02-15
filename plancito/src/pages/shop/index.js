import { useState } from 'react';
import { Button, Typography, Form, Input, Row, Col, Dropdown, message } from 'antd';

const { Title } = Typography;

const Shop = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const onBuyingFinish = (values) => {
        message.info(`Item Bought: ${selectedItem.displayName}`);
    };

    const onBuyingFinishFailed = (errorInfo) => {
        message.info(`An error occurred while buying: ${selectedItem.displayName}`);
    };

    const onItemDropdownClick = ({ key }) => {
        let item = items.find((item) => item.key === key);

        setSelectedItem(item);
        message.info(`Item Selected: ${item.displayName || key}`);
    };

    const items = [
        {
            label: '1st menu item',
            displayName: '1st menu item',
            url: 'https://via.placeholder.com/300',
            key: '1',
        },
        {
            label: '2nd menu item',
            displayName: '2nd menu item',
            url: 'https://via.placeholder.com/300',
            key: '2',
        },
        {
            label: '3rd menu item',
            displayName: '3srd menu item',
            url: 'https://via.placeholder.com/300',
            key: '3',
        },
    ];

    return (
        <div>
            <Title>Buy Your Favorite Item</Title>
            <Row>
                <Col span={12}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onBuyingFinish}
                        onFinishFailed={onBuyingFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item>
                            <Dropdown
                                menu={{
                                    items,
                                    onClick: onItemDropdownClick,
                                }}
                                trigger={['click']}
                            >
                                <Button>Select Your Favorite Item</Button>
                            </Dropdown>
                        </Form.Item>

                        <br />

                        <Form.Item
                            label="Credit Card Number"
                            name="creditCardNumber"
                            rules={[{ required: true, message: 'Please input your credit card number' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="CVV"
                            name="cvv"
                            rules={[{ required: true, message: 'Please input your cvv' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Expiration Date"
                            name="expirationDate"
                            rules={[{ required: true, message: 'Please input your expiration date' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your full name' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Buy Item
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

                <Col span={12}>
                    <img src="https://via.placeholder.com/300" alt="Item" />
                </Col>
            </Row>
        </div>
    );
};

export default Shop;
