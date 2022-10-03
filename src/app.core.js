import { Automa } from "../packages/automa/src/automa";
import { ARRANGE, DEFINE } from "./app.build";
import { CLASSARR, CLASSOBJ } from "./app.class";

export const am = new Automa({
    classObj: CLASSOBJ,
    classArr: CLASSARR,
    define: DEFINE,
    arrange: ARRANGE
});

am.pick("label").text("Automa app running...!");