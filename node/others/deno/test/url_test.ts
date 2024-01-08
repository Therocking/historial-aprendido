import { assertEquals } from "std/assert/assert_equals.ts";

Deno.test("url test", () => {
   const url = new URL("./foo.js", "https://deno.land/");
   assertEquals(url.href, "https://deno.land/foo.js")
});

// Compact form: name and function
Deno.test("should sum two numbers", () => {
   const x = 1+2;
   assertEquals(x, 3);
});

// Compact form: named function
Deno.test(function sum() {
   const x = 1+5;
   assertEquals(x, 6);
});


// Longer form: test definition
Deno.test({
   name: "should mul",
   fn: () => {
      const x = 2 * 2;
      assertEquals(x, 4);
   }
});

// Similar to compact form, with additional configuration as a second argument
Deno.test(
   {name: "should div", permissions: {read: true}},
   () => {
      const x = 4 / 2;
      assertEquals(x, 2)
   },
)


// Similar to longer form, with a named test function as a second argument
Deno.test({permissions: {read: true}}, function min() {
   const x = 4 - 1;
   assertEquals(x, 3);
});
