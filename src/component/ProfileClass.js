import React from "react";

class Profile extends React.Component{
    
// constructor    
constructor(props){
    super(props);
    //create state  -> create a all the state variable in a single object
    //create states in class based component to show the api on UI
        //state is nothing but it is a big object
        this.state ={
            userInfo: {
             name : "Dummy Name",
             location: "Dummy location",
              bio: " ",
              email: " ",
            },
         };
         
  //console.log("child-constructor" + this.props.name);
  }
   
  //this function call after rendering
    async componentDidMount(){
    //API calls
        const data = await fetch("https://api.github.com/users/Kanchan9540");
        const json = await data.json();
        console.log(json);
        //push the data into a state
        this.setState({
            userInfo: json,
        })

        this.timer = setInterval(() => {
           // console.log("KanchanDev OP");
        },1000);
//console.log("child-componentDidMount");
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.userInfo.count !== prevState.userInfo.count){  //use as a dependency
        //code
    }
    if(this.state.userInfo.count !== prevState.userInfo.count){  // change the dependebcy
        //code
    }
    //console.log("component did update");
  }
 
  // when we need to unmounted this will call
  componentWillUnmount(){
   //cleanup is done while un-mounted
   // here we stop the setInterval timer
    clearInterval(this.timer);
   // console.log("componentWillUnmount");
  }

    render(){
        // const {count1} = this.state;  // here we destructure it.
       // console.log("child-render" + this.props.name);
        return(
            <div>
                <h1>Profile class component</h1>
                <img src={this.state.userInfo.avatar_url} className="w-20 h-20 m-1 border-2 border-black"/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                <h2>E-mail: {this.state.userInfo.email}</h2>
                <h2>Bio: {this.state.userInfo.bio}</h2>
               
                {/* <h2>Count: {count1}</h2>
                <button onClick={() =>{   // here e set the variable 0 to 1.
                    // do not mutate state directly
                    // never do this.state = something
                  this.setState({
                    count1: 1,   // here we send a modified object
                    //count2: 2,   // here we change 2 useState variabe at a same tym.
                  }) 
                }}>SetCount</button> */}

            </div>
        );
    };
};

export default Profile;



/** 
 * // all these process will be done through the github API
 * Parent constructor
 * parent render
 * child constructor
 * child render
 * 
 * //DOM is updated
 * Parent componentDidMount 
 * API call  or json is logged in console   - DEayed due to async
 * child componentDidMount
 */


/**
 * child constructor
 * child render
 * child componentDidMount
 * 
 * API call
 * set state  -- updating start and render once again.
 * <UPDATE CYCLE>
 * RENDER
 *  */
 