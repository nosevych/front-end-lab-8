function reverseerseNumber(a) {
        let reverse = a.toString().split("").reverseerse().join("");
         reverse = parseInt(reverse)*Math.sign(a);
        return reverse;
}