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
        this.load.atlas('alhe', 'alheli/alheli.png', 'alheli/alheli.json');
    }

    create() {
        this.alheli = this.add.sprite(200, 200, 'alhe', 0);
        //ANIMACIÓN ALHELÍ
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.alheli.anims.play('golpe');



    }

    update(time, delta) {

    }
}

export default Bootloader;