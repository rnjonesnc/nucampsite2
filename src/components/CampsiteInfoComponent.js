import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    renderCampsite(campsite) {
       // console.dir(campsite);
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

    renderComments(comments){
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

    render(){
        if(this.props.campsite) {
            return ( 
                <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        return (

            <div> </div>
        );
    }  

}



export default CampsiteInfo;