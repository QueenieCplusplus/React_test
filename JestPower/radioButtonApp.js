// 2020, 7/11, am 7:35 - 8:10 (duration: 35 mins)
// UI: form within redio button
// Controlled by React
// radio button is a input of radio type
// checked: it matters with data of bool type


var React = require("react");

var KsForm = React.createClass({

    getInitialState: function(){

        return {
            radioButtonVal: "Black Coffee"
        };

    },

    changeHandler: function(event){

        this.setState({

            radioButton: event.target.value

        });

    },

    formSubmitter: function(param){

        param.preventDefault()
        alert(this.state.radioButtonVal);

    },

    render: function(){

        return <form onSubmit={this.formSubmitter}>
            <input type="radio"
             value="Red Tea"
             checked={this.state.radioButtonVal="Red Tea"}
             onChange={this.changeHandler}
            >
            Red Tea
            </input>
            <br/>

            <input type="radio"
             value="Black Coffee"
             checked={this.state.radioButtonVal="Black Coffee"}
             onChange={this.changeHandler}
            >
            Black Coffee
            </input>
            <br/>


            <input type="radio"
             value="Distilled Water"
             checked={this.state.radioButtonVal="Distilled Water"}
             onChange={this.changeHandler}
            >
            Distilled Water
            </input>
            <br/>
        </form>
    }

});

module.exports = KsForm;

export default {
    
    // ES6
    // authorize: () => {
    //   return 'token';
    // }

    authorize: function(){
        return 'permit with token';
    }
  };