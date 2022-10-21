[hidocs](README.md) / Exports

# hidocs

## Table of contents

### Classes

- [Book](classes/Book.md)

### Interfaces

- [MyObj](interfaces/MyObj.md)

### Functions

- [sayGoodbye](modules.md#saygoodbye)
- [sayHello](modules.md#sayhello)
- [whatTimeIsIt](modules.md#whattimeisit)

## Functions

### sayGoodbye

▸ **sayGoodbye**(`obj`): `void`

Bye Core Function

The summary section should be brief. On a documentation web site,
it will be shown on a page that lists summaries for many different
API items.  On a detail page for a single item, the summary will be
shown followed by the remarks section (if any).

**`Remarks`**

The main documentation for an API item is separated into a brief
"summary" section optionally followed by an `@remarks` block containing
additional details.

**`Example`**

Here is a simple example:

```
  console.log(sayGoodbye({ name: "John", age: 30 }));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`MyObj`](interfaces/MyObj.md) |

#### Returns

`void`

#### Defined in

[hello-world.ts:48](https://github.com/tgmarinho/poc-ts-doc/blob/739975f/src/hello-world.ts#L48)

___

### sayHello

▸ **sayHello**(`name`): `void`

Hi Core Function

**`Example`**

Here is a simple example:
```
  console.log(sayHello("Thiago");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[hello-world.ts:15](https://github.com/tgmarinho/poc-ts-doc/blob/739975f/src/hello-world.ts#L15)

___

### whatTimeIsIt

▸ **whatTimeIsIt**(`obj`): `number`

whatTimeIsIt function

**`Example`**

```
whatTimeIsIt({ name: "John", age: 30 });
// prints "Hey John, it's 10:00"
```

**`See`**

[JSDoc Supported Types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

**`Example`**

interface
```ts
   interface MyObj {
     name: string;
     age: number;
     gender?: string;
   }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`MyObj`](interfaces/MyObj.md) |

#### Returns

`number`

number - returns the current time in timestamp

#### Defined in

[hello-world.ts:74](https://github.com/tgmarinho/poc-ts-doc/blob/739975f/src/hello-world.ts#L74)
