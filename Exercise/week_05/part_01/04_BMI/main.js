document.addEventListener("DOMContentLoaded", function () {
  //your code here ....
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const btn = document.getElementById("calculateBtn");
  const result = document.getElementById("result");
  btn.addEventListener("click", () => {
    if (weight.value > 0 && height.value > 0) {
      const bmi = ((weight.value / height.value ** 2) * 10000).toFixed(2);
      if (bmi < 18.5) result.textContent = `نتیجه تست شما: ${bmi} (کمبود وزن)`;
      else if (bmi >= 18.5 && bmi < 25)
        result.textContent = `نتیجه تست شما: ${bmi} (وزن سلامت)`;
      else if (bmi >= 25 && bmi < 30)
        result.textContent = `نتیجه تست شما: ${bmi} (اضافه وزن)`;
      else result.textContent = `نتیجه تست شما: ${bmi} (چاقی)`;
    } else {
      result.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
    }
  });
});
