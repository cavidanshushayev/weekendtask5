import {
    getAllCategories,
    deleteCategoryByID,
    editCategoryByID,
    postCategory
} from "./httprequest.js";

var EditCloseModal = document.querySelector(".close-modal-edit");
let editModal = document.querySelector("#edit-category-modal");
let editadd = document.querySelector(".edit-btn")
let row = document.querySelector(".row");

getAllCategories().then(data => {
    data.forEach(category => {

        let cols = document.createElement("div");
        cols.classList.add("col-sm-3");
        cols.classList.add("mx-5");
        cols.classList.add("mt-5");


        let card = document.createElement("div");
        card.classList.add("card");


        let cardbody = document.createElement("div");
        cardbody.classList.add("card-body")

        let h5h = document.createElement("h5");
        h5h.classList.add("card-title");
        h5h.innerText = category.description;


        let pp = document.createElement("p");
        pp.classList.add("card-text");
        pp.innerText = category.name;


        let editbtn = document.createElement("button");
        editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`


        cardbody.append(h5h, pp, editbtn, deletebtn);
        card.append(cardbody);
        cols.append(card);
        row.append(cols);


        deletebtn.addEventListener("click", (e) => {


            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {

                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                        deleteCategoryByID(category.id);
                        e.target.parentElement.parentElement.parentElement.parentElement.remove()


                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });



        })

        let nameEdit = category.name;
        let descEdit = category.description;
        let editid = category.id;
        let editinpname = document.querySelector("#edit-name");
        let editinpdesc = document.querySelector("#edit-desc");
        let editidid = document.querySelector("#edit-id");



        
        editbtn.addEventListener("click", () => {
            editModal.style.opacity = "1";
            editModal.style.visibility = "visible";
            editModal.style.transform = "translate(-50%,-50%) scale(1)";
            editinpname.value = nameEdit;
            editinpdesc.value = descEdit;
            editidid.value = editid;
        })
        EditCloseModal.addEventListener("click", () => {

            EditModalClose();
        })
        editadd.addEventListener("click", async (e) => {
            let editedname = editinpname.value;
            let editeddesc = editinpdesc.value;
            let editedid = editidid.value;
            let editedcategor = {
                name: editedname,
                description: editeddesc,

            }
            editCategoryByID(editedid, editedcategor);
            e.preventDefault();
        })
    })
})
function EditModalClose() {
    editModal.style.opacity = "0";
    editModal.style.visibility = "hidden";
    editModal.style.transform = "translate(-50%,-50%) scale(0)";
}
