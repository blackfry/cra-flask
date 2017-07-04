export default (props) => {
  return props.flex === false?
    0 :
    props.flex === true?
      1 : 
      props.flex
}