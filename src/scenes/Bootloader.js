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
        this.load.audio('principal', ['./principal.mp3']);
        this.load.audio('martinSong', ['./martin.mp3']);
        this.load.audio('alheSong', ['./alheli.mp3']);
        this.load.audio('ciciSong', ['./citlalli.mp3']);
        this.load.audio('manuelSong', ['./manuela.mp3']);
        this.load.audio('pop', ['./pop.mp3']);
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
        //BANDERAS
        this.seleccionado = false;
        this.alheli = this.add.sprite(180, 260, 'alhe', 0).setScale(0.8);
        this.alheliR = this.add.image(180, 260, 'RostroA').setInteractive().setScale(0.25);

        this.martin = this.add.sprite(550, 260, 'martin', 0).setScale(1);
        this.martinR = this.add.image(550, 260, 'RostroA').setInteractive().setScale(0.25);

        this.manuel = this.add.sprite(950, 260, 'manu', 0).setScale(0.8);
        this.manuelR = this.add.image(950, 260, 'RostroA').setInteractive().setScale(0.25);

        this.cici = this.add.sprite(1320, 260, 'manu', 0).setScale(0.8);
        this.ciciR = this.add.image(1320, 260, 'RostroA').setInteractive().setScale(0.25);

        this.dir = this.add.text(50, 650, ('A para Izquierda - D para Derecha = ENTER seleccionar'), { font: '38px Arial Black' });
        this.alheTexto = this.add.text(50,550,'Pruebe los movimientos:\n[G]Golpe\n[B]Baile\n[R]Tocar rodillas',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0);

        this.fondo = this.add.image(750, 360, 'Fondo2');

        this.cuadro = this.add.image(180, 260, 'wooden').setInteractive().setName("alheli");
        this.cuadro2 = this.add.image(550, 260, 'wooden').setInteractive().setName("martin");
        this.cuadro3 = this.add.image(950, 260, 'wooden').setInteractive().setName("manuel");
        this.cuadro4 = this.add.image(1320, 260, 'wooden').setInteractive().setName("cici");

        this.fondo.setScale(2.2);
        this.fondo.setDepth(-1);

        this.cuadro.setScale(0.3);
        // this.cuadro.setDepth(-1);
        this.cuadro2.setScale(0.3);
        this.cuadro3.setScale(0.3);
        this.cuadro4.setScale(0.3);

        const teclado = Phaser.Input.Keyboard;

        //MUSIQUITA
        this.principal = this.sound.add('principal', { loop: true, volume: 0.2 });
        this.martinSong = this.sound.add('martinSong', { loop: true, volume: 0.2 });
        this.alheSong = this.sound.add('alheSong', { loop: true, volume: 0.2 });
        this.ciciSong = this.sound.add('ciciSong', { loop: true, volume: 0.2 });
        this.manuelSong = this.sound.add('manuelSong', { loop: true, volume: 0.2 });
        this.pop = this.sound.add('pop', { loop: false, volume: 0.5 });
        this.principal.play();
        //this.principal.stop();

        //ANIMACIÓN ALHELÍ
        // this.alheli = this.add.sprite(200, 200, 'alhe', 0);
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        //this.alheli.anims.play('idle');
        this.alheli.setAlpha(0);
        
        //ANIMACIÓN MANUEL
        // this.manuel = this.add.sprite(500, 200, 'manu', 0);
        this.anims.create({ key: 'amen', frames: this.anims.generateFrameNames('manu', { prefix: 'amen', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'fuerte', frames: this.anims.generateFrameNames('manu', { prefix: 'fuerte', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'manu', frames: this.anims.generateFrameNames('manu', { prefix: 'manu', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'patada', frames: this.anims.generateFrameNames('manu', { prefix: 'patada', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.manuel.anims.play('manu');
        this.manuel.setAlpha(0);

        //ANIMACIÓN MARTÍN
        // this.martin = this.add.sprite(800, 200, 'martin', 0);
        this.anims.create({ key: 'defensa', frames: this.anims.generateFrameNames('martin', { prefix: 'defensa0', suffix: '.png', start: 1, end: 13 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'gancho', frames: this.anims.generateFrameNames('martin', { prefix: 'gancho0', suffix: '.png', start: 1, end: 16 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('martin', { prefix: 'golpe0', suffix: '.png', start: 1, end: 12 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rascar', frames: this.anims.generateFrameNames('martin', { prefix: 'rascar', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.martin.anims.play('rascar');
        this.martin.setAlpha(0);

        //ANIMACIÓN CICI
        // this.cici = this.add.sprite(800, 200, 'martin', 0);
        this.cici.anims.play('patada');
        this.cici.setAlpha(0);


        let arreglo = ["this.alheli", "this.martin", "this.manuel","this.cici"];
        var i=0;

        function elegir(i) {
            
        }

        
        this.input.keyboard.addKey(teclado.KeyCodes.D).on('down', () => {
            if(!this.seleccionado){
                if(i==3){
                    i=0;
                }else{
                    i+=1;
                }

                this.principal.stop()
                if(arreglo[i]=="this.alheli")
                {
                    this.alheli.setAlpha(1);
                    this.alheliR.setAlpha(0);
                    this.cuadro.setTint(0x4F33FF);
                    this.cuadro.setScale(0.35)
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                    
                    this.pop.play()
                    this.alheSong.play()
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martin.setAlpha(1);
                    this.martinR.setAlpha(0);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
                }
                if(arreglo[i]=="this.manuel")
                {
                    this.manuel.setAlpha(1);
                    this.manuelR.setAlpha(0);
                    this.cuadro3.setTint(0x4F33FF);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.cici.setAlpha(1);
                    this.ciciR.setAlpha(0);
                    this.cuadro4.setTint(0x4F33FF);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
                }
            }

        });

        this.input.keyboard.addKey(teclado.KeyCodes.A).on('down', () => {
            if(!this.seleccionado){
                if(i==0){
                    i=3;
                }else{
                    i-=1;
                }
                if(arreglo[i]=="this.alheli")
                {
                    this.alheli.setAlpha(1);
                    this.alheliR.setAlpha(0);
                    this.cuadro.setTint(0x4F33FF);
                    this.cuadro.setScale(0.35);
                    this.alheli.anims.play('idle');
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martin.setAlpha(1);
                    this.martinR.setAlpha(0);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
                }
                if(arreglo[i]=="this.manuel")
                {
                    this.manuel.setAlpha(1);
                    this.manuelR.setAlpha(0);
                    this.cuadro3.setTint(0x4F33FF);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.cici.setAlpha(1);
                    this.ciciR.setAlpha(0);
                    this.cuadro4.setTint(0x4F33FF);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
                }
            }

        });

        //AQUI IRA PA SELECCIONAR PERSONAJE presionando ENTER
        this.input.keyboard.addKey(teclado.KeyCodes.ENTER).on('down', () => {
            console.log("Entró a enter");
            this.seleccionado = true;
            if(arreglo[i]=="this.alheli")
            {
                this.alheTexto.setAlpha(1).setDepth(20);
            }
            if(arreglo[i]=="this.martin")
            {
                this.movAlhe.setAlpha(1).setDepth(20);
            }
            if(arreglo[i]=="this.manuel")
            {
                this.movAlhe.setAlpha(1).setDepth(20);
            }
            if(arreglo[i]=="this.cici")
            {
                this.movAlhe.setAlpha(1).setDepth(20);
            }            
        });

        //ESCAPE PARA SALIR DE SELECCION
        this.input.keyboard.addKey(teclado.KeyCodes.ESC).on('down', () => {
            console.log("Entró a escape");
            this.seleccionado = false;
            this.movAlhe.setAlpha(0);           
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