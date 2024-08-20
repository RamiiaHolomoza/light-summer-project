document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.modal-close-btn');
  const modalMobMenu = document.querySelector('.modal-mob-menu');
  const modalMenu = document.querySelector('.modal-menu');
  const navHeader = document.querySelector('.nav-header');
  const headerMenuButton = document.querySelector('.header-menu-button');
  const menuList = document.querySelector('.menu-list');
  const headerOrderBtn = document.querySelector('.header-order-btn');
  const modalOrderButton = document.querySelector('.modal-order-button');
  const modalListItems = document.querySelectorAll('.modal-list-item');

  function handleResize() {
    if (window.innerWidth < 768) {
      openMenuBtn.classList.remove('visually-hidden');
      navHeader.classList.add('visually-hidden');
      headerOrderBtn.classList.add('visually-hidden');
    } else {
      openMenuBtn.classList.add('visually-hidden');
      modalMobMenu.classList.add('visually-hidden');
      navHeader.classList.remove('visually-hidden');
      modalMenu.classList.add('visually-hidden');
      menuList.classList.add('visually-hidden');
      headerOrderBtn.classList.remove('visually-hidden');
    }
  }

  // Відкриття мобільного меню
  openMenuBtn.addEventListener('click', function () {
    modalMobMenu.classList.remove('visually-hidden');
    modalMenu.classList.remove('visually-hidden');
  });

  // Закриття мобільного меню
  closeMenuBtn.addEventListener('click', function () {
    modalMobMenu.classList.add('visually-hidden');
    modalMenu.classList.add('visually-hidden');
  });

  // Закриття мобільного меню при натисканні на елементи списку або кнопку замовлення
  function closeModalMenu() {
    modalMobMenu.classList.add('visually-hidden');
    modalMenu.classList.add('visually-hidden');
  }

  modalListItems.forEach(item => {
    item.addEventListener('click', closeModalMenu);
  });

  modalOrderButton.addEventListener('click', closeModalMenu);

  // Відкриття/закриття десктопного меню
  headerMenuButton.addEventListener('click', function () {
    menuList.classList.toggle('visually-hidden');
  });

  // Виклик функції при зміні розміру вікна
  window.addEventListener('resize', handleResize);

  // Виклик функції при завантаженні сторінки
  handleResize();
});
