# react-inline-block

> InlineBlock element for React

A div with `display` set to `inline-block`

## Install

```sh
$ npm i --save react-inline-block
```

## Usage

```jsx
<InlineBlock>
  hello
</InlineBlock>
// => <div style={{display: 'inline-block'}}> hello </div>
```

## Notes

The `inline-block` display value is set on the `style` prop.


The following

```jsx
<InlineBlock style={{display: 'block'}}> </InlineBlock>
```
will still render a div with `display: inline-block`.

## Contributing

```sh
$ git clone git@github.com:zippyui/react-inline-block.git
$ cd react-inline-block
$ npm install
$ npm run dev
```

## License

#### MIT