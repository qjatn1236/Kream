$(document).ready(function () {
  $('.event_slide').slick({
    dots: false,
    arrows: false,
    autoplay: true,
  });

  $('.business_btn').click(function () {
    if ($('.business_wrap').css('display') == 'none') {
      $('.business_wrap').show();
      $('.business_drop').attr('src', './assets/images/drop-up.png');
    } else {
      $('.business_wrap').hide();
      $('.business_drop').attr('src', './assets/images/drop-down.png');
    }
  });

  $('header .btn_menu').click(function (e) {
    e.preventDefault();
    $('.navi .navi_inner').css('right', '0');
    $('body').css('overflow', 'hidden');
  });

  $('.btn_close').click(function (e) {
    e.preventDefault();
    $('.navi .navi_inner').css('right', '-80%');
    $('body').css('overflow', 'scroll');
  });
});

//  
const categoryList = document.getElementById('categoryList');
const brandList = document.getElementById('brandList');

fetch('../../assets/data/data.json')
  .then((response) => response.json())
  .then((json) => {
    //
    const category = json.category;
    const brand = json.brand;

    //
    let categoryHtml = '';
    let brandHtml = '';


    category.forEach(item => {
      categoryHtml += 
      `<li class="link_item">
          <a href="${item.link}">
              <div class="img_box">
                  <img src="${item.imgSrc}" alt="${item.title}">
              </div>
              <p class="text">${item.title}</p>
          </a>
      </li>
      `;
    });

    brand.forEach(item => {
      brandHtml += 
      `<li class="link_item">
          <a href="${item.link}">
              <div class="img_box">
                  <img src="${item.imgSrc}" alt="${item.title}">
              </div>
              <p class="text">${item.title}</p>
          </a>
      </li>
      `;
    });

    categoryList.innerHTML = categoryHtml;
    brandList.innerHTML = brandHtml;
  });
