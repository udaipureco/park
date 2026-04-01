// ================= PRICE =================
let prices = {
  adult: 10,
  child: 5
};

// ================= QTY =================
function changeQty(type, value){
  let el = document.getElementById(type);
  let count = parseInt(el.innerText);

  count += value;
  if(count < 0) count = 0;

  el.innerText = count;

  updateTotal();
}

// ================= TOTAL =================
function updateTotal(){

  let adult = parseInt(document.getElementById("adult").innerText);
  let child = parseInt(document.getElementById("child").innerText);

  let total = (adult * prices.adult) + (child * prices.child);

  let summaryHTML = "";

  if(adult > 0){
    summaryHTML += `
      <div>
        <span>Adult (${adult})</span>
        <span>₹${adult*10}</span>
      </div>
    `;
  }

  if(child > 0){
    summaryHTML += `
      <div>
        <span>Child (${child})</span>
        <span>₹${child*5}</span>
      </div>
    `;
  }

  if(summaryHTML === ""){
    summaryHTML = "<div>No tickets selected</div>";
  }

  document.getElementById("summary").innerHTML = summaryHTML;

  document.querySelector(".final-total").innerText = "TOTAL ₹" + total;
}

// ================= NAVIGATION =================
function goHome(){
  window.location.href = "index.html";
}

// ================= NEXT =================
function nextStep(){

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let gmail = document.getElementById("gmail").value;

  if(!name || !mobile || !gmail){
    alert("Please fill all details");
    return;
  }

  alert("Booking Successful 🎉");
}

// ================= DATE SYSTEM (MANUAL MODE) =================
document.addEventListener("DOMContentLoaded", function(){

  const dateInput = document.getElementById("date");

  let now = new Date();
  let day = now.getDay();

  let dd = String(now.getDate()).padStart(2,'0');
  let mm = String(now.getMonth()+1).padStart(2,'0');
  let yyyy = now.getFullYear();

  // ✅ Show current date
  dateInput.value = `${dd}-${mm}-${yyyy}`;

  // ⚠️ Only info (NO BLOCK)
  if(day === 1){
    console.log("⚠️ Monday Closed (info only)");
  }

  let hours = now.getHours();
  let minutes = now.getMinutes();

  if(hours > 16 || (hours === 16 && minutes > 30)){
    console.log("⚠️ Booking time over (info only)");
  }

});