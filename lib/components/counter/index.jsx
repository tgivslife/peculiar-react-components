import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../text_field/input';
import CounterTriangleIcon from '../icons/counter_arrow';

function prepareValue(value, defaultValue) {
  if (value || typeof value === 'number') {
    return value;
  }

  if (defaultValue || typeof defaultValue === 'number') {
    return defaultValue;
  }

  return '';
}

export default class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    onChange: PropTypes.func,
    minValuePaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxValuePaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    bgType: PropTypes.oneOf(['fill', 'stroke']),
    color: PropTypes.string,
    textColor: PropTypes.string,
    inputProps: PropTypes.oneOfType([
      PropTypes.object,
    ]),
    counterProps: PropTypes.oneOfType([
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    value: undefined,
    defaultValue: 0,
    minValue: undefined,
    maxValue: undefined,
    onChange() {},
    minValuePaceholder: undefined,
    maxValuePaceholder: undefined,
    disabled: false,
    bgType: 'fill',
    color: 'light_grey',
    textColor: 'black',
    inputProps: {},
    counterProps: {},
  };

  constructor(props) {
    super(props);
    const { value, defaultValue } = props;

    this.state = {
      value: prepareValue(value, defaultValue),
    };
  }

  onKeyDown = (e) => {
    if (e.keyCode !== 9) {
      e.preventDefault();
      if (e.keyCode === 38) this.onChange(1);
      if (e.keyCode === 40) this.onChange(-1);
    }
  }

  onChange(add) {
    const { minValue, maxValue, onChange } = this.props;
    const { value } = this.state;
    const newSize = value + add;

    if (minValue <= newSize && newSize <= maxValue) {
      this.setState({ value: newSize });
      onChange(newSize);

      return;
    }

    if (newSize < minValue) {
      this.setState({ value: maxValue });
      onChange(newSize);

      return;
    }

    this.setState({ value: minValue });
    onChange(newSize);
  }

  render() {
    const { value } = this.state;
    const {
      bgType,
      color,
      textColor,
      minValue,
      minValuePaceholder,
      maxValue,
      maxValuePaceholder,
      disabled,
      inputProps,
      counterProps,
    } = this.props;

    let inputValue = value;

    if (minValue === value && minValuePaceholder) inputValue = minValuePaceholder;
    if (maxValue === value && maxValuePaceholder) inputValue = maxValuePaceholder;

    return (
      <Input
        bgType={bgType}
        color={color}
        textColor={textColor}
        colorFocus={textColor}
        value={inputValue}
        disabled={disabled}
        onKeyDown={this.onKeyDown}
        name="counter"
        inputProps={{
          readOnly: true,
          ...inputProps,
        }}
        {...counterProps}
      >
        <CounterTriangleIcon
          className={classNames(
            'counter_triangle',
            `fill_${textColor}`,
          )}
          onClick={() => this.onChange(1)}
          data-id="increase-triangle"
        />
        <CounterTriangleIcon
          className={classNames(
            'counter_triangle',
            `fill_${textColor}`,
          )}
          onClick={() => this.onChange(-1)}
          data-id="decrease-triangle"
        />
      </Input>
    );
  }
}
