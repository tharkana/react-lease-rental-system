import React from 'react';



class ListItem extends React.Component {
    item = this.props.item;

    onClick(){
        // console.log(event);
        this.props.onClick(this.item);
    }

    render() {

 
        return (
            <div onClick={ () => {this.onClick()} }>{this.item.tenant}</div>
        );
    }
}

export default ListItem;