function course() {
  let euroCash = true;
  let usdCash = true;

  let SumaEuro = 0;
  let SumaUSD = 0;

  let courseEuro = 33.8565;
  let courseUSD = 27.4609;

  while (euroCash) {
    SumaEuro = prompt("Enter cash Euro: ");
    if (!isNaN(SumaEuro) & (SumaEuro !== "")) {
      euroCash = false;
    }
  }
  
  while (usdCash) {
    SumaUSD = prompt("Enter cash Usd: ");
    if (!isNaN(SumaUSD) & (SumaUSD !== "")) {
      usdCash = false;
    }
  }

  let result = SumaEuro + " E is  " + (SumaEuro * courseEuro).toFixed(2) +
    " UAH, " + SumaUSD + " $ is " + (SumaUSD * courseUSD).toFixed(2) +
    " UAH, 1 E =  " + (courseEuro / courseUSD).toFixed(2) + " $."

  console.log(result);
}

course();