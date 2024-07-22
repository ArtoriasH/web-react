import React from "react";
import { Nav, Pagination } from "react-bootstrap";
/*import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";*/

function PaginationNav() {
  return (
    <Nav className="d-xxl-flex justify-content-xxl-center">
      <Pagination>
        <Pagination.Prev href="#">
          <span aria-hidden="true">«</span>
        </Pagination.Prev>
        <Pagination.Item href="#">1</Pagination.Item>
        <Pagination.Item href="#">2</Pagination.Item>
        <Pagination.Item href="#">3</Pagination.Item>
        <Pagination.Item href="#">4</Pagination.Item>
        <Pagination.Item href="#">5</Pagination.Item>
        <Pagination.Next href="#">
          <span aria-hidden="true">»</span>
        </Pagination.Next>
      </Pagination>
    </Nav>
  );
}
export default PaginationNav;