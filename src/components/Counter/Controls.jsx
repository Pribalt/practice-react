import PropTypes from 'prop-types';
import { Button } from 'components/Counter/Controls.styled';

export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <Button type="button" onClick={onIncrement}>
        Збільшити на 1
      </Button>
      <Button type="button" onClick={onDecrement}>
        Зменшити на 1
      </Button>
    </div>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};
