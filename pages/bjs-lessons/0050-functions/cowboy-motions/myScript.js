var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    simpleTextBlock('Hi There!', {color: "red"}, scene);

        //Create a manager for the player's sprite animation
        var spriteManager = new BABYLON.SpriteManager("playerManager", "../../../assets/bjs-cowboy.png", 2, 64, scene);

        // Now create the cowboy
        var cowboy = new BABYLON.Sprite("myCowboy", spriteManager);
        cowboy.position.x = 10;
        cowboy.size = 3;
        cowboy.playAnimation(0, 40, true, 100);
    
    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);