function stars(n) {
    console.log("*".repeat(n));
for (i = 1; i < n-1; i++) {
    console.log("*" + " ".repeat(n-2) + "*");

}                             
    console.log("*".repeat(n));

}
stars(["6"])