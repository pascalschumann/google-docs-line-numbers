require("sdk/page-mod").PageMod({
    include: /^https?:\/\/docs\.google\.com\/(?:.*?\/)?document\/d\/.*/i,
    attachTo: ["existing", "top"],
    contentStyleFile: "./style.css"
});
