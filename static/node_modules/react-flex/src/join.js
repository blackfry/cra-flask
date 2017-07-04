const notEmpty = v => !!v

export default (...args) => args.filter(notEmpty).join(' ')