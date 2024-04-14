import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history }=this.props; //구조 분해 할당으로 location, history를 얻음
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else{
        return null;
        }
    }
}

export default Detail;