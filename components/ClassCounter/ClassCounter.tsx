import React, { Component } from 'react';
import styles from './ClassCounter.module.scss';
import cn from 'classnames';
import { ClassCounterProps } from './ClassCounter.props';
import { Button } from '@/components';

export class ClassCounter extends Component<any, any> {
	constructor(props: ClassCounter) {
		super(props);
		this.state = {
			count: 0,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment(): void {
		this.setState({
			count: this.state.count + 1,
		});
	}

	decrement(): void {
		this.setState({
			count: this.state.count - 1,
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<Button buttonType={'purple'} onClick={this.increment}>
					inc
				</Button>
				<Button buttonType={'gray'} onClick={this.decrement}>
					dec
				</Button>
			</div>
		);
	}
}
