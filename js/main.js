document.addEventListener("DOMContentLoaded", function(){

  // ===== MENU =====
  const menuBtn = document.querySelector(".menu");
  const heroBtn = document.getElementById("heroMenuBtn");
  const overlay = document.getElementById("menuOverlay");
  const closeMenuBtn = document.getElementById("closeMenu");

  // ===== POPUP =====
  const viewBtn = document.getElementById("viewBtn");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // ================= MENU =================

  function openMenu(){
    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
    history.pushState({menu:true}, "");
  }

  function closeMenu(){
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }

  if(menuBtn) menuBtn.addEventListener("click", openMenu);
  if(heroBtn) heroBtn.addEventListener("click", openMenu);

  if(closeMenuBtn){
    closeMenuBtn.addEventListener("click", function(){
      closeMenu();
      history.back();
    });
  }

  if(overlay){
    overlay.addEventListener("click", function(e){
      if(e.target === overlay){
        closeMenu();
        history.back();
      }
    });
  }

  // ================= POPUP =================

  if(viewBtn){
    viewBtn.addEventListener("click", function(){
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
      history.pushState({popup:true}, "");
    });
  }

  if(closePopup){
    closePopup.addEventListener("click", function(){
      popup.style.display = "none";
      document.body.style.overflow = "auto";
      history.back();
    });
  }

  if(popup){
    popup.addEventListener("click", function(e){
      if(e.target === popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";
        history.back();
      }
    });
  }

  // ================= BACK BUTTON =================

  window.addEventListener("popstate", function(){

    if(popup && popup.style.display === "flex"){
      popup.style.display = "none";
      document.body.style.overflow = "auto";
      return;
    }

    if(overlay && overlay.classList.contains("show")){
      closeMenu();
      return;
    }

  });

});