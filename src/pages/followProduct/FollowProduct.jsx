import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FollowStatus from "../../components/FollowStatus/FollowStatus";
import axios from "axios";

import "./follow.Styles.scss";

const FollowProduct = () => {
  const [data, setData] = useState([]);
  const idUser = localStorage.getItem("id");

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  useEffect(() => {
    axios
      .get(`https://api-rest-full-deliveries.herokuapp.com/relations?select=id_order,tracking_order,id_user_order,id_product_order,name_product,image_product,order_date_order,paking_time_order,transportation_time_order,delivery_time_order&rel=orders,products,users&type=order,product,user&linkTo=date_create_order&betweenIn=2022-08-01&betweenOut=2022-08-30&orderBy=id_order&orderMode=asc&startAt=0&endAt=2&filterTo=id_user_order&inTo=${idUser}`, { headers }) // get all orders
      .then((res) => {
        setData(res.data.response);
      })
      .catch(console.err);
  }, []);


  return (
    <Container className="container-follow">
      <Row>
        <Col>
          <h2 className="follow-title my-4">Estado total del envío</h2>
        </Col>
      </Row>
      { data ?  data.map((item) => {
        return (
          <FollowStatus
            key={item.id_order}
            deliveryDate={item.order_date_order}
            packagingDate={item.paking_time_order}
            translateDate={item.transportation_time_order}
            shippingDate={item.delivery_time_order}
            productName={item.name_product}
            imgProduct={item.image_product}
            />
        );
      }): <h2 className="text-dev">El usuario no cuenta con ninguna orden</h2> }
    </Container>
  );
};

export default FollowProduct;
