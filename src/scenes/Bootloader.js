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
        this.load.image('Fondo2', 'Fondo2.png');
        this.load.image('wooden', 'woodframe.png');
        this.load.atlas('alhe', 'alheli/alheli.png', 'alheli/alheli.json');
    }

    create() {
        this.alheli = this.add.sprite(180, 260, 'alhe', 0);
        this.alheli.setScale(0.8);

        this.fondo = this.add.image(750, 360, 'Fondo2');

        this.cuadro = this.add.image(180, 260, 'wooden').setInteractive().setName("alhe");
        this.cuadro2 = this.add.image(550, 260, 'wooden').setInteractive();
        this.cuadro3 = this.add.image(950, 260, 'wooden').setInteractive();
        this.cuadro4 = this.add.image(1320, 260, 'wooden').setInteractive();

        this.fondo.setScale(2.2);
        this.fondo.setDepth(-1);

        this.cuadro.setScale(0.3);
        this.cuadro2.setScale(0.3);
        this.cuadro3.setScale(0.3);
        this.cuadro4.setScale(0.3);

        const eventos = Phaser.Input.Events;

        //ANIMACIÓN ALHELÍ
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        
        var x="";
        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
            // this.pasar.play();
            gameObject.setTint(0xabdcd2);
            gameObject.setScale(0.35);
            console.log(gameObject.name);
            x = gameObject.name;
            this.x.anims.play('idle');
            });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
            gameObject.clearTint();
            gameObject.setScale(0.3);
            this.alheli.anims.stopOnFrame(1);
            });


    }

    update(time, delta) {

    }
}

export default Bootloader;