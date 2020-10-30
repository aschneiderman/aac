var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    simpleTextBlock('Hi There!', {color: "red"}, scene);

    // Now when I need to do is:
    // get the right path to the image
    // Change simpleSphereTo have an option for image
    
    simpleSphere('Test',{y:10, diameter:5}, scene)
    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);