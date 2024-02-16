import { useEffect, useState } from 'react';
import { Button, Typography, Form, Input, Row, Col, Dropdown, message } from 'antd';
import axios from "axios";

const { Title } = Typography;

const Shop = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    const onBuyingFinish = (values) => {
        message.success(`Item Bought: ${selectedItem.displayName}`);
    };

    const onBuyingFinishFailed = (errorInfo) => {
        message.error(`An error occurred while buying: ${selectedItem.displayName}`);
    };

    const onItemDropdownClick = ({ key }) => {
        let item = items.find((item) => item.key === key);

        setSelectedItem(item);
        message.info(`Item Selected: ${item.displayName || key}`);
    };

    useEffect(() => {
        const itemsToGet = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Scarlet Witch', 'Vision', 'Black Panther', 'Falcon'];

        for (const itemToGet of itemsToGet) {
            axios.get(`https://www.superheroapi.com/api.php/7625271654174028/search/${itemToGet}`)
                .then((response) => {
                    if (response.data.response === 'success') {
                        setItems((items) => {
                            const isAlreadyAdded = items.some(item => item.key === itemToGet);
                            if (!isAlreadyAdded) {
                                return [...items, {
                                    key: itemToGet,
                                    label: itemToGet,
                                    displayName: itemToGet,
                                    image: response.data.results[0].image.url,
                                }];
                            }
                            return items;
                        });
                    } else {
                        console.log("Error fetching the item's data: " + response.data.error)
                    }
                })
                .catch((error) => {
                    console.log("Error fetching the item's data: " + error)
                });
        }
    }, []);

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
                    <img src={selectedItem !== '' ? selectedItem.image : "https://via.placeholder.com/300"} alt="Item" />
                </Col>
            </Row>
        </div>
    );
};

export default Shop;
