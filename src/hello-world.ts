import { MyObj } from "./types/index";

/**
 * Hi Core Function
 * 
 * @example
 * Here's a simple example:
 * ```
   console.log(sayHello("Thiago");
 * ```
 * 
 * @param name 
 *  
 */
export function sayHello(name: string) {
  console.log("hi " + name);
}

/**
 * Bye Core Function
 *
 * The summary section should be brief. On a documentation web site,
 * it will be shown on a page that lists summaries for many different
 * API items.  On a detail page for a single item, the summary will be
 * shown followed by the remarks section (if any).
 *
 * @remarks
 *
 * The main documentation for an API item is separated into a brief
 * "summary" section optionally followed by an `@remarks` block containing
 * additional details.
 *
 * @privateRemarks
 *
 * The `@privateRemarks` tag starts a block of additional commentary that is not meant
 * for an external audience.  A documentation tool must omit this content from an
 * API reference web site.  It should also be omitted when generating a normalized
 * *.d.ts file.
 *
 * @example
 * Here's a simple example:

 * ```
   console.log(sayGoodbye({ name: "John", age: 30 }));
 * ```
 * @typeParam {MyObj} - optional callbacks for each steop during the transaction {@link MyObj | `MyObj`}
 */
export function sayGoodbye(obj: MyObj) {
  console.log("goodbye" + obj.name);
}

/**
 * whatTimeIsIt function
 *
 * @example
 * ```
 * whatTimeIsIt({ name: "John", age: 30 });
 * // prints "Hey John, it's 10:00"
 * ```
 *
 * @template {MyObj} - optional callbacks for each steop during the transaction {@link MyObj | `MyObj`}
 * @see {@link https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html | JSDoc Supported Types}
 * @example
 * interface
 * ```ts
    interface MyObj {
      name: string;
      age: number;
      gender?: string;
    }
 * ```
 * @returns number
 */
export function whatTimeIsIt(obj: MyObj) {
  console.log("Hey" + obj.name + ", it's " + new Date().getTime());
  return Date.now();
}
