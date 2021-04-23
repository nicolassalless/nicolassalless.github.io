var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "orb", "x": 1200, "y": groundY },
                { "type": "enemy1", "x": 2000, "y": groundY -50 },
                { "type": "enemy1", "x": 3000, "y": groundY -50 },
                { "type": "enemy1", "x": 3500, "y": groundY -50 },
                { "type": "enemy1", "x": 3800, "y": groundY -50 },
                { "type": "enemy2", "x": 3800, "y": groundY -10 },
                { "type": "enemy2", "x": 3800, "y": groundY -50 },
                { "type": "enemy2", "x": 3800, "y": groundY -50 },
                { "type": "enemy2", "x": 3800, "y": groundY -50 },
                { "type": "reward", "x": 200, "y": groundY -50 },
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);   
            var obstacleImage = draw.bitmap('img/sawblade.png');
            obstacleImage.x = -20;
            obstacleImage.y = -20;
            sawBladeHitZone.addChild(obstacleImage);
        };
        
        function createMyObstacle(x, y) {
            var hitZoneSize = 100;
            var damageFromObstacle = 100000000;
            var orbHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            orbHitZone.x = x;
            orbHitZone.y = y;
            game.addGameItem(orbHitZone);
            var obstacleImage = draw.bitmap('img/orb.png');
            obstacleImage.x = -180;
            obstacleImage.y = -180;
            obstacleImage.scaleX = 0.4;
            obstacleImage.scaleY = 0.4;
            orbHitZone.addChild(obstacleImage);
        };

        createSawBlade(1000, 525); 
        createSawBlade(1400, 425); 
        createSawBlade(1800, 525);
        createMyObstacle(2200, 355);
        
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -20;
            enemy.rotationalVelocity = 100;

            enemy.onPlayerCollision = function(onPlayerCollision) {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
                enemy.fadeout()
            };
            enemy.onProjectileCollision = function( onProjectileCollision) {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.shrink()
            };
        };
        
        createEnemy(2000, groundY - 50);
        createEnemy(3000, groundY - 50);
        createEnemy(3500, groundY - 50);
        createEnemy(3800, groundY - 50);

         function createEnemy2(x, y) {
            var enemy2 = game.createGameItem('enemy2',80);
            var enemy2Image = draw.bitmap('img/monkyT.png');
            enemy2Image.x = -333;
            enemy2Image.y = -180;
            enemy2Image.scaleX = 1;
            enemy2Image.scaleY = 1;
            enemy2.addChild(enemy2Image);
            enemy2.x = x;
            enemy2.y = y;
            game.addGameItem(enemy2);
            enemy2.velocityX = -1;

            enemy2.onPlayerCollision = function(onPlayerCollision) {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-999999999);
                enemy2.fadeout()
            };
            enemy2.onProjectileCollision = function( onProjectileCollision) {
                console.log('Halle has hit the enemy');
                game.increaseScore(0);
                enemy2.shrink()
            };
        };
       
        createEnemy2(6000, groundY - 70);

        function createReward(x, y) {
            var reward = game.createGameItem('reward',25);
            var greenElipse = draw.circle(25, 25, 'green');
            greenElipse.x = 0;
            greenElipse.y = 0;
            reward.addChild(greenElipse);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;

            reward.onPlayerCollision = function(onPlayerCollision) {
                console.log('Halle has gained health');
                game.changeIntegrity(30);
                reward.shrink()
            }; 
        };

            createReward(4000, groundY - 50);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
