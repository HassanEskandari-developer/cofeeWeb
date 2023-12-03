const myElement = document.querySelector(".about");
      const text1 = document.querySelector(".about-text");
      const otherElement = document.querySelector(".text-wrapper");
      myElement.addEventListener("mouseover", function () {
        otherElement.style.backgroundColor = "white";
        otherElement.style.animation = "anime 0.4s";
        text1.style.animation = "anime 0.4s forwards";
        text1.style.visibility = "visible";
      });

      myElement.addEventListener("mouseout", function () {
        otherElement.style.backgroundColor = "initial";
        otherElement.style.animation = "none";
        text1.style.animation = "none";
      });

      // ---------------------
      const myElement2 = document.querySelector(".roastry");

      const otherElement2 = document.querySelector(".text-wrapper");
      const text2 = document.querySelector(".roastry-text2");
      const vidr = document.querySelector(".vid-roastry");

      myElement2.addEventListener("mouseover", function () {
        otherElement2.style.backgroundColor = "white";
        otherElement2.style.animation = "anime 0.4s";
        text2.style.animation = "anime 0.4s forwards";
        text2.style.visibility = "visible";
        vidr.style.animation = "anime 0.4s forwards";
        vidr.style.visibility = "visible";
      });

      myElement2.addEventListener("mouseout", function () {
        otherElement2.style.backgroundColor = "initial";
        otherElement2.style.animation = "none";
        text2.style.animation = "none";
        vidr.style.animation = "none";
        vidr.style.visibility = "hidden";
      });
      // ----------------
      const myElement3 = document.querySelector(".button-static");
      const col2 = document.querySelector(".col-2");
      myElement3.addEventListener("click", function () {
        if (col2.style.visibility === "visible") {
          col2.style.visibility = "hidden";
        } else {
          col2.style.visibility = "visible";
        }
      });

      function toggleVisibility() {
        if (window.innerWidth > 992) {
          myElement3.style.visibility = "hidden";
          col2.style.visibility = "visible";
        } else {
          myElement3.style.visibility = "visible";
          col2.style.visibility = "hidden";
        }
      }

      window.addEventListener("resize", toggleVisibility);
      // /----------------------
      const myElement4 = document.querySelector(".location");

      const otherElement4 = document.querySelector(".text-wrapper");
      const text4 = document.querySelector(".location-text");
      const vidr4 = document.querySelector(".vid-location");

      myElement4.addEventListener("mouseover", function () {
        otherElement4.style.backgroundColor = "white";
        otherElement4.style.animation = "anime 0.4s";
        text4.style.animation = "anime 0.4s forwards";
        text4.style.visibility = "visible";
        vidr4.style.animation = "anime 0.4s forwards";
        vidr4.style.visibility = "visible";
      });

      myElement4.addEventListener("mouseout", function () {
        otherElement4.style.backgroundColor = "initial";
        otherElement4.style.animation = "none";
        text4.style.animation = "none";
        vidr4.style.animation = "none";
        vidr4.style.visibility = "hidden";
      });
      // /-------------------
      const myElement5 = document.querySelector(".rewards");

      const otherElement5 = document.querySelector(".text-wrapper");
      const text5 = document.querySelector(".rewards-text");
      const img5 = document.querySelector(".img-reward");

      myElement5.addEventListener("mouseover", function () {
        otherElement5.style.backgroundColor = "white";
        otherElement5.style.animation = "anime 0.4s";
        text5.style.animation = "anime 0.4s forwards";
        text5.style.visibility = "visible";
        img5.style.animation = "anime 0.4s forwards";
        img5.style.visibility = "visible";
      });

      myElement5.addEventListener("mouseout", function () {
        otherElement5.style.backgroundColor = "initial";
        otherElement5.style.animation = "none";
        text5.style.animation = "none";
        img5.style.animation = "none";
        img5.style.visibility = "hidden";
      });
      ///////----------------------
      const myElement6 = document.querySelector(".sustain");
      const otherElement6 = document.querySelector(".text-wrapper");
      const text6 = document.querySelector(".sustain-text");
      const img6 = document.querySelector(".img-sustain");

      myElement6.addEventListener("mouseover", function () {
        otherElement6.style.backgroundColor = "white";
        otherElement6.style.animation = "anime 0.4s";
        text6.style.animation = "anime 0.4s forwards";
        text6.style.visibility = "visible";
        img6.style.animation = "anime 0.4s forwards";
        img6.style.visibility = "visible";
      });

      myElement6.addEventListener("mouseout", function () {
        otherElement6.style.backgroundColor = "initial";
        otherElement6.style.animation = "none";
        text6.style.animation = "none";
        img6.style.animation = "none";
        img6.style.visibility = "hidden";
      });

      // ------------
      const myElement7 = document.querySelector(".eshop");
      const otherElement7 = document.querySelector(".text-wrapper");
      const text7 = document.querySelector(".eshop-text");
      const img7 = document.querySelector(".img-eshop");

      myElement7.addEventListener("mouseover", function () {
        otherElement7.style.backgroundColor = "white";
        otherElement7.style.animation = "anime 0.4s";
        text7.style.animation = "anime 0.4s forwards";
        text7.style.visibility = "visible";
        img7.style.animation = "anime 0.4s forwards";
        img7.style.visibility = "visible";
      });

      myElement7.addEventListener("mouseout", function () {
        otherElement7.style.backgroundColor = "initial";
        otherElement7.style.animation = "none";
        text7.style.animation = "none";
        img7.style.animation = "none";
        img7.style.visibility = "hidden";
      });

      // /------------------------------
      const myElement8 = document.querySelector(".blog");
const otherElement8 = document.querySelector(".text-wrapper");
const text8 = document.querySelector(".blog-text");
const img8 = document.querySelector(".img-blog");

myElement8.addEventListener("mouseover", function () {
  otherElement8.style.backgroundColor = "white";
  otherElement8.style.animation = "anime 0.4s";
  text8.style.animation = "anime 0.4s forwards";
  text8.style.visibility = "visible";
  img8.style.animation = "anime 0.4s forwards";
  img8.style.visibility = "visible";
});

myElement8.addEventListener("mouseout", function () {
  otherElement8.style.backgroundColor = "initial";
  otherElement8.style.animation = "none";
  text8.style.animation = "none";
  img8.style.animation = "none";
  img8.style.visibility = "hidden";
});
///----------------
const myElement9 = document.querySelector(".contact");
const otherElement9 = document.querySelector(".text-wrapper");
const text9 = document.querySelector(".contact-text");
const img9 = document.querySelector(".img-contact");

myElement9.addEventListener("mouseover", function () {
  otherElement9.style.backgroundColor = "white";
  otherElement9.style.animation = "anime 0.4s";
  text9.style.animation = "anime 0.4s forwards";
  text9.style.visibility = "visible";
  img9.style.animation = "anime 0.4s forwards";
  img9.style.visibility = "visible";
});

myElement9.addEventListener("mouseout", function () {
  otherElement9.style.backgroundColor = "initial";
  otherElement9.style.animation = "none";
  text9.style.animation = "none";
  img9.style.animation = "none";
  img9.style.visibility = "hidden";
});