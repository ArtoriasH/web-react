import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import Input from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const ReplyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => setIsOpen(!isOpen);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Hacer algo con los datos enviados en el formulario
    };
  
    return (
      <div className="col-xl-12 d-flex d-xl-flex justify-content-end align-items-end">
        <div>
          <Button color="link" onClick={toggleCollapse}>
            
            Reply
          </Button>
          <Collapse isOpen={isOpen}>
            <div className="d-flex flex-shrink-1 card-header" style={{ width: "50vw" }}>
              <div className="col">
                <Form onSubmit={handleSubmit}>
                  <FormGroup style={{ paddingBottom: "17px" }}>
                    <Label for="comment" style={{ paddingRight: "19px" }}>
                      Comment
                    </Label>
                    <Input type="textarea" name="comment" id="comment" rows="3" cols="20" style={{ width: "20vw", maxWidth: "400px" }} />
                  </FormGroup>
                  <div className="text-center d-flex" style={{ paddingBottom: "13px", marginLeft: "5vw" }}>
                    <Button color="success" style={{ marginRight: "22px" }}>
                      Submit
                    </Button>
                    <Button color="danger" onClick={toggleCollapse}>
                      Cancel
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  };
  
  export default ReplyComponent;