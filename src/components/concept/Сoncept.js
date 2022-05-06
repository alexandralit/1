import React from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../../assets/img/step2-1.png";
import img2 from "./../../assets/img/step2-2.png";
import img3 from "./../../assets/img/step2-3.png";
import img4 from "./../../assets/img/step2-4.png";

const Сoncept = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="сoncept" id="сoncept">
      <div className="container">
        <h2 className="title">Мы работаем в комплексе</h2>
        <p className="subtitle">чтобы Вы не тратили время на поиск и организацию <br />множества подрядчиков</p>
      </div>
      <div className="wrapper">
        <div className="inner inner-img"></div>
        <div className="inner inner-content">
          <h3 className="step"><span>шаг №1.</span> Подготовительные работы</h3>
          <p className="text">Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.</p>
          <div className="comment">
            <div className="comment-img"></div>
            <p className="comment-text">“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“ 
            <span>АЛЕКСЕЙ, обследователь и главный инженер проектов</span></p>
          </div>
        </div>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-item_bg"></div>
            <img className="slider-item_img" src={img1} alt="Локатор арматуры Profoscope" />
            <h3 className="slider-item_title">Локатор арматуры “Profoscope”</h3>
          </div>
          <div className="slider-item">
            <div className="slider-item_bg"></div>
            <img className="slider-item_img" src={img2} alt="Измеритель прочности бетона ОНИКС-1" />
            <h3 className="slider-item_title">Измеритель прочности бетона “ОНИКС-1”</h3>
          </div>
          <div className="slider-item">
            <div className="slider-item_bg"></div>
            <img className="slider-item_img" src={img3} alt="Прибор ультразвукового действия ПУЛЬСАР-2" />
            <h3 className="slider-item_title">Прибор ультразвукового действия “ПУЛЬСАР-2”</h3>
          </div>
          <div className="slider-item">
            <div className="slider-item_bg"></div>
            <img className="slider-item_img" src={img4} alt="Измеритель прочности бетона Молоток Шмидта" />
            <h3 className="slider-item_title">Измеритель прочности бетона “Молоток Шмидта”</h3>
          </div>
          <div className="slider-item">
            <div className="slider-item_bg"></div>
            <img className="slider-item_img" src={img1} alt="Локатор арматуры Profoscope" />
            <h3 className="slider-item_title">Локатор арматуры “Profoscope”</h3>
          </div>
        </Slider>
      </div>
      <div className="wrapper">
        <div className="inner inner-content">
          <h3 className="step"><span>шаг №3.</span> Обработка полученных данных</h3>
          <p className="text">Детальный отчет с <a href="#" target="_blank" className="link">результатами обследования</a> Вы получите через 7 дней. И на его основании сможете определить судьбу объекта и прогнозировать затраты</p>
          <ul className="list">
            <li className="list-item">
              <span className="check"></span>
              Мы оценим техническое состояние объекта и присвоим ему категорию
            </li>
            <li className="list-item">
              <span className="check"></span>
              Объясним причины появления дефектов и повреждений в конструкциях
            </li>
            <li className="list-item">
              <span className="check"></span>
              Сформируем техзадание на проектирование мероприятий по восстановлению, усилению или ремонту конструкций, оборудования и сетей
            </li>
          </ul>
        </div>
        <div className="inner inner-img"></div>
      </div>
    </section>
  );
}

export default Сoncept;