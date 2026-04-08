// ================= GLOBAL SETTINGS =================

// 🔥 prevent browser auto scroll restore (FREEZE FIX)
history.scrollRestoration = "manual";


// ================= MENU FUNCTIONS =================

function openMenu(){
  const menu = document.getElementById("menu");

  if(menu){
    menu.classList.add("active");
    document.body.style.overflow = "hidden";

    // history push
    history.pushState({menu:true}, "");
  }
}

function closeMenu(){
  const menu = document.getElementById("menu");

  if(menu){
    menu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// 🔥 HOME BUTTON FUNCTION (FINAL FIX)
function goHome(){
  const menu = document.getElementById("menu");

  // menu close
  if(menu){
    menu.classList.remove("active");
  }

  document.body.style.overflow = "auto";

  // 🔥 IMPORTANT: history clean karo
  if(history.state && history.state.menu){
    history.back(); // fake state remove
  }

  // scroll top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



// ================= MAIN INIT =================

document.addEventListener("DOMContentLoaded", function(){

  // ===== MENU ELEMENTS =====
  const menu = document.getElementById("menu");
  const heroMenuBtn = document.getElementById("heroMenuBtn");
  const headerMenuBtn = document.querySelector(".menu");
  const closeMenuBtn = document.querySelector(".close-btn");

  // ===== ENTRY POPUP =====
  const entryPopup = document.getElementById("popup");
  const openEntryBtn = document.getElementById("viewBtn");
  const closeEntryBtn = document.getElementById("closePopup");


  // ================= MENU EVENTS =================

  if(heroMenuBtn){
    heroMenuBtn.addEventListener("click", openMenu);
  }

  if(headerMenuBtn){
    headerMenuBtn.addEventListener("click", openMenu);
  }

  if(closeMenuBtn){
    closeMenuBtn.addEventListener("click", () => {
      closeMenu();
      if(history.state && history.state.menu){
  history.back();
}
    });
  }

  // outside click close menu
  if(menu){
    menu.addEventListener("click", (e) => {
      if(e.target === menu){
        closeMenu();
        history.back();
      }
    });
  }


  // ================= ENTRY POPUP =================

  if(openEntryBtn){
    openEntryBtn.addEventListener("click", () => {

      entryPopup.style.display = "flex";
      document.body.style.overflow = "hidden";

      history.pushState({popup:true}, "");
    });
  }

  if(closeEntryBtn){
    closeEntryBtn.addEventListener("click", () => {

      entryPopup.style.display = "none";
      document.body.style.overflow = "auto";

      history.back();
    });
  }

  if(entryPopup){
    entryPopup.addEventListener("click", (e) => {

      if(e.target === entryPopup){
        entryPopup.style.display = "none";
        document.body.style.overflow = "auto";

        history.back();
      }
    });
  }


  // ================= BACK BUTTON CONTROL =================

  window.addEventListener("popstate", () => {

    // close entry popup
    if(entryPopup && entryPopup.style.display === "flex"){
      entryPopup.style.display = "none";
      document.body.style.overflow = "auto";
      return;
    }

    // close menu
    if(menu && menu.classList.contains("active")){
      closeMenu();
      return;
    }

  });

});


// ================= BOATING POPUP =================

(function(){

  const boatingPopup = document.getElementById("boatingPopup");
  const openBtn = document.getElementById("openBoatingPopup");
  const closeBtn = document.getElementById("closeBoating");

  if(openBtn){
    openBtn.addEventListener("click", () => {
      boatingPopup.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if(closeBtn){
    closeBtn.addEventListener("click", () => {
      boatingPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  window.addEventListener("click", (e) => {
    if(e.target === boatingPopup){
      boatingPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

})();


// ================= EV POPUP =================

(function(){

  const evPopup = document.getElementById("evPopup");
  const openBtn = document.getElementById("openEvPopup");
  const closeBtn = document.getElementById("closeEv");

  if(openBtn){
    openBtn.addEventListener("click", () => {
      evPopup.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if(closeBtn){
    closeBtn.addEventListener("click", () => {
      evPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  window.addEventListener("click", (e) => {
    if(e.target === evPopup){
      evPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

})();


// ================= FAQ TOGGLE =================

document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});


// ================= EV COUNTER =================

(function(){

  const price = 20;
  let count = 1;

  const minusBtn = document.getElementById("evMinus");
  const plusBtn = document.getElementById("evPlus");
  const countText = document.getElementById("evCount");
  const totalText = document.getElementById("evTotal");

  function updateUI(){
    if(countText && totalText){
      countText.innerText = count;
      totalText.innerText = count * price;
    }
  }

  if(plusBtn){
    plusBtn.addEventListener("click", () => {
      count++;
      updateUI();
    });
  }

  if(minusBtn){
    minusBtn.addEventListener("click", () => {
      if(count > 1){
        count--;
        updateUI();
      }
    });
  }

})();


// ================= MAP FUNCTIONS =================

function openMap(){
  window.open("https://goo.gl/maps/jsEZEF1yoknBL5tH9?g_st=ac", "_blank");
}

function getDirections(){
  window.open("https://maps.app.goo.gl/5J92GN5sQwnHfRf46", "_blank");
}


// ================= SCROLL LOCATION =================

function scrollToLocation(){
  const section = document.getElementById("location");

  if(section){
    const y = section.getBoundingClientRect().top + window.pageYOffset - 120;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}