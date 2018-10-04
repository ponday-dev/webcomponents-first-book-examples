import React, { Component } from 'react';

export class MyApp extends Component<{}, {}> {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <my-button value="sample" onClick={this.handleClick}>
                click
            </my-button>
        );
    }

    handleClick(event: MouseEvent) {
        console.log((event.target as any).value);
    }
}
