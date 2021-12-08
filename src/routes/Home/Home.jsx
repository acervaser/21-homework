import React from "react";
import './Home.css';
import home_image from "../../assets/images/post-images/unnamed.jpg"

export default function Home() {
  return (
    <div>
      <h1>Криміна́льне чти́во</h1>
      <p>Криміна́льне чти́во (англ. Pulp Fiction) — культовий художній фільм 1994 року виробництва США, одна з найвідоміших робіт режисера Квентіна Тарантіно. Картина вважається важливою віхою в історії кінематографа, що дала відчутний імпульс розвитку незалежного американського кіно.

Фільм описує два дні з життя низки американських злочинців. Найнесподіванішим чином їхні долі перетинаються, приводячи одних до загибелі, інших до втечі, а декого до переосмислення свого життя та повернення до чесної роботи. Оригінальна назва фільму відсилає до дешевих палп-журналів, які часто публікували низькопробні детективи.

У головних ролях: Джон Траволта, Семюел Лірой Джексон, Ума Турман, Брюс Вілліс, Гарві Кейтель, Тім Рот, Аманда Пламмер та Вінг Реймс.

Станом на 13 серпня 2021 року займає 8-у позицію у списку 250 найкращих фільмів за версією IMDb.</p>
       <img src={home_image} className="image" alt="gfg"></img> 
    </div>
  );
}

