class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }

    preload() {
        this.load.path = './assets/';
        //ALHELÍ
        this.load.atlas('alhe', 'alheli/alheli.png', 'alheli/alheli.json');
        //MANUEL
        this.load.atlas('manu', 'manuel/manuel.png', 'manuel/manuel.json');
        //MARTÍN
        this.load.atlas('martin', 'martin/martin.png', 'martin/martin.json');
        //CITLALLI
    }

    create() {
        //ANIMACIÓN ALHELÍ
        this.alheli = this.add.sprite(200, 200, 'alhe', 0);
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.alheli.anims.play('golpe');

        //ANIMACIÓN MANUEL
        this.manuel = this.add.sprite(500, 200, 'manu', 0);
        this.anims.create({ key: 'amen', frames: this.anims.generateFrameNames('manu', { prefix: 'amen', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'fuerte', frames: this.anims.generateFrameNames('manu', { prefix: 'fuerte', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'manu', frames: this.anims.generateFrameNames('manu', { prefix: 'manu', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'patada', frames: this.anims.generateFrameNames('manu', { prefix: 'patada', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.manuel.anims.play('fuerte');

        //ANIMACIÓN MARTÍN
        this.martin = this.add.sprite(800, 200, 'martin', 0);
        this.anims.create({ key: 'defensa', frames: this.anims.generateFrameNames('martin', { prefix: 'defensa0', suffix: '.png', start: 1, end: 13 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'gancho', frames: this.anims.generateFrameNames('martin', { prefix: 'gancho0', suffix: '.png', start: 1, end: 16 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('martin', { prefix: 'golpe0', suffix: '.png', start: 1, end: 12 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rascar', frames: this.anims.generateFrameNames('martin', { prefix: 'rascar', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.martin.anims.play('rascar');
    }

    update(time, delta) {

    }
}

export default Bootloader;