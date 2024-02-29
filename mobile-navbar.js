class MobileNavBar {
  constructor(mobilemenu) {
    this.mobilemenu = document.querySelector(mobilemenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
  }

  addClickEvent() {
    this.mobilemenu.addEventListener("click", () => console.log("Hey 😬"));
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar();
