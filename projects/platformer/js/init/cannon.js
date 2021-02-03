(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createPlatform(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
       /* global Phaser */


  
            assetKeyCannon = 'cannon',
            assetKeyProjectile = 'projectile',
            projectileHalfSize = 12;

        game.cannon = game.add.group();
        game.projectile = game.add.group();
        game.projectile.enableBody = true;

        function createProjectile(x, y) {
            let projectile = game.projectile.create(x, y, assetKeyProjectile);
            projectile.anchor.setTo(0.5, 0.5);
            projectile.alpha = 0;
            game.physics.arcade.enable(projectile);
            return projectile;
        }

        function configureTween(tween, projectile, cannon) {
            tween.onStart.addOnce(function () {
                projectile.alpha = 1;
            });
            tween.onComplete.addOnce(function () {
                projectile.alpha = 0;
                projectile.x = cannon.x, projectile.y = cannon.y;
            });
        }

        let create = function (type, position, delay) {
            
            if (type === "top" || type === "bottom") {
                if (position < 0 || position > game.world.width) {
                    throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`);
                }
            } else if (type === "right" || type === "left") {
                if (position < 0 || position > game.world.height) {
                    throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`);
                }
            }
            
            let tweenTo = {}, cannon, projectile, tween, x, y, angle;
            
            if (type === "top") {
                x = position, y = 40;
                angle = -180;
                tweenTo.y = game.world.height;
            } else if (type === "bottom") {
                x = position, y = game.world.height - 72;
                angle = 0;
                tweenTo.y = 0;
            } else if (type === "left") {
                x = 42, y = position;
                angle = 90;
                tweenTo.x = game.world.width;
            } else if (type === "right") {
                x = game.world.width - 42, y = position;
                angle = -90;
                tweenTo.x = 0
            } else {
                throw new Error(`${type} is not a valid cannon type`);
            }


            cannon = game.cannon.create(x, y, assetKeyCannon);
            cannon.anchor.setTo(0.5, 0.5);
            cannon.angle = angle;
            // cannon.scale.y = -1;
         
            projectile = game.projectile.create(cannon.x, cannon.y, assetKeyProjectile);
            projectile.anchor.setTo(0.5, 0.5);
            projectile.angle = angle;
            projectile.alpha = 0;

            tween = game.add.tween(projectile).to(tweenTo, 2000, null, true, delay || 0, -1);
            configureTween(tween, projectile, cannon);
            return cannon;
       
        };

        /**
         * Returns a helper for placing cannons.
         */
        opspark.cannon.create = create;
    };
})(window);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
