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
        this.load.image('RostroA', 'alheli/alhe_rostro.png');
        //ALHELÍ
        this.load.atlas('alhe', 'alheli/alheli.png', 'alheli/alheli.json');
        //MANUEL
        this.load.atlas('manu', 'manuel/manuel.png', 'manuel/manuel.json');
        //MARTÍN
        this.load.atlas('martin', 'martin/martin.png', 'martin/martin.json');
        //CITLALLI
    }

    create() {
        this.alheli = this.add.sprite(180, 260, 'alhe', 0).setScale(0.8);
        this.alheliR = this.add.image(180, 260, 'RostroA').setInteractive().setScale(0.25);

        this.martin = this.add.sprite(550, 260, 'martin', 0).setScale(1);

        this.manuel = this.add.sprite(950, 260, 'manu', 0).setScale(0.8);

        this.fondo = this.add.image(750, 360, 'Fondo2');

        this.cuadro = this.add.image(180, 260, 'wooden').setInteractive().setName("alheli");
        this.cuadro2 = this.add.image(550, 260, 'wooden').setInteractive().setName("martin");
        this.cuadro3 = this.add.image(950, 260, 'wooden').setInteractive().setName("manuel");
        this.cuadro4 = this.add.image(1320, 260, 'wooden').setInteractive().setName("cici");

        this.fondo.setScale(2.2);
        this.fondo.setDepth(-1);

        this.cuadro.setScale(0.3);
        this.cuadro.setDepth(-1);
        this.cuadro2.setScale(0.3);
        this.cuadro3.setScale(0.3);
        this.cuadro4.setScale(0.3);

        const teclado = Phaser.Input.Keyboard;

        //ANIMACIÓN ALHELÍ
        // this.alheli = this.add.sprite(200, 200, 'alhe', 0);
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        
        //ANIMACIÓN MANUEL
        // this.manuel = this.add.sprite(500, 200, 'manu', 0);
        this.anims.create({ key: 'amen', frames: this.anims.generateFrameNames('manu', { prefix: 'amen', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'fuerte', frames: this.anims.generateFrameNames('manu', { prefix: 'fuerte', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'manu', frames: this.anims.generateFrameNames('manu', { prefix: 'manu', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'patada', frames: this.anims.generateFrameNames('manu', { prefix: 'patada', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.manuel.anims.play('manu');

        //ANIMACIÓN MARTÍN
        // this.martin = this.add.sprite(800, 200, 'martin', 0);
        this.anims.create({ key: 'defensa', frames: this.anims.generateFrameNames('martin', { prefix: 'defensa0', suffix: '.png', start: 1, end: 13 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'gancho', frames: this.anims.generateFrameNames('martin', { prefix: 'gancho0', suffix: '.png', start: 1, end: 16 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('martin', { prefix: 'golpe0', suffix: '.png', start: 1, end: 12 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rascar', frames: this.anims.generateFrameNames('martin', { prefix: 'rascar', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.martin.anims.play('rascar');

        let arreglo = ["this.alheli", "this.martin", "this.manuel"];

        this.input.keyboard.addKey(teclado.KeyCodes.D).on('down', () => {
            
        });
        // this.alheliR.on(eventos.POINTER_OVER, function() {
        //     this.setAlpha(0);
        //     this.alheli.alpha= 1;
        // });
        // this.alheliR.on(eventos.POINTER_OUT, function() {
        //     this.setAlpha(1);
        //     this.alheli.alpha= 0;
        // });

        // this.input.on(teclado., (pointer, gameObject) => {
        //     // this.pasar.play();
        //     gameObject.setTint(0xabdcd2);
        //     gameObject.setScale(0.35);
        //     let x = gameObject.name;
        //     this.alheliR.setAlpha(0);
        //     this.x.setAlpha(1);
        //     this.alheli.anims.play("idle");
        //     });

        // this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        //     gameObject.setScale(0.3);
        //     this.alheliR.setAlpha(1);
        //     this.alheli.anims.stop(null, true);
        //     this.alheli.setAlpha(0);
        //     });
    }

    update(time, delta) {

    }
}

export default Bootloader;