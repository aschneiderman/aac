var setUp = simpleSetUp();

// Okay, this is getting A bit too complicated.
// Maybe I need a simple example of the function before thiis one,
// Then in this one get into optional parameters?

create cowboyWalking = function(spriteManager, x, y,) {
    // Now create the cowboy
    var cowboy = new BABYLON.Sprite("myCowboy", spriteManager);
    cowboy.position.x = 10;
    cowboy.size = 3;
    cowboy.playAnimation(0, 9, true, 100);
};

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    simpleTextBlock('Hi There!', {color: "red"}, scene);

    var cowboyManager = new BABYLON.SpriteManager("playerManager", "../../../assets/bjs-cowboy.png", 2, 64, scene);

    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);