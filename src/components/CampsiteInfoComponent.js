import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


// class CampsiteInfo extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//         }
//     }

   function RenderCampsite({campsite}) {
        return (
            <div className = "col-md-5 col-m1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        ); 
    }

   function RenderComments({comments}){
        if (comments) {
            return (
                <div className=" col-md-5 m-1"> 
                    <h4> Comments </h4>
                    {comments.map((comments) => {
                        return(
                            <div key={comments.id}>
                            <h4>
                              {comments.text}{" "}
                              {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                              }).format(new Date(Date.parse(comments.date)))}
                            </h4>
                            <div> {comments.author} </div>
                            <br></br>
                          </div>
                        );
                    })}
                </div>
            );
        }
    }

   function CampsiteInfo(props){
        if(props.campsite) {
            return ( 
                <div className="container">
                <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments comments={props.campsite.comments} />
                </div>
                </div>
            );
        }
        return (

            <div> </div>
        );
    }  




export default CampsiteInfo;