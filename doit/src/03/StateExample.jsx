import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props){
        super(props);
        //state 정의
        this.state = {
            loading : true,
            formData : 'no date',
        };
        this.handleData = this.handleData.bind(this);
        //4초 후 handleData함수를 호출
        setTimeout(this.handleData, 4000);
    }
    handleData(){
        const data = 'new data';
        const {formData} = this.state;
        //state변경
        this.setState({
            loading : false,
            formData : data + formData,
        });
        //this.state.loading은 현재 true입니다.
        console.log('loading값 ' , this.state.loading);
        //이후 호출될 render() 함수에서의 this.state.loading은 false값
    }
    render() {
        return (
            <div>
             {/* state 데이터는 this.state로 접근 가능 . */}
             <span>로딩중 : {String(this.state.loading)}</span>
             <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;