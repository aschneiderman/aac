var setUp = simpleSetUp();

createScene = function (setUp) {
    var scene = simpleScene(setUp);

    var dome = new BABYLON.PhotoDome( "myPath",  "../../../assets/GatonaParkWalkway1_Panorama_4Kx2K.jpg",
                    { resolution: 32, size: 1000 }, scene);

    simpleTextBlock('Hi There!', {color: "white"}, scene);
    simpleTextBlock('Nice job!', {color: "red", x: "15", z: "-25"}, scene);

    return scene;
};

var myPostcard = createScene(setUp);
simpleStart(setUp, myPostcard);