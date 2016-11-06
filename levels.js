
var loadDanceHall = function() {
    $("#sky").remove();
    $("#scene").append("<a-sky id='sky' src='./media/bellagio.jpg'></a-sky>");

    // FEMALE 2

    $("#scene").append(" \
      <a-assets class='fem2'> \
        <a-light type='ambient' color='#FFF' position='1 0 -3' rotation='90 0 0' target='#camera'> \
          <a-asset-item id='fem2-obj' src='./media/Casual_Girl.obj'></a-asset-item> \
          <a-asset-item id='fem2-mtl' src='./media/Casual_Girl.mtl'></a-asset-item> \
        </a-light> \
      </a-assets> \
      <a-obj-model class='fem2' src='#fem2-obj' mtl='#fem2-mtl' position='0.8 -3.5 -9' rotation='0 140 0' scale='1.5 1.5 1.5'> \
        <a-animation attribute='position' begin='200' dur='150' direction='alternate' repeat='indefinite' from='0.5 -3.5 -9' to='0.7 -3.3 -9'></a-animation> \
        <a-animation attribute='rotation' begin='400' dur='300' direction='normal' repeat='indefinite' from='0 140 0' to='0 115 0'></a-animation> \
      </a-obj-model> \
    ");

    // FEMALE 1

    $(".fem1").remove();
    $("#scene").append(" \
      <a-assets class='fem1'> \
        <a-light type='ambient' color='#FFF' position='-1 0 -3' rotation='90 0 0' target='#camera'> \
          <a-asset-item id='fem1-obj' src='./media/Casual_Girl.obj'></a-asset-item> \
          <a-asset-item id='fem1-mtl' src='./media/Casual_Girl.mtl'></a-asset-item> \
        </a-light> \
      </a-assets> \
      <a-obj-model class='fem1' src='#fem1-obj' mtl='#fem1-mtl' position='-2.5 -3.5 -7.5' rotation='0 -45 0' scale='1.5 1.5 1.5'> \
        <a-animation attribute='position' begin='200' dur='150' direction='alternate' repeat='indefinite' from='-2.5 -3.5 -7.5' to='-2.5 -3.3 -7.5'></a-animation> \
        <a-animation attribute='rotation' begin='400' dur='300' direction='normal' repeat='indefinite' from='0 -45 0' to='0 -30 0'></a-animation> \
      </a-obj-model> \
    ");

    // MALE 1

    $(".man1").remove();
    $("#scene").append(" \
      <a-assets class='man1'> \
        <a-light type='ambient' color='#FFF' position='1 0 -2' rotation='90 0 0' target='#camera'> \
          <a-asset-item id='man1-obj' src='./media/Casual_Man.obj'></a-asset-item> \
          <a-asset-item id='man1-mtl' src='./media/Casual_Man.mtl'></a-asset-item> \
        </a-light> \
      </a-assets> \
      <a-obj-model class='man1' src='#man1-obj' mtl='#man1-mtl' position='1 0 -3.5' rotation='-90 50 -90' scale='1.5 1.5 1.5'> \
        <a-animation attribute='position' begin='400' dur='300' direction='alternate' repeat='indefinite' from='1 0 -3.5' to='1 0.1 -3.5'></a-animation> \
        <a-animation attribute='position' begin='800' dur='100' direction='alternate' repeat='indefinite' from='1 0.1 -3.5' to='1 0 -3.5'></a-animation> \
        <a-animation attribute='rotation' begin='400' dur='300' direction='normal' repeat='indefinite' from='-90 50 -90' to='-90 30 -90'></a-animation> \
      </a-obj-model> \
    ");

    // PIANO

    $(".piano").remove();
    $("#scene").append(" \
      <a-entity class='piano'> \
        <!-- Piano - White Keys --> \
        <a-box position='-0.5 0.75 -2' rotation='180 -5 0' radius='0.5' width='0.2' height='0.2' color='#EEEEFF'> \
          <a-animation attribute='position' begin='100' dur='500' repeat='indefinite' to='-0.5 0.9 -2'></a-animation> \
        </a-box> \
        <a-box position='-0.2 0.75 -2' rotation='180 -2.5 0' radius='0.5' width='0.2' height='0.2' color='#EEEEFF'> \
          <a-animation attribute='position' begin='3000' dur='700' direction='alternate' repeat='indefinite' from='-0.2 0.65 -2' to='-0.2 0.75 -2'></a-animation> \
        </a-box>  \
        <a-box position='0.1 0.75 -2' rotation='180 2.5 0' radius='0.5' width='0.2' height='0.2' color='#EEEEFF'> \
          <a-animation attribute='position' begin='6000' dur='300' direction='alternate' repeat='indefinite' from='0.1 0.70 -2' to='0.1 0.8 -2'></a-animation> \
        </a-box>  \
        <a-box position='0.4 0.75 -2' rotation='180 5 0' radius='0.5' width='0.2' height='0.2' color='#EEEEFF'> \
          <a-animation attribute='position' begin='200' dur='300' direction='alternate' repeat='indefinite' from='0.4 0.70 -2' to='0.4 0.8 -2'></a-animation> \
          <a-animation attribute='rotation' begin='200' dur='300' direction='normal' repeat='10' from='180 5 0' to='183 8 0'></a-animation> \
          <a-animation attribute='scale' begin='200' dur='300' direction='normal' repeat='10' from='0.9 1 1' to='1.2 1.1 1.1'></a-animation> \
        </a-box> \
        <!-- Piano - Black Keys --> \
        <a-box position='-0.3 1 -2' rotation='180 -5 0' radius='0.5' width='0.18' height='0.2' depth='0.5' color='#000000'> \
          <a-animation attribute='position' begin='700' dur='1000' direction='reverse' repeat='indefinite' to='-0.3 1.1 -2'></a-animation> \
        </a-box> \
        <a-box position='-0.05 1.2 -2' rotation='180 0 0' radius='0.5' width='0.18' height='0.2' depth='0.5' color='#000000'> \
          <a-animation attribute='position' repeat='1' to='-0.05 1 -2'></a-animation> \
        </a-box> \
        <a-box position='0.2 1.1 -2' rotation='180 5 0' radius='0.5' width='0.18' height='0.2' depth='0.5' color='#000000'> \
          <a-animation attribute='position' repeat='indefinite' to='0.2 1 -2'></a-animation> \
        </a-box> \
      </a-entity> \
    ");

    // PIANO TABLE

    $(".table").remove();
    $("#scene").append(" \
      <a-entity class='table'> \
        <a-box src='#woodtexture' depth='1' height='2' width='3' position='0 -0.5 -2.25'></a-box> \
      </a-entity> \
    ");
};


var loadJazz = function() {

    // TRUMPET

    $(".trumpet").remove();
    $("#scene").append(" \
        <a-entity class='trumpet' sound='src: pink.mp3; autoplay: true; volume: 10; '> \
            <a-assets> \
                <a-light type='ambient' color='#FFF' position='-1 0 -3' rotation='90 0 0' target='#camera'> \
                    <a-asset-item id='trumpet-obj' src='./media/Trumpet.obj'></a-asset-item> \
                    <a-asset-item id='trumpet-mtl' src='./media/Trumpet.mtl'></a-asset-item> \
                </a-light> \
            </a-assets> \
            <a-obj-model src='#trumpet-obj' mtl='#trumpet-mtl' position='0 -1.7 -2.5' rotation='0 150 0' scale='2.5 2.5 2.5'> \
                <a-animation attribute='position' begin='200' dur='150' direction='alternate' repeat='indefinite' from='0 -1.7 -2.5' to='0.2 -1.5 -2.6'></a-animation> \
                <a-animation attribute='rotation' begin='400' dur='300' direction='normal' repeat='indefinite' from='0 150 0' to='5 170 5'></a-animation> \
            </a-obj-model> \
        </a-entity> \
    ");

};
