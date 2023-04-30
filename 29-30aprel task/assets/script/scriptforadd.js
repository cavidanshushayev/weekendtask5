import { postCategory } from "./httprequest.js";

let title = document.querySelector("#contactname");

let body = document.querySelector("#contactTitle");

let btn3 = document.querySelector("#bbtn")


let titleError = document.createElement("span");
titleError.textContent = "Bos  input add etmek olmur!";
titleError.style.color = "red";
title.parentNode.insertBefore(titleError, title.nextSibling);

let bodyError = document.createElement("span");
bodyError.textContent = "Bos  input add etmek olmur!";
bodyError.style.color = "red";
body.parentNode.insertBefore(bodyError, body.nextSibling);



btn3.addEventListener("click", async (e) => {

    if (title.value.trim() !== "" && body.value.trim() !== "") {
        console.log(e.target);
        var category = {
            name: title.value,
            description: body.value,
        };

        await postCategory({ name: category.name, description: category.description });

        Swal.fire(
            `Elaaaa `,
            ` yeni melumatlar Apiye add olundu`,
            'success'
        )

        setTimeout(function () { window.location.href = "http://127.0.0.1:5500/index.html"; }, 2000);

    }
})


title.addEventListener("keyup", () => {
    if (title.value.trim() === "") {
        titleError.style.display = "block";
    } else {
        titleError.style.display = "none";
    }
})

body.addEventListener("keyup",()=>{
    if (body.value.trim() === "") {
        bodyError.style.display = "block";
      } else {
        bodyError.style.display = "none";
      }
})
