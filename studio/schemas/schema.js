import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import post from "./post";
import project from "./project";
import author from "./author";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    author,
    project,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
