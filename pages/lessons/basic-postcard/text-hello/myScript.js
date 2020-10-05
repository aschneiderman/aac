var setUp = simpleSetUp();

var createScene = function (setUp) {
    var scene = simpleScene(setUp);
    
    simpleTextBlock('Hi There, Anders!', {x: -10, y: 9, z: 0, fontSize: "120px"}, scene);

    return scene;

};

var myScene = createScene(setUp);
simpleStart(myScene, setUp);
