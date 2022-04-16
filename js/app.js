const calcInputArr = document.querySelectorAll(".form__input");
const listItemArr = document.querySelectorAll(".calc__summary ul li");

const selectDropdown = document.querySelector("#package");
const dropdownMenuList = selectDropdown.querySelectorAll("li");
const checkboxLabels = document.querySelectorAll(".form__checkbox");

const itemPriceArr = document.querySelectorAll(".item__price");
const totalPrice = document.querySelector("#total-price");

function calculateEverything() {}

function printQuantity(e) {
  if (e.currentTarget.id === "products") {
    listItemArr.forEach(function (el) {
      if (el.dataset.id === "products") {
        el.querySelector(
          ".item__calc"
        ).innerText = `${e.currentTarget.value}*$0.5`;
        el.querySelector(".item__price").innerText = `$${
          e.currentTarget.value * 0.5
        }`;
        listItemArr[0].style.display = "block";
        totalPrice.style.display = "block";
      }
    });
  }
  if (e.currentTarget.id === "orders") {
    listItemArr.forEach(function (el) {
      if (el.dataset.id === "orders") {
        el.querySelector(
          ".item__calc"
        ).innerText = `${e.currentTarget.value}*$0.5`;
        el.querySelector(".item__price").innerText = `$${
          e.currentTarget.value * 0.5
        }`;
        listItemArr[1].style.display = "block";
      }
    });
  }
}

calcInputArr.forEach(function (el) {
  el.addEventListener("keyup", printQuantity);
});

selectDropdown.addEventListener("click", function () {
  const dropdownMenu = selectDropdown.querySelector(".select__dropdown");

  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

dropdownMenuList.forEach(function (el) {
  const changedName = document.querySelector(".select__input");
  const dataPack = document.querySelector("[data-id=package]");
  el.addEventListener("click", function (e) {
    changedName.innerText = e.currentTarget.innerText;
    dataPack.querySelector(
      ".item__calc"
    ).innerHTML = `${e.currentTarget.innerText} `;
    listItemArr[2].style.display = "block";
    switch (e.currentTarget.dataset.value) {
      case "basic":
        dataPack.querySelector(".item__price").innerHTML = `$0`;
        return;
      case "professional":
        dataPack.querySelector(".item__price").innerHTML = `$25`;
        return;
      case "premium":
        dataPack.querySelector(".item__price").innerHTML = `$60`;
        return;
    }
  });
});

checkboxLabels.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (e.target.tagName !== "INPUT") return;
    if (!e.target.checked) {
      switch (e.target.id) {
        case "accounting":
          document.querySelector(
            "[data-id=accounting] .item__price"
          ).textContent = "$0";
          listItemArr[3].style.display = "block";
          return;
        case "terminal":
          document.querySelector(
            "[data-id=terminal] .item__price"
          ).textContent = "$0";
          listItemArr[4].style.display = "block";
          return;
      }
    } else {
      switch (e.target.id) {
        case "accounting":
          document.querySelector(
            "[data-id=accounting] .item__price"
          ).textContent = "$50";
          listItemArr[3].style.display = "block";
          return;
        case "terminal":
          document.querySelector(
            "[data-id=terminal] .item__price"
          ).textContent = "$50";
          listItemArr[4].style.display = "block";
          return;
      }
    }
  });
});

// totalPrice

itemPriceArr.forEach(function (el) {
  sum = 0;
  slicedString = 0;
  number = 0;
  el.addEventListener("DOMSubtreeModified", function (e) {
    slicedString = e.currentTarget.textContent.slice(1);
    number = parseFloat(slicedString);
    // console.log(number);
    sum = +number;
    totalPrice.textContent = sum;
  });
});
