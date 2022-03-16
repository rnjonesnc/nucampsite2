import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
    
    render(){
        const directory = this.props.campsites.map(campsite => {
    return (
        <div key={campsite.id} className="col-md-5 m-1">
        <Card onClick={() => this.props.onClick(campsite.id)}>
               <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </div>
    );
});

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
    }
}

export default Directory;

//class Directory extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//    //         selectedCampsite: null
//         };
//     }

 //   onCampsiteSelect(campsite) {
    // checking
    //    console.log("onCampsiteSelect", campsite);
 //       this.setState({selectedCampsite: campsite});
 //   }

    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

//     class Directory extends Component {
//     render() {
//         const directory = this.props.campsites.map(campsite => {
//             return (
//                 <div key={campsite.id} className="col-md-5 m-1">
//                     <Card onClick={() => this.props.onClick(campsite.id)}>
//                         <CardImg width="100%" src={campsite.image} alt={campsite.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{campsite.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Directory;

 /*making a constructor but not required, for ,
    when you do you contructor must include the 'props' argument, short for 
    properties, a keyword in React, then also include super(props) inside it as first line
    REQUIRED by React 
    Then add a property names 'state' which always need to hold an object
    Return method must contain a single element to return*/
