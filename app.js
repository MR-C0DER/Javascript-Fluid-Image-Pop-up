const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".modal-text");

previews.forEach((preview)=>{
  preview.addEventListener("click", ()=>{
   modal.classList.add("open");
   original.classList.add("open");
   //Dynamic image and text
   const originalSrc = preview.getAttribute("data-original")
   original.src = `./img/Full/${originalSrc}`;
   const altText = preview.getAttribute("alt");
   imgText.textContent = altText; 

}
  );
});

modal.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal")){
      modal.classList.remove("open");
      original.classList.remove("open");
      }
})
