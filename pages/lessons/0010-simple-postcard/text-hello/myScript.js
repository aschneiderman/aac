var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    simpleTextBlock('Hi There!', {color: "green"}, scene);
    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);