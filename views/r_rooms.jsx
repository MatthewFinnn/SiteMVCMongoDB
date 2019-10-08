// function tick() {
class Hello extends React.Component {
  render() {
      return (
      <div class="rooms">
        <div class="container">
          <div class="row">
            <div class="col">
					    <div class="section_title_container text-center magic_up">
						    <div class="section_subtitle">Роскошь здесь</div>
						    <div class="section_title"><h2>Наши номера</h2></div>
					    </div>
				    </div>
			    </div>
        <div class="row room_row magic_up">

          

          <div class="col-lg-4 room_col">
            <div class="room">
              <div class="room_image"><img src="../public/images/home/rooms/1.jpg" /></div>
              <div class="room_content text-center">
                <div class="room_price">165 BYN / <span>ночь</span></div>
                <div class="room_type">1-местный 1-комнатный номер</div>
                <div class="room_title"><a href="rooms.html">SINGLE</a></div>
                <div class="room_text">
                  <p>1-местный 1-комнатный номер. Ширина кровати - 120 см. Есть один номер, специально адаптированный для людей с ограниченными физическими возможностями.</p>
                </div>
                <a href="#" class="button_container room_button"><div class="button text-center"><span>Забронировать</span></div></a>
              </div>
            </div>
          </div>
      
      
          <div class="col-lg-4 room_col">
            <div class="room">
              <div class="room_image"><img src="../public/images/home/rooms/2.jpg" /></div>
             <div class="room_content text-center">
               <div class="room_price">270 BYN / <span>ночь</span></div>
               <div class="room_type">2-местный 2-комнатный номер</div>
                <div class="room_title"><a href="rooms.html">LUXE</a></div>
                <div class="room_text">
                  <p>Номер повышенной комфортности. Ширина кровати - 180 см. Современный интерьер, гостиная с удобной мягкой мебелью и рабочей зоной, просторная ванная комната.</p>
                </div>
                <a href="#" class="button_container room_button"><div class="button text-center"><span>Забронировать</span></div></a>
             </div>
            </div>
          </div>

      
          <div class="col-lg-4 room_col">
            <div class="room">
              <div class="room_image"><img src="../public/images/home/rooms/3.jpg" /></div>
              <div class="room_content text-center">
                <div class="room_price">185 BYN / <span>ночь</span></div>
                <div class="room_type">2-местный 1-комнатный номер </div>
                <div class="room_title"><a href="rooms.html">DOUBLE</a></div>
                <div class="room_text">
                  <p>Элегантно декорированный, с оригинальным современным дизайном интерьера, просторный 2-местный 1-комнатный номер. Ширина кровати - 180 см.</p>
                </div>
               <a href="#" class="button_container room_button"><div class="button text-center"><span>Забронировать</span></div></a>
              </div>
            </div>
          </div>


       </div>
      </div>
    </div>
    );
  }
}
ReactDOM.render(
  <Hello></Hello>,
  document.getElementById("app")
)
// }

// setInterval(tick, 1000);