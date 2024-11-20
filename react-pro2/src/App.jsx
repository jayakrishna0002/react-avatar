import { Component } from "react";

class Home extends Component {
    name = "hari";
    
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("Did mount");
        console.log(document.querySelector("h1"));
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>Home page using class component {this.name}</h1>
                <Description />
            </>
        );
    }
}

export default Home;

class Description extends Component {
    constructor() {
        super();
    }

    render() {
        return 
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                incidunt deserunt nesciunt ducimus inventore aperiam ullam
                aliquid molestias possimus magnam recusandae doloremque
                voluptatem, pariatur dicta? Iste incidunt temporibus nemo eius.
            </p>
        
    }
}