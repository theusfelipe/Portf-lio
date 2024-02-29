class MobileNavBar {
  constructor(mobilemenu) {
    this.mobilemenu = document.querySelector(mobilemenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind();
  }

  handleClick() {
    console.log(this);
    this.navList.classlist.toogle(this.activeClass);
  }

  addClickEvent() {
    this.mobilemenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavBar.init();
