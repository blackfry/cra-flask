Documentation tool for [tcomb](https://github.com/gcanti/tcomb)

# API

## toObject

**Signature**

```js
toObject(types: TcombType | Array<TcombType>) => JSON blob / JavaScript object
```

**Example**

```js
import t from 'tcomb'
import { toObject } from 'tcomb-doc'

const Person = t.struct({
  name: t.String,
  age: t.maybe(t.Number)
}, 'User')

console.log(JSON.stringify(toObject(Person), null, 2))
```

**Output**

```js
{
  "kind": "struct",
  "name": "User",
  "required": true,
  "props": {
    "name": {
      "kind": "irreducible",
      "name": "String",
      "required": true
    },
    "age": {
      "kind": "irreducible",
      "name": "Number",
      "required": false
    }
  }
}
```

## Output format

### Irriducible

**Source**

```js
t.String
```

**Output**

```js
{
  "kind": "irreducible",
  "required": true,
  "name": "String",
  "predicate": "<function reference>"
}
```

### Refinement

**Source**

```js
const Password = t.refinement(t.String, (s) => s.length >= 6, 'Password')
```

**Output**

```js
{
  "kind": "refinement",
  "required": true,
  "name": "Password",
  "type": {
    "kind": "irreducible",
    "name": "String",
    "required": true,
    "predicate": "<function reference>"
  },
  "predicate": "<function reference>"
}
```

### Maybe

**Source**

```js
const MaybeString = t.maybe(t.String)
```

**Output**

```js
{
  "kind": "irreducible",
  "required": false,
  "name": "String",
  "predicate": "<function reference>"
}
```

### Enum

**Source**

```js
const Country = t.enums({
  IT: 'Italy',
  US: 'United States'
}, 'Country')
```

**Output**

```js
{
  "kind": "enums",
  "required": false,
  "name": "Country",
  "map": {
    IT: 'Italy',
    US: 'United States'
  }
}
```

### Struct

**Source**

```js
const Person = t.struct({
  name: t.String,
  age: t.Number
}, 'Person')
```

**Output**

```js
{
  "kind": "struct",
  "required": false,
  "name": "Person",
  "props": {
    "name": {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": "<function reference>"
    },
    ...
  }
}
```

### List

**Source**

```js
const Tags = t.list(t.String, 'Tags')
```

**Output**

```js
{
  "kind": "list",
  "required": true,
  "name": "Tags",
  "type": {
    "kind": "irreducible",
    "name": "String",
    "required": true,
    "predicate": "<function reference>"
  }
}
```

### Tuple

**Source**

```js
const Tuple = t.tuple([t.String, t.Number], 'Tuple')
```

**Output**

```js
{
  "kind": "tuple",
  "name": "Tuple",
  "required": true,
  "types": [
    {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": "<function reference>"
    },
    {
      "kind": "irreducible",
      "required": true,
      "name": "Number",
      "predicate": "<function reference>"
    }
  ]
}
```

### Union

**Source**

```js
const Union = t.union([t.String, t.Number], 'Union')
```

**Output**

```js
{
  "kind": "union",
  "name": "Union",
  "required": true,
  "types": [
    {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": "<function reference>"
    },
    {
      "kind": "irreducible",
      "required": true,
      "name": "Number",
      "predicate": "<function reference>"
    }
  ],
  "dispatch": "<function reference>"
}
```

### Dict

**Source**

```js
const Dict = t.dict(t.String, t.Number, 'Dict')
```

**Output**

```js
{
  "kind": "dict",
  "name": "Dict",
  "required": true,
  "domain": {
    "kind": "irreducible",
    "required": true,
    "name": "String",
    "predicate": "<function reference>"
    },
    "codomain": {
      "kind": "irreducible",
      "required": true,
      "name": "Number",
      "predicate": "<function reference>"
    }
}
```
