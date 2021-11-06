const rootElement = document.querySelector("#root");

const render = (async () => {
    let url = "http://localhost:3000/furniture";
    const res = await fetch(url);
    const posts = await res.json();

    let output = "";
    posts.forEach((furniture) => {
        output += `
        <div class="card container mt-3 ">
            <div class="position-relative">
                <div class="position-absolute top-0 end-0">
                    <button class="btn btn-danger btn-sm delete mt-2">X</button>
                </div>
                <div class="">
                    <h3> ${furniture.title} </h3>
                    <p> ${furniture.type} </p>
                    <p> ${furniture.location.country}, ${furniture.location.city}, ${furniture.location.street}</p>
                    <span> ${furniture.price} eur</span>
                </div>
                <div class=" text-end">
                    <h4>${furniture.owner.fullname}</h4>
                    <p>${furniture.owner.mobile}</p>
                    <p>${furniture.owner.address}</p>
                    <p>${furniture.owner.email}</p>
                </div>
            </div>
        </div>
      `;
    });
    rootElement.innerHTML = output;
})();


const deleteBtn = document.querySelector(".delete")
deleteBtn.addEventListener("click", async (e) =>{
    await fetch(url, {
      method: "DELETE"
    });
  
  });
