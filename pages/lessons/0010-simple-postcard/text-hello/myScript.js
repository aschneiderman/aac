var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    simpleTextBlock('Hi There!', {color: "red"}, scene);
    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);