# react-field

> `<input />` replacement

Input Field component with `onChange(value)` and `stopPropagation`

## Motivation

 * Very often you only need just the input `value` on the `onChange` handler.
 * Just as often, you don't need `change` event propagation. You've probably been bitten by this several times.

## Props

 * `onChange(value: String): Function` - the `onChange` handler will be called with the input value, not the `event` object.
 * `stopChangePropagation: Boolean` - defaults to true. By default, the propagation of the change event will be stopped. All other evens will work as usual. Set this prop to `false` to allow `change` event propagation.
 * `type: String` - defaults to text

## License

#### MIT
