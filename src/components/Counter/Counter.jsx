import PropTypes from 'prop-types';
import { Component } from 'react';
import { Controls } from 'components/Counter/Controls';
import { StyledCounter, Span } from 'components/Counter/Counter.stuled';

export class Counter extends Component {
  //   static defaultProps = {
  //     initialValue: 0,
  //   };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  handleDecrement = () => {
    this.setState(({ value }) => ({ value: value - 1 }));
  };

  render() {
    const { value } = this.state;
    const { handleIncrement, handleDecrement } = this;

    return (
      <StyledCounter>
        <Span>{value}</Span>
        <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </StyledCounter>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number,
};
