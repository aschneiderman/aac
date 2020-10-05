var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);


    // Put your code here to make your postcard

    simpleTextBlock('Hi There!', {color: "black"}, scene);

    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);