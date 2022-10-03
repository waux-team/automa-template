const { am } = require("./app.core");

am.root({
    child: am.pick("main")
})