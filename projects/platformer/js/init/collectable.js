(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.collectable = window.opspark.collectable || {};
    
    opspark.collectable.factory = function (game) {
        game.collectable = game.add.group();
        game.collectable.enableBody = true;
        
        function create(type, x, y, gravity, bounce) {
            var collectable = game.collectable.create(x, y, type.assetKey);
            collectable.type = type;
            
            /*
             * Extra adjustments or configuration.
             */
            switch (type.assetKey) {
                case 'db':
                    collectable.body.height = 44;
                    break;
                    
                case 'max':
                case 'steve':
                    collectable.scale.x = collectable.scale.y = 0.9;
                    break;
                
                default:
                    // code
            }
            if (gravity) collectable.body.gravity.y = gravity;
            if (bounce) collectable.body.bounce.y = bounce + Math.random() * 0.2;
        }
        opspark.collectable.create = create;
    };
})(window);
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);
